import { LIBRARY_VERSION, MAX_LABEL_LENGTH, SCHEMA_VERSION, ANALYTICS_ID_ATTRIBUTE } from './constants';
import { resolveComponentName, resolveFramework, resolveLabel } from './element';
import type { ChiAnalyticsEvent, ChiFramework, EventDescriptor, SafeValue } from './types';

interface EventOverrides {
  label?: string | null;
  framework?: ChiFramework;
}

/**
 * Assembles the `chi.analytics.v1` envelope. `value` must already be safe —
 * every capture site runs it through the redaction pipeline with the element
 * that gives redaction its context (e.g. the form control, not the BEM block).
 */
export function createAnalyticsEvent(
  descriptor: EventDescriptor,
  el: Element | null,
  value: SafeValue = null,
  overrides: EventOverrides = {},
): ChiAnalyticsEvent {
  const label = overrides.label !== undefined ? overrides.label?.slice(0, MAX_LABEL_LENGTH) ?? null : resolveLabel(el);

  return {
    schema: SCHEMA_VERSION,
    component: descriptor.component || resolveComponentName(el),
    action: descriptor.action,
    label,
    value,
    source: { framework: overrides.framework || resolveFramework(el), version: LIBRARY_VERSION },
    target: {
      id: el?.id || null,
      analyticsId: el?.getAttribute(ANALYTICS_ID_ATTRIBUTE) || null,
      role: el?.getAttribute('role') || null,
    },
    ts: Date.now(),
  };
}
