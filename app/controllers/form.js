const contactManager = require('data');
const { validateContact } = require('validation');
const { refreshTable } = require('table');

let index = null;
let isEditMode = false;
let table = arguments[0]?.table || null; 
let openPopup = arguments[0]?.openPopup || null;

if (arguments[0] && arguments[0].index !== undefined) {
    index = arguments[0].index;
    isEditMode = true;
    const contact = contactManager.getContacts()[index];
    $.nameField.value = contact.name;
    $.emailField.value = contact.email;
    $.phoneField.value = contact.phone;
} else {
    isEditMode = false;
}

function handleSave() {
    const name = $.nameField.value.trim();
    const email = $.emailField.value.trim();
    const phone = $.phoneField.value.trim();

    if (!validateContact(name, email, phone)) return;

    if (isEditMode) {
        contactManager.updateContact(index, { name, email, phone });
    } else {
        contactManager.addContact({ name, email, phone });
    }

    const contacts = contactManager.getContacts();
    refreshTable(table, contacts, openPopup);
    closeForm();
}

function closeForm() {
    $.nameField.value = '';
    $.emailField.value = '';
    $.phoneField.value = '';
    $.contactFormWindow.close();
}

$.saveButton.addEventListener('click', handleSave);
$.cancelButton.addEventListener('click', closeForm);
