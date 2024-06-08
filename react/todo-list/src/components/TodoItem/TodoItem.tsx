import { Todo } from '../../types';
import styles from './TodoItem.module.css';

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  const handleOnToggle = () => {
    onToggle(todo.id);
  };

  const handleOnDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className={styles.component}>
      <input
        type="checkbox"
        checked={todo.isFinished}
        onChange={handleOnToggle}
      />
      <div className={styles.text}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <button onClick={handleOnDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
