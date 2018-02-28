"use strict";

const index = require("./index");

test("returns 'Hello, 秘伝のタレ'", () => {
  expect(index()).toBe("Hello, 秘伝のタレ");
});
