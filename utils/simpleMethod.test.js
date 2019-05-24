import { simpleMethod, fancyMethod } from "./simpleMethod";

test("simple method", () => {
  expect(simpleMethod("hi")).toEqual("hi");
});

test("fancy method", () => {
  return fancyMethod("hi").then(data => {
    expect(data).toEqual("hi");
  });
});
