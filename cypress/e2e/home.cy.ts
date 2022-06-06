/// <reference types="cypress" />

describe('Home (default locale)', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('lang value is ja', () => {
        cy.get('html[lang=ja]').should('have.length', 1);
    });
    it('has correct canonical value', () => {
        cy.get('link[rel=canonical]').should('have.length', 1);
        cy.get('link[rel=canonical]').first().should('have.attr', 'href', 'https://kimayu.rocks/');
    });
    it('has 3 alternates (default, ja, en)', () => {
        cy.get('link[rel=alternate]').should('have.length', 3);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=x-default]')
            .filter('link[href=https://kimayu.rocks/]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=ja]')
            .filter('link[href=https://kimayu.rocks/]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=en]')
            .filter('link[href=https://kimayu.rocks/en/]')
            .should('have.length', 1);
    });
});

describe('Home (en locale)', () => {
    beforeEach(() => {
        cy.visit('/en/');
    });
    it('lang value is en', () => {
        cy.get('html[lang=en]').should('have.length', 1);
    });
    it('has correct canonical value', () => {
        cy.get('link[rel=canonical]').should('have.length', 1);
        cy.get('link[rel=canonical]').first().should('have.attr', 'href', 'https://kimayu.rocks/en/');
    });
    it('has 3 alternates (default, ja, en)', () => {
        cy.get('link[rel=alternate]').should('have.length', 3);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=x-default]')
            .filter('link[href=https://kimayu.rocks/]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=ja]')
            .filter('link[href=https://kimayu.rocks/]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=en]')
            .filter('link[href=https://kimayu.rocks/en/]')
            .should('have.length', 1);
    });
});