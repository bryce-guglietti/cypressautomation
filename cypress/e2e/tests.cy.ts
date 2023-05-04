import homePage from "../pages/homePage"
import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"
import CartPage from "../pages/CartPage"
import paymentPage from "../pages/paymentPage"
import orderPage from "../pages/orderPage"
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
    CartPage.deleteProduct("2");

    cy.log('Call the Checkout function')
    CartPage.checkout();

    cy.log('Call the Place Order function')
    orderPage.placeOrder();

    cy.log('Call the Fill Payment function')
    paymentPage.fillPayment("Joe Brown", "1234123412341234", "999", "12", "2099")

    cy.log('Call the Confirm Checkout function')
    paymentPage.confirmCheckout()

    cy.window().then((win) => {
        const downloadBtn = cy.get('a').contains('Download Invoice')
        win.document.addEventListener('click', function clickListener(){
            win.document.removeEventListener('click', clickListener)
            setTimeout(()=> win.location.reload(),5000)
        })
        downloadBtn.click({force:true})
    })



})