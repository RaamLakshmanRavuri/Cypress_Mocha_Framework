import { TableHandler } from "./POM/Connect_Two_Tests.cy";

const tableHandler = new TableHandler();

describe('Cypress Tests for W3Schools HTML Table', () => {
  it('Test: Handle Contact Name Value Using Methods', () => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp'); // Open the W3Schools table page
    
    // Step 1: Read and store the Contact Name value
    tableHandler.readAndStoreContactNameValue();
    
    // Step 2: Log and validate the stored Contact Name value
    tableHandler.logStoredContactNameValue();
  });
});
