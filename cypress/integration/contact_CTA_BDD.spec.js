/* eslint-disable no-undef */

// Feature: Contact CTA (email & phone)

// User Story:
// sneario: Contact busniess by email
// Given
// When
// Then

// // BDD Test Case Logic: Contact CTA Feature (email & phone) containing all the user stories scnarios (deatiled above)

// 1. visit services page URL - http://localhost:3000/
// 2. Grab the browser URL, ensure it includes /
//    2. Query for the head title of the team page
//    3. Interact with the head title tag
//    4. The title should be contain the page title

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Check contact CTA', () => {
  it('should visit the home page and interact with both of the contact call to action link - phone and email', () => {
    cy.visit('http://localhost:3000/')

    cy.url().should('include', '/')
    cy.get('title')

      .should('have.text', 'Home Page')
  })
})
