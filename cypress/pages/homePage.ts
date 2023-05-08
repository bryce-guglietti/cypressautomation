// Create the HomePage Class
class HomePage{

    // List of elements used in this class
    elements = {
        loginBtn : () => cy.xpath('//a[@href="/login"]'),
        logoutBtn : () => cy.xpath('//a[@href="/logout"]'),
        productBtn : () => cy.xpath('//a[@href="/products"]'),
        cartBtn : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/view_cart']")
    }

    // Function for locating and clicking the Sign in Button
    clickOnSignin(){
        this.elements.loginBtn().click()
        cy.log('Successfully clicked Login page button')
    }

    // Function for locating and clicking the Product Page Button
    clickOnProduct(){
        this.elements.productBtn().click()
        cy.log('Successfully clicked on the Product page button')
    }

    // Function for locating and clicking the Cart Page Button
    clickOnCart(){
        this.elements.cartBtn().click()
        cy.log('Successfully clicked on the Cart page button')
    }

}

// Export the HomePage
export default new HomePage();
require('cypress-xpath')