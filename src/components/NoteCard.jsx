import React from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiArchiveDrawerFill } from "react-icons/ri";

export default function NoteCard({
  title,
  content,
  isFavorite,
  isArchived,
  onEdit,
  onDelete,
  onToggleFavorite,
  onToggleArchive,
}) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
        >
          <CiEdit size={24} />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
        >
          <MdDeleteForever size={24} />
        </button>
        <button
          onClick={onToggleFavorite}
          className={`px-4 py-2 rounded ${isFavorite ? "text-yellow-400" : "text-gray-300"}`}
        >
          {isFavorite ? <MdOutlineFavorite size={45} /> : <MdFavoriteBorder size={55} />}
        </button>
        <button
          onClick={onToggleArchive}
          className={`px-4 py-2 rounded ${isArchived ? "bg-green-400" : "bg-gray-300"}`}
        >
          <RiArchiveDrawerFill size={24} />
          {isArchived ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
}
