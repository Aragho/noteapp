// import React, { useState, useEffect } from "react";

// const NoteEditor = ({ onSave, note = { title: "", content: "" } }) => {
//   // Initialize formData with either the passed note or default values
//   const [formData, setFormData] = useState(note);

//   useEffect(() => {
//     if (note) {
//       setFormData(note); // Update formData when note prop changes
//     }
//   }, [note]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.title && formData.content) {
//       onSave(formData);
//       setFormData({ title: "", content: "" }); // Clear form after save
//     } else {
//       alert("Please fill out both fields.");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-4 bg-white dark:bg-gray-800 rounded shadow-md mx-4 my-4"
//     >
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Content</label>
//         <textarea
//           name="content"
//           value={formData.content}
//           onChange={handleChange}
//           placeholder="Enter content"
//           className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500"
//       >
//         Save Note
//       </button>
//     </form>
//   );
// };

// export default NoteEditor;
