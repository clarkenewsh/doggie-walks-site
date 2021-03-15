
// Feature: Book / Query Dog a service

// Acceptance Criteria:

// User Story:
// sneario: Book a dog walking service througth contact form
// Given
// When
// Then

//  Cypress Framework
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

// BDD Test Case Logic - Querying/booking a Dog walking service - for each service so will need a for each test case
// 1. visit services page URL
// 2. Find/query the div tag with class "service-card"
// 2. Interact with the h2 tag
// 3. The h2 tag tite should contain 'Dog Walking'
// repeat the same process for the other two service cards
// 1. visit services page URL
// 2. Find the button tag with class 'btn' with a tag text 'Book now'
// 3. Click it
// 4. Grab the browser URL, ensure it includes /contact

describe('Book a service', () => {
  it('Book or enquire about a Dog walking service', () => {
    // eslint-disable-next-line no-undef
    // GIVEN
    cy.visit('http://localhost:3000/services')
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/service')
    cy.get('title')
    // eslint-disable-next-line padded-blocks
      .should('have.text', 'Services & Cost')
    // WHEN

    // THEN

    // Save screenshot of test result to screenshots folder
      .cy.screenshot()
  })
})

// I use WHEN, we are here AND, we do something THEN the result is... comments. In this instance I start with a When
