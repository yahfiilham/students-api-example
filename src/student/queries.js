module.exports = {
  getStudents: 'SELECT * FROM students',
  getStudentsById: 'SELECT * FROM students WHERE id = $1',
  addStudents: 'INSERT INTO students (student_name, student_age, student_class, parent_contact, admission_date) VALUES ($1, $2, $3, $4, $5)',
  removeStudents: 'DELETE FROM students WHERE id = $1',
  updateStudent: 'UPDATE students SET student_name = $1, student_age = $2, student_class = $3, parent_contact = $4, admission_date = $5 WHERE id=$6',
};
