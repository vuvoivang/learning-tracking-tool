import { StateStatus } from '~/src/constant';

export interface Problem {
  id: string;
  name: string;
  description: string;
  price: number;
  increase: boolean;
  difficulty: string;
  solution: string;
  createDate: string;
  finishedDate: string;
  comments: [
    {
      id: string;
      user: string;
      content: string;
      createDate: string;
      lastEditDate: string;
      editable: boolean;
      edited: boolean;
    }
  ];
  status: number;
  normalizedName: string;
  type: number;
}
