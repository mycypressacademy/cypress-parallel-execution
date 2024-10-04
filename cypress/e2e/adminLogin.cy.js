describe('Admin Login', () => {
    it('Should log in as an admin successfully', () => {
      // Visit admin login page
      cy.visit('http://cypresstesting7-001-site1.jtempurl.com/admin', {
        auth: {
          username: '11190287',
          password: '60-dayfreetrial',
        },
      })
  
      // Enter email and password
      cy.get('#Email').type('admin@yourstore.com');
      cy.get('#Password').type('admin123');
  
      // Click login button
      cy.get('.button-1.login-button').click();
  
      // Verify redirection to the dashboard
      cy.url().should('include', '/admin/dashboard');
      
      // Verify the dashboard heading
      cy.get('.content-header > h1').should('have.text', 'Dashboard');
    });
  });
  