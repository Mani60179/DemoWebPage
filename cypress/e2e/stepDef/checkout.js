import { When,Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoWebpage from "../../support/pageObjects/DemoWebpage";
import CheckoutPage from "../../support/pageObjects/CheckoutPage";


const demoWebpage = new DemoWebpage()
const checkoutPage = new CheckoutPage()

When('I click the checkout button',()=>{
    try {
        demoWebpage.proceedToCheckout()
    } catch (error) {
        cy.log('An error occurred:', error.message)
    }
})

Then('Terms of service confirmation model should be displayed',()=>{
    try {
        cy.get('#terms-of-service-warning-box').eq(0).contains('Please accept the terms of service before the next step.')
        cy.get('.ui-button').click()
    } catch (error) {
        cy.log('An error occurred:', error.message)

    }
})

When('I click the terms of service checkbox and checkout button',()=>{
    try {
        cy.get('[type="checkbox"]').eq(1).check()
        demoWebpage.proceedToCheckout()
    } catch (error) {
        cy.log('An error occurred:', error.message)
    }  
})

When('I enter billing address details',()=>{
    try {
        checkoutPage.billingAddress()
    } catch (error) {
        cy.log('An error occurred:', error.message)
    }
})

When('I click the continue button',()=>{
    try {
        cy.get('#billing-buttons-container .button-1').click()
    } catch (error) {
        cy.log('An error occurred:', error.message)
    }
})

When('Billing address mandatory fields validation error should be displayed',()=>{
    try {
        checkoutPage.fieldsError().eq(0).contains('Country is required.').should('be.visible')
        checkoutPage.fieldsError().eq(1).contains('City is required').should('be.visible')
        checkoutPage.fieldsError().eq(4).contains('Phone is required').should('be.visible')
    } catch (error) {
        cy.log('An error occurred:', error.message)
    }
})

When('Mandatory fields should be filled with details',()=>{
    try {
        cy.get('#BillingNewAddress_Email').invoke('val').should('eq', 'kobapa1176@foraro.com')
        checkoutPage.valid().eq(0).should('be.visible')
        checkoutPage.valid().eq(1).should('be.visible')
        checkoutPage.valid().eq(2).should('be.visible')
    } catch (error) {
        cy.log('An error occurred:', error.message)
    }
})