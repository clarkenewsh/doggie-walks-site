/* eslint-disable no-undef */

// Feature: Contact CTA (email & phone)

// User Story: As a doggie walks user, I want to be able to be able to contact the head office by phone or email, so that I can enquire about a service they offer.
// sneario: Contact busniess by email
// Given
// When
// Then

// // BDD Test Case Logic: Contact CTA Feature (email & phone) containing all the user stories scnarios (deatiled above)

// 1. visit home page URL - http://localhost:3000/
// 2. Grab the browser URL, ensure it includes /
// 3. Get the button with id .#cta-phone
// 4. The button should be visible and able to be clicked
// 5. Click button
// 5. Return to visit he home page
// 6. Get the button with id .#cta-email
// 7. The button should be visible and able to be clicked
// 8. Click button

// Test types here:

// - Acceptance
// - Integration

describe('Contact through CTA', () => {
  it('should visit the home page and interact with both of the contact call to action link - phone and email', () => {
    cy.visit('http://localhost:3000/')

    cy.url().should('include', '/')
    cy.get('title')

      .should('have.text', 'Home Page')

    cy.get('button#cta-phone')
      .should('be.visible')
      .click({ force: true })

    cy.visit('http://localhost:3000/')

    cy.get('button#cta-email')
      .should('be.visible')
      .click({ force: true })
  })
})
