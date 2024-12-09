import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const deleteAssignment = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${id}`);
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
export const fetchAllAssignments = async (id: string) => {
  const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${id}`);
  return data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${ASSIGNMENTS_API}/${courseId}/modules`,
    assignment
  );
  return response.data;
};
