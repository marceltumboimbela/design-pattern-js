import { Burger, BurgerBuilder } from "./builder";

test("can create different burger as you want", () => {
  const completeBurger = new Burger(
    new BurgerBuilder("medium")
      .addCheese()
      .addLettuce()
      .addPepperoni()
      .addTomato()
  );
  const burgerWithoutTomato = new Burger(
    new BurgerBuilder("medium").addCheese().addLettuce().addPepperoni()
  );

  expect(completeBurger.tomato).toBe(true);
  expect(burgerWithoutTomato.tomato).toBe(false);
});
