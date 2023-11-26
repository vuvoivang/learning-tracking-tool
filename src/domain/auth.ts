export interface ISessionData {
  name: string;
  problemsSolved: number;
  currentBalance: number;
  rank: string;
  nextRank: string;
  nextRankProblems: string;
}

export interface ILoginResponseData {
  csToken: string;
  mathToken: string;
  isAdmin: boolean;
}
