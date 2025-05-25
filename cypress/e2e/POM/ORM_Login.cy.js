// cypress/e2e/PageObjects/ORM_Login.js
class ORM_Login {
  visitLoginPage() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
    cy.screenshot('Login Functionality');
  }

  clickLogin() {
    cy.xpath('//button[@type="submit"]').click();
    cy.wait(5000);
    cy.screenshot('Dashboard Functionality');
  }

  login(user, pass) {
    this.visitLoginPage();
    this.enterUsername(user);
    this.enterPassword(pass);
    this.clickLogin();
  }
}

export default ORM_Login;
