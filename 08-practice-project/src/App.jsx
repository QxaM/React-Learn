import Sidebar from "./components/Sidebar";
import NewProject from './components/NewProject';
import EmptyProject from "./components/EmptyProject";
import ProjectDetails from './components/ProjectDetails';
import { useState } from "react";

function App() {

  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  const handleSelectedProject = (projectId) => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        selectedProject: projectId
      }
    });
  }

  const addProject = (project) => {
    setProjects(prevProjects => {
      const newProject = {
        ...project,
        id: Math.random()
      }
      return {
        ...prevProjects,
        selectedProject: undefined,
        projects: [...prevProjects.projects, newProject]
      }
    });
  };

  const deleteProjectById = () => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        selectedProject: undefined,
        projects: prevProjects.projects.filter(project => project.id !== prevProjects.selectedProject),
        tasks: prevProjects.projects.filter(task => task.projectid !== prevProjects.selectedProject)
      }
    });
  }

  const addTask = (task) => {
    setProjects(prevProjects => {
      const newTask = {
        text: task,
        projectId: prevProjects.selectedProject,
        id: Math.random()
      }
      return {
        ...prevProjects,
        tasks: [...prevProjects.tasks, newTask]
      }
    });
  }

  const deleteTaskById = (taskId) => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        tasks: prevProjects.tasks.filter(task => task.id !== taskId)
      }
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects.projects} onAddProject={() => handleSelectedProject(null)} onSelectProject={handleSelectedProject} selectedProjectId={projects.selectedProject} />
      {projects.selectedProject === undefined && <EmptyProject onAddProject={() => handleSelectedProject(null)} />}
      {projects.selectedProject === null && <NewProject onCancel={() => handleSelectedProject(undefined)} onSave={addProject} />}
      {projects.selectedProject && <ProjectDetails onDelete={deleteProjectById} onAddTask={addTask} onDeleteTask={deleteTaskById} tasks={projects.tasks.filter(task => task.projectId === projects.selectedProject)} project={projects.projects.find(project => project.id === projects.selectedProject)} />}
    </main>
  );
}

export default App;
