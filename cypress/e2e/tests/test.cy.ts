import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/homePage"
import loginPage from "../../pages/loginPage"
import productPage from "../../pages/productPage"
import cartPage from "../../pages/cartPage"
import paymentPage from "../../pages/paymentPage"
import orderPage from "../../pages/orderPage"
import 'cypress-xpath'

it('Create Tests', () =>{
    cy.visit('https://automationexercise.com/')
    cy.log('Visit the target page')

    cy.log('all the homepage signin')
    homePage.clickOnSignin();

    cy.log('Call the login function')
    loginPage.login();
    
    cy.log('Ensure the login was successful')
    homePage.elements.logoutBtn().should('have.text',' Logout');

    cy.log('Call the Product Page Button function')
    homePage.clickOnProduct();

    cy.log('Call Search Product function')
    productPage.searchProduct("TShirts");
 
    cy.log('Call Add Product function')
    productPage.addProduct("28");

    cy.log('Call the Add Product function')
    productPage.addProduct("2");

    cy.log('Call the Click on Cart Button function')
    homePage.clickOnCart();

    cy.log('Call the Delete Product function')
    cartPage.deleteProduct("2");

    cy.log('Call the Checkout function')
    cartPage.checkout();

    cy.log('Call the Place Order function')
    orderPage.placeOrder();

    cy.log('Call the Fill Payment function')
    paymentPage.fillPayment("Joe Brown", "1234123412341234", "999", "12", "2099")

    cy.log('Call the Confirm Checkout function')
    paymentPage.confirmCheckout()



})





    // cy.xpath('//a[@href="/login"]').click();
    // cy.xpath("//div[@class='login-form']/descendant::input[@type='email']").type("bryce81@outlook.com")
    // cy.xpath("//div[@class='login-form']/descendant::input[@type='password']").type("123")
    // cy.xpath("//div[@class='login-form']/descendant::button").click()
    // cy.xpath("//a[@href='/products']").click()
    // cy.xpath("//div[@class='container']/descendant::input[@class='form-control input-lg']").type("Tshirts")
    // cy.xpath("//button[@id='submit_search']").click()
    // cy.xpath("//div[@class='productinfo text-center']/descendant::a[@data-product-id='28']").click()
    // cy.xpath("//div[@class='modal-footer']/descendant::button").click()
    // cy.xpath("//div[@class='productinfo text-center']/descendant::a[@data-product-id='2']").click()
    // cy.xpath("//div[@class='modal-footer']/descendant::button").click()
    // cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/view_cart']").click()
    // cy.xpath("//div[@class='table-responsive cart_info']/descendant::a[@data-product-id='2']").click()
    // cy.xpath("//a[@class='btn btn-default check_out']").click()
    // cy.xpath("//a[@class='btn btn-default check_out']").click()
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='name_on_card']").type('Joe')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='card_number']").type('1234123412341234')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='cvc']").type('111')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_month']").type('10')
    // cy.xpath("//form[@id='payment-form']/descendant::input[@name='expiry_year']").type('2099')
    // cy.xpath("//form[@id='payment-form']/descendant::button").click()
