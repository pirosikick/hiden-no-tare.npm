import test from "ava";
import index from "../lib";

test("index('hoge')", t => {
  t.ok(index("hoge") === "Hello hoge");
});

