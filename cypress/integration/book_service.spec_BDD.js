/* eslint-disable no-undef */

// Feature: Book / Query Dog a service

// User Story:
// sneario: Book a dog walking service througth contact form
// Given
// When
// Then

// BDD Test Case Logic - Querying/booking a Dog walking service - for each service so will need a for each test case
// 1. visit services page URL - http://localhost:3000/services
// 2. url should include /cntact
// 2. Find/query the div tag with class "service-card"
// 2. Interact with the h2 tag
// 3. The h2 tag tite should contain 'Dog Walking'
// 3.1 repeat the same process for the other two service cards
// 4. Get the 'conbtact us' button
// 5. click it
// 1. visit services page URL
// 2. Find the button tag with class 'btn' with a tag text 'Book now'
// 3. Click it
// 4. Grab the browser URL, ensure it includes /contact

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Book a service', () => {
  it('Book or enquire about a Dog walking service', () => {
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
  })
})
