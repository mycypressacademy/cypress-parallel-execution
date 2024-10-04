describe('User Registration', () => {
    it('Should register a new user', () => {
      // Visit registration page
      cy.visit('http://cypresstesting7-001-site1.jtempurl.com/register', {
        auth: {
          username: '11190287',
          password: '60-dayfreetrial',
        },
      })
      // Fill in registration form
      cy.get('#FirstName').type('John');
      cy.get('#LastName').type('Doe');
      cy.get('#Email').type('johndoe@example.com');
      cy.get('#Password').type('password123');
      cy.get('#ConfirmPassword').type('password123');
  
      // Click on the "Register" button
      cy.get('#register-button').click();
  
      // Assert success message
      cy.get('.result').should('have.text', 'Your registration completed');
    });
  });
  