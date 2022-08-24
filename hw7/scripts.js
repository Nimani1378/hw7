const root = document.querySelector("tbody");
async function getusers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    users.forEach(element => {
        root.innerHTML += (`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
    </tr>
        `)
    });
}
getusers();