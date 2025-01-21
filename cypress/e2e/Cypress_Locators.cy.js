

//Locators & Regular Expressions:


cy.get('textarea[name="q"]').type('selenium'); //Get Element by NAME using name as an attribute

cy.get('textarea[id="ApjFqb"]').type('selenium'); //Get Element by 10 using id as an attribute 

cy.get('textarea class="gLFyf"]').type('selenium'); //Get Element by CLASS using class as an attribute

cy-get('#ApjFqb').type('selenius'); //Get Element by using id

cy.get('.Lyft').type('selenium'); //Get Element by using Class
cy.get('.gtly').clear();

cy.get('#month').select('Jan'); //Select value From Dropdown using value attribute
cy.get('#month').contains('oct').click(); //Select value From Dropdown using text



cy.get('a:contains("Business")').click();//click on Link using contains text 

//Multiple Web Elements click on First and Last Element
cy.get('#SIvCob a').first().click(); 
cy.get('#SIvCob a').last().click(); 

cy-get('#SIvCoba').contains('Busi').click(); //Click on Element using contains under list of elements 

cy-get('#SIVCoba').eq(2).click(); //Click on Element using equals (start with 0) under list of elements 

cy.contains("Business").click(); //Click on Element By using direct contains text



//Regulat Expressions_SC_1: Click on based on word characters/mumbers/specs
cy.contains(/^Bu\w+/).click();
cy.contains(/^Bu\w+/).should('have.text', 'Advertising');


//Regulat Expressions_SC_2: Click on Next or Previous Element based on Current Element
cy.contains(/^Bu\w+/).next('a').click();
cy.wait(2000);
cy.go("back");
cy.wait(2000);
cy.contains(/^Bu\w+/).prev('a').click();

//Regulat Expressions_SC_3: Click on NextAll Elements based on Current Element
cy.contains(/^Bu\w+/).nextAll('a').click();




//Take a screenshot
cy.contains('Business').screenshot('Business');

//Get the Text from Application
cy.get('.ktLKi').invoke('text').then(text => {
cy.log(text);
});

//Get the Text value from Application
cy.get('.ktLKi').invoke('value').then(value => {
cy.log(value);
});

