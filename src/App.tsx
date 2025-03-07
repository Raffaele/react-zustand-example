import { CreateTaskForm } from "./components/CreateTaskForm/CreateTaskForm";
import { useEffect } from "react";
import { useTodoStore } from "./stores/todoStore";

import "./App.css";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const init = useTodoStore((status) => status.init);
  const isReady = useTodoStore((status) => status.isReady);
  useEffect(() => {
    init();
  }, [init]);

  if (!isReady) return <div>Loading...</div>;
  return (
    <main className="main-page">
      <h1>TODO LIST</h1>
      <CreateTaskForm />
      <TodoList />
    </main>
  );
}

export default App;
