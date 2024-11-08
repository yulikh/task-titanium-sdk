class ContactManager {
    constructor() {
        this.contacts = [];
    }

    getContacts() {
        return [...this.contacts];
    }

    addContact(contact) {
        if (!this.validateContact(contact)) {
            throw new Error('Invalid contact data');
        }
        this.contacts.push(contact);
        return this.getContacts();
    }

    updateContact(index, updatedContact) {
        if (!this.contacts[index]) {
            throw new Error('Contact not found');
        }
        if (!this.validateContact(updatedContact)) {
            throw new Error('Invalid contact data');
        }
        this.contacts[index] = updatedContact;
        return this.getContacts();
    }

    deleteContact(index) {
        if (!this.contacts[index]) {
            throw new Error('Contact not found');
        }
        this.contacts.splice(index, 1);
        return this.getContacts();
    }

    validateContact(contact) {
        const { name, email, phone } = contact;
        return (
            typeof name === 'string' &&
            name.length > 0 &&
            this.validateEmail(email) &&
            this.validatePhone(phone)
        );
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(email);
    }

    validatePhone(phone) {
        const phoneRegex = /^\d{10,}$/;
        return phoneRegex.test(phone);
    }
}

module.exports = new ContactManager();
