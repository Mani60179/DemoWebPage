class DemoWebpage{
    visit() {
        cy.visit(Cypress.env('url'))
      }

  login(){
    cy.get('.ico-login').click()
    cy.get('#Email').type('kobapa1176@foraro.com')
    cy.get('#Password').type('kobapa1176@foraro.com123')
    cy.get('.login-button').click()
  }

  books(){
    cy.get('.top-menu [href="/books"]').click()
  }

  product(){
    return cy.get('.product-title')
  }

  searchBox(){
    return cy.get('.search-box #small-searchterms')
  }

  searchButton(){
    cy.get('.search-box-button').click()
  }

  addtoCart(){
    return cy.get('.add-to-cart .add-to-cart-button')
  }

  shoppingCart(){
    return cy.get('#topcartlink .ico-cart')
  }

  updateShoppingCart(){
    cy.get('[type="checkbox"]').eq(0).check()
    cy.get('.update-cart-button').click()
  }
   
  proceedToCheckout(){
    cy.get('.checkout-buttons #checkout').click()
  }
}

export default DemoWebpage
