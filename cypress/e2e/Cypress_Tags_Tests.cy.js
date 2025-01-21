
const tags = require('./cypress.config.js');

describe('Login Test_1', () => {
  before(() => {
      cy.log('***Browser Started***');
  });

  beforeEach(() => {
      cy.log('***App Launch***');
  });

  it('Test_1 @tag1', () => {  // Add tag @tag1
      cy.log('****Test_1 Execution***');
  });

  it('Test_2 @tag3', () => {  // Add tag @tag3
      cy.log('****Test_2 Execution***');
  });

  it('Test_3', () => {
      cy.log('****Test_3 Execution***');
  });

  afterEach(() => {
      cy.log('***App Closed***');
  });

  after(() => {
      cy.log('***Browser Closed***');
  });
});
