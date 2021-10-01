import { createContext } from 'react';
import { ILesson } from '@src/models/ILesson';

interface data {
  lesson: ILesson | undefined;
}

const LessonContext = createContext<data | null>(null);

export const LessonProvider = LessonContext.Provider;
export default LessonContext;
