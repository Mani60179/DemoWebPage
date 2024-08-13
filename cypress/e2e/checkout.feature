Feature: End to end Product checkout Validation

Checkout the product in Demoweb application

Background:
    Given I login to demoweb shop Page

Scenario: Verify user can see the terms of service confirmation model 
   When I click books in the top menu
   And I click the product title
   And I click the add to cart button
   And I click the shopping cart button
   Then The product should be displayed with details
   When I click the checkout button
   Then Terms of service confirmation model should be displayed
   When I remove the product from cart
   Then The shopping cart shoud be empty

Scenario: Verify user can see the 'Billing address' fields validation error
   When I click books in the top menu
   And I click the product title
   And I click the add to cart button
   And I click the shopping cart button
   Then The product should be displayed with details
   When I click the terms of service checkbox and checkout button
   And I click the continue button 
   Then Billing address mandatory fields validation error should be displayed
   When I click the shopping cart button
   And I remove the product from cart
   Then The shopping cart shoud be empty


Scenario: Verify user can 'checkout' the product 
   When I click books in the top menu
   And I click the product title
   And I click the add to cart button
   And I click the shopping cart button
   Then The product should be displayed with details
   When I click the terms of service checkbox and checkout button
   And I enter billing address details
   Then Mandatory fields should be filled with details
   When I click the shopping cart button
   And I remove the product from cart
   Then The shopping cart shoud be empty


