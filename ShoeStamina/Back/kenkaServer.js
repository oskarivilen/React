const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('shoes.db');


app.listen(8080, () => {
    console.log('Node toimii localhost:8080');
});


app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});


app.get('/shoe/all', (req, res, next) => {
	db.all("SELECT * FROM shoe", (error, results) => {
    if (error) throw error;


    return res.status(200).json(results);
  });
});

app.get('/shoe/one/:id', (req, res, next) => {
    let id = req.params.id;
    db.get('SELECT * FROM shoe where id=?', [id], (error, result) => {
        if (error) throw error;

        if (typeof(result) == 'undefined')  {
          return res.status(200).send({});
        }

        return res.status(200).json(result);
    });
});



const multer = require('multer');

const storage = multer.diskStorage({
  destination:  (req, file, callback) => {
    callback(null, './images')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


app.post('/shoe/add', upload.single('kuva'),  (req, res, next) => {
 
    let tap = req.body;
    let kuva = null;

   
    if (req.file) {
      kuva = req.file.originalname;
    }

    db.run('INSERT INTO shoe (label, terrain, kuva) VALUES (?, ?, ?)', [tap.label, tap.terrain, kuva], function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    })
})

app.get('/download/:label', (req, res, next) => {
  let file = './images/' + req.params.label;
  res.download(file);
});

app.delete('/shoe/delete/:id', (req, res, next) => {

    let id = req.params.id;


    db.run('DELETE FROM shoe WHERE id = ?', [id],  function (error, result) {
        if (error) throw error;

        return res.status(200).json( {count: this.changes} );
    });

});


app.get('*', (req, res, next) => {
    return res.status(404).send({ error: true, message: 'Ei pyydettyä palvelua' })
});
