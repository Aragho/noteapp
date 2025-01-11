import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NoteCard from "./components/NoteCard";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [currentNote, setCurrentNote] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    if (formData.title && formData.content) {
      const newNote = { ...formData, id: Date.now() };
      setNotes((prev) => [...prev, newNote]);
      setFormData({ title: "", content: "" });
    } else {
      alert("Please fill out both fields!");
    }
  };

  const handleSaveNote = (event) => {
    event.preventDefault();
    if (formData.title && formData.content) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === currentNote.id ? { ...note, ...formData } : note
        )
      );
      setCurrentNote(null);
      setFormData({ title: "", content: "" });
    } else {
      alert("Please fill out both fields!");
    }
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
    setFormData({ title: note.title, content: note.content });
  };

  const handleDeleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    }
  };

  const toggleFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isFavorite: !note.isFavorite } : note
      )
    );
  };

  const toggleArchive = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isArchived: !note.isArchived } : note
      )
    );
  };

  const filteredNotes = notes
    .filter((note) => {
      if (filter === "favorites") return note.isFavorite && !note.isArchived;
      if (filter === "archive") return note.isArchived;
      return !note.isArchived;
    })
    .filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <SideBar onFilterChange={setFilter} />
      <div className="flex-1 flex flex-col">
        <Header onSearchChange={handleSearchChange} /> 
        <form
          onSubmit={currentNote ? handleSaveNote : handleAddNote}
          className="p-4 bg-white dark:bg-gray-800 rounded shadow-md mx-4 my-4"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter content"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500"
          >
            {currentNote ? "Save Note" : "Add Note"}
          </button>
        </form>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              content={note.content}
              isFavorite={note.isFavorite}
              isArchived={note.isArchived}
              onEdit={() => handleEditNote(note)}
              onDelete={() => handleDeleteNote(note.id)}
              onToggleFavorite={() => toggleFavorite(note.id)}
              onToggleArchive={() => toggleArchive(note.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
