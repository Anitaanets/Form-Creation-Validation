document.addEventListener('DOMContentLoaded', function () {
  async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const dataContainer = document.getElementById('api-data');
      
      try {
          // Fetch user data from the API
          const response = await fetch(apiUrl);
          
          // Check if the response is ok (status 200)
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          // Convert the response to JSON
          const users = await response.json();

          // Clear the loading message
          dataContainer.innerHTML = '';

          // Create a user list and append each user’s name
          const userList = document.createElement('ul');
          users.forEach(user => {
              const listItem = document.createElement('li');
              listItem.textContent = user.name;
              userList.appendChild(listItem);
          });

          // Append the user list to the container
          dataContainer.appendChild(userList);

      } catch (error) {
          // If there's an error, display an error message
          dataContainer.innerHTML = 'Failed to load user data.';
      }
  }

  // Call the fetchUserData function once the DOM content is loaded
  fetchUserData();
});
