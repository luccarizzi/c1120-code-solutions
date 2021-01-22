
fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
  .then(response => response.json())
  .then(data => console.log('users', data));

fetch('https://pokeapi.co/api/v2/pokemon/dragonite', { method: 'GET' })
  .then(response => response.json())
  .then(data => console.log('dragonite', data));
