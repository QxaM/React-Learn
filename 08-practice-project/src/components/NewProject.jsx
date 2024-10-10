import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ onCancel, onSave }) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (name.trim() === ''
      || description.trim() === ''
      || date.trim() === '') {
      modalRef.current.open();
      return;
    }

    onSave({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="OK" >
        <h2 className='text-stone-600 text-xl font-bold my-4'>Invalid input</h2>
        <p className='text-stone-600 text-md my-6'>Oops... looks like you forgot to enter a value.</p>
        <p className='text-stone-600 text-md my-6'>Please make sure you enter a valid data</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button onClick={onCancel} className='text-stone-800 hover:text-stone-900'>Cancel</button>
          </li>
          <li>
            <button onClick={handleSave} className='px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950 hover:text-stone-200'>Save</button>
          </li>
        </menu>
        <div>
          <Input title="Title" type="text" ref={nameRef} />
          <Input title="Description" textarea ref={descriptionRef} />
          <Input title="Due date" type="date" ref={dateRef} />

        </div>
      </div>
    </>
  )
};

export default NewProject;