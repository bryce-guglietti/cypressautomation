class OrderPage{

    elements ={
        orderBtn : () => cy.xpath("//a[@class='btn btn-default check_out']")
    }

    placeOrder(){
        this.elements.orderBtn().click()
        cy.log('Successfully placed order')
    }
}
export default new OrderPage();
require('cypress-xpath')
