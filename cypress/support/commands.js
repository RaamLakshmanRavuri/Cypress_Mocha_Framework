// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    // First, get the iframe
      return cy
      .get(iframeSelector)
      .its('0.contentDocument.body') // Get the document body of the iframe
      .should('not.be.empty') // Assert that the body is not empty
      .then(cy.wrap); // Wrap the body so Cypress can continue chaining commands
  });


  // Utility functions for encryption and decryption
function encrypt(text) {
  return btoa(text); // Base64 encode
}

function decrypt(encodedText) {
  return atob(encodedText); // Base64 decode
}

// Add commands to Cypress
Cypress.Commands.add("setEncryptedCredentials", (username, password) => {
  const encryptedUsername = encrypt(username);
  const encryptedPassword = encrypt(password);
  
  // Store the encrypted credentials in Cypress environment variables
  Cypress.env('encryptedUsername', encryptedUsername);
  Cypress.env('encryptedPassword', encryptedPassword);
});

Cypress.Commands.add("getDecryptedCredentials", () => {
  const username = decrypt(Cypress.env('encryptedUsername'));
  const password = decrypt(Cypress.env('encryptedPassword'));
  return { username, password };
});
  