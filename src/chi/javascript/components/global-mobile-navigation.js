import { Component } from '../core/component.js';

const COMPONENT_TYPE = 'globalMobileNav';

class GlobalMobileNav extends Component {
  constructor(elem, trigger, drawerIds, dropdown) {
    super(elem);

    this._elem = elem;
    this._drawerIds = drawerIds;
    this._drawers = [];
    this._trigger = trigger;
    this._enterpriseDropdown = dropdown;
    this._linkHandlers = [];
    this._backButtonHandlers = [];

    this._initDrawers();
    this._initLinks();
    this._initBackButtons();
    this._initTrigger();
    this._initDropdown();
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  _initDrawers() {
    this._drawerIds.forEach((id) => {
      const drawer = document.getElementById(id);

      drawer.setAttribute('position', 'left');
      drawer.setAttribute('backdrop', '');
      drawer.setAttribute('non-closable', '');
      drawer.setAttribute('no-header', '');
    });
  }

  _initLinks() {
    const allLinks = [];

    this._drawerIds.forEach((id) => {
      const drawer = document.getElementById(id);

      if (drawer) {
        const links = drawer.querySelectorAll('chi-link');

        links.forEach((link) => {
          allLinks.push(link);
        });
      }
    });

    allLinks.forEach((link) => {
      const handler = (event) => this._handleLinkClick(event, link);

      link.addEventListener('click', handler);
      this._linkHandlers.push({ link, handler });
    });
  }

  _initBackButtons() {
    const allBackButtons = [];

    this._drawerIds.forEach((id) => {
      const drawer = document.getElementById(id);

      if (drawer) {
        const buttons = drawer.querySelectorAll('[data-drawer-back]');

        buttons.forEach((button) => allBackButtons.push(button));
      }
    });

    allBackButtons.forEach((button) => {
      const handler = () => this._handleBack();

      button.addEventListener('click', handler);
      this._backButtonHandlers.push({ button, handler });
    });
  }

  _initTrigger() {
    if (!this._trigger || this._drawerIds.length === 0) return;

    this._trigger.addEventListener('click', this._handlerTriggerClick.bind(this));
  }

  _initDropdown() {
    const dropdown = this._enterpriseDropdown.dropdown;

    dropdown.items = this._enterpriseDropdown.items ?? [];
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  _handlerTriggerClick() {
    const drawer = document.getElementById(this._drawerIds[0]);

    drawer.toggle();
    this._drawers.push({ drawer: drawer });
  }

  _handleLinkClick(event, link) {
    const href = link.getAttribute('href');
    const opensDrawer = href && href.startsWith('#');
    const targetId = opensDrawer ? href.slice(1) : null;

    event.stopPropagation();

    if (!opensDrawer) {
      return;
    }

    const targetDrawer = document.getElementById(targetId);

    if (targetDrawer && typeof targetDrawer.toggle === 'function') {
      const currentDrawer = this._drawers.length > 0 ? this._drawers[this._drawers.length - 1].drawer : null;

      currentDrawer.hide();
      this._drawers.push({ drawer: targetDrawer });
      targetDrawer.toggle();
    }
  }

  _handleBack() {
    const currentDrawer = this._drawers.length > 0 ? this._drawers[this._drawers.length - 1].drawer : null;

    if (currentDrawer && typeof currentDrawer.hide === 'function') {
      currentDrawer.hide();
    }

    this._drawers.pop();

    const previousState = this._drawers.length > 0 ? this._drawers[this._drawers.length - 1] : null;

    if (previousState && typeof previousState.drawer?.toggle === 'function') {
      previousState.drawer.toggle();
    }
  }

  dispose() {
    this._linkHandlers.forEach(({ link, handler }) => {
      link.removeEventListener('click', handler);
    });
    this._backButtonHandlers.forEach(({ button, handler }) => {
      button.removeEventListener('click', handler);
    });
    this._trigger.removeEventListener('click', this._handlerTriggerClick.bind(this));

    this._trigger = null;
    this._linkHandlers = [];
    this._backButtonHandlers = [];
  }
}

const factory = (elem, trigger, drawerIds, dropdown) => new GlobalMobileNav(elem, trigger, drawerIds, dropdown);
export { GlobalMobileNav, factory };
