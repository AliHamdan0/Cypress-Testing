it("fill out the form and clicking on the submit button", () => {
  cy.task("db:reset").visit("/sign-in");
  cy.findByPlaceholderText("enter your email").clear().type(Cypress.env("CYPRESS_USER_NAME"));
  cy.findByPlaceholderText("Your Password").clear().type(Cypress.env("CYPRESS_PASSWORD"));
});

it("test iterating on all protected routes", () => {
  cy.task("db:reset");
  cy.fixture("prodtectRoutes.json", (urls) => {
    urls.forEach((url) => {
      cy.visit(url);
    });
  });
});
