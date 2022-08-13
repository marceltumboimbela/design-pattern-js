export class Bulb {
  turnOn() {
    console.log("bulb has been lit");
  }

  turnOff() {
    console.log("darkness");
  }
}

interface Command {
  execute: () => void;
  undo: () => void;
  redo: () => void;
}

export class TurnOn implements Command {
  bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOn();
  }

  undo() {
    this.bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}

export class TurnOff implements Command {
  bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOff();
  }

  undo() {
    this.bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}

export class RemoteControl {
  submit(command: Command) {
    command.execute();
  }
}
