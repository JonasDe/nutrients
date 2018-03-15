const express = require('express');
var sqlite3 = require('sqlite3').verbose()
const app = express();
app.set('view engine', 'ejs')
app.use('/public', express.static(__dirname + "/public"));
var food = []

let db = new sqlite3.Database('./nutrients.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the nutrients database.');
  db.serialize(function() {
			db.each("SELECT * from livsmedel", function(err, row) {
				food.push(row);
			})
			
		});
});

app.listen(8080, function() {
  console.log('listening on 8080')
})

app.get('/', (req, res) => {
	if (food.length == 0){

	}
	res.render('index.ejs', {food: food})
})


