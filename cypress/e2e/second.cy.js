describe("second", () => {
  it("testing checkout", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".products").each(($el, index, $list) => {
      let name = $el.find("h4.product-name").text();
      if (name.includes("Cashews")) {
        cy.wrap($el).contains("ADD TO CART").click();
      }
    });
    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
