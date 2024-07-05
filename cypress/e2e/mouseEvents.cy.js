describe("alerts", () => {
  it("alerts", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
  });
});
