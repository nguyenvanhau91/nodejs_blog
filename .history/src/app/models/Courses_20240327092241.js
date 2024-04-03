const express = require("express");
const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: Number,
        required: true
    }
});
