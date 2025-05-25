// cypress/e2e/LoginTest.cy.js
// import ORM_Login from "./POM/ORM_Login.cy";

// describe('OrangeHRM Login Test', () => {
//   const login = new ORM_Login();

//   it('should login successfully with valid credentials', () => {
//     const username = Cypress.env('ORM_UserName');
//     const password = Cypress.env('ORM_Password');

//     login.login(username, password);

//     cy.url().should('include', '/dashboard'); // adjust as needed
//   });
// });



import ORM_Login from "./POM/ORM_Login.cy";

describe('OrangeHRM Login Test', () => {
  const login = new ORM_Login();

  it('should login successfully with valid credentials', () => {
    const username = Cypress.env('ORM_USERNAME');
    const password = Cypress.env('ORM_PASSWORD');

    // Optional check to catch issues early
    expect(username, 'Username should be defined').to.not.be.undefined;
    expect(password, 'Password should be defined').to.not.be.undefined;

    login.login(username, password);

    cy.url().should('include', '/dashboard'); // update as per your app
  });
});

