// Tu código aquí
const photo = document.getElementById('photo');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

const generatePersonBtn = document.getElementById('btn');

generatePersonBtn.addEventListener('click', async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0].name.first);
    photo.src = data.results[0].picture.medium;
    firstName.textContent = data.results[0].name.first;
    lastName.innerHTML = data.results[0].name.last;
    country.innerHTML = data.results[0].location.country;
    phone.innerHTML = data.results[0].phone;
    email.innerHTML = data.results[0].email;
})
