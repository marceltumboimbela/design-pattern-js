import { WildDog, WildDogAdapter, Hunter } from "./adapter";

test("hunter can hunt dog", () => {
  const hunter = new Hunter();
  const wildDog = new WildDog();
  const wildDogAdapter = new WildDogAdapter(wildDog);

  expect(() => hunter.hunt(wildDogAdapter)).not.toThrowError()
});
