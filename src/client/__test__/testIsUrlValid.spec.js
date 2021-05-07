import { isUrlValid } from "./../js/isUrlValid";

describe("Testing isUrlValid", () => {
  test("Testing isUrlValid()", () => {
    expect(isUrlValid).toBeDefined();
  });
  test("isUrlValid returns false for an invalid url", () => {
    expect(isUrlValid("google")).toBeFalsy();
  });
  test("isUrlValid returns false for an invalid url", () => {
    expect(isUrlValid("google.")).toBeFalsy();
  });

  test("isUrlValid returns true for a valid url", () => {
    expect(
      isUrlValid(
        "https://edition.cnn.com/style/article/kim-kardashian-looted-roman-statue/index.html"
      )
    ).toBeTruthy();
  });
});
