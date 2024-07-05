describe("Dropdowns", () => {
  it("staticDropdowns", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("select").select("option1").should("have.value", "option1");
  });

  it.only("dynamicDropdowns", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#autocomplete").type("ind");

    cy.get("li.ui-menu-item").each(($el, index, $list) => {
      let suggestion = $el.find("#ui-id-3").text();

      if (suggestion == "India") {
        cy.wrap($el).click();
      }
    });
  });
});
