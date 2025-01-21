describe('Find and Print Record in HTML Table', () => {
    it('Should search for the record with pagination and terminate based on conditions', () => {
        const targetDate = '2024-01-53'; // The record to search for
        const noMoreRecordsMessage = 'No more records are available'; // Text for no more records

        cy.visit('http://localhost:8000/New_Filter_Code.html');

        const findRecord = () => {
            // Check for the target record in the current table page
            let recordFound = false;

            cy.get('table tbody tr').each(($row) => {
                const rowText = $row.text().trim();

                if (rowText.includes(targetDate)) {
                    cy.log(`Record found: ${rowText}`);
                    recordFound = true;
                    return false; // Exit the loop
                }
            }).then(() => {
                if (recordFound) {
                    return; // Stop further execution if record is found
                }

                // Check for "No more records are available" message
                cy.get('#message').then(($message) => {
                    const messageText = $message.text().trim();

                    if (messageText.includes(noMoreRecordsMessage)) {
                        cy.log(`Message displayed: ${messageText}`);
                        cy.log('No more records are available. Terminating search.');
                        return; // Stop further execution if no more records message is found
                    } else {
                        // Click the "Next" button and retry if the message is not found
                        cy.wait(2000);
                        cy.get('#nextButton').should('not.be.disabled').click();
                        findRecord(); // Recursive call to search the next page
                    }
                });
            });
        };

        // Start the search process
        findRecord();
    });
});
