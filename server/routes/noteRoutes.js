import express from 'express';
import { fetchNotes, fetchNote, addNote , removeNote ,modifyNote  } from '../controller/noteController.js';

const router = express.Router();

router.get('/', fetchNotes);
router.get('/:id', fetchNote);
router.post('/', addNote);
router.delete('/:id', removeNote);
router.put('/:id', modifyNote);

export default router;
