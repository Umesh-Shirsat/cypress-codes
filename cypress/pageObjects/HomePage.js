class HomePage {
  getEditBox() {
    return cy.get(".form-control").eq(0);
  }

  twoWayBinding() {
    return cy.get("input[name*='name']");
  }

  getGender() {
    return cy.get(".form-control").eq(3);
  }

  getEntrepreneur() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.contains("Shop");
  }
}

export default HomePage;
