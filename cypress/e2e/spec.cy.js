describe('Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('http://localhost:3000/login.html'); // Assumes your login page is at the root path

    // Fill in the login form
    cy.get('#username').type('galib71');
    cy.get('#password').type('123456');

    // Submit the form
    cy.get('form').submit();

    // Add assertions based on your application behavior
    // For example, check if the user is redirected to a dashboard page
    // cy.url().should('include', '/dashboard');
  });

  //   it('should display an error message with invalid credentials', () => {
  //     cy.visit('/');

  //     // Fill in the login form with invalid credentials
  //     cy.get('#username').type('invalid-username');
  //     cy.get('#password').type('invalid-password');

  //     cy.get('form').submit();

  //     // Add assertions based on your application behavior
  //     // For example, check if an error message is displayed
  //     // cy.get('.error-message').should('be.visible');
  //   });
});
