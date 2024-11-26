import React from 'react';
import StudentItem from './Ứng dụng QLHS/StudentItem';

function StudentList({ students, onDelete, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentItem
            key={index}
            student={student}
            onDelete={() => onDelete(index)}
            onEdit={() => onEdit(index)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;