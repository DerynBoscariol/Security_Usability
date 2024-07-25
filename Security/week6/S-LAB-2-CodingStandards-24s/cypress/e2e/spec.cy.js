describe('S-LAB-2-CodingStandards-24s', () => {
 var userName = "DerynBoscariol";
 var password = "myP@ssword123";
  //TEST TO PASS
  describe('Test to pass', () => {
    //The user should see the application
    it('should load the page', () => {
      cy.visit('./index.html');
    })
    //The user should be able to enter a username and password
    it('should accept a username and password', () => {
      cy.get('.login__name').type(userName).should('have.value', 'DerynBoscariol');
      cy.get('.login__pass').type(password).should('have.value', 'myP@ssword123');
    })
    //Clicking login button should submit the form
    it('should submit form when "log in" is clicked', () => {
      cy.get('.login__button').click();
    })
    //After submission, the hidden output appears and displays the values entered for the username and password
    it('should display hidden div with correct values', () => {
    cy.get('.output').should('be.visible');
    cy.get('.output__user').should('contain', "DerynBoscariol");
    cy.get('.output__pass').should('contain', 'myP@ssword123');
    })
  })
  //TEST TO FAIL
  describe('Test to fail', () => {
    //It should not submit with empty username
    describe('The form should not submit with an empty username', () => {
      //The user should see the application
      it('should load the page', () => {
        cy.visit('./index.html');
      })
      //The user should be able to enter a password and press submit
      it('should display an error and have focus if only a password is provided', () => {
        cy.get('.login__pass').type(password).should('have.value', password);
        cy.get('.login__button').click();
        cy.get('.login__name').should('have.focus').should('have.css', 'background-color').and('eq', 'rgb(255, 0, 0)');
      })
    })
    //Should not submit with empty password
    describe('The form should not submit with an empty password', () => {
      //The user should see the application
      it('should load the page', () => {
        cy.visit('./index.html');
      })
      //The user should be able to enter a password and press submit
      it('should display an error and have focus if only a password is provided', () => {
        cy.get('.login__name').type(userName).should('have.value', userName);
        cy.get('.login__button').click();
        cy.get('.login__pass').should('have.focus').should('have.css', 'background-color').and('eq', 'rgb(255, 0, 0)');
      })
    })   
  })
})