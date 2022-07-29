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
