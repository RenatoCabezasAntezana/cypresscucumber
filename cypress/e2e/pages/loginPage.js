class loginPage {
    elements = {
        inputUser: () => cy.get('[placeholder="Username"]'),
        inputPassword: () => cy.get('[placeholder="Password"]'),
        buttonSubmit: () => cy.get('[type="submit"]')
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
}
export default new loginPage()