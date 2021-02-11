const api = document.getElementById("api");
export async function getUserRamdom() {
    const faker = await fetch(
        "https://randomuser.me/api/"
    );
    let response = await faker.json();
    const fullName = Object.values(response.results[0].name);
    const complet = fullName.map((elem) => elem).join(' ');
    const p = document.createElement('p');
    api.appendChild(p);
    p.append(`${complet}`);
}
