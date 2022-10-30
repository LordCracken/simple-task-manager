import { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

import { IServerTask, ITask } from './interfaces';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const url =
      'https://simple-tasks-manager-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

    const transformTasks = (tasksObj: unknown) => {
      const loadedTasks = [];
      const data = tasksObj as IServerTask;

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks({ url }, transformTasks);
  }, []);

  const taskAddHandler = (task: ITask) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </>
  );
}

export default App;
