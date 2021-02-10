/* eslint-disable no-undef */

// Testing the contact page route and title - TDD unit

//    1. visit contact page URL
//    2. url chould include /contact uri
//    2. Query for the head title of the contact page
//    3. Interact with the head title tag
//    4. The title should be contain the page title

describe('The Contact Page', () => {
  it('should visit the contact page and check its url and head title tag', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/contact')

    // Should be on a new URL which includes '/'
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/contact')

    // Page title should be Contact Page
    cy.get('title')
      // eslint-disable-next-line padded-blocks
      .should('have.text', 'Contact')

    // Save screenshot of test result to screenshots folder
    cy.screenshot()
  })
})

//  Cypress
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
