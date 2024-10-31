// src/Kanbas/Account/ProtectedRoute.tsx
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface User {
  _id: string;
  role: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments: Enrollment[] = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams<{ cid: string }>();

  const isEnrolledInCourse = enrollments.some(
    (enrollment) =>
      enrollment.user === currentUser?._id && enrollment.course === cid
  );

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  if (currentUser.role === "STUDENT" && cid && !isEnrolledInCourse) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
