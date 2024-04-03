const express = require("express");
const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }: {
        type: String,
        required: true
    },
    img: {
        type: Number,
        required: true
    }
});
