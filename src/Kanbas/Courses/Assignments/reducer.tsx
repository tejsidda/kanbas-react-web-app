import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

// Define the structure of an assignment
interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil?: string;
  course: string;
}

// Define the initial state with the correct type
const initialState: { assignments: Assignment[] } = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description || "",
        points: assignment.points || 0,
        dueDate: assignment.dueDate || "",
        availableFrom: assignment.availableFrom || "",
        availableUntil: assignment.availableUntil || "",
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === updatedAssignment._id ? updatedAssignment : assignment
      );
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
