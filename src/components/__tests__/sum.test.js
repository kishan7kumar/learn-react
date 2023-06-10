import { add } from "../sum";

test("check sum of 2 positive numbers", () => {
  expect(add(3, 2)).toBe(5);
});
