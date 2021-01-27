import express from 'express';
import {getNotes, createNote, getNoteByName, deleteNoteById} from '../controllers/notes.js';


const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.get('/:name', getNoteByName);
router.delete('/:id', deleteNoteById);

export default router;
