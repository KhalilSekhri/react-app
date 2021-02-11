const URL = "https://randomuser.me/api/";
const api = document.getElementById("api");
const p = document.createElement('p');
const avatar = document.getElementById('avatar');

export async function getUserRamdom() {
    const faker = await fetch(URL);
    let response = await faker.json();
    const fullName = Object.values(response.results[0].name);
    const gender = response.results[0].gender;
    gender === 'female' ? avatar.setAttribute('src', 'assets/img/woman.svg') : avatar.setAttribute('src', 'assets/img/man.svg')
    const complet = fullName.map((elem) => elem).join(' ');
    api.appendChild(p);
    p.append(`${complet}`);
}

/* const p2 = document.createElement('p');
export const apiNoAsync = function () {
    api.appendChild(p2);
    p2.append("Loading...");
    fetch(URL)
        .then((response) => response.json())
        .then((people) => p2.innerHTML = getFullName(people.results[0].name));
}

const getFullName = (user) => {
    return `<p>${user.title} ${user.first} ${user.last}</p>`
}; */