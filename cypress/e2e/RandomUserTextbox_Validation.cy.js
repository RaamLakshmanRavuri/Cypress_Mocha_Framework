describe('Username Validation', () => {
    // Function to generate random alphanumeric strings
    function generateRandomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }


    beforeEach(() => {
        // Load the HTML page locally
        cy.visit('http://localhost:8000/Random_UserNameText.html'); // Update with the correct path
        cy.wait(4000);
    });

    it('should accept input below or equal to 8 characters', () => {
        const validUsername = generateRandomString(Cypress._.random(5, 8)); // Random length between 1 and 8
        cy.log(`Generated valid username: "${validUsername}" with ${validUsername.length} characters`); // Print valid username and count
        cy.get('#username').clear().type(validUsername);
        cy.get('#message').should('contain', 'Valid username');
    });

    it('should display error for input more than 8 characters', () => {
        const invalidUsername = generateRandomString(Cypress._.random(9, 15)); // Random length between 9 and 15
        cy.log(`Generated invalid username: "${invalidUsername}" with ${invalidUsername.length} characters`); // Print invalid username and count
        cy.get('#username').clear().type(invalidUsername);
        cy.get('#message').should('contain', 'Please enter a valid username');
    });
});