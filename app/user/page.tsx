import { db } from "@/db/db";
import { users } from "@/db/schema";
import { CreateUser, handleSubmit } from "@/app/action";

export default function Page() {
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const tasksRes = await db.select().from(users);
  //     setTasks(tasksRes);
  //   };
  //   fetchTasks();
  // }, []);

  // const handleAddTask = async (e) => {
  //   e.preventDefault();
  //   const newTaskData = { name: newTask, email: "", discriminator: "" };
  //   await db.insert(users).values(newTaskData);
  //   setTasks([...tasks, newTaskData]);
  //   setNewTask("");
  // };

  // const handleDeleteTask = async (id) => {
  //   await db.delete(users).where(users.id.equals(id));
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // const handleUpdateTask = async (id, updatedTask) => {
  //   await db.update(users).set(updatedTask).where(users.id.equals(id));
  //   setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO List</h1>
      <form action={CreateUser} className="mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mr-2"
          name="name"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 mr-2"
          name="email"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Add Task
        </button>
      </form>
      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span>{task.name}</span>
            <div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="bg-red-500 text-white p-2 mr-2"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  handleUpdateTask(task.id, { ...task, name: "Updated Task" })
                }
                className="bg-yellow-500 text-white p-2"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
