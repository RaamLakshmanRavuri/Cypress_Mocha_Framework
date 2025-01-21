
// describe('Alert Handling Test', () => {
//     it('should handle alerts on the page', () => {
//       // Visit the page
//     cy.visit('https://demoqa.com/alerts');
//     cy.wait(3000);

//     //Click on OK Button in Alert
    
//     cy.window().then((win) => {
//         cy.get('#alertButton').click();
//         cy.stub(win, 'alert').callsFake((alertText) => {
//         expect(alertText).to.contains('You clicked a button'); // Check the alert text
//           // Simulating clicking "OK" is handled by simply allowing the test to proceed
//         });
//       });

    

    //Solution_1
    // cy.window().then(($win) => {
    // cy.get('#promtButton').should('be.visible').scrollIntoView().click({force:true});
    // cy.wait(3000); 
    // cy.stub($win, 'prompt').returns('This is a test text')
    
    // })
    // cy.get('#promptResult').should('have.text', 'You entered This is a test text')
    // cy.wait(3000);


    //Solution_2
//     cy.window().then((win) => {
//     cy.get('#promtButton').should('be.visible').scrollIntoView().click({force:true});
//     cy.stub(win, 'prompt').callsFake((msg) => {
//           expect(msg).to.contains('Please enter your name'); // Verify the prompt text
//           return 'this is a text'; // Provide the response to the prompt
//         });
//       });
  
//       // Verify the result on the page after handling the prompt
//       cy.get('#promptResult').should('have.text', 'You entered this is a text');




   //});
   



//2nd application:

describe('Handling of JavaScript Alerts, Confirm, Prompt in Cypress', () => {
    beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })
  
    it('Handling JS Alert - Validate Alert Text and Click OK', () => {
    cy.contains('Click for JS Alert').click();
    cy.wait(3000);
    cy.on('window:alert', (str) => {
    expect(str).to.equal('I am a JS Alert')
    })
    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
    cy.wait(3000);
    })


  
    it('Handling JS Confirm - Validate Confirm Text and Click OK', () => {
    cy.contains('Click for JS Confirm').click();
    cy.wait(3000);
    cy.on('window:confirm', (str) => {
    expect(str).to.equal(`I am a JS Confirm`)
    })
    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text', 'You clicked: Ok')
    cy.wait(3000);
    })
  


    it('Handling JS Confirm - Click Cancel', () => {
    cy.contains('Click for JS Confirm').click();
    cy.wait(3000);
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text', 'You clicked: Cancel')
    cy.wait(3000);
    })


  
    it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
    cy.window().then(($win) => {
    cy.stub($win, 'prompt').returns('This is a test text')
    cy.contains('Click for JS Prompt').click()
    cy.wait(3000);
    })
    cy.get('#result').should('have.text', 'You entered: This is a test text')
    cy.wait(3000);
    })
    })


