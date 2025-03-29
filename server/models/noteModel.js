import pool from '../db.js';

export const getNotes = async () => {
    const [rows] = await pool.query("SELECT * FROM notes");
    return rows;
};

export const getNote = async (id) => {
    const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
    return rows[0];
};

export const createNote = async (title, content) => { 
    const [result] = await pool.query(
        "INSERT INTO notes (title, content) VALUES (?, ?)",  
        [title, content]
    );
    return getNote(result.insertId);
};


export const deleteNote = async (id) => {
    const [result] = await pool.query("DELETE FROM notes WHERE id = ?", [id]);
    return result.affectedRows > 0; 
};

export async function updateNote(id, title, content) {  
    const [result] = await pool.query(`
        UPDATE notes 
        SET title = ?, content = ? 
        WHERE id = ?
    `, [title, content, id]);

    if (result.affectedRows === 0) return null; 
    return getNote(id);
}
