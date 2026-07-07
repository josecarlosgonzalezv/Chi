import { MAX_LABEL_LENGTH, SAFE_INPUT_TYPES } from './constants';
import type { SafeValue } from './types';

function summarize(text: string): SafeValue {
  return { len: text.length, filled: text.length > 0 };
}

/**
 * Form fields are sensitive by default — only the enumerated safe input types
 * (booleans/positions) may ship their value. Uses the normalized `type`
 * property, so markup case (`type="Password"`) cannot bypass the check.
 */
export function isSensitiveField(el: Element | null): boolean {
  if (el instanceof HTMLInputElement) {
    return !SAFE_INPUT_TYPES.includes(el.type);
  }

  return el instanceof HTMLTextAreaElement;
}

/**
 * Only primitives survive: strings are truncated, collections become a
 * presence/length summary, and arbitrary objects never reach the queue.
 */
export function sanitizeValue(value: unknown): SafeValue {
  if (value == null) {
    return null;
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return value.slice(0, MAX_LABEL_LENGTH);
  }

  if (Array.isArray(value)) {
    return { len: value.length, filled: value.length > 0 };
  }

  return null;
}

/**
 * For custom-element `detail` payloads the engine cannot judge the origin of a
 * string — it may be typed user input (chi text inputs emit the raw value) —
 * so strings are summarized, never shipped. A component whose string detail is
 * a safe enum-like token can opt back in via `overrides[tag].value`.
 */
export function sanitizeDetail(detail: unknown): SafeValue {
  return typeof detail === 'string' ? summarize(detail) : sanitizeValue(detail);
}

/**
 * Full pipeline for values captured next to a DOM element: sensitive fields
 * are reduced to a presence/length summary so raw characters never reach the
 * queue; everything else passes primitive sanitization.
 */
export function toSafeValue(value: unknown, el: Element | null): SafeValue {
  if (isSensitiveField(el)) {
    return summarize(value == null ? '' : String(value));
  }

  return sanitizeValue(value);
}
