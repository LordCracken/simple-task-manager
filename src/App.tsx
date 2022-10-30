import { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

import { IServerTask, ITask } from './interfaces';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const url =
    'https://simple-tasks-manager-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';
  const transformTasks = (tasksObj: IServerTask) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp({ url }, transformTasks);

  useEffect(() => {
    fetchTasks();
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
