// Testing the home page route - TDD unit
describe('The Home Page', () => {
  it('should visit the home page', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/')
  })
  // here the title of the page should be checked agaisnt it name i.e home page, about page
})

// This could be extended looking at the entire user story to make it bbdd style testing above is TDD Style
//   for instance access the home page user stories would be
//    1. visit home page URL
//    2. Query for the head title hoepage or the main header
//    3. Interact with the logo Image
//    4. The home page should then re-load

// Compone testing here could be for the navigation bar - see https://github.com/cypress-io/cypress/blob/master/npm/vue/README.md
// Today, we’ll take a narrow view of these steps and map them cleanly to Cypress commands:

// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
