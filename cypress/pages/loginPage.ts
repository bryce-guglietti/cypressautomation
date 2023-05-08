// Create the LoginPage
class LoginPage{

    // List of elements used by the Login Page
    elements = {
        emailField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='email']"),
        passwordField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='password']"),
        loginBtn : () => cy.xpath("//div[@class='login-form']/descendant::button")
    }

    // Function for logging in using the passed email and password
    login(email: string, password: string){
        this.elements.emailField().type(email);
        this.elements.passwordField().type(password);
        cy.log('Successfully Filled Login Form')
        this.elements.loginBtn().click();
        cy.log('Successfully logged in')
    }
}

// Export the LoginPage
export default new LoginPage();
require('cypress-xpath')
