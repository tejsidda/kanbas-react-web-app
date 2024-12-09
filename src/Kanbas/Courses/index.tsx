import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import * as client from "./client";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from "react";
import Users from "../Account/Users";

interface Course {
  _id: string;
  name?: string;
  // Add other course properties as needed
}

export default function Courses({ courses }: { courses: Course[] }) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  console.log("All courses:", courses);
  console.log("Current cid:", cid);

  const course = courses.find((course) => course._id === cid);
  console.log("Course found:", course);

  const fetchUsersForCourse = async () => {
    if (!cid || !course) return;
    console.log(`Fetching users for course ID: ${course._id}`);
    try {
      const foundUsers = await client.findUsersForCourse(course._id);
      console.log("Found users:", foundUsers);
      setUsers(foundUsers);
    } catch (e) {
      console.error("Error fetching users for course:", e);
    }
  };

  useEffect(() => {
    if (!course) {
      console.error(`Course with ID ${cid} not found`);
      // Optionally, you could redirect or display a message here
      return;
    }
    fetchUsersForCourse();
  }, [cid, course]);

  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {course ? course.name : "Not Found"} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Ensure KanbasNavigation or any navigation component does not render duplicate keys */}
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            {/* Pass users to the PeopleTable */}
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
