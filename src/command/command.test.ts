import { Bulb, TurnOn, TurnOff, RemoteControl } from "./command";

test("can submit command from remotecontrol", () => {
  const bulb = new Bulb();
  const turnOn = new TurnOn(bulb);
  const turnOff = new TurnOff(bulb);
  const remote = new RemoteControl();

  expect(() => {
    remote.submit(turnOn);
    remote.submit(turnOff);
  }).not.toThrowError();
});
