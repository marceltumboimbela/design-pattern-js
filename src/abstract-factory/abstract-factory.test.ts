import { WoodenDoorFactory, IronDoorFactory } from "./abstract-factory";

test("welder should create iron door, carpenter should create wooden door", () => {
  const wdf = new WoodenDoorFactory();
  expect(() => {
    wdf.makeDoor().getDescription();
    wdf.makeFittingExpert().getDescription();
  }).not.toThrowError();

  const idf = new IronDoorFactory();
  expect(() => {
    idf.makeDoor().getDescription();
    idf.makeFittingExpert().getDescription();
  }).not.toThrowError();
});
