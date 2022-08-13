import { JobSeeker, JobPost, EmploymentAgency } from "./observer";

test("subscribers will notified by publisher", () => {
  const johnDoe = new JobSeeker("john doe");
  const janeDoe = new JobSeeker("jane doe");
  const employmentAgency = new EmploymentAgency();
  employmentAgency.attach(johnDoe);
  employmentAgency.attach(janeDoe);

  expect(() => {
    employmentAgency.addJob(new JobPost("software engineer"));
  }).not.toThrowError();
});
