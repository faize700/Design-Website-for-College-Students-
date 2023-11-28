let foundItems = [];

    // Function to report a lost item
    function reportLostItem() {
        const itemName = document.getElementById('itemName').value;
        const itemContact = document.getElementById('itemContact').value;
        const itemDescription = document.getElementById('itemDescription').value;

        if (itemName && itemContact && itemDescription) {
            // Create an object for the lost item
            const lostItem = {
                name: itemName,
                contact: itemContact,
                description: itemDescription
            };

            // Add the lost item to the array
            foundItems.push(lostItem);

            // Update the found items list
            displayFoundItems();

            // Reset the form
            document.getElementById('itemName').value = '';
            document.getElementById('itemContact').value = '';
            document.getElementById('itemDescription').value = '';

            // You can also send this data to a server for storage
            // Send data to the server using AJAX or fetch API
            // Example: sendLostItemToServer(lostItem);
        } else {
            alert('Please fill in all fields');
        }
    }

    // Function to display found items
    function displayFoundItems() {
        const foundItemsList = document.getElementById('foundItemsList');
        foundItemsList.innerHTML = '';

        foundItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Phone: ${item.contact} - ${item.description}`;
            foundItemsList.appendChild(listItem);
        });
    }
