/* eslint-disable no-undef */

// Testing the services page route and title - TDD unit

//    1. visit about page URL
//    2. url chould include /about uri
//    2. Query for the head title of the about page
//    3. Interact with the head title tag
//    4. The title should be contain the page title

describe('The About Page', () => {
  it('should visit the about page and check its url and head title tag', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/about')

    // Should be on a new URL which includes '/about'
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/about')

    // Page title should be About Page
    cy.get('title')
      // eslint-disable-next-line padded-blocks
      .should('have.text', 'About')

    // Save screenshot of test result to screenshots folder
    cy.screenshot()
  })
})

//  Cypress
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
