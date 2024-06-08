import { useEffect, useState } from 'react';

import type { Todo } from '../../types';
import TodoItem from '../TodoItem/TodoItem';
import AddTodoForm from '../AddTodoForm/AddTodoForm.tsx';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleToggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo,
      ),
    );
  };

  const handleAddTodo = (todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.component}>
      {todos.length === 0 && (
        <div className={styles.empty}>The list is empty</div>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      ))}
      <AddTodoForm onSubmit={handleAddTodo} />
    </div>
  );
};

export default TodoList;
