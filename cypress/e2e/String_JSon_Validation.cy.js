describe('Print clientName values from JSON string and count occurrences for each', () => {
    it('should parse JSON string, print each clientName, and count individual occurrences', () => {
      const jsonString = "{ \"data\": [ { \"subCliSk\": \"194\", \"clientName\": \"Media\" }, { \"subCliSk\": \"195\", \"clientName\": \"Sports\" } ] }";
      
      // Parse the JSON string into an object
      const jsonObject = JSON.parse(jsonString);
  
      // Initialize an object to store counts for each clientName
      const clientNameCounts = {};
  
      // Iterate over the data array and count each clientName occurrence
      jsonObject.data.forEach((item) => {
        const clientName = item.clientName;
        clientNameCounts[clientName] = (clientNameCounts[clientName] || 0) + 1;
      });
  
      // Print each clientName with its count
      Object.entries(clientNameCounts).forEach(([clientName, count]) => {
        cy.log(`Client Name: ${clientName} Available ${count} time(s)`);
        console.log(`Client Name: ${clientName} Available ${count} time(s)`); // Print in browser console
      });
  
      // Log the total count of clientName entries
      const totalCount = jsonObject.data.length;
      cy.log('Total clientName count: ' + totalCount);
      console.log('Total clientName count:', totalCount); // Print in browser console
    });
  });
  