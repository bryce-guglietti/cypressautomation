import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"
import PaymentPage from "../pages/PaymentPage"
import OrderPage from "../pages/OrderPage"
import 'cypress-xpath'

it('Create Tests', () =>{
    cy.visit('https://automationexercise.com/')
    cy.log('Visit the target page')

    cy.log('all the HomePage signin')
    HomePage.clickOnSignin();

    cy.log('Call the login function')
    LoginPage.login();
    
    cy.log('Ensure the login was successful')
    HomePage.elements.logoutBtn().should('have.text',' Logout');

    cy.log('Call the Product Page Button function')
    HomePage.clickOnProduct();

    cy.log('Call Search Product function')
    ProductPage.searchProduct("TShirts");
 
    cy.log('Call Add Product function')
    ProductPage.addProduct("28");

    cy.log('Call the Add Product function')
    ProductPage.addProduct("2");

    cy.log('Call the Click on Cart Button function')
    HomePage.clickOnCart();

    cy.log('Call the Delete Product function')
    CartPage.deleteProduct("2");

    cy.log('Call the Checkout function')
    CartPage.checkout();

    cy.log('Call the Place Order function')
    OrderPage.placeOrder();

    cy.log('Call the Fill Payment function')
    PaymentPage.fillPayment("Joe Brown", "1234123412341234", "999", "12", "2099")

    cy.log('Call the Confirm Checkout function')
    PaymentPage.confirmCheckout()

    cy.window().then((win) => {
        const downloadBtn = cy.get('a').contains('Download Invoice')
        win.document.addEventListener('click', function clickListener(){
            win.document.removeEventListener('click', clickListener)
            setTimeout(()=> win.location.reload(),5000)
        })
        downloadBtn.click({force:true})
    })



})