// get github api
const APIURL = 'https://api.github.com/users/';

getUsers('');


// fetch data
async function getUsers(user){
    const response = await fetch(APIURL + user);
    const result = await response.json();

    console.log(result);
}