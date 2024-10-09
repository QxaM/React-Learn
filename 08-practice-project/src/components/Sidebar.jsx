const Sidebar = () => {
  return (
    <aside className="w-1/3 md:w-72 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
