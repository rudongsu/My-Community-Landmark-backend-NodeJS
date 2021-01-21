import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    username: String,
    value: String,
    lat: String,
    lng: String,
    location: String,
});


const NoteMessage = mongoose.model('NoteMessage', noteSchema);

export default NoteMessage;