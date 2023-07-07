export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addBag(){
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container a span').should('be.visible')
    }

    removeBag(){
        // cy.get('#add-to-cart-sauce-labs-backpack').click()
        // cy.get('#shopping_cart_container a span').should('be.visible')
        cy.get('#remove-sauce-labs-backpack').click()
    }
}
