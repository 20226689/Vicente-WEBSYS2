const express = require('express');
const graduatesRoute = require('./src/graduates/graduates-route');
const studentsRoute = require('./src/students/students-route');
const programsRoute = require('./src/programs/programs-route');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.text());

app.use('/graduates', graduatesRoute);
app.use('/students', studentsRoute);
app.use('/programs', programsRoute);

app.get('/', (req, res) => {
  res.send('Hello!!');
});

app.listen(3000, () => {
  console.log(`Server has started at http://localhost:3000`);
});
