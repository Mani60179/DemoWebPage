Feature: End to end Add to cart Validation

    User can add product to shopping cart in the Demoweb application

Background:
    Given I login to demoweb shop Page

Scenario: Verify user can products to 'Shopping cart' 
   When I click books in the top menu
   And I click the product title
   Then Product description and add to cart button should be visible
   When I click the add to cart button
   Then The product should be added in the cart
   When I click the shopping cart button
   Then The product should be displayed with details
   When I remove the product from cart
   Then The shopping cart shoud be empty
