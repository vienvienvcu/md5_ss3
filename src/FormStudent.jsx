import React, { useState } from "react";

function FormStudent() {
  const [formStudent, setFormStudent] = useState({});
  const [students, setStudent] = useState([]);

  //lay thong tin tu form
  const handleChangeForm = (e) => {
    // console.dir(e.target);
    const { name, value } = e.target;
    console.log("name: " + name + " value: " + value);
    setFormStudent({ ...formStudent, [name]: value });
  };
  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = { ...formStudent, id: Date.now() }; // Thêm ID duy nhất
    setStudent([...students, newStudent]);
    setFormStudent({}); // Làm trống form sau khi thêm
  };
  return (
    <div>
      <form action="" onSubmit={handleAddStudent}>
        {console.log(formStudent)}
        <div>
          <label>name</label>
          <input
            type="text"
            name="fullName"
            value={formStudent.fullName || ""}
            onChange={handleChangeForm}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={formStudent.email || ""}
            onChange={handleChangeForm}
          />
        </div>
        <div>
          <label>gender</label>
          <input
            type="text"
            name="gender"
            value={formStudent.gender || ""}
            onChange={handleChangeForm}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <div key={student.id}>
            <p>{student.fullName}</p>
            <p>{student.email}</p>
            <p>{student.gender}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FormStudent;
