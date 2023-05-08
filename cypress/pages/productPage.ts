// Create the ProductPage
class ProductPage{

    // List of elements used in the ProductPage
    elements = {
        searchBar : () => cy.xpath("//div[@class='container']/descendant::input[@class='form-control input-lg']"),
        searchBtn : () => cy.xpath("//button[@id='submit_search']"),
        continueBtn : () => cy.xpath("//div[@class='modal-footer']/descendant::button")
    }

    // Function to search for a product by the passed string
    searchProduct(product: string){
        this.elements.searchBar().type(product)
        cy.log('Fill the searchBar with the passed string')
        this.elements.searchBtn().click()
        cy.log('Successfully Searched for product')
    }

    // Function to add a product on the page by its productID
    addProduct(productID: string){
        cy.xpath(`//div[@class='productinfo text-center']/descendant::a[@data-product-id=${productID}]`).click()
        cy.log('Locate a product by the ProductID')
        this.elements.continueBtn().click()
        cy.log('Sucessfully added product')
    }
}

// Export the ProductPage
export default new ProductPage();
require('cypress-xpath')