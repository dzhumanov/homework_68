import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Todo list</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
