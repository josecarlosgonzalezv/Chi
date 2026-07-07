import { INTERACTIVE_SELECTOR } from './constants';
import { eventRegistry, overrides } from './registry';
import { createAnalyticsEvent } from './event';
import { pushEvent, getAnalyticsQueue } from './queue';
import { closestWebComponent, isEngineSkipped, resolveComponentName } from './element';
import { sanitizeDetail, sanitizeValue, toSafeValue } from './redaction';
import type { ComponentOverride } from './types';

function overrideFor(component: string | null): ComponentOverride | undefined {
  return component ? overrides[component] : undefined;
}

/** Events can be dispatched on document/window or text nodes; only elements count. */
function eventTarget(event: Event): Element | null {
  return event.target instanceof Element ? event.target : null;
}

export function handleRegisteredEvent(event: Event): void {
  const descriptor = eventRegistry[event.type];
  const target = eventTarget(event);

  if (!descriptor || !target || isEngineSkipped(target)) {
    return;
  }

  const component = descriptor.component || resolveComponentName(target);
  const override = overrideFor(component);

  if (!component || override?.ignore?.includes(descriptor.action)) {
    return;
  }

  // Override extractors are per-component contracts, so their strings are
  // trusted (truncated only); default details get the summarize-strings rule.
  const value = override?.value?.[event.type]
    ? sanitizeValue(override.value[event.type](event))
    : sanitizeDetail((event as CustomEvent).detail);

  pushEvent(createAnalyticsEvent({ ...descriptor, component }, target, value));
}

function emitNativeEvent(action: string, el: Element, rawValue?: unknown): void {
  const component = resolveComponentName(el);

  if (!component || overrideFor(component)?.ignore?.includes(action)) {
    return;
  }

  pushEvent(createAnalyticsEvent({ component, action }, el, toSafeValue(rawValue, el)));
}

/**
 * A custom element normally reports its own events; silent ones don't, so the
 * interaction is attributed to the custom-element host itself. `contextEl`
 * keeps redaction anchored to the actual control the value came from.
 */
function emitSilentCeEvent(action: string, ceHost: Element, contextEl: Element, rawValue?: unknown): void {
  if (overrideFor(resolveComponentName(ceHost))?.silent) {
    pushEvent(createAnalyticsEvent({ action }, ceHost, toSafeValue(rawValue, contextEl)));
  }
}

function handleNativeClick(event: MouseEvent): void {
  const target = eventTarget(event);
  const host = target?.closest(INTERACTIVE_SELECTOR) ?? null;

  if (!host || isEngineSkipped(target)) {
    return;
  }

  const ceHost = closestWebComponent(host);

  if (ceHost) {
    emitSilentCeEvent('click', ceHost, host);

    return;
  }

  emitNativeEvent('click', host);
}

function extractControlValue(el: Element): unknown {
  if (el instanceof HTMLInputElement) {
    return el.type === 'checkbox' || el.type === 'radio' ? el.checked : el.value;
  }

  if (el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
    return el.value;
  }

  return undefined;
}

function handleNativeChange(event: Event): void {
  const target = eventTarget(event);

  if (!target || isEngineSkipped(target)) {
    return;
  }

  const ceHost = closestWebComponent(target);

  if (ceHost) {
    emitSilentCeEvent('change', ceHost, target, extractControlValue(target));

    return;
  }

  emitNativeEvent('change', target, extractControlValue(target));
}

/** Native click/change are handled by the always-on delegates below. */
const NATIVE_DELEGATED_EVENTS = ['click', 'change'];

export function attachRegistryListener(eventName: string): void {
  if (NATIVE_DELEGATED_EVENTS.includes(eventName)) {
    return;
  }

  document.addEventListener(eventName, handleRegisteredEvent, true);
}

export function startCollector(): void {
  getAnalyticsQueue();

  Object.keys(eventRegistry).forEach(attachRegistryListener);
  document.addEventListener('click', handleNativeClick, true);
  document.addEventListener('change', handleNativeChange, true);
}
