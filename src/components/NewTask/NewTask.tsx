import { FC } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

import { INewTask, ITaskData } from '../../interfaces';

const NewTask: FC<INewTask> = ({ onAddTask }) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: ITaskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: string) => {
    const url =
      'https://simple-tasks-manager-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';
    const headers = {
      'Content-Type': 'application/json',
    };

    sendTaskRequest(
      { url, method: 'POST', headers, body: { text: taskText } },
      createTask.bind(null, taskText),
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
