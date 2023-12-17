import React from "react";
import { Task } from "../../types";

interface TaskProps extends Task {
  onToggle: () => void;
}

const TaskComponent: React.FC<TaskProps> = ({ title, isDone, onToggle }) => {
  return (
    <div className="card border border-primary w-50 mx-auto p-3 mt-3">
      <h3>Task: {title}</h3>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={`checkbox-${title}`}
          checked={isDone}
          onChange={onToggle}
        />
        <label className="form-check-label" htmlFor={`checkbox-${title}`}>
          {isDone ? "Done" : "Not done"}
        </label>
      </div>
    </div>
  );
};

export default TaskComponent;
