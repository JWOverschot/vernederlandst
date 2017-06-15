var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vernederlandst"
});

con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM posts", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});