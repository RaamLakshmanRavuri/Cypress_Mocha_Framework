describe('Retrieve Event Type and Status for specific Customer and Launch Date', () => {
    it('Finds the matching row and prints Event Type and Status', () => {
      // Visit the local HTML file
      cy.visit('http://localhost:8000/New_Pagination_Page.html');
      cy.wait(5000);
  
      // Find the table and iterate through rows
      cy.get('table tbody tr').each(($row) => {
        const customerSelector = 'td:nth-child(1)'; // Adjust to match Customer column
        const launchDateSelector = 'td:nth-child(2)'; // Adjust to match Launch Date column
        const eventTypeSelector = 'td:nth-child(3)'; // Adjust to match Event Type column
        const statusSelector = 'td:nth-child(4)'; // Adjust to match Status column
  
        // Check Customer and Launch Date values
        cy.wrap($row).find(customerSelector).invoke('text').then((customerText) => {
          cy.wrap($row).find(launchDateSelector).invoke('text').then((launchDateText) => {
            if (customerText.trim() === '47' && launchDateText.trim() === '2024-12-16') {
              // Print Event Type and Status values
              cy.wait(3000);
              cy.wrap($row).find(eventTypeSelector).invoke('text').then((eventTypeText) => {
                cy.log(`Event Type: ${eventTypeText.trim()}`);
              });
              cy.wrap($row).find(statusSelector).invoke('text').then((statusText) => {
                cy.log(`Status: ${statusText.trim()}`);
              });
            }
          });
        });
      });
    });
  });
  