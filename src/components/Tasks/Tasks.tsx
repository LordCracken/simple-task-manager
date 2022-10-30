import { FC, ReactNode } from 'react';

import Section from '../UI/Section';
import TaskItem from './TaskItem';

import { ITasks, ITask } from '../../interfaces';
import classes from './Tasks.module.css';

const Tasks: FC<ITasks> = ({ items, loading, error, onFetch }) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task: ITask) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: ReactNode = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
