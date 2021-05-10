
/* eslint-disable no-undef */

// Feature: Photo Gallery

// User Story: As a user of dogie walks, I would like
// sneario: View photo galerry
// Given I want to view the photo galelry
// When I locate the phot gallery page
// Then the photo gallery is displayed showing a selection of photos

// // BDD Test Case Logic: Navigation Feature containing all the user stories scnarios (deatiled above)

//    1. Visit gallery page URL - http://localhost:3000/gallery
//    2. Grab the browser URL, ensure it includes /gallery
//    3. I should not get a 404 page error
//    2. Get the title tag contained in the head
//    3. title should contain the theb page title of 'gallery'
//    4. Get the class .gallery
//    5. The gallery class should find and contain 5 figues tags with img tag
//    6. 5 images tags should be visible

// Test types here:
// - Acceptance
// - Integration

describe('Photo Gallery', () => {
  it('Should visit the gallery page and check each image is visible in the gallery', () => {
    cy.visit('http://localhost:3000/gallery')

    cy.url().should('include', '/gallery').should('not.equal', 404)

    cy.get('title')
      .should('have.text', 'Gallery')
    cy.get('.gallery')
      .find('img')
      .should('be.visible')
  })
})
