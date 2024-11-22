
const API_URL = import.meta.env.VITE_API_KEY;

export async  function getClients() {
    const data = await  fetch(API_URL)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
    return data;
}

export async function getTime() {
    const data = await fetch(API_URL + '/time')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
    return data[0];
}