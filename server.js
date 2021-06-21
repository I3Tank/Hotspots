const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


const hotspotRoutes = require('./api/routes/HotspotRoutes');
app.use('/api/hotstops', hotspotRoutes);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Start Server listening on Port ${port}
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`);
    }
});
