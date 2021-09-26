import mainAPI from '@src/config/network';
import { IComment } from '@src/models/IComment';

export const fetchCourse = (id: string) => {
  return mainAPI.get(`/api/v1/courses/${id}`);
};

export const refresh = () => {
  return mainAPI.get('/api/v1/refresh');
};

export const fetchMe = () => mainAPI.get('/api/v1/me');

export const fetchLesson = (id: string) => mainAPI.get(`/api/v1/lessons/${id}`);

export const fetchAddComment = (comment: IComment) =>
  mainAPI.post('/api/v1/comments', comment);
