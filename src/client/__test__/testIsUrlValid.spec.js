import { isUrlValid } from "./../js/checkUrl";

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
  test("isUrlValid returns false for an invalid url", () => {
    expect(isUrlValid(".google.")).toBeFalsy();
  });

  test("isUrlValid returns true for a valid url", () => {
    expect(
      isUrlValid(
        "https://edition.cnn.com/style/article/kim-kardashian-looted-roman-statue/index.html"
      )
    ).toBeTruthy();
  });
  test("isUrlValid returns true for a valid url", () => {
    expect(
      isUrlValid(
        "https://www.nbcnews.com/politics/white-house/biden-seizes-disappointing-job-numbers-make-case-his-4-trillion-n1266675"
      )
    ).toBeTruthy();
  });
});
