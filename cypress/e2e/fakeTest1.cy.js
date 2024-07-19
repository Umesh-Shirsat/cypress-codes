describe("My First Test Suite", function () {
  it.skip("My FirstTest case", function () {
    cy.request("POST", "http://216.10.245.166", {
      name: "Learn Appium Automation with Java",
      isbn: "bcd",
      aisle: "227",
      author: "John foe",
    }).then(() => {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});
