/* eslint-disable no-undef */

// Feature: Contact the busniess using the contact form

// User Story:
// sneario: Contact the business using the contact form
// Given I want to contact doggie walks
// When I complete the contact form and submit it
// Then my enquiry is sent to the business

// BDD Test Case Logic - Contact the business using the contact form
// 1. visit services page URL - http://localhost:3000/contact
// 2. Grab the browser URL, ensure it includes /contact
// 3. Get the form and input '#InputName1'
// 4. Input should be visible
// 5. Type 'Clarke' in the input field
// 6. Get the input '#InputEmail1'
// 7. Input should be visible
// 8. Type 'clarke@example.com' in the input field
// 9. Get the input '#FormControlTextarea1'
// 10. Input should be visible
// 11. Type 'Example query text here' in the text area field
// 12. Get the button with type 'submit'
// 13. Submit button should be visible
// 14. click it to submit the form

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Contact Form Doggie Walks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact')
  })
  it('Successfully complete the contact form and sumit a enquiry', () => {
    cy.visit('http://localhost:3000/contact')

    cy.url().should('include', '/contact')
    cy.get('title')
      .should('have.text', 'Contact')
    cy.get('#InputName1')
      .should('be.visible')
      .type('Clarke', { force: true })

    cy.get('#InputEmail1')
      .should('be.visible')
      .type('clarke@example.com', { force: true })

    cy.get('#FormControlTextarea1')
      .should('be.visible')
      .type('Example query text here', { force: true })

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click({ force: true })
  })
})
