const express = require('express');
var sqlite3 = require('sqlite3').verbose()
const app = express();
require('tablesort')
app.set('view engine', 'ejs')
app.use('/public', express.static(__dirname + "/public"));



let db = new sqlite3.Database('./nutrients.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the nutrients database.');
});
var column_names = []
var v = db.get("Select * from livsmedel limit 1", function(err, row){
	for (x in row){
		column_names.push[x];
	}
});

app.listen(8080, function() {
  console.log('listening on 8080')
})
columns = ['Livsmedelsnamn', 'Livsmedelsnummer', 'kcal', 'kj', 'Kolhydrater_g', 'Fett_g', 
'Protein_g', 'Fibrer_g', 'Vatten_g', 'Alkohol_g', 'Aska_g', 'Monosackarider_g', 
'Disackarider_g', 'Sackaros_g', 'Fullkorn_totalt__g', 'Sockerarter_g', 'Summa_mättade_fettsyror_g', 
'Fettsyra_g', 'Laurinsyra_g', 'Myristinsyra_g', 'Palmitinsyra_g', 'Stearinsyra_g', 'Arakidinsyra_g', 
'Summa_enkelomättade_fettsyror_g', 'Palmitoljesyra_g', 'Oljesyra_g', 'Summa_fleromättade_fettsyror_g', 
'Linolsyra_g', 'Linolensyra_g', 'Arakidonsyra_g', 'EPA_g', 'DPA_g', 'DHA_g', 'Kolesterol_mg', 'Retinol_ug', 
'Vitamin_A_ug', 'beta_Karoten_ug', 'Vitamin_D_ug', 'Vitamin_E_mg', 'Vitamin_K_ug', 'Tiamin_mg', 'Riboflavin_mg', 
'Vitamin_C_mg', 'Niacin_mg', 'Niacinekvivalenter_mg', 'Vitamin_B6_mg', 'Vitamin_B12_ug', 'Folat_ug', 'Fosfor_mg', 
'Jod_ug', 'Järn_mg', 'Kalcium_mg', 'Kalium_mg', 'Koppar_mg', 'Magnesium_mg', 'Natrium_mg', 'Salt_g', 'Selen_ug', 'Zink_mg', 'Avfall', 'Stärkelse_g']
function reset_food(){
	food = []
}
var food = []

app.get('/', (req, res) => {
	if (food.length == 0){
		db.serialize(function() {
			db.each("SELECT * from livsmedel", function(err, row) {
				food.push(row);
			})

		});
	}
	res.render('index.ejs', {food: food})
})
// app.get('/*', (req, res) => {
// 	var path = req.url.slice(1);
// 	var args = path.split('?');
// 	var first = args[0].split('=');
// 	var col = first[0];
// 	var sort = first[1];
// 	var stmt = col + " " + sort ;
// 	for (i = 1; i < args.length; i++) { 
// 		var pair = args[i].split('=');
// 		var col_name = pair[0];
// 		var ordering = pair[1];
// 		stmt = stmt + ((col_name == 'limit') ? ' ' : ', ') + col_name + " " + ordering ;
// 	}

// 	var stmt = "SELECT * from livsmedel order by " + stmt + ";";
// 	console.log(stmt);
// 	db.serialize(function() {
// 		db.each(stmt, function(err, row) {
// 			food.push(row);
// 		})
// 	});
// 	res.render('index.ejs', {food: food})
// })



