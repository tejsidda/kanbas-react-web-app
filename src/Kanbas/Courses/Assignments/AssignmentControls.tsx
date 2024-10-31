import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';

export default function AssignmentControls() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();

  return (
    <div
      id="wd-assignments-controls"
      className="d-flex align-items-center justify-content-end mb-3"
    >
      {/* Search Input */}
      <div className="input-group w-50 me-3" style={{ flexShrink: 1 }}>
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          id="wd-search-assignment"
          className="form-control"
          placeholder="Search for Assignments"
        />
      </div>

      {/* Right-side buttons */}
      <div className="d-flex" style={{ flexShrink: 0 }}>
        {/* Group Button */}
        <button
          id="wd-add-assignment-group"
          className="btn btn-secondary text-dark d-flex align-items-center rounded-0"
          style={{ marginRight: "-1px", flexShrink: 0 }}
        >
          <FaPlus className="me-1" />
          Group
        </button>

        {/* Assignment Button */}
        <button
  id="wd-add-assignment"
  className="btn btn-danger text-white d-flex align-items-center rounded-0"
  style={{ paddingRight: '0', flexShrink: 0 }}
  onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
>
  <FaPlus className="me-1" />
  Assignment
</button>
      </div>
    </div>
  );
}
