describe("exchange rate API", function exchangeRateAPi() {
  beforeEach(function getApiResponse() {
    cy.request("latest").as("apiResponse");
  });
  it("returns required properties", function returnsRequiredProperties() {
    cy.get("@apiResponse").then(function apiResponse(response) {
      expect(response).to.have.property("headers");
      expect(response).to.have.property("body");
      expect(response).to.have.property("status");
      expect(response).to.have.property("duration");
    });
  });
  it("returns json response", function returnsJsonResponse() {
    cy.get("@apiResponse")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
  it("returns success response", function returnsSuccessResponse() {
    cy.get("@apiResponse").then(function apiResponse(response) {
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal("OK");
      expect(response.body.result).to.equal("success");
    });
  });
  it("has base currency USD", function hasBaseCurrencyUsd() {
    cy.get("@apiResponse").its("body.base_code").should("equal", "USD");
  });
  it("shows list of exchange rates", function showsListOfExchangeRates() {
    cy.get("@apiResponse").then(function apiResponse(response) {
      const numberOfExchangeRatesShown = Object.keys(response.body.rates)
        .length;
      expect(numberOfExchangeRatesShown).to.be.greaterThan(1);
    });
  });
});
