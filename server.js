const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(session({
    secret: 'H0t$T0p$$3cR3t',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/zero', express.static( __dirname + '/public/zero'));
app.use('/hotstops', express.static(__dirname + '/public'));

const zeroRoutes = require('./api/routes/ZeroRoutes');
app.use('/zero', zeroRoutes);

const frontendRoutes = require('./api/routes/FrontendRoutes');
app.use('/hotstops', frontendRoutes);

const hotspotRoutes = require('./api/routes/HotspotRoutes');
app.use('/api/hotspots', hotspotRoutes);

const loginRoutes = require('./api/routes/LoginRoutes');
app.use('/hotstops', loginRoutes);

// Start Server listening on Port ${port}
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`);
    }
});