import { StatusCourse } from '@src/defines/StatusCourse';
import { IChapter } from '@src/models/IChapter';

export declare interface ICourse {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  status: StatusCourse;
  advantages: string;
  requirements: string;
  levels: string;
  chapters?: IChapter[];
}
