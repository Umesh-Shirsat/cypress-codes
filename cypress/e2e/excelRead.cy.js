import excelToJson from "convert-excel-to-json";
import { readFileSync } from "fs";

describe("excel", () => {
  it("excel", async () => {
    const filepath = "./cypress/downloads/file.xls";
    const result = await cy.task("excelToJsonConverter", filepath);
    cy.log(result);
    const a = result["Freshers - Team 04(Umesh Shirsa"][0].D;
    expect("Planned tasks for the day").to.equal(a);
  });
});
