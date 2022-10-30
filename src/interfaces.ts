import { ReactNode } from 'react';

export interface ITaskData {
  name: string;
  text: string;
}

export interface ITask {
  text: string;
  id?: string;
}

export interface IReqConf {
  url: string;
  method?: 'POST' | 'GET';
  headers?: HeadersInit;
  body?: unknown;
}

export type ISendRequest = (requestConfig: IReqConf, applyData: (data: any) => void) => void;

export type IUseHttp = () => {
  isLoading: boolean;
  error: string | null;
  sendRequest: ISendRequest;
};

export interface IServerTask {
  [key: string]: {
    text: string;
  };
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
  onFetch: ISendRequest;
}
