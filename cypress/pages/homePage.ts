class HomePage{
    
    elements ={
        loginBtn : () => cy.xpath('//a[@href="/login"]'),
        logoutBtn : () => cy.xpath('//a[@href="/logout"]'),
        productBtn : () => cy.xpath('//a[@href="/products"]'),
        cartBtn : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/view_cart']")
    }

    clickOnSignin(){
        this.elements.loginBtn().click()
        cy.log('Successfully clicked Login page button')
    }

    clickOnProduct(){
        this.elements.productBtn().click()
        cy.log('Successfully clicked on the Product page button')
    }

    clickOnCart(){
        this.elements.cartBtn().click()
        cy.log('Successfully clicked on the Cart page button')
    }

}

export default new HomePage();
require('cypress-xpath')