// DEPENDENCIES //
// ============================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

// CONFIG //
// ============================================================
const config = require('./config');

// EXPRESS //
// ============================================================
var app = module.exports = express();
app.use(cors());
app.use(express.static(__dirname+'./../public'));
app.use(bodyParser.json());

// MASSIVE //
// ============================================================
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
})
app.set('db', massiveServer)// MUST come after app = express()

// DB //
// ============================================================
var db = app.get('db')

// CONTROLLERS
// ============================================================
// var modelCtrl = require('./controllers/modelCtrl');

// SERVICES //
// ============================================================
var passport = require('./services/passport');

// POLICIES //
// ============================================================
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
    return res.status(401).send();
  }else{
    return next();
  }
};

// Session and passport //
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
}));
// app.use(passport.initialize());
// app.use(passport.session());

// ENDPOINTS
// ============================================================
// MODEL ENDPOINTS
// app.get('/model', modelCtrl.read);
// app.post('/model', modelCtrl.create);
// app.put('/model/:id', modelCtrl.update);
// app.delete('/model/:id', modelCtrl.delete);

// VARIABLES
// ============================================================
var port = config.PORT;


// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});
