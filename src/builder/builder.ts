export class Burger {
  size: string;
  cheese: boolean;
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}

export class BurgerBuilder {
  size: string;
  cheese = false;
  pepperoni = false;
  lettuce = false;
  tomato = false;

  constructor(size: string) {
    this.size = size;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }
}
