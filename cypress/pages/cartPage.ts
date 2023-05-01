class productPage{

    elements ={
        checkoutBtn : () => cy.xpath("//a[@class='btn btn-default check_out']")
    }

    deleteProduct(productID: string){
        cy.log('Locate product to delete by ProductID')
        cy.xpath(`//div[@class='table-responsive cart_info']/descendant::a[@data-product-id=${productID}]`).click()
        cy.log('Successfully deleted a product in Cart by ProductID')
    }

    checkout(){
        this.elements.checkoutBtn().click()
        cy.log('Successfully clicked Checkout button')
    }
}
export default new productPage();
require('cypress-xpath')
