
describe('Windows Handling', () => {
    before(() =>{
        cy.visit('https://www.flipkart.com');
        cy.wait(3000);
    });

    it('Hanlde window', () => {
        cy.get('input[name="q"]').type('mobiles{enter}');
        cy.wait(3000);

        //Click on Vivo mobile from Searched List
        cy.contains('vivo T3 Lite 5G (Majestic Black, 128 GB)').click().wait(500);
        
        //Once click on above mobile, new window opened
        //Here, Cypress... handling new browser tabs or child windows can be tricky.
        // Because Cypress opens everything in the same tab by design
        //So below way we can handle the new window or Tab
        cy.get('.tUxRFH > a').first().invoke('removeAttr', 'target').click().wait(500);

        //Click on the Textbox and Button inside of new window
        cy.get('#pincodeInputId').type('500072').wait(500);;
        cy.contains('Check').click({force: true});
        });
        });