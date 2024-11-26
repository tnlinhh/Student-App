import React, { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="name">Tên:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Số điện thoại:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>   

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Thêm sinh viên</button>
    </form>
   
  );
}

export default StudentForm;