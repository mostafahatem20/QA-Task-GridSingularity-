Feature: Login d3a.io
  Scenario: Login using precreated user
    Given I go to "https://www.d3a.io/"
    When I log in with email: "mostafahatem300@gmail.com" & password: "MostafaHatem12_"
    Then the url is "https://www.d3a.io/"
    And I'm logged in
  Scenario: Create Project
    Given I am logged in
    Then I can create a project with title "Test project" and description "This project was created for testing"
    And I can view a new project in the list with title "Test project" and description "This project was created for testing" 
  Scenario: Create Simulation
    Given I am logged in
    And a project with title "Test project" was created successfully
    Then I can create a Simulation for the created project
    And I can view the created Simulation