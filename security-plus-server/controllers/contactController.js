import Contacts from "../schema/contacts"

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contacts.find();

        if (!contacts) return res.status(404).json({ message: "No contacts found" });

        res.status(200).json(contats)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const getContact = async (req, res) => {
    try {
        const contact = await Contacts.findOne({ _id: req.params.id });

        if (!contact) return res.status(404).json({ message: "This contact not found" });

        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const newContact = async (req, res) => {

    try {
        const data = { fullname, organization, email, phone, departement };

        const newContact = new Contacts(data);

        res.status(201).json({ message: "new Contact created", contact: newContact })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

