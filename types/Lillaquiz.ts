type QuestionType = {
  title: string;
  answer: string;
  options: string[];
};

export type GameType = {
  gameId?: string;
  questions?: QuestionType[];
  answers?: { [x: string]: string[] };
};

export type GameTotal = {
  total: number;
  wins: number;
  score: number;
};
