const container = document.querySelector('.container');
const search = document.querySelector('.search__Box button');
const weatherBox = document.querySelector('.weather__Box');
const weatherDetails = document.querySelector('.weather__Details');
const error404 = document.querySelector('.not__Found');

search.addEventListener('click', () => {

    const APIKey = 'c3d96ef40900a4b6dedccc0f944da336';
    const city = document.querySelector('.search__Box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }