const { Schema, model } = require('mongoose');
const userSchema = require('./User');

const kudoSchema = new Schema ({
    date: {
        type: String,
    },
    text: {
        type: String, 
    },
    category: {
        type: String,
    },
    img_url: {
        type: String,
    },
    gif_url: {
        type: String,
    },
    personal_notes: {
        type: String,
    },
    user_id: [userSchema._id],
    timestamps: true,
})

const Kudo_collection = model('Kudo_collection', kudoSchema);