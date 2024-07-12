const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ecommerce',
});

db.connect(function (err) {
  if (err) {
    console.log("Connection unsuccessful", err.stack);
    return;
  } else {
    console.log("Connection successful");
  }
});

app.get('/get-products', function (req, res) {
  const getQuery = 'SELECT * FROM products';
  db.query(getQuery, function (err, result) {
    if (err) {
      res.status(500).send({ 'text': 'Error in getting the data' });
      console.log(err.sqlMessage);
      return;
    } else {
      res.json(result);
    }
  });
});

app.post('/add-product', function (req, res) {
  const { product_name, description, mrp, img, category } = req.body;
  const insertQuery = 'INSERT INTO products(product_name,description,mrp,img,category) VALUES(?,?,?,?,?)';
  db.query(insertQuery, [product_name, description, mrp, img, category], function (err, result) {
    if (err) {
      console.log(err.sqlMessage);
      res.status(500).send('Error inserting the data');
      return;
    }
    res.json({ 'text': 'The product has been inserted successfully' });
  });
});

app.listen(8083, () => {
  console.log('Server is running on port 8083');
});
