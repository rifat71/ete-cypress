// import 'cypress-wait-until';

describe('Login Test', () => {
  it('log in with valid credentials', async () => {
    // Visit the link
    cy.visit('http://127.0.0.1:5500/public/login.html');

    // Input credentials
    cy.get('#username', { timeout: 5000 }).type('galib71');  // Exapmle to override default timeout
    cy.get('#password').type('123456');

    // Submit the form
    cy.get('form').submit();

    // Assertion check for successfull login
    cy.url().should('include', '/homey.html');
  });

  //   it('log in with invalid credentials', () => {
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
