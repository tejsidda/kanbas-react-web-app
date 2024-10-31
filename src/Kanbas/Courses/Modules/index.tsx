import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import {
  addModule as addModuleAction,
  editModule as editModuleAction,
  updateModule as updateModuleAction,
  deleteModule as deleteModuleAction,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

import ModulesControls from "./ModuleControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModuleAction({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  <span>{module.name}</span>
                ) : (
                  <input
                    className="form-control w-50 d-inline-block me-2"
                    onChange={(e) =>
                      dispatch(
                        updateModuleAction({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModuleAction({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <div className="ms-auto">
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => {
                      dispatch(deleteModuleAction(moduleId));
                    }}
                    editModule={(moduleId) => dispatch(editModuleAction(moduleId))}
                  />
                </div>
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
