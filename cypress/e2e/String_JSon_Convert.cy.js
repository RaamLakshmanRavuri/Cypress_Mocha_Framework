// describe('Read JSON string from text file', () => {
//     it('should read the JSON string from a text file', () => {
//       cy.readFile('E:/Docker_DB_Process/NewJSonValidation1.txt').then((data) => {
//         cy.log('Read JSON String: ' + data); // Prints the string to the Cypress log
//         console.log('Read JSON String: ', data); // Prints to the browser console
//       });
//     });
//   });
  


describe('Read JSON Data from Text File and Validate clientName Counts', () => {
    it('should read JSON data from text file, parse it, and print clientName with counts', () => {
      // Path to the saved text file containing the JSON string
      const filePath = 'E:/Docker_DB_Process/NewJSonValidation1.txt'; // Update the path if needed
  
      // Read the raw JSON string from the text file
      cy.readFile(filePath).then((jsonString) => {
        // Log the raw JSON string for debugging
        cy.log('Raw JSON String:', jsonString);
        console.log('Raw JSON String:', jsonString); // Debugging in the console
  
        try {
          // Parse the string into a JSON object
          const jsonObject = JSON.parse(jsonString);
  
          // Check if the parsed JSON object has a 'data' field
          if (!jsonObject || !jsonObject.data) {
            cy.log('Parsed JSON object is not valid or missing data field');
            console.error('Parsed JSON object is not valid or missing data field');
            return; // Exit early if data field is missing
          }
  
          // Log the parsed JSON object to confirm correct parsing
          cy.log('Parsed JSON Object:', JSON.stringify(jsonObject, null, 2)); // Log formatted JSON object
          console.log('Parsed JSON Object:', JSON.stringify(jsonObject, null, 2)); // Debugging in console
  
          // Check if 'data' exists and is an array
          if (Array.isArray(jsonObject.data)) {
            // Initialize an object to store clientName counts
            const clientNameCounts = {};
  
            // Iterate over the 'data' array and count the occurrences of each 'clientName'
            jsonObject.data.forEach((item) => {
              const clientName = item.clientName;
              if (clientName) {
                // Count each clientName occurrence
                clientNameCounts[clientName] = (clientNameCounts[clientName] || 0) + 1;
              }
            });
  
            // Log the clientName count results
            Object.entries(clientNameCounts).forEach(([clientName, count]) => {
              cy.log(`Client Name: ${clientName} printed ${count} time(s)`);
              console.log(`Client Name: ${clientName} printed ${count} time(s)`); // Also print in the console
            });
  
            // Log the total count of clientName entries
            const totalClientNames = jsonObject.data.length;
            cy.log(`Total clientName count: ${totalClientNames}`);
            console.log(`Total clientName count: ${totalClientNames}`);
          } else {
            cy.log('Data is not an array or does not exist');
            console.error('Error: data is not an array or does not exist.');
          }
        } catch (error) {
          cy.log('Error parsing JSON:', error);
          console.error('Error parsing JSON:', error);
        }
      });
    });
  });
  
  
  
  
  