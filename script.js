// get github api
const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
getUsers('systemry420');


// fetch data
async function getUsers(user){
    const response = await fetch(APIURL + user);
    const result = await response.json();

    console.log(result);
    showCard(result);
}


function showCard(user){
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div>
            <img src="${user.avatar_url}" alt="">
        </div>
        <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul id="info">
                <li>${user.followers}</li>
                <li>${user.following}</li>
                <li>${user.repos_url}</li>
        </div>
        
    `;

    main.appendChild(card);
}