
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('shoes.db');

db.serialize( () => {
/* Jos kantaan talletetan kuva
  let sql = "CREATE TABLE Henkilo (" +
	   "id integer PRIMARY KEY NOT NULL, " +
	   "nimi text NOT NULL, " +
	   "email text NOT NULL, " +
	   "kuva blob )";
*/

// Kun kantaan talletetaan vain kuvan nimi
  let sql = "CREATE TABLE Shoe (" +
   "id integer PRIMARY KEY NOT NULL, " +
   "label text NOT NULL, " +
   "terrain text NOT NULL, " +
   "kuva text)";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  })

  sql = "INSERT INTO `shoe` (`id`, `label`, `terrain`, `kuva`) "+
  " VALUES (1, 'Nike Freerun', 'Park', null)";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

})

db.each("SELECT id, label FROM shoe", (err, row) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(row.id + ", " + row.label);

});

db.close();
