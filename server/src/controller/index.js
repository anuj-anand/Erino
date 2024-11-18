const Database = require("../model/index.js"); // Import your model

// GET: Fetch all contacts
const getFunction = async (req, res) => {
    try {
        const contacts = await Database.find(); // Fetch all documents from the collection
        res.status(200).json(contacts); // Respond with the list of contacts
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch contacts", details: error.message });
    }
};

// POST: Add a new contact
const postFunction = async (req, res) => {
    try {
        const { firstname, Lastname, phonenumber, email, company, jobtitle } = req.body;

        // Create a new contact instance
        const newContact = new Database({
            firstname,
            Lastname,
            phonenumber,
            email,
            company,
            jobtitle,
        });

        // Save the contact to the database
        await newContact.save();

        res.status(201).json({ message: "Contact added successfully", contact: newContact });
    } catch (error) {
        res.status(400).json({ error: "Failed to add contact", details: error.message });
    }
};

// PUT: Update a contact by ID
const putFunction = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const { firstname, Lastname, phonenumber, email, company, jobtitle } = req.body;

        // Find and update the contact
        const updatedContact = await Database.findByIdAndUpdate(
            id,
            { firstname, Lastname, phonenumber, email, company, jobtitle },
            { new: true, runValidators: true } // Return updated document and enforce validations
        );

        if (!updatedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        res.status(200).json({ message: "Contact updated successfully", contact: updatedContact });
    } catch (error) {
        res.status(400).json({ error: "Failed to update contact", details: error.message });
    }
};

// DELETE: Remove a contact by ID
const deleteFunction = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters

        // Find and delete the contact
        const deletedContact = await Database.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete contact", details: error.message });
    }
};

module.exports = {
    getFunction,
    postFunction,
    putFunction,
    deleteFunction,
};
