interface Door {
  getDescription: () => void;
}

class WoodenDoor implements Door {
  getDescription() {
    console.log("i am a wooden door");
  }
}

class IronDoor implements Door {
  getDescription() {
    console.log("i am a iron door");
  }
}

interface DoorFittingExpert {
  getDescription: () => void;
}

class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("i can only fit iron doors");
  }
}

class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("i can only fit wooden doors");
  }
}

interface DoorFactory {
  makeDoor: () => Door;
  makeFittingExpert: () => DoorFittingExpert;
}

export class WoodenDoorFactory implements DoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

export class IronDoorFactory implements DoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}
