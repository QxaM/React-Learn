import ProjectTasks from "./ProjectTasks";

const ProjectDetails = ({ tasks, project, onDelete, onAddTask, onDeleteTask }) => {

  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <main className="w-[35rem] mt-16">
      <header className="w-auto pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">{project.name}</h2>
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-900">Delete</button>
        </div>
        <p className="text-stone-400 text-md">{formattedDate}</p>
        <p className="text-stone-600 text-md my-4 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <ProjectTasks tasks={tasks} addTask={onAddTask} deleteTask={onDeleteTask} />
    </main>
  )
};

export default ProjectDetails;