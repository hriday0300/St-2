async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <p class="heading">${user.id}  <b>${user.name}</b></p>
                            <p class="username"><b>Username : </b>${user.username}</p>
                            <p class="email"><b class="bold">Email : </b>${user.email}</p>
                            <p class="address"><b>Address : </b>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                            <p class="geo">${user.address.geo.lat } ${user.address.geo.lng}</p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.data');
    container.innerHTML = html;
}

renderUsers();