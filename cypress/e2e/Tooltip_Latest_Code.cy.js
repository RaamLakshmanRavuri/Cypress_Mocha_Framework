// describe('Filter and Validate Records with Polling', () => {
//   const pollForStatusUpdate = (rowIndex, expectedStatus, retries = 6, interval = 10000) => {
//     if (retries === 0) {
//       throw new Error(`Status did not update to '${expectedStatus}' within the expected time.`);
//     }

//     cy.log(`Polling for status update, attempts remaining: ${retries}`);
//     cy.get('table tbody tr').eq(rowIndex).find('td').eq(3).invoke('text').then((currentStatus) => {
//       if (currentStatus.trim() === expectedStatus) {
//         cy.log(`Status updated to '${expectedStatus}' successfully.`);
//       } else {
//         cy.wait(interval);
//         pollForStatusUpdate(rowIndex, expectedStatus, retries - 1, interval);
//       }
//     });
//   };

//   it('Launch the Application', () => {
//     // Visit the application page
//     cy.visit('http://localhost:8000/Filter_HTML_Page.html');
//     cy.wait(5000); // Wait for page load

//     // Step 1: Click the Filter button
//     cy.contains('button', 'Filter').click();
//     cy.wait(5000);

//   });
//   it('Filters records, performs Edit action, and validates Status update with polling', () => {
//     // Step 2: Iterate through the rows and check Customer, Launch Date, Event Type, and Status
//     cy.get('table tbody tr').each(($row, index) => {
//       const customer = $row.find('td').eq(0).text().trim();
//       const launchDate = $row.find('td').eq(1).text().trim();
//       const eventType = $row.find('td').eq(2).text().trim();
//       const status = $row.find('td').eq(3).text().trim();

//       cy.log(`Row ${index + 1} - Customer: ${customer}, Launch Date: ${launchDate}, Event Type: ${eventType}, Status: ${status}`);

//       if (customer === 'uk' && launchDate === '2024-12-18' && eventType === 'power-on' && status === 'inprogress') {
//         cy.log('Condition met: Customer = uk, Launch Date = 2024-12-18, Event Type = power-on, Status = inprogress');

//         // Step 3: Click on the "Edit" button
//         cy.get('table tbody tr').eq(index).find('.action-menu').click();
//         cy.wait(1000);
//         cy.get('table tbody tr').eq(index).find('.action-menu').contains('Edit').click({ force: true });
//         cy.wait(1000);

//         // Step 4: Ensure the modal is visible and update the Status
//         cy.get('#editModal', { timeout: 10000 }).should('be.visible');
//         cy.get('select[id="editStatus"]').select('success');
//         cy.wait(3000);
//         cy.get('#editModal .modal-footer button').contains('Save').click();
//         cy.wait(1000);

//         // Step 5: Poll for the status update
//         pollForStatusUpdate(index, 'success', 6, 10000);

//         // Step 6: Validate the history after the status update
//         cy.wait(3000);
//         cy.get('table tbody tr').eq(index).find('.action-menu').click();
//         cy.get('table tbody tr').eq(index).find('.action-menu').contains('History').click({ force: true });
//         cy.get('#historyContent').should('be.visible').then(($historyContent) => {
//           const historyText = $historyContent.text().trim();
//           cy.log(`History Content: ${historyText}`);
//           expect(historyText).to.contain('updated 1 time');
//           cy.wait(3000);
//           cy.contains('Close').click();
//         });

//         // Break the loop after processing the matched row
//         return false;
//       }
//     });
//   });
// });



describe('Filter and Validate Records', () => {
  it('Launch the Application', () => {
    // This step is always run before the second method
    cy.visit('http://localhost:8000/Filter_HTML_Page.html');
    cy.wait(5000); // Wait for page load
    cy.contains('button', 'Filter').click();
    cy.wait(5000);
  });

  it('Filters records, performs Edit action, and validates Status', () => {
    // Logic for filtering, editing, and validating records
    cy.get('table tbody tr').each(($row, index) => {
      const customer = $row.find('td').eq(0).text().trim();
      const launchDate = $row.find('td').eq(1).text().trim();
      const eventType = $row.find('td').eq(2).text().trim();
      const status = $row.find('td').eq(3).text().trim();

      cy.log(`Row ${index + 1} - Customer: ${customer}, Launch Date: ${launchDate}, Event Type: ${eventType}, Status: ${status}`);

      if (customer === 'uk' && launchDate === '2024-12-18' && eventType === 'power-on' && status === 'inprogress') {
        cy.log('Condition met: Customer = uk, Launch Date = 2024-12-18, Event Type = power-on, Status = inprogress');

        // Edit the row
        cy.get('table tbody tr').eq(index).find('.action-menu').click();
        cy.wait(1000);
        cy.get('table tbody tr').eq(index).find('.action-menu').contains('Edit').click({ force: true });
        cy.wait(1000);

        // Update status
        cy.get('#editModal').should('be.visible');
        cy.get('select[id="editStatus"]').select('success');
        cy.get('#editModal .modal-footer button').contains('Save').click();
        cy.wait(1000);

        // Validate status update
        cy.get('table tbody tr').eq(index).find('td').eq(3).invoke('text').then((updatedStatus) => {
          expect(updatedStatus.trim()).to.equal('success');
        });

        return false; // Break loop after the first match
      }
    });
  });
});

