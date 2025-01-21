/// refernce types="cypress />"
require('cypress-xpath');
describe('Google Search', () => {

it('Search', () => {
    cy.url().should('include', 'https://www.flipkart.com');
    cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    
    cy.xpath("//span[contains(text(), 'Fashion')]").trigger('mouseover'); // Mouse over on Parent Element
    cy.contains("Men's T-Shirts").click(); // Click on Child Element
    cy.wait(2000);

// cy.get("input[name='q']").type('Mobiles');
// cy.wait(2000);
// cy.focused("input[name='q']").dblclick({force:true});

cy.url().should('include', 'https://www.flipkart.com');
cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

cy.xpath("//span[contains(text(), 'Fashion')]").trigger('mouseover'); // Mouse over on Parent Element
cy.contains("Men's T-Shirts").click(); // Click on Child Element
cy.wait(2000);
cy.contains('Mi TV').scrollIntoView().click(); //Scroll into Mi TV Link and click
cy.contains('Today').rightclick(); //Right click on Element
cy.get('#Login').trigger("click");//moveover to Login Button and click
cy.get('button').dblclick(); // Double click on button

cy.scrollTo(0, 1500) // Scroll the window 500px down
cy.get('.sidebar').scrollTo('bottom'); // Scroll 'sidebar' to its bottom
cy.scrollTo('bottom'); //Scroll to bottom
cy.get('#slider').scrollTo('right', { duration: 2000 }); //Scroll to Right from Left

//will move on to next command even if table is not scrollable with ensureScrollable
cy.get('table').scrollTo('bottom',{ ensureScrollable: false }); 
cy.get('table').find('tr:last-child').should('be.visible');



cy.get("button").should('exist'); //Verify element is exist or not
cy.get('button').should('contain.text', 'Login'); //Verify element text contains or not
cy.get('button').should('be.disabled'); //verify element is disabled or not 
cy.get('button').should('be.enabled'); //Verify element is enabled or not
cy.get('button').should('be.visible') //Verify element is visible or not
cy.get('month').select('Jan');
cy.get('month').should('be.selected'); //Verify dropdown value is selected or not
cy.get('input').type('Hello, Morld');
cy.get('input').should('have.value', 'Hello, Morld'); //Verify textbox value is available or not
cy.get('button').should('have.text', 'Login'); //Verify element text having or not
cy.get('button').should('not.to.be.disabled'); //Verify element is not disabled or not


cy.wait(5000); //Wait for 5 secounds
cy.get("Input) type('Hello, World").as ('UserName TextBox');
cy.wait('@UserName Textion'); //1/5 secounds default wait for element (5O0)
cy.wait('@UserName TextBox'); //if not found, then over to the load waiting period increase to 30 seconds (30000)
cy.get("button").scrollistoview().click({force: true}).wait(500); // Just for Half-second




});
});



    