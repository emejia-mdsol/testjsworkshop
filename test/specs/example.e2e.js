const { addFeature } = require("@wdio/allure-reporter").default;

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    browser.url(`https://react-redux.realworld.io/#/login`);

    const username = "testjssummit@gmail.com";
    const password = "password";

    $("input[type='email']").setValue(username);
    $("input[type='password']").setValue(password);
    $('button[type="submit"]').click();

    expect($(".article-preview")).toBeExisting();
    expect($(".article-preview")).toHaveTextContaining(
      "No articles are here... yet."
    );
    addFeature("Feature");
  });
});
