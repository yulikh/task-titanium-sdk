const taskDescription = `
Functionality:
- 2 pages Application
- First page:
    - Table with contacts (4 columns)
    - 3 fields: Name, Email, Phone
    - Last column (Action) with Edit/Delete buttons
    - Add button:
        - Form with 3 fields for adding new contact
        - All fields are required
        - Validate Email field (any standard email validation)
        - Validate Phone field (any standard phone validation)
    - Delete button:
        - Delete contact with confirmation dialog
    - Edit button:
        - Edit contact information
- Second page:
    - Just information about task from the current description

Codebase:
- Code should be clean and well-formatted (any popular codestyle from Google, etc.)
- Add some tests if possible
- Upload code to Git and send a link
`;

$.descriptionLabel.text = taskDescription;

$.backButton.addEventListener("click", function () {
    $.getView().close(); 
});

