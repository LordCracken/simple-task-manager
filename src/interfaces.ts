import { ReactNode } from 'react';

export interface ITask {
  text: string;
  id?: string;
}

export interface ISection {
  children: ReactNode;
}

export interface ITaskItem {
  children: ReactNode;
}

export interface ITaskForm {
  loading: boolean;
  onEnterTask: (taskText: string) => void;
}

export interface INewTask {
  onAddTask: (task: ITask) => void;
}

export interface ITasks {
  items: ITask[];
  loading: boolean;
  error: string | null;
  onFetch: () => void;
}
