describe("hideShow", () => {
  it("hideShow", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
  });

  it.only("radioButton", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
