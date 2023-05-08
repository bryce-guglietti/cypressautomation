// Import Page Objects
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"
import PaymentPage from "../pages/PaymentPage"
import OrderPage from "../pages/OrderPage"

// Import cypress xpath
import 'cypress-xpath'

// Create Tests using it function
it('Complete a Transaction', () =>{

    // Visit the test automation page
    cy.visit('https://automationexercise.com/')
    cy.log('Visit the target page')

    // Locate and click Signin button
    cy.log('all the HomePage signin')
    HomePage.clickOnSignin();

    // Call login function and complete Login
    cy.log('Call the login function')
    LoginPage.login('bryce81@outlook.com', '123');
    
    // Assert the login was successful
    cy.log('Ensure the login was successful')
    HomePage.elements.logoutBtn().should('have.text',' Logout');

    // Locate and click product button
    cy.log('Call the Product Page Button function')
    HomePage.clickOnProduct();

    // Call search function and search for TShirts
    cy.log('Call Search Product function')
    ProductPage.searchProduct("TShirts");
 
    // Call the add product function
    cy.log('Call Add Product function')
    ProductPage.addProduct("28"); // add product id number 28

    // Call the add product function with another product id
    cy.log('Call the Add Product function')
    ProductPage.addProduct("2");

    // Locate and click the cart button
    cy.log('Call the Click on Cart Button function')
    HomePage.clickOnCart();

    // Call the delete product function and delete one item by product id
    cy.log('Call the Delete Product function')
    CartPage.deleteProduct("2");

    // Locate and click the checkout button
    cy.log('Call the Checkout function')
    CartPage.checkout();

    // Locate and click the place order button
    cy.log('Call the Place Order function')
    OrderPage.placeOrder();

    // Fill the Payment information with parameters
    cy.log('Call the Fill Payment function')
    PaymentPage.fillPayment("Joe Brown", "1234123412341234", "999", "12", "2099")

    // Locate and click the confirm checkout button
    cy.log('Call the Confirm Checkout function')
    PaymentPage.confirmPayment()

    // Download invoice avoiding a timeout error
    cy.window().then((win) => {
        // Click find the download invoice button
        const downloadBtn = cy.get('a').contains('Download Invoice')
        // Add an event listener looking for a click and set a timeout to reload
        win.document.addEventListener('click', function clickListener(){
            win.document.removeEventListener('click', clickListener)
            setTimeout(()=> win.location.reload(),5000)
        })
        // click the download invoice button and force the click without waiting for actionability
        downloadBtn.click({force:true})
    })



})