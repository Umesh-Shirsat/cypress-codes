/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("framework", () => {
  // beforeEach(() => {
  //   cy.fixture("example").then(function (data) {
  //     cy.log(data);
  //     let info;
  //     this.info = cy.wrap(data);
  //   });
  // });

  // it.skip("angular", () => {
  //   cy.visit("https://rahulshettyacademy.com/angularpractice/");
  //   cy.get(".form-control").eq(0).type(this.data.name);
  //   cy.get(".form-control").eq(3).select(this.data.gender);
  // });

  it.skip("angular 1", () => {
    const homepage = new HomePage();
    const productpage = new ProductPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homepage.getEditBox().type("Bob");
    homepage.twoWayBinding().should("have.value", "Bob");
    homepage.getEditBox().eq(0).should("have.attr", "minlength", "2");
    homepage.getEntrepreneur().should("be.disabled");
    homepage.getShopTab().click();

    cy.selectProduct("Blackberry");
    cy.selectProduct("iphone X");

    productpage.getCheckout().click();
    productpage.getCheckoutin().click();
    productpage.getCountry().type("india");
    cy.wait(2000);
    productpage.getIndia().click();
    productpage.getCheckbox().click({ force: true });
    productpage.getPurchase().click();
    productpage.getSuccess().then((el) => {
      const actualText = el.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });

  it.skip("angular 2", () => {
    cy.selectProduct("Blackberry");
  });

  it.only("angular 3", () => {
    const homepage = new HomePage();
    const productpage = new ProductPage();

    cy.visit(Cypress.env("url") + "/angularpractice/");

    homepage.getEditBox().type("Bob");
    homepage.twoWayBinding().should("have.value", "Bob");
    homepage.getEditBox().eq(0).should("have.attr", "minlength", "2");
    homepage.getEntrepreneur().should("be.disabled");
    homepage.getShopTab().click();

    cy.selectProduct("Blackberry");
    cy.selectProduct("iphone X");

    productpage.getCheckout().click();
    let totPrice = 0;
    productpage.getPrices().each(($el, index, $list) => {
      const strPrice = $el.text().slice(3);
      const price = Number(strPrice);
      totPrice = totPrice + price;
    });

    productpage.getTotPrice().then((el) => {
      const actualPriceStr = el.text().slice(3);
      const actualPrice = Number(actualPriceStr);
      expect(actualPrice == totPrice).to.be.true;
    });
  });
});
