import {
  SimpleCoffee,
  MilkCoffee,
  WhipCoffee,
  VanillaCoffee,
} from "./decorator";

test("each hiring manager asks specific question", () => {
  const simpleCoffee = new SimpleCoffee();
  const milkCoffee = new MilkCoffee(simpleCoffee);
  const whipCoffee = new WhipCoffee(simpleCoffee);
  const vanillaCoffee = new VanillaCoffee(simpleCoffee);

  expect(milkCoffee.getCost()).toEqual(12);
  expect(milkCoffee.getDescription()).toEqual("Simple Coffee, milk");
  expect(whipCoffee.getCost()).toEqual(15);
  expect(whipCoffee.getDescription()).toEqual("Simple Coffee, whip");
  expect(vanillaCoffee.getCost()).toEqual(13);
  expect(vanillaCoffee.getDescription()).toEqual("Simple Coffee, vanilla");
});
