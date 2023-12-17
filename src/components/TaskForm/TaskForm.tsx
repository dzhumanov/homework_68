import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { createNewTask, fetchTasks } from "../TaskList/TaskThunks";
import { newTask } from "../TaskList/TaskSlice";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const TaskForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const tasksIsLoading = useSelector(
    (state: RootState) => state.tasks.isLoading
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(newTask(value));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(createNewTask());
      await dispatch(fetchTasks());

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error!", error);
    }
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={onSubmit}>
      <Form.Group controlId="task">
        <Form.Label>Task title:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Type something"
          onChange={onChange}
          required
          autoComplete="off"
          ref={inputRef}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        {tasksIsLoading ? <ButtonSpinner /> : "Add task"}
      </Button>
    </Form>
  );
};

export default TaskForm;
