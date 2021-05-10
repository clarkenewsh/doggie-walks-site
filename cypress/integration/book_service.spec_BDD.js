/* eslint-disable no-undef */

// Feature: Book / Query Dog a service

// User Story:
// scenario: Book a dog walking service through contact form
// Given
// When
// Then

// BDD Test Case Logic - Querying/booking a Dog walking service - for each service so will need a for each test case
// 1. visit services page URL - http://localhost:3000/services
// 2. url should include /contact
// 3. Find/query the div tag with class "service-card"
// 4. Interact with the h2 tag
// 5. The h2 tag title should contain 'Dog Walking'
// 5.1 repeat the same process for the other two service cards
// 6. Get the 'contact us' button
// 7. click it
// 8. visit services page URL
// 9. Find the button tag with class 'btn' with a tag text 'Book now'
// 10. Click it
// 11. Grab the browser URL, ensure it includes /contact
// 12. Get the form and input '#InputName1'
// 13. Input should be visible
// 14. Type 'Clarke' in the input field
// 14. Get the input '#InputEmail1'
// 15. Input should be visible
// 16. Type 'clarke@example.com' in the input field
// 17. Get the input '#FormControlTextarea1'
// 18. Input should be visible
// 19. Type 'Example query text here' in the text area field
// 20. Get the button with type 'submit'
// 21. Submit button should be visible
// 22. click it to submit the form

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Book a doggie service', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/services')
  })
  it('Successfully book a Dog walking service by browsing the services and completing the contact form', () => {
    cy.visit('http://localhost:3000/services')

    cy.url().should('include', '/service')
    cy.get('title')
      .should('have.text', 'Services & cost')
    cy.get('.service-card h2:first')
      .should('have.text', 'Dog Walking')
    cy.get('.service-card h2')
      .eq(1)
      .should('have.text', 'House Calls')
    cy.get('.service-card h2')
      .eq(2)
      .should('have.text', 'Day Care')
    cy.get('button a')
      .click({ force: true })
    cy.url().should('include', '/contact')

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
