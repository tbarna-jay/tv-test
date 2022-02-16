/// <reference types="cypress" />

describe("Generic end-to-end test", () => {
  // eslint-disable-next-line no-undef

  it("should have correct content and navigate through the pages", () => {
    cy.viewport("iphone-8");

    cy.visit("http://localhost:3002/");
    cy.get('h1:contains("TV Bland")').should("be.visible");
    cy.get('h2:contains("Last Added Shows")').should("be.visible");

    cy.get('h4:contains("Good Morning Britain")').parent().click();

    cy.location("pathname").should("equal", "/show/8569");
    cy.get('h2:contains("Good Morning Britain")').should("be.visible");
  });
});
