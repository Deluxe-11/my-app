import mainAPI from '@src/config/network';

export const fetchCourse = (id: string) => {
  return mainAPI.get(`/api/v1/courses/${id}`);
};