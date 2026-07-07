import type { ComponentOverride, EventDescriptor } from './types';

/**
 * DOM event name → analytics descriptor. Any custom element emitting one of
 * these composed events is tracked automatically (component = host tag, value
 * = sanitized `event.detail`). Extend at runtime with `chiCja.registerEvents()`.
 */
export const eventRegistry: Record<string, EventDescriptor> = {
  chiClick: { action: 'click' },
  chiInput: { action: 'input' },
  chiChange: { action: 'change' },
  chiSelectionChange: { action: 'change' },
  chiPageChange: { action: 'change' },
  chiPageSizeChange: { action: 'change' },
  chiViewChange: { action: 'change' },
};

/**
 * Per-component exceptions to the generic engine. Add an entry only when the
 * generic rules misbehave for a component:
 * - `silent`: custom element emits no `chi*` events, so the native-click
 *   delegate reports clicks on its behalf (attributed to the host).
 * - `ignore`: actions to mute for this component.
 * - `value`: per-event custom value extraction (must return a primitive;
 *   output still passes detail sanitization).
 */
export const overrides: Record<string, ComponentOverride> = {
  'chi-link': { silent: true },
};
