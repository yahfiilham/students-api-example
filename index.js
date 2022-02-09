const express = require('express');
const app = express();

const studentRoutes = require('./src/student/routes');

const port = 3000;

app.use(express.json());

// route
app.get('/', (req, res) => {
  res.send('Welcome to OUR SCHOOL database!');
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
