const { query } = require('express');
const pool = require('../../server/db');
const queries = require('./queries');

module.exports = {
  getStudents: (req, res) => {
    pool.query(queries.getStudents, (error, result) => {
      if (error) throw error;

      res.status(200).json({
        message: 'Successful',
        data: result.rows,
      });
    });
  },

  getStudentsById: (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, result) => {
      if (error) throw error;

      res.status(200).json({
        message: 'Successful',
        data: result.rows,
      });
    });
  },

  addStudents: (req, res) => {
    const { studentName, studentAge, studentClass, parentContact, admissionDate } = req.body;

    pool.query(queries.addStudents, [studentName, studentAge, studentClass, parentContact, admissionDate], (error, result) => {
      if (error) throw error;

      res.status(201).send('Student created Successfully!');
    });
  },

  removeStudents: (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentsById, [id], (error, result) => {
      const noStudentFound = !result.rows.length;
      if (noStudentFound) res.send('Student does not exist in the database!');

      pool.query(queries.removeStudents, [id], (error, result) => {
        if (error) throw error;

        res.status(200).send('Student remove successfully!');
      });
    });
  },

  updateStudents: (req, res) => {
    const id = parseInt(req.params.id);
    const { studentName, studentAge, studentClass, parentContact, admissionDate } = req.body;

    pool.query(queries.getStudentsById, [id], (error, result) => {
      const noStudentFound = !result.rows.length;
      if (noStudentFound) res.send('Student does not exist in the database!');

      pool.query(queries.updateStudent, [studentName, studentAge, studentClass, parentContact, admissionDate, id], (error, result) => {
        if (error) throw error;

        res.status(200).send('Student updated successfully!');
      });
    });
  },
};
