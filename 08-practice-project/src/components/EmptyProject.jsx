import noProjects from '../assets/no-projects.png';
import Button from './Button';

const EmptyProject = ({ onAddProject }) => {

  return (
    <div className='w-2/3 flex-col gap-4 justify-center text-center mt-24'>
      <img src={noProjects} alt="An empty tasks list" className="w-16 h-16 object-contain mx-auto" />
      <h2 className='text-stone-500 text-xl font-bold my-4'>No Project Selected</h2>
      <p className='text-stone-500 text-md my-6'>Select a project or get started with a new one</p>
      <Button onClick={onAddProject}>Create new project</Button>
    </div>
  )
}

export default EmptyProject;