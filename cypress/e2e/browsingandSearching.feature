Feature: End to end Product browsing and Searching Validation

    Browsing and searching the Demoweb application

Background:
    Given I login to demoweb shop Page

Scenario: Verify user can browse the books 
    When I click books in the top menu
    Then The book items should be displayed

Scenario: Verify user can search the product in search box
    When I enter product name in the search box
    And I click the search button
    Then The searched product should be displayed accordingly
