import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I go to {string}', (url) => {
  cy.visit(url)
})
Given('I am logged in', () => {
  cy.visit('https://www.d3a.io/')
  cy.login('mostafahatem300@gmail.com', 'MostafaHatem12_')
})
Given('a project with title {string} was created successfully', (title) => {
  cy.get('svg[class="icon-projects "]').click()
  cy.contains(title).should('exist')
})
When(
  'I log in with email: {string} & password: {string}',
  (email, password) => {
    cy.login(email, password)
  }
)
Then('the url is {string}', (url) => {
  cy.wait(1000)
  cy.contains('Please, enter valid credentials').should('not.exist')
  cy.url().should('eq', url)
})
Then("I'm logged in", () => {
  cy.log('logged in successfully')
})
Then(
  'I can create a project with title {string} and description {string}',
  (title, description) => {
    cy.get('svg[class="icon-projects "]').click()
    cy.contains('new project').click()
    cy.get('input[id="input-field-name"]').type(title)
    cy.get('textarea[id="textarea-field-nameTextArea"]').type(description)
    cy.contains('Add').click()
  }
)
Then(
  'I can view a new project in the list with title {string} and description {string}',
  (title, description) => {
    cy.wait(1000)
    cy.contains('Project name already exists.').should('not.exist')
    cy.get('.saved-project__list').eq(0).should('contain.text', title)
    cy.get('.saved-project__list').eq(0).should('contain.text', description)
  }
)

Then('I can create a Simulation for the created project', () => {
  cy.get('.saved-project__list').find('div').first().click()
  cy.contains('new simulation').click()
  cy.wait(500)
  cy.contains('Next').click()
})

Then('I can view the created Simulation', () => {
  cy.wait(1000)
  cy.contains('Configuration name already exists in this Project.').should(
    'not.exist'
  )
  cy.get('svg[class="icon-projects "]').click()
  cy.get('.saved-project__list')
    .eq(0)
    .should('contain.text', 'default simulation')
})
