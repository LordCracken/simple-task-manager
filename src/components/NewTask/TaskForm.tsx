import { useRef, FormEvent, FC } from 'react';

import classes from './TaskForm.module.css';
import { ITaskForm } from '../../interfaces';

const TaskForm: FC<ITaskForm> = ({ loading, onEnterTask }) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current?.value ?? '';

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
