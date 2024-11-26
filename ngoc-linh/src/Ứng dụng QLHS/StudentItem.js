import React from 'react';

function StudentItem({ student, onDelete, onEdit }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.phone}</td>
      <td>{student.email}</td>
      <td>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentItem;