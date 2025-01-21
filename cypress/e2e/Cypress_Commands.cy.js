
describe('Googel Search', () => {

it('Search', () => {
cy.visit('https://google.com'); //Launch the Application


cy.origin('https://gmail.com', () => { // Code to run in the context of https://google.com
cy.get('#username').type('Cypress');
});


cy.viewport(1024, 768); //Set the Application View point

cy.url().should('include', 'https://gmail.com');  //It is used to get or assert the current URL of the page.
    
cy.title().should('eq', 'Welcome to Gmail'); //It is assert that the current page title is equal to “Welcome to Gmail”.

cy.go('back'); //lack to the previous page from Current
cy.go(-1); //Back to the pervious page fromCurrent
cy .go('forward'); //forward to the next page from Current
cy.go(1); //forwardto the next page fromcurrent
cy.reload(); //reload the Current Page


cy.get('input').type('Hello, world'); // Type ‘Hello, World ‘Into the 'input'
cy.get('[type="text"]').clear(); // Clear text Input
cy.get('textarea').type('Hil').clear(); // Clean textarea
cy.get('.btn').click(); // Click on button
cy.xpath("//span[contains (text(), 'Welcome-')]").click(); //Click on Button with xpath
cy.get('.btn').click({force: true }); // Click on button forcefully
cy.get('.nav > a').click(); // Click on Link from menu
cy.get('[type="checkbox"]').check(); // check checkbox element
cy.get('[type="checkbox"]').uncheck(); // Unchecks checkbox element 
cy.get('[type="radio"]').first().check(); // Check first element
cy.get('[type="radio"]').first().uncheck(); // Uncheck first radio element
cy.get('[type="radio"]').last().check(); // Check last element
cy.get('[type="radio"]').last().uncheck(); // Uncheck last radio element
cy.get('month').select('an'); //Select the las visible Test
cy.get('month').select(0); //Select the Index
cy.get('month').select(1); // Select the value

cy.contains("Travel").rightclick({ force: true });
cy.contains("Travel").invoke('text').should('eq', 'Travel'); // Verify the App text  with invoke

cy.get("input[name='q']").type('Mobiles{enter}');
cy.get("input[name='q']").invoke('val').should('eq', 'Mobiles');  // Verify the User enter value with invoke

cy.visit('https://www.google.com/')
cy.wait(2000);
cy.get('#SIvCob').find('a:nth-child(3)').click(); //Same element in multiple locations, we can use find for exact location



cy.get("button").click(); // Double click on button
cy.focused().dblclick() // Double click on el with focus
cy.contains('Meline').dblclick(); // Double click on first element containing welcome
cy.get(emu).rightclick(); // Right click on menu
ty.contains("Today").rightclick(); // Right click on first element cortalling Today
Cy-get('a').trigger(used)
cy-get().trigger("click");//mover and click on 11
ty.get("buttoncheckout").scrollIntoview(); //scrollbarthule elomat cy.get('button checkout').scrollfo("rigation sae)); // sceltats Page Right side
cy.scrollto(0, 500)//latte doe


//File upload
const filePath = 'C:/Users/Admin/Downloads/testfile.png';
cy.get('input[name="fileUpload"]').attachFile(filePath);



});
});      
   
    
