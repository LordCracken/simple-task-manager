import { useState, FC } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

import { INewTask } from '../../interfaces';

const NewTask: FC<INewTask> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enterTaskHandler = async (taskText: string) => {
    const url =
      'https://simple-tasks-manager-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError((err as Error).message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  const url =
    'https://simple-tasks-manager-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
