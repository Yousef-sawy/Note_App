import { getNotes, getNote, createNote, deleteNote, updateNote } from '../models/noteModel.js';

export const fetchNotes = async (req, res, next) => {
    try {
        const notes = await getNotes();
        res.json(notes);
    } catch (err) {
        next(err);
    }
};

export const fetchNote = async (req, res, next) => {
    try {
        const note = await getNote(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (err) {
        next(err);
    }
};

export const addNote = async (req, res, next) => {
    try {
        const { title, content } = req.body;  
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const note = await createNote(title, content);
        res.status(201).json(note);
    } catch (err) {
        next(err);
    }
};



export const removeNote = async (req, res, next) => {
    try {
        const success = await deleteNote(req.params.id);
        if (!success) return res.status(404).json({ message: "Note not found" });
        res.json({ message: "Note deleted successfully" });
    } catch (err) {
        next(err);
    }
};

export const modifyNote = async (req, res, next) => {
    try {
        const { title, content } = req.body;  
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const updatedNote = await updateNote(req.params.id, title, content);
        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.json(updatedNote);
    } catch (err) {
        next(err);
    }
};

