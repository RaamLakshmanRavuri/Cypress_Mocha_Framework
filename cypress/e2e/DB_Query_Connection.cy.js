describe('Database Test', () => {
    it('Should fetch customers from India', () => {
      const query = "SELECT * FROM Customer WHERE Country = 'India';";
  
      cy.task('queryDatabase', query).then((result) => {
        // Output the result to the Cypress log
        cy.log(JSON.stringify(result));
  
        // Perform assertions based on the result
        expect(result).to.have.length.greaterThan(0); // Expect at least one result
        expect(result[0].Country).to.equal('India');
      });
    });
  });
  