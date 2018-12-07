const express = require('express');
const port = process.env.PORT || 3001;
const config = require('./config/config');

const mongoose = require('mongoose');
mongoose.connect( config.db_uri, function(){
  mongoose.connection.db.dropDatabase();
} );
mongoose.set('debug', true);

const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
// const cors = require('cors');
// const errorHandler = require('errorhandler');

fs.readdirSync(models_path).forEach( (file) => {
  require( models_path+ '/' + file);
})


mongoose.promise = global.Promise;


const app = express();
app.use( require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));



require('./models/User');
require('./config/passport');
app.use( require('./routes'));


// if(!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
// }

// app.use((err, req, res) => {
//   res.status(err.status || 500);
//
//   res.json({
//     errors: {
//       message: err.message,
//       error: {},
//     },
//   });
// });


app.listen( port, () => console.log('Listening on localhost: ' + port) );
