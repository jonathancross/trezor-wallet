describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/#/');
    });

    it('top menu', () => {
        cy.get('[data-test=beta-disclaimer-button]').click();
        cy.get('[data-test=top-menu]')
            .should('be.visible')
            .matchImageSnapshot();
    });
});