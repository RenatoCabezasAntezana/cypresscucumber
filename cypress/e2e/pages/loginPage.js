class loginPage {
    elements = {
        inputUser: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        inputPassword: () => cy.get('[placeholder="Password"]'),
        buttonSubmit: () => cy.get('[type="submit"]'),
        inputFile: () => cy.get('[type="file"]')
    }
    writeUserName(option) {
        this.elements.inputUser().should('be.visible').type(option)

    }
    writePassword(option) {
        this.elements.inputPassword().should('be.visible').type(option)
    }
    clickButton() {
        this.elements.buttonSubmit().should('be.visible').and('contain', 'Login').click()
    }
    selectFileCypress(){
        this.elements.inputFile().selectFile('cypress/fixtures/ReciboLuzOficinaAdministrativa.pdf', { force: true })
    }
}
export default new loginPage()