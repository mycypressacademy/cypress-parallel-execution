describe('Add Product to Cart', () => {
    it('Should add a product to the cart', () => {
      // Visit homepage
      cy.visit('http://cypresstesting7-001-site1.jtempurl.com/', {
        auth: {
          username: '11190287',
          password: '60-dayfreetrial',
        },
      })
  
      // Click on the first product
      cy.get('.product-box-add-to-cart-button').first().click();
  
      // Add the product to the cart
      cy.get('#add-to-cart-button-4').click();
  
      // Assert success message
      cy.get('.bar-notification').should('contain.text', 'The product has been added to your shopping cart');
    });
  });
  