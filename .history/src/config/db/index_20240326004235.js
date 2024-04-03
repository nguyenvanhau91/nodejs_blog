const mongoose = require("mongoose");

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1/my_database');
}

module.exports = { connect };
