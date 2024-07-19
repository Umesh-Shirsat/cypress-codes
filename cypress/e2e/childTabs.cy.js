describe("child", () => {
  it("tabs", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();

    // cy.origin("https://www.qaclickacademy.com/", () => {
    // cy.get("#navbarSupportedContent a[href*='about']").click();
    // });
    // });

    // it.only("child windows", () => {
    //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //   cy.get("#opentab").then((el) => {
    //     const url = el.prop("href");
    //     cy.visit(url);
    //     cy.origin(url, () => {
    //       cy.contains("About us").click();
    //     });
    //   });
  });
});
