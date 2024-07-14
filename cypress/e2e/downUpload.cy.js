describe("downUpload", () => {
  it("first", () => {
    cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
    // cy.get("#downloadButton").click();
    cy.get("#fileinput").selectFile("./cypress/downloads/download.xlsx");
  });
});
