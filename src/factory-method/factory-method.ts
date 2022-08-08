interface Interviewer {
  askQuestions: () => void;
}

class Developer implements Interviewer {
  askQuestions() {
    console.log("ask about design patterns");
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions() {
    console.log("ask about community building");
  }
}

abstract class HiringManager {
  abstract makeInterviewer(): Interviewer;

  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

export class DevelopmentManager extends HiringManager {
  makeInterviewer(): Interviewer {
    return new Developer();
  }
}

export class MarketingManager extends HiringManager {
  makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}
