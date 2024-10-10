import { useRef, useState } from "react";
import Modal from "./Modal";

const ProjectTasks = ({ tasks, addTask, deleteTask }) => {
  const modalRef = useRef();
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleAddTask = () => {
    if (task.trim() === '') {
      modalRef.current.open();
      return;
    }
    addTask(task);
    setTask('');
  }

  return (
    <section>
      <Modal ref={modalRef} buttonCaption="OK" >
        <h2 className='text-stone-600 text-xl font-bold my-4'>Invalid input</h2>
        <p className='text-stone-600 text-md my-6'>Oops... looks like you forgot to enter a value.</p>
        <p className='text-stone-600 text-md my-6'>Please make sure you enter a valid task name</p>
      </Modal>
      <h3 className="text-2xl font-bold text-stone-600 mb-2">Tasks</h3>
      <p className="my-4">
        <input type="text" onChange={handleChange} value={task} className="w-1/2 p-1 mr-4 bg-stone-300"></input>
        <button onClick={handleAddTask} className="text-stone-600 hover:text-stone-900">Add Task</button>
      </p>
      {tasks.length === 0 && <p className="text-stone-800">Project does not have any tasks yet.</p>}
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.length > 0 && [...tasks].reverse().map(
          task => (<li key={task.id} className="flex align-middle justify-between my-4">
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)} className="text-stone-700 hover:text-red-600">Clear</button>
          </li>)
        )}
      </ul>
    </section>
  )
}

export default ProjectTasks;