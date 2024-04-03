const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_');
    } catch (error) {
        
    }
}

module.exports = { connect };
