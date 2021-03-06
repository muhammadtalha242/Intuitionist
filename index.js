const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path')
// const SDDP = require('./routes/SDDP/getResults')  ROUTE UNDERCONSTRUCTION
const ComputationModules = require('./routes/CPP&EPP/ComputationModules')
const FccComputationModules = require('./routes/FCC/FccComputationModules')
const login = require('./routes/RegistrationLoginModule/login')
const database = require('./routes/DataBaseModule/data')
const updateDatabase = require('./routes/DataBaseModule/updateTable')
var bodyParser = require('body-parser')
const apiConfig = require('./src/config/apiConfig');

//
// const tryingRoute = require("./routes/CPP&EPP/UsingRefactored")



// const db = require('./routes/DataBaseModule/config');
// db.authenticate()
// 	.then(() => console.log('db connected'))
// 	.catch(err => console.log('error connecting'))


app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(
	bodyParser.urlencoded(
		{ extended: false }
	)
)

// app.use('/submit', ComputationModules)
// app.use('/submitFCC', FccComputationModules)
// app.use('/results', SDDP) ROUTE UNDERCONSTRUCTION
app.use('/', login)
app.use('/data', database)
app.use('/update', updateDatabase)

//For heroku
if(process.env.NODE_ENV === 'production'){
	app.use(express.static('frontend/build'));

	app.use(express.static(path.join(__dirname, '../frontend/build')));
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
	});
	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
	})
}

apiConfig.configureApi(app);

const PORT= process.env.PORT || 4000
const server = app.listen(PORT , () => {
	console.log("Server working on port ${PORT}")
});
server.setTimeout(30*60*1000);