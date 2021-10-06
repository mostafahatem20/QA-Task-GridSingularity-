/// <reference types="cypress" />

context('Login & creation of project and simulation', () => {
  beforeEach(() => {
    cy.visit('https://www.d3a.io/')
    cy.login('mostafahatem300@gmail.com', 'MostafaHatem12_')
  })
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  })

  it('logged in successfully', () => {
    cy.wait(1000)
    cy.contains('Please, enter valid credentials').should('not.exist')
    cy.url().should('eq', 'https://www.d3a.io/')
  })
  it('Create Project', () => {
    cy.get('svg[class="icon-projects "]').click()
    cy.contains('new project').click()
    cy.get('input[id="input-field-name"]').type('Test project')
    cy.get('textarea[id="textarea-field-nameTextArea"]').type(
      'This project was created for testing'
    )
    cy.contains('Add').click()
    cy.wait(1000)
    cy.contains('Project name already exists.').should('not.exist')
    cy.get('.saved-project__list').eq(0).should('contain.text', 'Test project')
    cy.get('.saved-project__list')
      .eq(0)
      .should('contain.text', 'This project was created for testing')
  })
  it('Create Simulation', () => {
    cy.get('svg[class="icon-projects "]').click()
    cy.get('.saved-project__list').find('div').first().click()
    cy.contains('new simulation').click()
    cy.wait(500)
    cy.contains('Next').click()
    cy.wait(1000)
    cy.contains('Configuration name already exists in this Project.').should(
      'not.exist'
    )
    cy.get('svg[class="icon-projects "]').click()
    cy.get('.saved-project__list')
      .eq(0)
      .should('contain.text', 'default simulation')
  })
})
