interface SortStrategy {
  sort: <T>(dataset: T[]) => T[];
}

export class BubbleSortStrategy implements SortStrategy {
  sort<T>(dataset: T[]) {
    console.log("using bubble sort");
    return dataset;
  }
}

export class QuickSortStrategy implements SortStrategy {
  sort<T>(dataset: T[]) {
    console.log("using quick sort");
    return dataset;
  }
}

export class Sorter {
  sorter: SortStrategy;

  constructor(sorter: SortStrategy) {
    this.sorter = sorter;
  }

  sort<T>(dataset: T[]) {
    return this.sorter.sort(dataset);
  }
}
