import React from "react";
import { Task } from "../../types";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface TaskProps extends Task {
  onToggle: () => void;
  onDelete: () => void;
}

const TaskComponent: React.FC<TaskProps> = ({
  title,
  isDone,
  onToggle,
  onDelete,
}) => {
  const tasksIsLoading = useSelector(
    (state: RootState) => state.tasks.isLoading
  );

  return (
    <div className="card border border-primary w-50 mx-auto p-3 mt-3">
      <h3>Task: {title}</h3>
      <div className="btn-wrapper d-flex justify-content-between align-items-center">
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
        <Button variant="danger" onClick={onDelete} disabled={tasksIsLoading}>
          {tasksIsLoading && <ButtonSpinner />}
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskComponent;
