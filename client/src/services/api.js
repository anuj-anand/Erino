import axios from "axios";

const API_URL = "localhost:8001/api/contacts"; // Backend API base URL

// Fetch all contacts
export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new contact
export const addContact = async (contact) => {
  try {
    console.log(contact);
    const data = JSON.stringify(contact)
    const response = await axios.post(API_URL, data);
  return response.data;
  } catch (error) {
    console.log(error);
  }
  
};

// Update a contact
export const updateContact = async (id, contact) => {
  const response = await axios.put(`${API_URL}/${id}`, contact);
  return response.data;
};

// Delete a contact
export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
