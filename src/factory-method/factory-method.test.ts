import { DevelopmentManager, MarketingManager } from "./factory-method";

test("each hiring manager asks specific question", () => {
  const developmentManager = new DevelopmentManager();
  const marketingManager = new MarketingManager();

  expect(() => developmentManager.takeInterview()).not.toThrowError();
  expect(() => marketingManager.takeInterview()).not.toThrowError();
});
