// backend/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server se escucha en http://localhost:${PORT}`);
});

// backend/index.ts
import mysql from 'mysql';

const db = mysql.createConnection({
  host: '3306',
  user: 'root',
  password: '123456789',
  database: 'database',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// backend/index.ts
app.post('/crear-usuario', (req, res) => {
    const { nombre, edad, fechaNacimiento } = req.body;
  
    const query = 'INSERT INTO usuarios (nombre, edad, fecha_nacimiento) VALUES (?, ?, ?)';
    db.query(query, [nombre, edad, fechaNacimiento], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error al crear el usuario');
      } else {
        console.log('Usuario creado correctamente');
        res.status(200).send('Usuario creado correctamente');
      }
    });
  });
  
