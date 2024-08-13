import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoWebpage from "../../support/pageObjects/DemoWebpage";

const demoWebpage = new DemoWebpage()

When('I click the product title',()=>{
    try {
       demoWebpage.product().eq(0).contains('Computing and Internet').click()
    }catch (error) {
        cy.log('An error occurred:', error.message)
     }
})

Then('Product description and add to cart button should be visible',()=>{
    try {
      cy.get('.short-description').contains('More Than 100 tips').should('be.visible')
      demoWebpage.addtoCart().invoke('val').should('eq','Add to cart')
    }catch (error) {
        cy.log('An error occurred:', error.message)
     }
})

When('I click the add to cart button',()=>{
  try {
      cy.get('.stock .value').then(($inputElem) => {  
        if ($inputElem.text().includes('In stock')) {  
                demoWebpage.addtoCart().click()
        } else {  
           cy.log('Product out of stock') 
        }  
    })
 }catch (error) {
    cy.log('An error occurred:', error.message)
 }
})

Then('The product should be added in the cart',()=>{
    try{
      demoWebpage.shoppingCart().contains('1').should('be.visible')
    }catch (error) {
        cy.log('An error occurred:', error.message)
     }
})


When('I click the shopping cart button',()=>{
    try {
      demoWebpage.shoppingCart().click()
    }catch (error) {
        cy.log('An error occurred:', error.message)
     }
})

Then('The product should be displayed with details',()=>{
    try {
      cy.get('.cart-item-row .product').contains('Computing and Internet').should('be.visible')
      cy.get('.cart-item-row .subtotal').contains('10').should('be.visible')
    } catch (error) {
        cy.log('An error occurred:', error.message)
     }
})

When('I remove the product from cart',()=>{
    try {
        demoWebpage.updateShoppingCart()
    } catch (error) {
        cy.log('An error occurred:', error.message)
     }
    
})

Then('The shopping cart shoud be empty',()=>{
    try{
    cy.get('.order-summary-content').contains('Your Shopping Cart is empty!').should('be.visible')
    demoWebpage.shoppingCart().contains('0').should('be.visible')
    }catch (error) {
        cy.log('An error occurred:', error.message)
     }
})