import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Task from "./Task";
import { useEffect } from "react";
import { fetchTasks } from "./TaskThunks";

const TaskList = () => {

    const tasks = useSelector((state:RootState) => state.tasks.tasks);
    const tasksIsLoading = useSelector((state:RootState) => state.tasks.isLoading)
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch])

  return (
    <>
      {tasks? (
        Object.keys(tasks).map((key) => (
            <Task key={key} title={tasks[key].title} isDone={tasks[key].isDone}/>
        ))
      ) : (
        <div>No tasks</div>
      )}
    </>
  );
};

export default TaskList;
