import express from 'express';
import {getNotes, createNote, getNoteByName} from '../controllers/notes.js';


const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.get('/:name', getNoteByName);

export default router;