
// Feature: Contact CTA (email & phone)

// Acceptance Criteria: 

// User Story:
// sneario: Contact busniess by email
// Given
// When
// Then

// User Story:
// sneario: Contact business by phone
// Given
// When
// Then

//  Cypress
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

// // BDD Test Case Logic: Contact CTA Feature (email & phone) containing all the user stories scnarios (deatiled above)

//    1. visit services page URL
//    2. url chould include /about/team uri
//    2. Query for the head title of the team page
//    3. Interact with the head title tag
//    4. The title should be contain the page title


describe('Contact CTA', () => {
    it('should visit the services page and check service UI elements and proceed to complete and submit the contact form', () => {
      // eslint-disable-next-line no-undef
      // GIVEN
      cy.visit('http://localhost:3000/')
      // eslint-disable-next-line no-undef
      cy.url().should('include', '/')
      cy.get('title')
      // eslint-disable-next-line padded-blocks
        .should('have.text', 'Home Page')
      // WHEN
        
  
      // THEN
  
      // Save screenshot of test result to screenshots folder
        .cy.screenshot()
    })
  })