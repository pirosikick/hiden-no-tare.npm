"use strict";
import assert from "power-assert";
import index from "../lib";

describe("index", function () {
  it("returns 'Hello hoge' when it was called with 'hoge'", function () {
    assert(index("hoge") === "Hello hoge");
  });
});
