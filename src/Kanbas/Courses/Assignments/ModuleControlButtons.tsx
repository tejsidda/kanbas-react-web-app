import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
       <span className="border sqaure px-2 py-1 me-2"
       style={{ borderColor: 'black' }}>
        40% of Total
      </span>
      <FaPlus/>
      <IoEllipsisVertical className="fs-4" />
      
    </div>
  );
}