describe('chi-cja analytics collector', function () {
  beforeEach(() => {
    cy.visit('tests/lumen/js/analytics.html');
    cy.window().then((win) => {
      win.chiAnalytics = [];
    });
  });

  it('exposes the global API and queue', () => {
    cy.window().then((win) => {
      expect(win.chiCja).to.be.an('object');
      expect(win.chiAnalytics).to.be.an('array');
    });
  });

  it('html: native click on .chi-button emits framework html', () => {
    cy.get('[data-cy="poc-html-btn"]').click();
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-button' && e.action === 'click');

      expect(evt, 'html button click captured').to.exist;
      expect(evt.schema).to.eq('chi.analytics.v1');
      expect(evt.source.framework).to.eq('html');
      expect(evt.label).to.eq('Save');
    });
  });

  it('custom-element: chiClick on <chi-button> emits framework custom-element', () => {
    cy.window().then((win) => {
      win.document
        .getElementById('poc-ce-btn')
        .dispatchEvent(new win.CustomEvent('chiClick', { bubbles: true, composed: true }));

      const evt = win.chiAnalytics.find((e) => e.source.framework === 'custom-element');

      expect(evt, 'custom-element event captured').to.exist;
      expect(evt.component).to.eq('chi-button');
      expect(evt.action).to.eq('click');
    });
  });

  it('html: native click on .chi-link anchor emits framework html', () => {
    cy.get('[data-cy="poc-html-link"]').click();
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-link' && e.source.framework === 'html');

      expect(evt, 'html link click captured').to.exist;
      expect(evt.action).to.eq('click');
    });
  });

  it('html: non-chi button click is not tracked', () => {
    cy.get('[data-cy="poc-plain-btn"]').click();
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.target.id === 'poc-plain-btn');

      expect(evt, 'non-chi click ignored').to.not.exist;
    });
  });

  it('html: native checkbox change emits BEM-normalized component with value', () => {
    cy.get('[data-cy="poc-native-checkbox"]').check({ force: true });
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-checkbox' && e.source.framework === 'html');

      expect(evt, 'checkbox change captured').to.exist;
      expect(evt.action).to.eq('change');
      expect(evt.value).to.eq(true);
      expect(evt.label).to.eq('Native terms');
    });
  });

  it('html: native radio change emits chi-radio with value', () => {
    cy.get('[data-cy="poc-radio-b"]').check({ force: true });
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-radio');

      expect(evt, 'radio change captured').to.exist;
      expect(evt.action).to.eq('change');
      expect(evt.value).to.eq(true);
      expect(evt.label).to.eq('Option B');
    });
  });

  it('html: native select change emits chi-select with selected value', () => {
    cy.get('[data-cy="poc-select"]').select('one');
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-select');

      expect(evt, 'select change captured').to.exist;
      expect(evt.action).to.eq('change');
      expect(evt.value).to.eq('one');
      expect(evt.source.framework).to.eq('html');
    });
  });

  it('html: text input change value is redacted', () => {
    cy.get('[data-cy="poc-text"]').type('hello').blur();
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-input' && e.action === 'change');

      expect(evt, 'text change captured').to.exist;
      expect(evt.value).to.deep.eq({ len: 5, filled: true });
    });
  });

  it('html: number input change value is redacted (allowlist)', () => {
    cy.get('[data-cy="poc-number"]').type('1234').blur();
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.target.id === 'poc-number');

      expect(evt, 'number change captured').to.exist;
      expect(evt.value).to.deep.eq({ len: 4, filled: true });
    });
  });

  it('custom-element: chiChange with string detail is summarized, not shipped raw', () => {
    cy.window().then((win) => {
      win.document
        .getElementById('poc-ce-checkbox')
        .dispatchEvent(new win.CustomEvent('chiChange', { bubbles: true, composed: true, detail: 'supersecret' }));

      const evt = win.chiAnalytics.find((e) => e.component === 'chi-checkbox');

      expect(evt, 'CE chiChange captured').to.exist;
      expect(evt.value).to.not.eq('supersecret');
      expect(evt.value).to.deep.eq({ len: 11, filled: true });
    });
  });

  it('registered chi* event from a non-Chi element is dropped', () => {
    cy.window().then((win) => {
      win.document
        .getElementById('poc-plain-btn')
        .dispatchEvent(new win.CustomEvent('chiChange', { bubbles: true, composed: true, detail: true }));

      expect(win.chiAnalytics, 'unattributable event dropped').to.have.length(0);
    });
  });

  it('custom-element: chiChange with primitive detail carries value', () => {
    cy.window().then((win) => {
      win.document
        .getElementById('poc-ce-checkbox')
        .dispatchEvent(new win.CustomEvent('chiChange', { bubbles: true, composed: true, detail: true }));

      const evt = win.chiAnalytics.find((e) => e.component === 'chi-checkbox');

      expect(evt, 'CE chiChange captured').to.exist;
      expect(evt.action).to.eq('change');
      expect(evt.source.framework).to.eq('custom-element');
      expect(evt.value).to.eq(true);
    });
  });

  it('custom-element: chiChange with array detail is sanitized to a summary', () => {
    cy.window().then((win) => {
      win.document
        .getElementById('poc-ce-checkbox')
        .dispatchEvent(
          new win.CustomEvent('chiChange', { bubbles: true, composed: true, detail: [{ id: 1 }, { id: 2 }] })
        );

      const evt = win.chiAnalytics.find((e) => e.component === 'chi-checkbox');

      expect(evt, 'CE chiChange captured').to.exist;
      expect(evt.value).to.deep.eq({ len: 2, filled: true });
    });
  });

  it('owned region: engine skips native events, track() still reports', () => {
    cy.get('[data-cy="poc-vue-checkbox"]').check({ force: true });
    cy.window().then((win) => {
      const htmlEvents = win.chiAnalytics.filter(
        (e) => e.component === 'chi-checkbox' && e.source.framework === 'html'
      );
      const vueEvent = win.chiAnalytics.find((e) => e.source.framework === 'vue');

      expect(htmlEvents, 'no engine event from owned region').to.have.length(0);
      expect(vueEvent, 'wrapper track() event present').to.exist;
    });
  });

  it('custom-element: native click inside silent <chi-link> is attributed to the host', () => {
    cy.get('[data-cy="poc-ce-link"]').click();
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-link');

      expect(evt, 'chi-link click captured').to.exist;
      expect(evt.action).to.eq('click');
      expect(evt.source.framework).to.eq('custom-element');
      expect(evt.label).to.eq('Link');
      expect(evt.target.id).to.eq('poc-ce-link');
    });
  });

  it('vue: track() emits framework vue', () => {
    cy.window().then((win) => {
      win.chiCja.track({ component: 'chi-checkbox', action: 'change', label: 'Accept', framework: 'vue' });

      const evt = win.chiAnalytics.find((e) => e.component === 'chi-checkbox');

      expect(evt, 'vue track event captured').to.exist;
      expect(evt.source.framework).to.eq('vue');
      expect(evt.action).to.eq('change');
    });
  });

  it('vue: simulated wrapper checkbox change emits framework vue with value', () => {
    cy.get('[data-cy="poc-vue-checkbox"]').check({ force: true });
    cy.window().then((win) => {
      const evt = win.chiAnalytics.find((e) => e.component === 'chi-checkbox' && e.action === 'change');

      expect(evt, 'vue checkbox change captured').to.exist;
      expect(evt.source.framework).to.eq('vue');
      expect(evt.value).to.eq(true);
      expect(evt.label).to.eq('Accept terms');
    });
  });

  it('redacts sensitive input values', () => {
    cy.window().then((win) => {
      const input = win.document.getElementById('poc-password');

      input.value = 'supersecret';
      win.chiCja.track({ component: 'chi-input', action: 'change', value: input.value, el: input });

      const evt = win.chiAnalytics[win.chiAnalytics.length - 1];

      expect(evt.value).to.not.eq('supersecret');
      expect(evt.value).to.deep.eq({ len: 11, filled: true });
    });
  });

  it('honors data-chi-analytics-suppress', () => {
    cy.get('[data-cy="poc-suppressed-btn"]').click();
    cy.window().then((win) => {
      expect(win.chiAnalytics).to.have.length(0);
    });
  });
});
