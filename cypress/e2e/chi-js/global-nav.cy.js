const ACTIVE_CLASS = '-active';
const COLLAPSED_CLASS = '-collapsed';
const EXPANDED_CLASS = '-expanded';
const ACCORDION_CLASSES = {
  ITEM: 'chi-accordion__item',
  CONTENT: 'chi-accordion__content'
};
const SIDENAV_LIST_CLASS = 'chi-sidenav__list';

describe('Global Sidenav', () => {
  before(() => {
    cy.visit('tests/lumen/js/global-nav.html');
  });

  beforeEach(() => {
    cy.viewport(1450, 1000);
    cy.get('[data-cy="global-nav"]')
      .find(`ul.${SIDENAV_LIST_CLASS}`)
      .as('list');
  });

  describe('Test expand/collapse functionality', () => {
    it('check that clicking on the toggle button collapses the sidenav', () => {
      cy.get('#toggle-nav')
        .click();
      cy.get('[data-cy="global-nav"]')
        .should('have.class', COLLAPSED_CLASS);
    });

    it('check that sidenav expands on hover', () => {
      cy.get('@list')
        .trigger('mouseenter');
      cy.get('[data-cy="global-nav"]')
        .should('have.class', EXPANDED_CLASS);
    });

    it('check that clicking on the toggle button collapses the sidenav', () => {
      cy.get('#toggle-nav')
        .click();
      cy.get('[data-cy="global-nav"]')
        .should('have.class', COLLAPSED_CLASS);
    });

    it('check that clicking on the toggle button again expands the sidenav', () => {
      cy.get('#toggle-nav')
        .click();
      cy.get('[data-cy="global-nav"]')
        .should('have.class', EXPANDED_CLASS);
    });
  });

  describe('Test Global Sidenav items behaviour', () => {
    it('check that clicking on item activates it', () => {
      cy.get('@list')
        .find('> li.chi-sidenav__item:first-child chi-link')
        .as('firstLevelFirstItem');
      cy.get('@firstLevelFirstItem')
        .click()
      cy.get('@firstLevelFirstItem')
        .should('have.class', ACTIVE_CLASS);
    });

    it('check that clicking on the accordion items expands its content', () => {
      cy.get('@list')
        .find('> li.chi-sidenav__item')
      cy.get(`.${ACCORDION_CLASSES.ITEM}`).as('accordionItem').find('.chi-accordion__trigger').click({ multiple: true });
      cy.get('@accordionItem')
        .should('have.class', '-expanded')
        .find(`.${ACCORDION_CLASSES.CONTENT}`)
        .should('have.css', 'display', 'block');
    });
  });

  describe('Test Global Sidenav on small viewport', () => {
    it('check that sidenav does not expand when viewport is small', () => {
      cy.viewport(1000, 800);
      cy.get('#toggle-nav')
        .click();
      cy.get('[data-cy="global-nav"]')
        .should('have.class', COLLAPSED_CLASS);
    });
  });

  describe('Test Global Sidenav dispose method', () => {
    it('Trigger collapse sidenav', () => {
      cy.get('#toggle-nav')
        .click();
    });

    it('Click to run dispose method', () => {
      cy.get('#dispose-sidenav-button')
        .click();
    });

    it('Check that sidenav does not open on trigger expand sidenav', () => {
      cy.get('#toggle-nav')
        .click();
      cy.get('[data-cy="global-nav"]')
        .should('have.class', COLLAPSED_CLASS);
    });
  });
});
