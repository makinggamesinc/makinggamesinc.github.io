const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//NOTE(ol): global path like .exe path in game programming
const path = require('path');
//

const app = express();

app.use(cors());

////////////// APP INITIED //////////////////


//NOTE(ol): make static files public
//NOTE(ol): This is a middleware that serves up files
//look in the app folder
const staticPath = path.resolve(__dirname, "./"); //this is so the filenames are handled for linux & windows convention
app.use(express.static(staticPath));


const PORT = process.env.PORT || 8080;

//Handle all other request

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
