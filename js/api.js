function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => display(data))
}

function display(data) {
    const list = document.getElementById('user');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} -   address: ${user.address.street}`;
        list.appendChild(li)
    }
}