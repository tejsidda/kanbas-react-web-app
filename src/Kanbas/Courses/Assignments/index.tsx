import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentControls from './AssignmentControls';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { FaClipboardCheck } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment } from './reducer';

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const dispatch = useDispatch();

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br /><br />
      <ul id="wd-assignments-title" className="list-group rounded-0">
        <li className="wd-assignment-list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="ms-auto">
              <ModuleControlButtons />
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment: any) => (
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center" key={assignment._id}>
                <BsGripVertical className="fs-3 me-2" />
                <FaClipboardCheck color="green" size={20} className="me-3" />
                <Link className="wd-assignment-link flex-grow-1" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <LessonControlButtons
                  deleteAssignment={() => {
                    if (window.confirm('Are you sure you want to delete this assignment?')) {
                      dispatch(deleteAssignment(assignment._id));
                    }
                  }}
                />
                <div className="wd-assignment-description">
                  Multiple Modules |{' '}
                  <strong>Not available until</strong> {assignment.availableFrom} |{' '}
                  <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
