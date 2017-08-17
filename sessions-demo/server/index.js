const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      app = express(),
      middleware = require('./middleware'),
      config = require('./config'),
      port = 3001;

// ========= Top-Level Middleware ========= //
app.use(bodyParser.json());
app.use(cors());
app.use(session({ //session takes in a configuration object, a lot of different preferences!
    secret: config.secret, //secret is required. It helps with session id, so that no one can take that ID
    saveUninitialized: false, //if the user never does anything, it doesn't save the session
    resave: false //makes it so if they do have a session, but don't change anythign, it won't mess -- recommended false
}));


// ========= Endpoints ========= //
app.post('/api/login', middleware.authenticate, (req, res) => {
    req.session.user = req.body.username;
    console.log(req.session.user);
    res.status(200).send('Welcome, Justice League Member.');
});

app.get('/api/user', (req, res) => {
    let user = req.session.user ? req.session.user : '';
    res.status(200).send({user});
});

//logost
//req.session.destroy()



app.listen(port, () => console.log(`I'm listening on port ${port}!`));