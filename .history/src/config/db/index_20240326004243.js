const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/my_database');
    } catch (error) {
        
    }
}

module.exports = { connect };
