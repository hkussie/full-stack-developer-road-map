async function fetchData () {
    const getUserInput = document.getElementById('add-activity').value;
    try {
        const response = await axios.get(`https://api.github.com/users/${getUserInput}`);
        // Handle the response data
        const data = response.data;

        // Convert the data object to a string
        const dataString = JSON.stringify(data);
        
        // Update the HTML with the data
        const targetDiv = document.getElementById('dataDiv');
        targetDiv.textContent = dataString;
        targetDiv.classList.add('json-response') 
    } catch (error) {
        // Handle any errors
        console.log(error);

        // Display the error message to index.html page
        const targetDiv = document.getElementById('errorDiv');
        targetDiv.textContent = 'An error occurred while fetching the data. Please try again later.';
    }
};