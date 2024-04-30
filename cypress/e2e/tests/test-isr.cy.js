// reference: https://glebbahmutov.com/blog/ssr-e2e/#removing-application-bundle

/// we test that server cached the page from his side  with the initial data
it("skips client-side bundle, confirming data from ISR cache", () => {
  cy.request("/products")
    .its("body")
    .then((html) => {
      const staticHtml = html.replace('<script src="/bundle.js"></script>', "");
      cy.state("document").write(staticHtml);
    });
  cy.findByRole("heading", { name: /Product Page 0/i }).should("exist");
});

////Test the page is update on demand
it("skips client-side bundle, confirming data from ISR cache", () => {
  cy.task("db:reset").visit("/products");
  //check the page doesn't contain the new data
  cy.findByRole("heading", { name: /new post/i }).should("not.exist");

  //// add the new data and revalidate the page
  cy.request("POST", `https://jsonplaceholder.typicode.com/posts`, {
    userId: 1111,
    id: 1111,
    title: "new post",
    body: "",
  });

  ///check the page is revalidated with the new value
  cy.reload();
  // cy.contains("new post");

  ////It is important to create an api to reset the cache and call it here
});

it("test cached after period of time ", () => {
  cy.clock(); ///Initialize the clock
  cy.task("db:reset").visit("/discounts");
  cy.contains("Number of items 100").should("exist"); /// the data before updating the cache
  cy.task("addOrder");
  cy.contains("Number of items 101").should("not.exist"); /// the page should not be updated yet
  ///Advance the clock and test again
  cy.tick(1000 * 60 * 60); /// advance by one hour
  // cy.contains("Number of items 101").should("exist"); ///the data is updated
});
