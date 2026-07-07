import { eventRegistry } from './registry';
import { toSafeValue } from './redaction';
import { pushEvent } from './queue';
import { isOptedOut } from './element';
import { createAnalyticsEvent } from './event';
import { attachRegistryListener } from './collector';
import type { ChiCja } from './types';

export const chiCja: ChiCja = {
  track(event) {
    const el = event.el ?? null;

    if (isOptedOut(el)) {
      return;
    }

    const value = 'value' in event && event.value !== undefined ? toSafeValue(event.value, el) : null;

    pushEvent(
      createAnalyticsEvent({ component: event.component, action: event.action }, el, value, {
        label: event.label,
        framework: event.framework || 'vue',
      }),
    );
  },

  registerEvents(events) {
    Object.keys(events).forEach((eventName) => {
      if (!eventRegistry[eventName]) {
        attachRegistryListener(eventName);
      }

      eventRegistry[eventName] = events[eventName];
    });
  },
};
