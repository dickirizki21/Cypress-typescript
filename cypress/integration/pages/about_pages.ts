export class AboutPages{

  aboutPagesauce(){
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').click()
    cy.contains('alt="Saucelabs"').should('be.visible')
  }

}