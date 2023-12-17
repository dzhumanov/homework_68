import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { createNewTask } from "../TaskList/TaskThunks";
import { newTask } from "../TaskList/TaskSlice";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const TaskForm = () => {
  const dispatch = useDispatch();

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
    } catch (error) {
      console.error("Error!", error);
    }
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={onSubmit}>
      <Form.Group controlId="meal">
        <Form.Label>Task description:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Type something"
          onChange={onChange}
          required
          autoComplete="off"
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        {tasksIsLoading ? <ButtonSpinner /> : "Add task"}
      </Button>
    </Form>
  );
};

export default TaskForm;
