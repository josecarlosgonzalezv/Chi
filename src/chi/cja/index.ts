/**
 * chi-cja.js — Chi analytics collector (entry point).
 *
 * Self-initializing script that listens on `document` for the DOM events Chi
 * components already emit, normalizes them into a single `chi.analytics.v1`
 * shape, and pushes them onto the `window.chiAnalytics` queue. A host
 * application (e.g. the enterprise shell) reads that queue, enriches each event
 * with its own context, and forwards it to its analytics platform.
 *
 * Chi stays vendor-neutral: this module never references Adobe, GA, or any vendor.
 */
import { chiCja } from './api';
import { startCollector } from './collector';

window.chiCja = chiCja;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startCollector);
} else {
  startCollector();
}

export {};
