import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import bookingPage from "../pages/bookingPage";
let codBooking = 0;
Given('the user has an account', () => {

})

When('validate user credentials', (Datatable) => {
    bookingPage.tokenSession(Datatable)
})
Then('validate response code booking {string}', (status) => {
    bookingPage.validateStatusCode(status)
})

Given('list ids', () => {

})

When('show the list of ids', () => {
    bookingPage.getBookingAll()    
})

Given('there is list reservation', () => {
    
})

When('show booking information', () => {
    bookingPage.getBookingId()
})




