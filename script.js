// get github api
const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
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

    card.innerHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="">
            </div>
            <div>
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul id="info">
                    <li>${user.followers} followers</li>
                    <li>${user.following} following</li>
                    <li>${user.public_repos} repos</li>
            </div>
        </div>
    `;

    main.append(card);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const input = search.value;

    if(input){
        getUsers(input);
        search.value = '';
        main.innerHTML = '';
    }
})