
describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/#/');
    });

    it('top menu', () => {
        cy.get('[data-test=beta-disclaimer-button]')
            .click();
    });
});