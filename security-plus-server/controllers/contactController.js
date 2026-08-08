import Contacts from "../schema/contact"


export const getContacts = async (req, res) => {

    try {
        const contacts = await Contacts.find();
        if (!contacts) return res.status(404).json({ message: "Contacts not found" })

        res.status(200).json(contacts)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const getContact = async (req, res) => {

    try {
        const contact = await Contacts.findOne({ _id });
        if (!contact) return res.status(404).json({ message: "Contacts not found" })

        res.status(200).json(contacts)
    } catch (error) {
        res.status(400).json(error.message)
    }
}