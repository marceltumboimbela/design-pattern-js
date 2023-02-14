interface Coffee {
  getCost(): number;
  getDescription(): string;
}

export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return "Simple Coffee";
  }
}

export class MilkCoffee implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, milk`;
  }
}

export class WhipCoffee implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 5;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, whip`;
  }
}

export class VanillaCoffee implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 3;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}
