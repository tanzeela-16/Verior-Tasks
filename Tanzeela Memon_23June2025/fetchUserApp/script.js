const userList = document.getElementById('userList');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';

      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;

      userList.appendChild(card);
    });
  })
  .catch(error => {
    userList.innerHTML = `<p class="error">Failed to load users. Try again later.</p>`;
    console.error(error);
  });
