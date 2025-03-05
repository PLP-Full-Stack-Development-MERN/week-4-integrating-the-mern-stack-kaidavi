import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks", error));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Task List</h1>
      {tasks.map((task) => (
        <div key={task._id} className="border p-2 my-2">
          <h2 className="text-lg">{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
