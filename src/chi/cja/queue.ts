import { MAX_QUEUE_LENGTH } from './constants';
import type { ChiAnalyticsEvent } from './types';

export function getAnalyticsQueue(): ChiAnalyticsEvent[] {
  if (!window.chiAnalytics) {
    window.chiAnalytics = [];
  }

  return window.chiAnalytics;
}

/** Oldest events are dropped past the cap so an unread queue never grows unbounded. */
export function pushEvent(event: ChiAnalyticsEvent): void {
  const queue = getAnalyticsQueue();

  queue.push(event);

  if (queue.length > MAX_QUEUE_LENGTH) {
    queue.shift();
  }
}
