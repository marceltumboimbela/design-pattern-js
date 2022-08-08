interface Lion {
  roar: () => void;
}

class AfricanLion implements Lion {
  roar() {
    return;
  }
}

class AsianLion implements Lion {
  roar() {
    return;
  }
}

interface Dog {
  bark: () => void;
}

export class WildDog implements Dog {
  bark() {
    return;
  }
}

export class WildDogAdapter implements Lion {
  dog: Dog;

  constructor(dog: Dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

export class Hunter {
  hunt(lion: Lion) {
    lion.roar();
  }
}
