import Button from "./Button";

const Sidebar = ({ projects, onAddProject, onSelectProject, selectedProjectId }) => {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map(project => {
          let classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            classes += ' bg-stone-800 text-stone-200';
          } else {
            classes += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={classes} > {project.name}</button>
            </li>
          )
        })}
      </ul>
    </aside >
  );
};

export default Sidebar;
