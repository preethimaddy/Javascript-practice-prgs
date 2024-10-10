// Remove duplicates from an array

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
  ];

  let uniqueUsers = [...new Map(users.map(user => [user.id, user])).values()]
  console.log(uniqueUsers);