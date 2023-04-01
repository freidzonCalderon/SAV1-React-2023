import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { Todo } from "./Todo";
import "../../styles/listas.css";

export const ListaTodosContext = () => {
  const { todos, loading, agregarTodo } = useEjemploContext();

  if (loading) return <p>Cargando...</p>;

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      agregarTodo(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleEnter}
        placeholder="Ingrese un nuevo todo"
      />
      <button className="btn btn-primary">Esto es un botón</button>
      <ul className="lista" id="lista">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};
