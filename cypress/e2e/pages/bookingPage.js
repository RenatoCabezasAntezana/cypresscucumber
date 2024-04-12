var cod = ""
class bookingPage {

    tokenSession(Datatable) {
        Datatable.hashes().forEach((row) => {
            cy.request({
                method: 'POST',
                url: 'auth',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    'username': row.username,
                    'password': row.password
                }
            }).as('endpoint')
        });
    }
    validateStatusCode(status) {
        cy.get('@endpoint').then((response) => {
            expect(Number(status)).to.equal(response.status)
        })
    }
    getBookingAll() {
        cy.request({
            method: 'GET',
            url: 'booking',
        }).as('endpoint').then(response => {
            cy.log(JSON.stringify(response.body[0]))
            cod = JSON.stringify(response.body[0].bookingid)
        })
    }
    
    getBookingId() {
        cy.log(cod)
        cy.request({
            method: 'GET',
            url: `booking/${Number(cod)}`,
            headers: {
                "Accept": "application/json"
            }
        }).as('endpoint').then(response => {
            cy.log(JSON.stringify(response.body))
        })
    }


    

}
export default new bookingPage()