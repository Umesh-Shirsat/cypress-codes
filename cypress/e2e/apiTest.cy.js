describe("apiTest", () => {
  it("loginBypass", () => {
    cy.visit("https://rahulshettyacademy.com/");
    cy.contains("Login").click();
  });
});
