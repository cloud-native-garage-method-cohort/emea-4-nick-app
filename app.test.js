describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

const request = require("supertest");
const app = require("./app.js");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.text).toBe("Hello World!");
      });
  });
});
