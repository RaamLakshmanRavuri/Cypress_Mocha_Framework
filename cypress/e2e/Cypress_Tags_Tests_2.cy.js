

describe('Login Test_2',() => {
    before(() => {
        cy.log('***Browser Started***')
    });
  


      beforeEach(() => {
        cy.log('***App  Launch***')
      })


      it('Test_1',() => {
        cy.log('****Test_1 Execution***')
      });


      it('Test_2',() => {
        cy.log('****Test_2 Execution***')
      });


      it('Test_3',() => {
        cy.log('****Test_3 Execution***')
      });


      afterEach(() => {
        cy.log('***App Closed***')
      })


        after(() => {
            cy.log('***Browser Closed***')
        })


    });
  
  