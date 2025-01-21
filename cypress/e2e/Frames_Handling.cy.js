Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore cross-origin errors
  if (err.message.includes('Script error')) {
    return false;
  }
  return true; // Allow other errors to fail the test
});

// describe('Click on Button from iframe using Frame name', () => {
//   before(() => {
//     cy.visit('https://www.dezlearn.com/iframe-example/');
//   });

//   it('should click on Button inside the iframe', () => {
//     // Using a custom Cypress command defined in commands.js to access iframe body
//     cy.getIframeBody('#iframe1') // Ensure this command is properly defined

//     .find('button').contains('Click Here') // Finds the button with the text "Click Here"
//     .click(); // Click the button
//     });
//     });



  // describe('Handle Multiple iFrames in Cypress', () => {

  //   before(() => {
  //   cy.visit('https://www.dezlearn.com/iframe-example/');
  //   cy.wait(3000)
  //   });
  
  //   it('Interact with the second iframe', () => {
  //     //Access the second iframe by using the index with the help of eq (starting from 0)
  //     cy.get('iframe').eq(1).then($iframe => {

  //     //Get the iframe body with the help of constant
  //     const iframeBody = $iframe.contents().find('body');

  //     // Find the Button inside the iframe and click it with the help of wrap
  //     cy.wrap(iframeBody).find('button').contains('Click Here').click(); 
  //     });
  //     });
  //     });




  describe('Read and Print Text from iFrame', () => {
    before(() => {
        // Visit the target URL
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.wait(3000);
        cy.get('body > div.tox.tox-silver-sink.tox-tinymce-aux > div > div > button > div > svg').click();
        cy.wait(3000);
    });

    it('Print text from the iframe', () => {
        // Access the iframe by its ID
        cy.get('#mce_0_ifr').then($iframe => {
        const iframeBody = $iframe.contents().find('body'); // Get the iframe body

        // Wrap the body element and find the paragraph to get the text
        cy.wrap(iframeBody).find('p').then($p => {
        const text = $p.text(); // Get the text content from the paragraph
        cy.log(text); // Print the text to the Cypress log

        });
        });
        });
        });

      