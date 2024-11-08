function refreshTable(table, contacts, openPopup) {
    if (!table || typeof table.setData !== 'function') {
        console.error("TableView is undefined or not a valid TableView instance.");
        return;
    }

    const rows = [];

    const headerRow = Ti.UI.createTableViewRow({
        height: 40,
        backgroundColor: '#f0f0f0',
    });

    headerRow.add(Ti.UI.createLabel({
        text: 'Name',
        left: 10,
        width: '25%',
        font: { fontWeight: 'bold', fontSize: 16 },
    }));

    headerRow.add(Ti.UI.createLabel({
        text: 'Email',
        left: '35%',
        width: '30%',
        font: { fontWeight: 'bold', fontSize: 16 },
    }));

    headerRow.add(Ti.UI.createLabel({
        text: 'Phone',
        left: '70%',
        width: '20%',
        font: { fontWeight: 'bold', fontSize: 16 },
    }));

    rows.push(headerRow);

    if (contacts.length > 0) {
        contacts.forEach((contact, index) => {
            const row = Ti.UI.createTableViewRow({ height: 50 });

            row.add(Ti.UI.createLabel({
                text: contact.name,
                left: 10,
                width: '30%',
            }));

            row.add(Ti.UI.createLabel({
                text: contact.email,
                left: '35%',
                width: '30%',
            }));

            row.add(Ti.UI.createLabel({
                text: contact.phone,
                left: '70%',
                width: '25%',
            }));

            row.addEventListener('click', () => openPopup(index));
            rows.push(row);
        });
    } else {
        const emptyRow = Ti.UI.createTableViewRow({
            title: 'No contacts available',
            color: '#888',
            height: 50,
        });
        rows.push(emptyRow);
    }

    table.setData(rows);
}

module.exports = {
    refreshTable,
};
