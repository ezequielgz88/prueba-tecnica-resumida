describe("Wikipedia Automation", () => {
  it("search on Google and verify information from Wikipedia", () => {
    // Step 1: Open the Google page and accept cookies
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb").click();

    // Step 2: Search for the word "automatización" on Google
    cy.get("#APjFqb").type("automatización").type("{enter}");

    // Step 3: Click on the Wikipedia link in the search results
    cy.get("span.VuuXrf").contains("Wikipedia").click();
    cy.url().should("include", "wikipedia");

    // Step 4: Verify that the page contains information about the first automatic process and take a screenshot of the Wikipedia page
    cy.get("body").contains("en 1785, convirtiéndose en el primer proceso industrial completamente automatizado.").screenshot("wikipedia-page", { capture: 'viewport', overwrite: true });
  });
});