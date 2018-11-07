describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://beta-wallet.trezor.io/next/#/');
        cy.get('.BetaDisclaimer__StyledButton-gicuGv')
            .click();
    });
});