import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleEnrollment } from "./Account/enrollmentReducer";

interface User {
  _id: string;
  role: string;
}

interface Course {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments: Enrollment[] = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

 
  let displayedCourses = courses;

  if (currentUser.role === "STUDENT" && !showAllCourses) {
    displayedCourses = courses.filter((course) =>
      enrollments.some(
        (enrollment) =>
          String(enrollment.user) === String(currentUser._id) &&
          String(enrollment.course) === String(course._id)
      )
    );
  }
  

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}

     
      {currentUser.role !== "STUDENT" && (
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
      )}
      <br />

     
      {currentUser.role !== "STUDENT" && (
        <>
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course: Course) => {
            const isEnrolled = enrollments.some(
              (enrollment: Enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            );
            return (
              <div
                key={course._id}
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={course.image}
                      className="card-img-top"
                      alt={`${course.name} Course`}
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>

                     
                      {currentUser.role === "STUDENT" && (
                        <button
                          className={`btn ${
                            isEnrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              toggleEnrollment({
                                courseId: course._id,
                                userId: currentUser._id,
                              })
                            );
                          }}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                     
                      {currentUser.role !== "STUDENT" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
