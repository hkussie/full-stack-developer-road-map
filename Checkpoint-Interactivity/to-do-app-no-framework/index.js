const createNewItem = () => {
    // Get the value put in by the user
    const getUserInput = document.getElementById('add-activity').value; 

    // Create a new node to display text
    const bulletPoint = document.createElement("ol");
    const textNode = document.createTextNode(getUserInput);
    bulletPoint.append(textNode);

    // Append node to content div element 
    const element = document.getElementById("content");
    element.appendChild(bulletPoint);
};

const removeItem = () => {
    // Remove child node of parrent node content
    const parent = document.getElementById("content");
    const child = document.getElementsByTagName("ol");

    parent.removeChild(child[0]);
}; 