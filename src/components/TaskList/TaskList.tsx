import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Task from "./Task";
import { useEffect } from "react";
import { fetchTasks, toggleTask } from "./TaskThunks";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const tasksIsLoading = useSelector(
    (state: RootState) => state.tasks.isLoading
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onToggle = async (taskId: string) => {
    await dispatch(toggleTask(taskId));
    await dispatch(fetchTasks());
  };

  return (
    <>
      {tasks ? (
        Object.keys(tasks).map((key) => (
          <Task key={key} title={tasks[key].title} isDone={tasks[key].isDone} onToggle={() => onToggle(key)} />
        ))
      ) : (
        <h1 className="text-center">No tasks</h1>
      )}
    </>
  );
};

export default TaskList;
