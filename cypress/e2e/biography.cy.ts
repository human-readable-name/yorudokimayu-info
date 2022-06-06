/// <reference types="cypress" />

describe('Biography (default locale)', () => {
    beforeEach(() => {
        cy.visit('/biography');
    });
    it('lang value is ja', () => {
        cy.get('html[lang=ja]').should('have.length', 1);
    });
    it('has correct canonical value', () => {
        cy.get('link[rel=canonical]').should('have.length', 1);
        cy.get('link[rel=canonical]').first().should('have.attr', 'href', 'https://kimayu.rocks/biography');
    });
    it('has 3 alternates (default, ja, en)', () => {
        cy.get('link[rel=alternate]').should('have.length', 3);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=x-default]')
            .filter('link[href=https://kimayu.rocks/biography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=ja]')
            .filter('link[href=https://kimayu.rocks/biography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=en]')
            .filter('link[href=https://kimayu.rocks/en/biography]')
            .should('have.length', 1);
    });
});

describe('Biography (en locale)', () => {
    beforeEach(() => {
        cy.visit('/en/biography');
    });
    it('lang value is en', () => {
        cy.get('html[lang=en]').should('have.length', 1);
    });
    it('has correct canonical value', () => {
        cy.get('link[rel=canonical]').should('have.length', 1);
        cy.get('link[rel=canonical]').first().should('have.attr', 'href', 'https://kimayu.rocks/en/biography');
    });
    it('has 3 alternates (default, ja, en)', () => {
        cy.get('link[rel=alternate]').should('have.length', 3);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=x-default]')
            .filter('link[href=https://kimayu.rocks/biography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=ja]')
            .filter('link[href=https://kimayu.rocks/biography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=en]')
            .filter('link[href=https://kimayu.rocks/en/biography]')
            .should('have.length', 1);
    });
});