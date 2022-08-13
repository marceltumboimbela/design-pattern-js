export class JobPost {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

interface Observer {
  onJobPosted: (job: JobPost) => void;
}

export class JobSeeker implements Observer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  onJobPosted(job: JobPost) {
    console.log(`hi ${this.name}, new job posted: ${job.getTitle()}`);
  }
}

interface Observable {
  notify: (jobPost: JobPost) => void;
  attach: (observer: Observer) => void;
  addJob: (jobPost: JobPost) => void;
}

export class EmploymentAgency implements Observable {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  notify(jobPost: JobPost) {
    for (const observer of this.observers) {
      observer.onJobPosted(jobPost);
    }
  }

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  addJob(jobPost: JobPost) {
    this.notify(jobPost);
  }
}
