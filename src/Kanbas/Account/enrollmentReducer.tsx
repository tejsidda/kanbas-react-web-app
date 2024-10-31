import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database"; 

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState: Enrollment[] = db.enrollments || []; 

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollment: (state, action: PayloadAction<{ courseId: string; userId: string }>) => {
      const { courseId, userId } = action.payload;
      const existingEnrollmentIndex = state.findIndex(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
      );

      if (existingEnrollmentIndex !== -1) {
        // Unenroll
        state.splice(existingEnrollmentIndex, 1);
      } else {
        // Enroll
        state.push({
          _id: `${userId}-${courseId}`,
          user: userId,
          course: courseId,
        });
      }
    },
  },
});

export const { toggleEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
