import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/users`;

// export const fetchEnrollments = async (userId: string) => {
//   const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}/fetchenrollments`);
//   return data;
// };

export const enrollInCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.post(`${ENROLLMENTS_API}/${userId}/enrollments`, {
    courseId,
  });
  return data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.delete(
    `${ENROLLMENTS_API}/${userId}/enrollments/${courseId}`
  );
  return data;
};
