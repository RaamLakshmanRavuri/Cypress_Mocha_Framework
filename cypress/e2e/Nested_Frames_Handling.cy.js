describe('Handle the Nested Frames in Cypress', () => {

  // Handle any uncaught exceptions to avoid the test from failing
  cy.on('uncaught:exception', (err, runnable) => {
      // Returning false here prevents Cypress from failing the test on uncaught exceptions
      return false;
  });

  before(() => {
      // Visit the target URL and wait for page load
      cy.visit('https://www.dezlearn.com/nested-iframes-example/');
      cy.wait(3000); // Wait for elements to be visible
      cy.log('Navigated to the page with nested iframes');
  });

  it('Interact with elements inside an iframe', () => {

      // Navigate to Parent Frame and find Parent Frame Body
      cy.get('#parent_iframe').then($iframe => {
          const iframeBody = $iframe.contents().find('body');
          cy.wait(3000);
          cy.log('Switched to Parent Frame');

          // Perform the Click Action from Parent Frame inside Body
          cy.wrap(iframeBody).find('button').contains('Click Here').click();
          cy.wait(3000);
          cy.log('Clicked the button inside Parent Frame');
          cy.screenshot('Parent_Frame_Clicked.png', { capture: 'viewport' });

          // Navigate to Child Frame from Parent Frame inside Body
          cy.wrap(iframeBody).find('#iframe1').then($iframe => {
              const childframeBody = $iframe.contents().find('body');
              cy.wait(3000);
              cy.log('Switched to Child Frame');
              cy.screenshot('Child_Frame_Clicked.png', { capture: 'viewport' });

              // Perform the Click Action from Child Frame inside Body
              cy.wrap(childframeBody).find('button').contains('Click Here').click();
              cy.screenshot('Child_Frame_Button_Clicked.png', { capture: 'viewport' });
              cy.log('Clicked the button inside Child Frame');
          });
      });
  });
});
