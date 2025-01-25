import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
  const formattedDate = note.created_At
    ? new Date(note.created_At).toLocaleDateString("en-US")
    : "Unknown Date";

  return (
    <div className="note-container">
      <p className="note-title"> {note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
