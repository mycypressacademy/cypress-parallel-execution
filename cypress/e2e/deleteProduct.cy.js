describe('Admin Delete Product', () => {
    before(() => {
      // Log in to the admin dashboard before each test
      cy.visit('http://cypresstesting7-001-site1.jtempurl.com/admin', {
        auth: {
          username: '11190287',
          password: '60-dayfreetrial',
        },
      })
      cy.get('#Email').type('admin@yourstore.com');
      cy.get('#Password').type('admin123');
      cy.get('.button-1.login-button').click();
    });
  
    it('Should delete a product', () => {
      // Navigate to Products page
      cy.get('a[href*="Product/List"]').click();
  
      // Search for a product
      cy.get('#SearchProductName').type('Test Product');
      cy.get('#search-products').click();
  
      // Select the product checkbox
      cy.get('input[name="checkbox_products"]').check();
  
      // Click delete
      cy.get('button[name="delete-selected"]').click();
  
      // Confirm deletion
      cy.get('.modal-footer .btn-primary').click();
  
      // Assert success message
      cy.get('.alert-success').should('contain.text', 'The selected products have been deleted.');
    });
  });
  