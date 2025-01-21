export class TableHandler {
    // Method to read and store the Contact Name value from the HTML table
    readAndStoreContactNameValue() {
      cy.get('#customers') // ID selector for the table
        .find('tr') // Find all rows
        .eq(1) // Choose the desired row (e.g., 2nd row, index starts from 0)
        .find('td') // Find all columns in the selected row
        .eq(2) // Select the 3rd column (index starts from 0)
        .invoke('text') // Get the text content
        .then((text) => {
          const trimmedValue = text.trim(); // Trim the value
          cy.log(`Contact Name Value stored: ${trimmedValue}`);
          Cypress.env('contactNameValue', trimmedValue); // Store the value in Cypress environment
        });
    }
  
    // Method to get and log the stored Contact Name value
    logStoredContactNameValue() {
      cy.wrap(null).then(() => {
        const contactNameValue = Cypress.env('contactNameValue'); // Retrieve the value from Cypress environment
        cy.log(`Contact Name Value retrieved: ${contactNameValue}`); // Log the value
        expect(contactNameValue).to.not.be.undefined; // Assert that it is defined
        expect(contactNameValue).to.not.be.empty; // Assert that it is not empty
      });
    }
  }
  