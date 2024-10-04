describe('Admin Add New Product', () => {
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
  
    it('Should add a new product', () => {
      // Navigate to Products page
      cy.get('a[href*="Product/List"]').click();
  
      // Click on the "Add new" button
      cy.get('a[href*="Product/Create"]').click();
  
      // Fill in product details
      cy.get('#Name').type('Test Product');
      cy.get('#Sku').type('TP-001');
      cy.get('#Price').clear().type('100');
  
      // Save the new product
      cy.get('.save-button').click();
  
      // Assert success message
      cy.get('.alert-success').should('contain.text', 'The new product has been added successfully.');
    });
  });
  