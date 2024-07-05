// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectProduct", (name) => {
  // cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
  cy.get(".card-title > a").each(($el, index, $list) => {
    let prod = $el.text();
    if (prod == name) {
      cy.get(".btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("LoginAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/client", {
    userEmail: "russian@gmail.com",
    userPassword: "Ilike@russian1",
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env("token", response.body.token);
  });
});
