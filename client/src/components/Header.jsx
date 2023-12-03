import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-stone-700 shadow-xl">
      <div className="flex justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-lime-500">Epic</span>
            <span className="text-lime-700">Bicycles</span>
          </h1>
        </Link>
        <form className="bg-stone-100 p-2 rounded-lg flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-stone-700" />
        </form>
        <ul className="flex gap-4 font-bold">
          <Link to="/">
            <li className='hover:border-b-2 border-lime-700'>Home</li>
          </Link>
          <Link to="/about">
            <li className='hover:border-b-2 border-lime-700'>About</li>
          </Link>
          <Link to="/sign-in">
            <li className='hover:border-b-2 border-lime-700'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
