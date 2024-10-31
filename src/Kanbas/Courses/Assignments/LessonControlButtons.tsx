import React from 'react';
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function LessonControlButtons({ deleteAssignment }: { deleteAssignment: () => void }) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={deleteAssignment} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
