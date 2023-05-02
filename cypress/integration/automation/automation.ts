import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/homePage"
import loginPage from "../../pages/loginPage"
import productPage from "../../pages/productPage"
import cartPage from "../../pages/cartPage"
import paymentPage from "../../pages/paymentPage"
import orderPage from "../../pages/orderPage"
import 'cypress-xpath'
Given('Given I am on the homepage', () => {
    cy.visit('https://automationexercise.com/');
})

When('When I click on the login button', () =>{
    homePage.clickOnSignin();
})

When('When I login to my account', () =>{
    loginPage.login();
})

When('When I click on the "Products" button', () =>{
    homePage.clickOnProduct();
})

When('When I search for {string}', (searchTerm) =>{
    productPage.searchProduct(searchTerm);
})

When('When I add 2 {string} to cart', (searchTerm) =>{
    productPage.addProduct('2');
    productPage.addProduct('28');
})

When('When I click on the Cart button', () =>{
    homePage.clickOnCart();
})

When('When I delete an item', () =>{
    cartPage.deleteProduct('2');
})

When('When I click on the Checkout button', () =>{
    cartPage.checkout();
})

When('When I click on the Place Order button', () =>{
    orderPage.placeOrder();
})

When('When I fill out the credit card form', () =>{
    paymentPage.fillPayment("Joe Brown", "1234123412341234", "999", "12", "2099");
})

Then('Then I complete the payment',()=>{
    paymentPage.confirmCheckout();
})