const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017', (err) => {
    if (!err) {
        console.log("Connected Successfully");
    } else {
        console.log(`Error in DB Connection : ` + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;