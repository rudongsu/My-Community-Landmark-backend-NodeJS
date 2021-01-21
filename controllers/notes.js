import NoteMessage from '../models/noteMsg.js';

// fetch all saved notes
export const getNotes = async (req, res) => {
    try {
        const noteMsg = await NoteMessage.find();
        res.status(200).json(noteMsg);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// post a new note
export const createNote = async (req, res) => {

    const newNote = new NoteMessage(req.body);

    try {
        await newNote.save();
        res.status(201).json(newNote);

    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}

// fetch notes by specific name
export const getNoteByName = async (req, res) => {
    const { name } = req.params;
    try {
        const note = await NoteMessage.find({ username: name });

        res.status(200).json(note);

    } catch (error) {

        res.status(404).json({ message: error.message })
    }

}