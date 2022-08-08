import { Sorter, QuickSortStrategy, BubbleSortStrategy } from "./strategy";

test("can use both strategy", () => {
  const dataset = [1, 5, 4, 3, 2, 8];

  let sorter = new Sorter(new BubbleSortStrategy());
  expect(() => {
    sorter.sort(dataset);
  }).not.toThrowError();

  sorter = new Sorter(new QuickSortStrategy());
  expect(() => {
    sorter.sort(dataset);
  }).not.toThrowError();
});
