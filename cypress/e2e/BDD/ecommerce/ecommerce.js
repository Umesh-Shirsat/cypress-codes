import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";
const homepage = new HomePage();
const productpage = new ProductPage();

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to Cart", () => {
  homepage.getShopTab().click();
});

And("Validate the total prices", () => {
  productpage.getTotPrice().then((el) => {
    const actualPriceStr = el.text().slice(3);
    const actualPrice = Number(actualPriceStr);
    expect(actualPrice == totPrice).to.be.true;
  });
});

Then("select the country submit and verify Thankyou", () => {
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
