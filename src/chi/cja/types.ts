export type ChiFramework = 'html' | 'custom-element' | 'vue';
export type SafeValue = string | number | boolean | null | { len: number; filled: boolean };

export interface ChiAnalyticsEvent {
  schema: 'chi.analytics.v1';
  component: string | null;
  action: string;
  label: string | null;
  value: SafeValue;
  source: { framework: ChiFramework; version: string };
  target: { id: string | null; analyticsId: string | null; role: string | null };
  ts: number;
}

export interface EventDescriptor {
  component?: string;
  action: string;
}

export interface ComponentOverride {
  /** CE emits no `chi*` events; the native-click delegate reports for it. */
  silent?: boolean;
  /** Actions to mute for this component. */
  ignore?: string[];
  /** Per-event custom value extraction; output still passes sanitization. */
  value?: Record<string, (event: Event) => unknown>;
}

export interface TrackInput {
  component?: string;
  action: string;
  label?: string | null;
  value?: unknown;
  framework?: ChiFramework;
  el?: HTMLElement | null;
}

export interface ChiCja {
  track(event: TrackInput): void;
  registerEvents(events: Record<string, EventDescriptor>): void;
}

declare global {
  interface Window {
    chiAnalytics?: ChiAnalyticsEvent[];
    chiCja?: ChiCja;
  }
}
