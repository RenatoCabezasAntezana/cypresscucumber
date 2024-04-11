import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";

Given('I open Orange Page', () => {
    cy.visit('/')
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
    cy.get('[type="button"]').eq(4).click()
    cy.get('[.oxd-file-div div]').eq(0).click()
})