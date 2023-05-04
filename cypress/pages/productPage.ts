class ProductPage{

    elements ={
        searchBar : () => cy.xpath("//div[@class='container']/descendant::input[@class='form-control input-lg']"),
        searchBtn : () => cy.xpath("//button[@id='submit_search']"),
        continueBtn : () => cy.xpath("//div[@class='modal-footer']/descendant::button")
    }

    searchProduct(product: string){
        this.elements.searchBar().type(product)
        cy.log('Fill the searchBar with the passed string')
        this.elements.searchBtn().click()
        cy.log('Successfully Searched for product')
    }

    addProduct(productID: string){
        cy.xpath(`//div[@class='productinfo text-center']/descendant::a[@data-product-id=${productID}]`).click()
        cy.log('Locate a product by the ProductID')
        this.elements.continueBtn().click()
        cy.log('Sucessfully added product')
    }
}
export default new ProductPage();
require('cypress-xpath')

    // cy.xpath("//div[@class='container']/descendant::input[@class='form-control input-lg']").type("Tshirts")
    // cy.xpath("//button[@id='submit_search']").click()
    // cy.xpath("//div[@class='productinfo text-center']/descendant::a[@data-product-id='28']").click()
    // cy.xpath("//div[@class='modal-footer']/descendant::button").click()
    // cy.xpath("//div[@class='productinfo text-center']/descendant::a[@data-product-id='2']").click()
    // cy.xpath("//div[@class='modal-footer']/descendant::button").click()
   
