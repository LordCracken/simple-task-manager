import { FC } from 'react';

import { IWrapper } from '../../interfaces';
import classes from './TaskItem.module.css';

const TaskItem: FC<IWrapper> = ({ children }) => {
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;
