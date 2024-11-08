const contactManager = require('data');
const { refreshTable } = require('table');

let contacts = contactManager.getContacts();

refreshTable($.contactsTable, contacts);

$.infoButton.addEventListener("click", function () {
    const secondPage = Alloy.createController("SecondPage").getView();
    secondPage.open();
});

$.addButton.addEventListener('click', () => openForm());

function openForm(index) {
    Alloy.createController('form', {
        index,
        openPopup,
        table: $.contactsTable,
    }).getView().open();
}

function deleteContactWrapper(index) {
	let contacts = contactManager.getContacts();
    const dialog = Ti.UI.createAlertDialog({
        title: 'Delete Contact',
        message: `Are you sure you want to delete ${contacts[index].name}?`,
        buttonNames: ['Yes', 'No'],
    });

    dialog.addEventListener('click', (e) => {
        if (e.index === 0) {
            contactManager.deleteContact(index);
            contacts = contactManager.getContacts();
            refreshTable($.contactsTable, contacts, openPopup);
        }
    });

    dialog.show();
}

function openPopup(index) {
	let contacts = contactManager.getContacts();
    const dialog = Ti.UI.createOptionDialog({
        title: `What would you like to do with ${contacts[index].name}?`,
        options: ['Edit', 'Delete', 'Cancel'],
        cancel: 2,
    });

    dialog.addEventListener('click', (e) => {
        if (e.index === 0) openForm(index);
        if (e.index === 1) deleteContactWrapper(index);
    });

    dialog.show();
}

$.index.open();
