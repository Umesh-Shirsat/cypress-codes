/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("frames", () => {
  it("frames", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    // cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    // cy.iframe().find("h1[class*='pricing-title']");
    // cy.iframe().find(".pricing-title");
    // cy.iframe().find("div.pricing-header>>h1.pricing-title");
    // cy.iframe("#courses-iframe").contains("BRONZE");
  });
});
