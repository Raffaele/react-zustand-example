import { useState, useRef, useEffect, type FormEvent } from "react";

import "./CreateTaskFrom.css";
import { useTodoStore } from "../../stores/todoStore";

export const CreateTaskForm = () => {
  const addTask = useTodoStore(({ addTask }) => addTask);
  const isLoading = useTodoStore(({ isLoading }) => isLoading);
  const inputRef = useRef<HTMLInputElement>(null);
  const [label, setLabel] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTask(label);
    setLabel("");
    inputRef.current?.focus();
  };
  useEffect(() => inputRef.current?.focus(), [inputRef]);
  return (
    <form onSubmit={handleSubmit} className="create-todo-form">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        ref={inputRef}
        disabled={isLoading}
      />
      <button type="submit" disabled={!label || isLoading}>
        Add
      </button>
    </form>
  );
};
