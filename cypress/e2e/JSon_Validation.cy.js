describe('Read clientName from JSON file', () => {
    it('should read and print the clientName key value', () => {
      const filePath = 'E:/Docker_DB_Process/NewJSonValidation.json';
      
      cy.readFile(filePath).then((json) => {
        // Access clientName within the first object of the data array
        const clientName = json.data[1].clientName;
  
        if (clientName) {
          cy.log('Client Name: ' + clientName);
          console.log('Client Name:', clientName); // This will print in the browser console
        } else {
          cy.log('clientName key not found in JSON file');
          console.log('clientName key not found in JSON file');
        }
      });
    });
  });
  