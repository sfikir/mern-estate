import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6x1 mx-auto p-3   ">
        <h1 className="font-bold text-sm sm:text-xl flex-wrap">
          <span className="text-slate-500">All</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 round-lg flex items-center ">
          <input 
            type="text"
            placeholder="Seacrh ..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
      </div>
    </header>
  );
}
