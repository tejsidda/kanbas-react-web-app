import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentControls from './AssignmentControls';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { FaClipboardCheck } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const filteredAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentControls/>
      <br /><br />
      <ul id="wd-assignments-title" className="list-group rounded-0">
        <li className="wd-assignment-list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 
            <ModuleControlButtons/>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment) => (
              <li className="wd-lesson list-group-item p-3 ps-1" key={assignment._id}>
                <BsGripVertical className="fs-3" />
                <FaClipboardCheck color="green" size={20} className="me-3" />
                <Link className="wd-assignment-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <LessonControlButtons/>
                <div className="wd-assignment-description">
                  Multiple Modules |{' '}
                  <strong>Not available until</strong> May 6 at 12:00am |{' '}
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
