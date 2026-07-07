import { version } from '../../../package.json';

export const SCHEMA_VERSION = 'chi.analytics.v1';
export const LIBRARY_VERSION = version;
export const MAX_LABEL_LENGTH = 80;
/** Queue is capped so an unread page never grows memory unbounded. */
export const MAX_QUEUE_LENGTH = 500;
/**
 * Redaction allowlist: only these input types carry non-sensitive values
 * (booleans/positions). Every other input and any textarea is summarized to
 * `{ len, filled }` — fields are sensitive by default, never the reverse.
 */
export const SAFE_INPUT_TYPES = ['checkbox', 'radio', 'range'];
/**
 * Native clicks are only considered on genuinely interactive elements; the
 * event is then attributed to the Chi component resolved from that element.
 * Checkboxes/radios are intentionally absent — their signal is `change`.
 */
export const INTERACTIVE_SELECTOR = 'button, a, [role="button"], [role="tab"], [role="menuitem"]';
/**
 * BEM blocks that are layout/structure, not components. Component resolution
 * walks past them instead of attributing interactions to them.
 */
export const NON_COMPONENT_BLOCKS = ['chi-grid', 'chi-col', 'chi-form', 'chi-main'];
export const SUPPRESS_SELECTOR = '[data-chi-analytics-suppress]';
/**
 * Marks a region whose interactions a framework wrapper (e.g. chi-vue) reports
 * itself via `chiCja.track()`. The engine skips these to avoid double counting;
 * unlike the suppress attribute, `track()` still works inside them.
 */
export const OWNED_SELECTOR = '[data-chi-analytics-owned]';
/** Regions the engine never reports from: suppressed or wrapper-owned. */
export const ENGINE_SKIP_SELECTOR = `${SUPPRESS_SELECTOR}, ${OWNED_SELECTOR}`;
export const ANALYTICS_ID_ATTRIBUTE = 'data-chi-analytics-id';
