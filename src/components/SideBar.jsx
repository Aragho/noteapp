import React from "react";

export default function SideBar({ onFilterChange }) {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">Navigation</h2>
      <ul>
        <li className="mb-2">
          <button
            onClick={() => onFilterChange("all")}
            className="w-full text-left p-2 rounded hover:bg-gray-700"
          >
            All Notes
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={() => onFilterChange("favorites")}
            className="w-full text-left p-2 rounded hover:bg-gray-700"
          >
            Favorites
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={() => onFilterChange("archive")}
            className="w-full text-left p-2 rounded hover:bg-gray-700"
          >
            Archive
          </button>
        </li>
      </ul>
    </aside>
  );
}
