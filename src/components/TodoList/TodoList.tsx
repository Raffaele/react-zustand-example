import { useTodoStore } from "../../stores/todoStore";

import "./TodoList.css";

export const TodoList = () => {
  const tasks = useTodoStore((status) => status.tasks);
  const updateTaskDone = useTodoStore((status) => status.updateTaskDone);
  const deleteTask = useTodoStore((status) => status.deleteTask);

  (window as any).check = () => {
    console.log(tasks);
  };

  return (
    <div className="todo-list">
      {tasks.map((singleTask) => (
        <div key={singleTask.id} className="todo-line">
          <div>
            <label>
              <input
                type="checkbox"
                checked={singleTask.done}
                onChange={(e) => updateTaskDone(singleTask, e.target.checked)}
                className="done-line"
              />
              <div></div>
            </label>
            {singleTask.label}
          </div>
          <button type="button" onClick={() => deleteTask(singleTask.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
