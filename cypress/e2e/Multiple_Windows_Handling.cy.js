// describe('Handle Multiple Windows in Same Tab', () => {

//   beforeEach(() => {
//     // Handle any uncaught exceptions to avoid the test from failing
//     cy.on('uncaught:exception', (err, runnable) => {
//       // Returning false here prevents Cypress from failing the test on uncaught exceptions
//     return false;
//     });
//     });


//   it('Launch multiple windows, navigate to Facebook, and go back to parent page', () => {
//     // Step 1: Visit the parent URL
//     cy.visit('https://www.dezlearn.com/multiple-browser-windows/');

//     // Step 2: Intercept the 'window.open' calls and capture the URLs of the child windows
//     cy.window().then((win) => {
//     const childWindows = [];
//     const originalOpen = win.open;
//     cy.stub(win, 'open').callsFake((url) => {
//     childWindows.push(url); // Capture the URLs of each new window
//     return originalOpen.call(win, url);
//     });

//       // Step 3: Click the button to launch multiple windows (URLs will be captured)
//       cy.get('#u_7_8').click(); // Adjust selector if necessary

//       // Step 4: Check if Facebook is among the opened windows
//       cy.wrap(childWindows).should('have.length', 6).then(() => {
//         const facebookUrl = childWindows.find(url => url.includes('facebook'));

//         if (facebookUrl) {
//           // Step 5: Visit the Facebook URL
//           cy.visit(facebookUrl);

//           // Step 6: Enter the username on the Facebook page
//           cy.get('#email') // Facebook username input field
//             .type('your_username'); // Replace with your username

//           // Step 7: After interacting with Facebook, go directly back to the parent page
//           cy.visit('https://www.dezlearn.com/multiple-browser-windows/');
//         } else {
//           cy.log('Facebook tab not found among the opened windows!');
//         }
//       });
//     });
//   });
// });




describe('Handle Multiple Windows in Same Tab', () => {

  let parentUrl; // Declare parentUrl in the higher scope

  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent Cypress from failing the test
    });

    // Initialize the parentUrl variable
    parentUrl = `${Cypress.config('baseUrl')}${Cypress.env('parentUrl')}`;
    cy.visit(parentUrl);
    cy.wait(3000); // Wait to ensure the page loads properly
  });

  it('Launch multiple windows, navigate to Facebook, and go back to the parent page', () => {
    // Step 2: Suppress the `window.open` function to avoid opening new tabs
    cy.window().then((win) => {
      const childWindows = [];
      cy.stub(win, 'open').callsFake((url) => {
        childWindows.push(url); // Capture the URLs of each new window, but don't open new tabs
      });

      // Step 3: Click the button to launch multiple windows (but they won't open)
      cy.get('#u_7_8').click(); // Make sure this selector is correct or adjust it
      cy.wrap(childWindows).should('have.length', 6).then(() => {

        // Step 4: Check if Facebook is among the captured URLs
        const facebookUrl = childWindows.find(url => url.includes('facebook'));
        if (facebookUrl) {
          cy.visit(facebookUrl);
          cy.get('#email').type('your_username_value'); // Step 6: Enter username on Facebook page
        } else {
          cy.log('Facebook tab not found among the opened windows!');
        }

        // Step 7: Navigate back to the parent page
        cy.visit(parentUrl); // Use the parentUrl declared in the higher scope

        // Repeat for other windows (YouTube, Apple, etc.)
        cy.wait(3000);
        const youtubeUrl = childWindows.find(url => url.includes('youtube'));
        if (youtubeUrl) {
          cy.visit(youtubeUrl);
          cy.get('#search-input > #search').click({ force: true });
          cy.get('#search-input > #search').type('selenium tutorial{enter}');
        } else {
          cy.log('YouTube tab not found among the opened windows!');
        }

        // Repeat for Apple URL
        const appleUrl = childWindows.find(url => url.includes('apple'));
        if (appleUrl) {
          cy.visit(appleUrl);
          cy.get('#globalnav-menubutton-link-search').click({ force: true });
          cy.get('.globalnav-searchfield-input').type('apple{enter}');
        } else {
          cy.log('Apple tab not found among the opened windows!');
        }

        // Finally, return to the parent URL
        cy.visit(parentUrl); // Use the parentUrl declared in the higher scope
      });
    });
  });
});
