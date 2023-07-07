export class ShoppingCartPages{

  removeBagCart(){
    cy.get('#shopping_cart_container').click()
    cy.get('#remove-sauce-labs-backpack').click()
  }

  detailBagCart(){
    cy.get('#shopping_cart_container').click()
    cy.get('#item_4_title_link').click()
    cy.get('#inventory_item_container').should('be.visible')
  }

}