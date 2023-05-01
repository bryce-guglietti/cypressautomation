class paymentPage{

    elements ={
        nameField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='name_on_card']"),
        numberField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='card_number']"),
        cvcField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='cvc']"),
        monthField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_month']"),
        yearField : () => cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_year']"),
        confirmBtn : () => cy.xpath("//form[@id='payment-form']/descendant::button")
    }

    fillPayment(name: string, number: string, cvc: string, month: string, year: string){
        this.elements.nameField().type(name)
        this.elements.numberField().type(number)
        this.elements.cvcField().type(cvc)
        this.elements.monthField().type(month)
        this.elements.yearField().type(year)
        cy.log('Successfully filled payment fields')
    }

    confirmCheckout(){
        this.elements.confirmBtn().click()
        cy.log('Successfully Confirmed Checkout')
    }
}
export default new paymentPage();
require('cypress-xpath')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='name_on_card']").type('Joe')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='card_number']").type('1234123412341234')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='cvc']").type('111')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_month']").type('10')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_year']").type('2099')
    // cy.xpath("//form[@id='payment-form']/descendant::button").click()