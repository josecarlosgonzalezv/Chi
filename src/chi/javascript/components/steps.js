import { Component } from '../core/component';
import { chi } from '../core/chi';
import { Util } from '../core/util.js';

const COMPONENT_TYPE = 'steps';
const COMPONENT_ITEM_CLASS = 'chi-steps__item';
const TRIGGER_CLASS = 'chi-steps__trigger';
const WRAPPER_CLASS = 'chi-steps__subitem-wrapper';
const DEFAULT_CONFIG = {
  expansionMode: 'multiple'
};
const EVENTS = {
  SHOW: 'chi.steps.show',
  HIDE: 'chi.steps.hide'
};
const EXPAND_ANIMATION_DURATION = 75;

class Steps extends Component {
  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));

    this._item = elem.querySelector(`.${COMPONENT_ITEM_CLASS}`);
    this._trigger = elem.querySelector(`.${TRIGGER_CLASS}`);
    this._triggers = elem.querySelectorAll(`.${TRIGGER_CLASS}`);
    this._expanded = Util.hasClass(elem, chi.classes.EXPANDED);
    this._childSteps = [];
    this._stepsAnimation = null;

    this._initSteps();
  }

  _initSteps() {
    const self = this;
    debugger;
    Array.prototype.forEach.call(
      this._triggers,
      function(trigger) {
        self._addEventHandler(trigger, 'click', () => {
          let stepItem;
          for (let current = trigger; current && !current.classList.contains(COMPONENT_ITEM_CLASS); current = current.parentNode) {
            if (current.parentNode.classList.contains(COMPONENT_ITEM_CLASS)) {
              stepItem = current.parentNode;
            }
          }
          self.toggle(stepItem);
        });
      }
    );
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  show(stepItem) {
    const contentElem = stepItem.querySelector(`.${WRAPPER_CLASS}`);

    if (!stepItem.classList.contains(chi.classes.EXPANDED)) {
      stepItem.dispatchEvent(
        Util.createEvent(EVENTS.SHOW)
      );

      Util.threeStepsAnimation(
        () => {
          Util.addClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.opacity = '0.5';
          contentElem.style.height = '0px';
          contentElem.style.display = 'none';
        }, () => {
          contentElem.style.opacity = '0.5';
          contentElem.style.removeProperty('height');
          contentElem.style.removeProperty('display');
          Util.addClass(stepItem, chi.classes.EXPANDED);
        }, () => {
          contentElem.style.removeProperty('opacity');
          Util.removeClass(contentElem, chi.classes.TRANSITIONING);
        }, EXPAND_ANIMATION_DURATION
      );
    }

    if (this._config.expansionMode === 'single') {
      const activeSibling = stepItem.parentNode.querySelector(`.${COMPONENT_ITEM_CLASS}.${chi.classes.EXPANDED}`);

      if (activeSibling) {
        this.hide(activeSibling);
      }
    }
  }

  hide(stepItem) {
    const contentElem = stepItem.querySelector(`.${WRAPPER_CLASS}`);
    let contentHeight = Util.calculateHiddenElementHeight(contentElem);

    if (stepItem.classList.contains(chi.classes.EXPANDED)) {
      stepItem.dispatchEvent(
        Util.createEvent(EVENTS.HIDE)
      );
      Util.threeStepsAnimation(
        () => {
          Util.checkAddClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.opacity = '0.5';
          contentElem.style.height = contentHeight;
        }, () => {
          contentElem.style.opacity = '0.5';
          Util.checkRemoveClass(stepItem, chi.classes.EXPANDED);
        }, () => {
          contentElem.style.opacity = '0';
          contentElem.style.height = '0px';
          contentElem.style.display = 'none';
          Util.checkRemoveClass(contentElem, chi.classes.TRANSITIONING);
        }, EXPAND_ANIMATION_DURATION
      );
    }
  }

  toggle (stepItem) {
    let stepItemToToggle;

    if (stepItem) {
      stepItemToToggle = stepItem;
    } else {
      stepItemToToggle = this._item;
    }

    if (stepItemToToggle.classList.contains(chi.classes.EXPANDED)) {
      this.hide(stepItemToToggle);
    } else {
      this.show(stepItemToToggle);
    }
  }

  expandAll() {
    const self = this;

    Array.prototype.forEach.call(
      this._triggers,
      function(trigger) {
        let stepItem;

        for (let current = trigger; current && !current.classList.contains(COMPONENT_ITEM_CLASS); current = current.parentNode) {
          if (current.parentNode.classList.contains(COMPONENT_ITEM_CLASS)) {
            stepItem = current.parentNode;
          }
        }

        self.show(stepItem);
      }
    );
  }

  collapseAll() {
    const self = this;

    Array.prototype.forEach.call(
      this._triggers,
      function(trigger) {
        let stepItem;

        for (let current = trigger; current && !current.classList.contains(COMPONENT_ITEM_CLASS); current = current.parentNode) {
          if (current.parentNode.classList.contains(COMPONENT_ITEM_CLASS)) {
            stepItem = current.parentNode;
          }
        }

        self.hide(stepItem);
      }
    );
  }

  dispose() {
    this._trigger = null;
    this._content = null;
    this._expanded = null;
    this._removeEventHandlers();
  }
}

const factory = Component.factory.bind(Steps);
export { Steps, factory };
