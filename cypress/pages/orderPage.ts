// Create the OrderPage Class
class OrderPage{

    // List of elements used in the OrderPage
    elements = {
        orderBtn : () => cy.xpath("//a[@class='btn btn-default check_out']")
    }

    // Function for placing the order
    placeOrder(){
        this.elements.orderBtn().click()
        cy.log('Successfully placed order')
    }
}

// Exporting the OrderPage
export default new OrderPage();
require('cypress-xpath')
