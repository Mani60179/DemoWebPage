class CheckoutPage{

    billingAddress(){
          cy.get('.enter-address-body #BillingNewAddress_CountryId').select(1)
          //cy.get('.enter-address-body #BillingNewAddress_StateProvinceId').select(3)
          cy.get('#BillingNewAddress_City').type('DPO')
          cy.get('#BillingNewAddress_Address1').type('101 Main street')
          cy.get('#BillingNewAddress_ZipPostalCode').type('34001')
          cy.get('#BillingNewAddress_PhoneNumber').type('+16789245678')
   }
  fieldsError(){
     return cy.get('.field-validation-error')
}

valid(){
    return cy.get('.text-box.single-line.valid')
} 
}
export default CheckoutPage

