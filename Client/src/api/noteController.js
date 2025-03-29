import axios from 'axios'; // ✅ Use axios directly

const API_URL = 'http://127.0.0.1:8080/api/notes/'; // ✅ Ensure correct backend URL

const noteController = {
  async getNotes() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching notes:", error.response?.data || error.message);
      throw error;
    }
  },

  async getNote(id) {
    try {
      const response = await axios.get(`${API_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching note with ID ${id}:`, error.response?.data || error.message);
      throw error;
    }
  },


    async createNote(note) {
      try {
        const response = await axios.post(API_URL, JSON.stringify(note), {
          headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
      } catch (error) {
        console.error("Error creating note:", error.response?.data || error.message);
        throw error;
      }
    },

  async updateNote(id, updatedNote) {
    try {
      const response = await axios.put(`${API_URL}${id}`, updatedNote, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating note with ID ${id}:`, error.response?.data || error.message);
      throw error;
    }
  },

  async deleteNote(id) {
    try {
      const response = await axios.delete(`${API_URL}${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting note with ID ${id}:`, error.response?.data || error.message);
      throw error;
    }
  }
};

export default noteController;
