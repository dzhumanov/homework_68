import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Task from "./Task";

const TaskList = () => {

    const tasks = useSelector((state:RootState) => state.tasks.tasks);
    const dispatch = useDispatch();


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
