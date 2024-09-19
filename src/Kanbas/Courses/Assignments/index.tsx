import React from 'react';
import { Link } from 'react-router-dom';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Search and Add Assignment Buttons */}
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      
      {/* Assignments Title */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list">
        {/* Assignment 1 */}
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </Link>
          <div className="wd-assignment-description">
            Multiple Modules |{' '}
            <strong>Not available until</strong> May 6 at 12:00am |{' '}
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
        </li>

        {/* Assignment 2 */}
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/124">
            A2 - CSS + BOOTSTRAP
          </Link>
          <div className="wd-assignment-description">
            Multiple Modules |{' '}
            <strong>Not available until</strong> May 13 at 12:00am |{' '}
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div>
        </li>

        {/* Assignment 3 */}
        <li className="wd-assignment-list-item">
          <Link className="wd-assignment-link" to="/Kanbas/Courses/1234/Assignments/125">
            A3 - JAVASCRIPT + REACT
          </Link>
          <div className="wd-assignment-description">
            Multiple Modules |{' '}
            <strong>Not available until</strong> May 20 at 12:00am |{' '}
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
        </li>

        {/* Add more assignments as needed */}
      </ul>
    </div>
  );
}
