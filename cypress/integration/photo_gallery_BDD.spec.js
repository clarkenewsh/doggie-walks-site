/* eslint-disable no-undef */

// Feature: Photo Gallery

// Acceptance Criteria:

// User Story:
// sneario: View photo galerry
// Given
// When
// Then

// // BDD Test Case Logic: Navigation Feature containing all the user stories scnarios (deatiled above)

//    1. Visit gallery page URL - http://localhost:3000/gallery
//    2. url should include /gallery
//    3. I should not get a 404 page error
//    2. Get the title tag contained in the head
//    3. title should contain the theb page title of 'gallery'
//    4. Get the class .gallery
//    5. The gallery class should contain 5 figues tags with the class .photo
//    6. Get each figure and check its the child element is an img tag

// Test types here:
// - Acceptance
// - Integration

describe('Photo Gallery', () => {
  it('Should visit the gallery page and check each image is visible in the gallery', () => {
    cy.visit('http://localhost:3000/gallery')

    cy.url().should('include', '/gallery')
    cy.get('title')
      .should('have.text', 'gallery')

      // Save screenshot of test result to screenshots folder
      .cy.screenshot()
  })
})
