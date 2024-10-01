import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentControls from './AssignmentControls';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { FaClipboardCheck } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
export default function Assignments() {
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
        
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="fs-3" />
        <FaClipboardCheck color="green" size={20} className="me-3" />
        <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/123">
            A1 
          </Link>
          <LessonControlButtons/>
          <div className="wd-assignment-description">
            Multiple Modules |{' '}
            <strong>Not available until</strong> May 6 at 12:00am |{' '}
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
           </li>
        
        
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="fs-3" />
        <FaClipboardCheck color="green" size={20} className="me-3" />

        <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/124">
            A2 
          </Link>
          <LessonControlButtons/>
          <div className="wd-assignment-description">
            Multiple Modules |{' '}
            <strong>Not available until</strong> May 13 at 12:00am |{' '}
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div> </li>
        
        
       
        <li className="wd-lesson list-group-item p-3 ps-1"> 
        <BsGripVertical className="fs-3" />
        <FaClipboardCheck color="green" size={20} className="me-3" />

        <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/125">
            A3 
          </Link>
          <LessonControlButtons/>
          <div className="wd-assignment-description" >
            Multiple Modules |{' '}
            <strong>Not available until</strong> May 20 at 12:00am |{' '}
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
          
           </li>
      </ul>
      </li>
      </ul>
    
    </div>
  );
}