import { useContext } from 'react';
import LessonContext from '@src/features/lesson/context';

export default function useLessonContext() {
  return useContext(LessonContext);
}
