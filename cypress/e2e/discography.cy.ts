/// <reference types="cypress" />

describe('Discography(default locale)', () => {
    beforeEach(() => {
        cy.visit('/discography');
    });
    it('lang value is ja', () => {
        cy.get('html[lang=ja]').should('have.length', 1);
    });
    it('has correct canonical value', () => {
        cy.get('link[rel=canonical]').should('have.length', 1);
        cy.get('link[rel=canonical]').first().should('have.attr', 'href', 'https://kimayu.rocks/discography');
    });
    it('has 3 alternates (default, ja, en)', () => {
        cy.get('link[rel=alternate]').should('have.length', 3);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=x-default]')
            .filter('link[href=https://kimayu.rocks/discography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=ja]')
            .filter('link[href=https://kimayu.rocks/discography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=en]')
            .filter('link[href=https://kimayu.rocks/en/discography]')
            .should('have.length', 1);
    });
    it('must be responsive', () => {
        const viewports: Cypress.ViewportPreset[] = ['iphone-x', 'macbook-11'];
        viewports.forEach((viewport) => {
            cy.viewport(viewport);
            cy.screenshot('screenshot-discography-ja-' + viewport);
        });
    });
});

describe('Discography(en locale)', () => {
    beforeEach(() => {
        cy.visit('/en/discography');
    });
    it('lang value is en', () => {
        cy.get('html[lang=en]').should('have.length', 1);
    });
    it('has correct canonical value', () => {
        cy.get('link[rel=canonical]').should('have.length', 1);
        cy.get('link[rel=canonical]').first().should('have.attr', 'href', 'https://kimayu.rocks/en/discography');
    });
    it('has 3 alternates (default, ja, en)', () => {
        cy.get('link[rel=alternate]').should('have.length', 3);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=x-default]')
            .filter('link[href=https://kimayu.rocks/discography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=ja]')
            .filter('link[href=https://kimayu.rocks/discography]')
            .should('have.length', 1);
        cy.get('link[rel=alternate]')
            .filter('link[hrefLang=en]')
            .filter('link[href=https://kimayu.rocks/en/discography]')
            .should('have.length', 1);
    });
    it('must be responsive', () => {
        const viewports: Cypress.ViewportPreset[] = ['iphone-x', 'macbook-11'];
        viewports.forEach((viewport) => {
            cy.viewport(viewport);
            cy.screenshot('screenshot-discography-en-' + viewport);
        });
    });
});