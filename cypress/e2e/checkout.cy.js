describe('Checkout Process', () => {
    before(() => {
      // Log in before starting the test
      cy.visit('http://cypresstesting7-001-site1.jtempurl.com/login', {
        auth: {
          username: '11190287',
          password: '60-dayfreetrial',
        },
      })
      cy.get('#Email').type('johndoe@example.com');
      cy.get('#Password').type('password123');
      cy.get('input[value="Log in"]').click();
    });
  
    it('Should complete checkout process', () => {
      // Add a product to the cart
      cy.get('.product-box-add-to-cart-button').first().click();
      cy.get('#add-to-cart-button-4').click();
  
      // Proceed to the cart page
      cy.get('.cart-label').click();
  
      // Click on the checkout button
      cy.get('#checkout').click();
  
      // Fill in the shipping details
      cy.get('#BillingNewAddress_CountryId').select('United States');
      cy.get('#BillingNewAddress_City').type('New York');
      cy.get('#BillingNewAddress_Address1').type('123 Main Street');
      cy.get('#BillingNewAddress_ZipPostalCode').type('10001');
      cy.get('#BillingNewAddress_PhoneNumber').type('5555555555');
      cy.get('input.button-1.new-address-next-step-button').click();
  
      // Choose shipping method and continue
      cy.get('#shippingoption_0').check();
      cy.get('input.button-1.shipping-method-next-step-button').click();
  
      // Choose payment method and continue
      cy.get('#paymentmethod_1').check();
      cy.get('input.button-1.payment-method-next-step-button').click();
  
      // Confirm the order
      cy.get('input.button-1.confirm-order-next-step-button').click();
  
      // Assert order confirmation
      cy.get('.section.order-completed').should('contain.text', 'Your order has been successfully processed!');
    });
  });
  