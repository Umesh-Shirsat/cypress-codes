class ProductPage {
  getProductList() {
    return cy.get(".card-title > a");
  }

  getCheckout() {
    return cy.contains("Checkout");
  }

  getCheckoutin() {
    return cy.contains("Checkout");
  }

  getCountry() {
    return cy.get(".validate");
  }

  getIndia() {
    return cy.contains("India");
  }

  getCheckbox() {
    return cy.get("#checkbox2");
  }

  getPurchase() {
    return cy.contains("Purchase");
  }

  getSuccess() {
    return cy.get(".alert");
  }

  getPrices() {
    return cy.get("tr td:nth-child(4) strong");
  }

  getTotPrice() {
    return cy.get("h3 strong");
  }
}

export default ProductPage;
