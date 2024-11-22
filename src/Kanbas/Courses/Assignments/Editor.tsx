import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const isNew = aid === 'new';

  
  const handleAddAssignment = async () => {
    const newAssignment = { ...formData }
    const status = await assignmentClient.createAssignment(cid as string, newAssignment);
    dispatch(addAssignment(newAssignment)); // Dispatch Redux action
  };

  const handleUpdateAssignment = async () => {
    const updatedAssignment = { ...formData } 
    const status = await assignmentClient.updateAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment)); // Dispatch Redux action
  };

  const [assignment, setAssignment] = useState<any>(null);
  const [formData, setFormData] = useState({
    _id: '',
    title: '',
    description: '',
    points: '',
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    course: cid,
  });

  
  useEffect(() => {
    if (!isNew) {
      const foundAssignment = assignments.find((a: any) => a._id === aid);
      if (foundAssignment) {
        setAssignment(foundAssignment);
        setFormData({
          ...foundAssignment,
          points: foundAssignment.points || '',
          dueDate: foundAssignment.dueDate || '',
          availableFrom: foundAssignment.availableFrom || '',
          availableUntil: foundAssignment.availableUntil || '',
        });
      } else {
       
        setAssignment(null);
      }
    } else {
      
      setFormData({
        _id: '',
        title: '',
        description: '',
        points: '',
        dueDate: '',
        availableFrom: '',
        availableUntil: '',
        course: cid,
      });
    }
  }, [aid, assignments, cid, isNew]);

 
  if (!isNew && !assignment) {
    return <div>Assignment not found</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id.replace('wd-', '')]: e.target.value,
    });
  };

  const handleSave = () => {
    if (isNew) {
      handleAddAssignment()
    } else {
      console.log("Update called")
      handleUpdateAssignment()
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container my-4 p-4">
      <div className="d-flex justify-content-end">
        <div className="w-75">
          <h2 className="mb-4">
            {isNew ? 'New Assignment' : `Assignment - ${formData.title}`}
          </h2>

          {/* Assignment Name */}
          <div className="mb-3 border-bottom pb-3">
            <label htmlFor="wd-title" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Description */}
          <div className="mb-3 border-bottom pb-3">
            <label htmlFor="wd-description" className="form-label">
              Description
            </label>
            <textarea
              id="wd-description"
              rows={5}
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Points */}
          <div className="mb-3 border-bottom pb-3">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              value={formData.points}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Due Date */}
          <div className="mb-3 border-bottom pb-3">
            <label htmlFor="wd-dueDate" className="form-label">
              Due Date
            </label>
            <input
              id="wd-dueDate"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Available From */}
          <div className="mb-3 border-bottom pb-3">
            <label htmlFor="wd-availableFrom" className="form-label">
              Available From
            </label>
            <input
              id="wd-availableFrom"
              type="date"
              value={formData.availableFrom}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Available Until */}
          <div className="mb-3">
            <label htmlFor="wd-availableUntil" className="form-label">
              Available Until
            </label>
            <input
              id="wd-availableUntil"
              type="date"
              value={formData.availableUntil}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Save and Cancel Buttons */}
          <div className="d-flex justify-content-end">
            <button onClick={handleCancel} className="btn btn-secondary me-1">
              Cancel
            </button>
            <button onClick={handleSave} className="btn btn-danger text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
