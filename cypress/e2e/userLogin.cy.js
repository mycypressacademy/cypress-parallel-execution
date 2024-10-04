describe('User Login', () => {
    it('Should log in successfully', () => {
      // Visit login page
      cy.visit('http://cypresstesting7-001-site1.jtempurl.com/login', {
        auth: {
          username: '11190287',
          password: '60-dayfreetrial',
        },
      })
      // Enter email and password
      cy.get('#Email').type('johndoe@example.com');
      cy.get('#Password').type('password123');
  
      // Click login button
      cy.get('input[value="Log in"]').click();
  
      // Verify redirection to home page
      cy.url().should('include', '/');
  
      // Verify account link presence
      cy.get('.account').should('contain.text', 'My account');
    });
  });
  