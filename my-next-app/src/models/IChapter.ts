import { ILesson } from '@src/models/ILesson';

export declare interface IChapter {
  id: number;
  name: string;
  order: number;
  course_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  lessons?: ILesson[];
}
