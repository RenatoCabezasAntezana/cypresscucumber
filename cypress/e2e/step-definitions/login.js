import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";

Given('I open Orange Page', () => {
    cy.visit('/').wait(10000)
})

When('I write {string} and {string}', (username, password) => {
    loginPage.writeUserName(username)
    loginPage.writePassword(password)
})

Then('I click in the button', () => {
    loginPage.clickButton()
})
Then('Select files', () => {
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-action-header > .oxd-button').click()
    cy.get('[type="file"]').selectFile('cypress/fixtures/ReciboLuzOficinaAdministrativa.pdf', { force: true })
})
//cypress\fixtures\ReciboLuzOficinaAdministrativapdf