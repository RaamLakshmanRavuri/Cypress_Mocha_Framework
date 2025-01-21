describe('Login Test', () => {
    before(() => {
      // Set encrypted credentials
      cy.setEncryptedCredentials('admin', 'admin123');
    });
  
    it('should log in with encrypted credentials', () => {
      // Visit the login page
      cy.visit('http://localhost:8000/LoginPage.html');
  
      // Wait for 3 seconds
      cy.wait(3000);
  
      // Get decrypted credentials
      cy.getDecryptedCredentials().then(({ username, password }) => {
        // Use JavaScript to set the input values directly, without typing
        cy.get('#username').invoke('val', username).trigger('input'); // Set username
        cy.wait(1000);
        cy.get('#password').invoke('val', password).trigger('input'); // Set password
        cy.wait(1000);
      });
        
        // Submit the form
        cy.get('body > div.login-container > button').click({force: true});
        cy.wait(1000);
        // Add your assertions here
        // For example, check for a successful login
        cy.url().should('include', '/LoginPage.html'); // Adjust as needed
        cy.title().should('eq', 'Login Page');
      });

      beforeEach(() => {
        cy.log('***Browser  Launch***')
      })


      it('Test_1',() => {
        cy.log('****Test_1 Execution***')
      });


      it('Test_2',() => {
        cy.log('****Test_2 Execution***')
      });


      it('Test_3',() => {
        cy.log('****Test_3 Execution***')
      });


      afterEach(() => {
        cy.log('***Browser Closed***')
      })





    });
  
  