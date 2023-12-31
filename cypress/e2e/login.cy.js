// import 'cypress-wait-until';

describe('Login Test', () => {
  it('log in with valid credentials', async () => {
    // Visit the link
    cy.visit('http://127.0.0.1:5500/public/login.html');

    // Input credentials
    cy.get('#username', { timeout: 5000 }).type('galib');  // Exapmle to override default timeout
    cy.get('#password').type('123456');

    // Click the login button
    cy.get('#login_button').click();

    // Assertion check for successfull login
    cy.url().should('include', '/homey.html');
  });


  it('log in with invalid credentials', () => {
    // Visit the link
    cy.visit('http://127.0.0.1:5500/public/login.html');

    // Input credentials
    cy.get('#username', { timeout: 5000 }).type('rifat');
    cy.get('#password').type('12345');

    // Click the login button
    cy.get('#login_button').click();

    // Assertion check for successfull login
    cy.url().should('include', '/homey.html');
  });
});
