class LoginPage{

    elements ={
        emailField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='email']"),
        passwordField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='password']"),
        loginBtn : () => cy.xpath("//div[@class='login-form']/descendant::button")
    }

    login(){
        this.elements.emailField().type("bryce81@outlook.com");
        this.elements.passwordField().type("123");
        cy.log('Successfully Filled Login Form')
        this.elements.loginBtn().click();
        cy.log('Successfully logged in')
    }
}
export default new LoginPage();
require('cypress-xpath')

    // cy.xpath("//div[@class='login-form']/descendant::input[@type='email']").type("bryce81@outlook.com")
    // cy.xpath("//div[@class='login-form']/descendant::input[@type='password']").type("123")
    // cy.xpath("//div[@class='login-form']/descendant::button").click()
   
