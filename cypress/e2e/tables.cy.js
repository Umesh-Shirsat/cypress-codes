describe("second", () => {
  it("testing checkout", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#product tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("#product tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
