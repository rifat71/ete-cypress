// import 'cypress-wait-until';

describe('Login Test', () => {
  it('log in with valid credentials', () => {
    // Visit the link
    cy.visit('/public/login.html');

    // Input credentials
    cy.get('#username', { timeout: 8000 }).invoke('focus').clear().type('galib');  // Exapmle to override default timeout
    cy.get('#password').invoke('focus').clear().type('123456');

    // Click the login button
    cy.get('#login_button').click();

    // Assertion check for successfull login
    cy.url().should('include', '/home.html');
  });


  it('log in with invalid credentials', () => {
    // Visit the link
    cy.visit('/public/login.html');

    // Input credentials
    cy.get('#username').invoke('focus').clear().type('rifat');
    cy.get('#password').invoke('focus').clear().type('12345');

    // Click the login button
    cy.get('#login_button').click();

    // Assertion check for successfull login
    cy.url().should('include', '/home.html');
  });
});
