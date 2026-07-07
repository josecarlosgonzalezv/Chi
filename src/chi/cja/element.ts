import {
  ANALYTICS_ID_ATTRIBUTE,
  ENGINE_SKIP_SELECTOR,
  MAX_LABEL_LENGTH,
  NON_COMPONENT_BLOCKS,
  SUPPRESS_SELECTOR,
} from './constants';
import type { ChiFramework } from './types';

/** A `<chi-*>` (or any hyphenated) tag is a custom element. */
export function isWebComponent(el: Element | null): boolean {
  return !!el?.tagName && el.tagName.includes('-');
}

/**
 * Nearest custom-element ancestor (inclusive). Scoped (light-DOM) Chi web
 * components render internal `.chi-*` markup; those internals belong to the
 * component, which normally reports its own events.
 */
export function closestWebComponent(el: Element | null): Element | null {
  for (let node = el; node; node = node.parentElement) {
    if (isWebComponent(node)) {
      return node;
    }
  }

  return null;
}

/** Suppressed regions silence everything, including `track()`. */
export function isOptedOut(el: Element | null): boolean {
  return !!el?.closest(SUPPRESS_SELECTOR);
}

/** Regions the engine never reports from: suppressed or wrapper-owned. */
export function isEngineSkipped(el: Element | null): boolean {
  return !!el?.closest(ENGINE_SKIP_SELECTOR);
}

/**
 * Passive framework attribution: a custom element is unambiguously a web
 * component; anything else is the HTML/CSS layer. A positive `vue` signal cannot
 * be derived from the DOM — it only arrives via an explicit `track()`.
 */
export function resolveFramework(el: Element | null): ChiFramework {
  return isWebComponent(el) ? 'custom-element' : 'html';
}

function isFormControl(el: Element): el is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement {
  return (
    el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement
  );
}

/**
 * Form controls never use their text content as a label — a select's option
 * list or a textarea's prefilled value is user data, not a label. The
 * browser-maintained `labels` association replaces any selector lookup.
 */
export function resolveLabel(el: Element | null): string | null {
  if (!el) {
    return null;
  }

  const contentLabel = isFormControl(el)
    ? el.labels?.[0]?.textContent?.trim() || el.getAttribute('name')
    : el.textContent?.trim();

  const label = el.getAttribute(ANALYTICS_ID_ATTRIBUTE) || el.getAttribute('aria-label') || contentLabel || null;

  return label ? label.slice(0, MAX_LABEL_LENGTH) : null;
}

/**
 * Chi component for an element: custom elements resolve to their tag; HTML
 * elements resolve to the nearest `chi-*` class normalized to its BEM block
 * (`chi-checkbox__input` → `chi-checkbox`), walking up through ancestors and
 * past structural blocks (grid, form scaffolding). `null` means "not a Chi
 * component" and the interaction is not tracked.
 */
export function resolveComponentName(el: Element | null): string | null {
  if (isWebComponent(el)) {
    return el!.tagName.toLowerCase();
  }

  for (let node = el; node; node = node.parentElement) {
    for (const className of node.classList) {
      if (!className.startsWith('chi-')) {
        continue;
      }

      const block = className.split('__')[0].split('--')[0];

      if (!NON_COMPONENT_BLOCKS.includes(block)) {
        return block;
      }
    }
  }

  return null;
}
