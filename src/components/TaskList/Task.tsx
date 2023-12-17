import { Task } from "../../types";


const Task:React.FC<Task> = ({title, isDone}) => {
    return (
        <div className="card border border-primary w-50 mx-auto p-3 mt-3">
            <h3>Task: {title}</h3>
            <p>Done: {isDone}</p>
        </div>
    )
}

export default Task;