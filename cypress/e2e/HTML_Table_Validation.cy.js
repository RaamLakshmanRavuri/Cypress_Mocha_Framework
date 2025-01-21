// describe('HTML Table Tests', () => {
//     // Handling uncaught exceptions to prevent test failures
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         console.error('Uncaught exception: ', err);
//         // returning false here prevents Cypress from failing the test
//         return false;
//     });

//     // Block unnecessary external requests
//     before(() => {
//         cy.intercept('*googlesyndication*', { body: 'Blocked external request' });
//         cy.intercept('*doubleclick*', { body: 'Blocked external request' });
        
//         // Visit the W3Schools HTML table page
//         cy.visit('https://www.w3schools.com/html/html_tables.asp');
//     });

//     it('Condition 1: Print all records from all rows', () => {
//         cy.get('#customers tr').each(($row, index) => {
//             const rowText = $row.text().trim();
//             cy.log(`Row ${index}: ${rowText}`);
//         });
//     });
//   });


  // describe('Find Country by Contact Name', () => {
  //   it('should print the Country name based on Contact name "Bernard Looney"', () => {
  //     // Visit the local app URL
  //     cy.visit('http://localhost:8000/HTML_Table.html');
  //     cy.wait(3000);
  //     // Find the row containing the contact name "Bernard Looney"
  //     cy.contains('td', 'Bernard Looney')
  //       .parent() // Traverse up to the parent row <tr>
  //       .within(() => {
  //         // Find and print the country name in the same row
  //         cy.get('td').eq(2).invoke('text').then((country) => {
  //           cy.log('Country: ' + country); // Log the country name
  //           console.log('Country: ' + country); // Print the country name to the console
  //         });
  //       });
  //   });
  // });


  describe('Find Country by Contact Name', () => {
    it('should print the Country name based on Contact name "Oliver Zipse"', () => {
      // Visit the local app URL
      cy.visit('http://localhost:8000/HTML_Table.html');
  
      // Iterate over the rows and exit the loop when the contact is found
      cy.get('table tr').each(($row) => {
        const contactName = $row.find('td').eq(1).text();
  
        if (contactName === 'Oliver Zipse') {
          const countryName = $row.find('td').eq(2).text();
          cy.log('Country: ' + countryName); // Log the country name
          console.log('Country: ' + countryName); // Print the country name to the console
  
          return false; // Exit the loop once the contact is found
        }
      });
    });


    it('should print the entire row where the contact name is "Bernard Looney"', () => {
  
      // Iterate over the rows to find the contact name
      cy.get('table tr').each(($row) => {
        const contactName = $row.find('td').eq(1).text();
  
        if (contactName === 'Bernard Looney') {
          // Print the entire row text
          cy.log($row.text()); // Logs the entire row's text in Cypress
          console.log($row.text()); // Prints the entire row's text in the console
  
          return false; // Exit the loop after printing the row
        }
      });
    });



    it('should print the entire row where the contact name is "Bernard Looney"', () => {
  
      // Iterate over the rows to find the contact name
        cy.get('table tr').each(($row) => {
        const contactName = $row.find('td').eq(1).text();
  
        if (contactName === 'Oliver Zipse') {
        const companyName = $row.find('td').eq(0).text();
        cy.log('Company: ' + companyName); // Log the country name
        console.log('Company: ' + companyName); // Print the country name to the console

        const countryName = $row.find('td').eq(2).text();
        cy.log('Country: ' + countryName); // Log the country name
        console.log('Country: ' + countryName); // Print the country name to the console

        return false; // Exit the loop once the contact is found
        }
        });
        });






  });
  