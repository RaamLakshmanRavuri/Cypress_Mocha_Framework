// cypress/e2e/LoginTest.cy.js
import ORM_Login from "./POM/ORM_Login.cy";

describe('OrangeHRM Login Test', () => {
  const login = new ORM_Login();

  it('should login successfully with valid credentials', () => {
    const username = Cypress.env('ORM_UserName');
    const password = Cypress.env('ORM_Password');

    login.login(username, password);

    cy.url().should('include', '/dashboard'); // adjust as needed
  });
});
