export type Publication = {
  title: string,
  locations: string[],
  urls: string[],
  primary_date: Date,
  dates: Date[],
};

const cypress_seeds : Publication = {
  title: "How to debug slow and failing cypress seeds",
  locations: ["Alto Blog", "HackerNoon"],
  urls: [
    "https://alto.com/blog/post/how-to-debug-failing-cypress-seeds", 
    "https://hackernoon.com/dubugging-cypress-seeds-3-ways-to-speed-up-your-seed-data-6x2h31ye",
  ],
  primary_date: new Date(2021, 0, 19),
  dates: [
    new Date(2021, 0, 19),
    new Date(2021, 0, 26),
  ], 
};

const publications = [cypress_seeds];

export default publications;