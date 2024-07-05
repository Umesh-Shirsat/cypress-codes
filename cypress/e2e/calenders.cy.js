describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.contains("Top Deals").then((el) => {
      const url = el.prop("href");
      cy.visit(url);
      cy.get(".react-date-picker__calendar-button").click();
      cy.get(".react-date-picker__inputGroup > input:visible");
      cy.get("button[class='react-calendar__navigation__label']").click();
      cy.get("button[class='react-calendar__navigation__label']").click();
      cy.get(
        "button[class='react-calendar__tile react-calendar__decade-view__years__year']"
      ).each(($el, index, $list) => {
        const year = $el.text();
        if (year == "2027") {
          cy.wrap($el).click();
        }
      });
      cy.get(
        "button[class='react-calendar__tile react-calendar__year-view__months__month']"
      ).each(($el, index, $list) => {
        const year = $el.text();
        if (year == "June") {
          cy.wrap($el).click();
        }
      });
      cy.get(
        "button[class='react-calendar__tile react-calendar__month-view__days__day']"
      ).each(($el, index, $list) => {
        const year = $el.text();
        if (year == "15") {
          cy.wrap($el).click();
        }
      });
    });
  });
});
