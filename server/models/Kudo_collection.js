const { Schema, model, mongoose } = require('mongoose');
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
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    timestamps: {
        type: Date, 
        default: Date.now, 
    },
})

const Kudos = model('Kudo_collection', kudoSchema);

module.exports = Kudos; 