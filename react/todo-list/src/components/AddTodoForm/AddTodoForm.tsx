import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { Todo } from '../../types';
import styles from './AddTodoForm.module.css';

type Props = {
  onSubmit: (todo: Todo) => void;
};

type Values = {
  title: string;
  description: string;
};

const initialValues: Values = {
  title: '',
  description: '',
};

const AddTodoForm = ({ onSubmit }: Props) => {
  const [values, setValues] = useState<Values>(initialValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.title.trim() === '') return;

    const newTodo: Todo = {
      ...values,
      id: nanoid(),
      isFinished: false,
    };

    onSubmit(newTodo);
    setValues(initialValues);
  };

  const handleChangeValue = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.component}>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Enter title"
        value={values.title}
        onChange={handleChangeValue}
      />
      <input
        className={styles.input}
        type="text"
        name="description"
        placeholder="Enter name"
        value={values.description}
        onChange={handleChangeValue}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodoForm;
