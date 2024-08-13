import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoWebpage from "../../support/pageObjects/DemoWebpage";

const demoWebpage = new DemoWebpage()

Given('I login to demoweb shop Page',()=>{
  try {
   demoWebpage.visit()
   demoWebpage.login()
  }catch (error) {
   cy.log('An error occurred:', error.message)
 }
})


When('I click books in the top menu',()=>{
   try{
    demoWebpage.books()
   }catch (error) {
      cy.log('An error occurred:', error.message)
   }
})

Then('The book items should be displayed',()=>{
   try{
     demoWebpage.product().eq(0).contains('Computing and Internet').should('be.visible')
     demoWebpage.product().eq(1).contains('Copy of Computing and Internet EX').should('be.visible')
   }catch (error) {
      cy.log('An error occurred:', error.message)
    }
})

When('I enter product name in the search box',()=>{
   try{
    demoWebpage.searchBox().type('Blue Jeans')
   }catch (error) {
      cy.log('An error occurred:', error.message)
   }

})

When('I click the search button',()=>{
 try{
   demoWebpage.searchButton()
  }catch (error) {
   cy.log('An error occurred:', error.message)
}
})

Then('The searched product should be displayed accordingly',()=>{
   try{
    demoWebpage.product().eq(0).contains('Blue Jeans').should('be.visible')
   }catch (error) {
      cy.log('An error occurred:', error.message)
   }

})