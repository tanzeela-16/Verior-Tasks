import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white border-r overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <nav className="p-4 space-y-4">
        <a href="#" className="block text-gray-700 hover:text-red-600">Home</a>
        <a href="#" className="block text-gray-700 hover:text-red-600">Trending</a>
        <a href="#" className="block text-gray-700 hover:text-red-600">Subscriptions</a>
        <a href="#" className="block text-gray-700 hover:text-red-600">Library</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
