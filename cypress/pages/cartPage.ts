// Create the Cart Class
class CartPage{

    // The list of elements used on this page
    elements = {
        checkoutBtn : () => cy.xpath("//a[@class='btn btn-default check_out']")
    }

    // Delete product function specifying by product id passed
    deleteProduct(productID: string){
        cy.log('Locate product to delete by ProductID')
        cy.xpath(`//div[@class='table-responsive cart_info']/descendant::a[@data-product-id=${productID}]`).click()
        cy.log('Successfully deleted a product in Cart by ProductID')
    }

    // Checkout function to locate and click the checkout button
    checkout(){
        this.elements.checkoutBtn().click()
        cy.log('Successfully clicked Checkout button')
    }
}

// Export the Class
export default new CartPage();
require('cypress-xpath')
