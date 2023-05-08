// Create the PaymentPage Class
class PaymentPage{

    // List of elements used in the Class
    elements = {
        nameField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='name_on_card']"),
        numberField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='card_number']"),
        cvcField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='cvc']"),
        monthField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_month']"),
        yearField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_year']"),
        confirmBtn : () => cy.xpath("//form[@id='payment-form']/descendant::button")
    }

    // Function to fill the payment fields on the page
    fillPayment(name: string, number: string, cvc: string, month: string, year: string){
        this.elements.nameField().type(name)
        this.elements.numberField().type(number)
        this.elements.cvcField().type(cvc)
        this.elements.monthField().type(month)
        this.elements.yearField().type(year)
        cy.log('Successfully filled payment fields')
    }
    
    // Function to confirm the payment of the transaction
    confirmPayment(){
        this.elements.confirmBtn().click()
        cy.log('Successfully Confirmed Checkout')
    }
}

// Export the PaymentPage
export default new PaymentPage();
require('cypress-xpath')