// --- Elements for Dog API ---
const dogButton = document.getElementById("getDogImage");
const dogOutput = document.getElementById("dog-output");

// --- Elements for Cat API ---
const catButton = document.getElementById("getCatImage");
const catOutput = document.getElementById("cat-output");

// Function for Dog Image 

async function fetchDog(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json()
        dogOutput.innerHTML = `<img src = "${data.message}" alt="A cute dog">`;
    } catch (error){
        dogOutput.innerText = "Error loading dog image";
    }
}

// Function for Cat Image

async function fetchCat(){
    try{
        // The Cat API uses an array, so we need [0]!
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        catOutput.innerHTML = `<img src="${data[0].url}" alt="A cute cat">`;
    } catch (error){
        innerText = "Error loading cat image"
    }
}

dogButton.addEventListener("click", fetchDog);
catButton.addEventListener("click", fetchCat);

// --- Elements for Weather API ---
const weatherButton = document.getElementById("getWeather");
const weatherOutput = document.getElementById("weather-output");

// Function for Weather API 

async function fetchWeather(){
    try{
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&current_weather=true");

        const data = await response.json();
        const tempC = data.current_weather.temperature;
        const tempF = (tempC * 1.8) + 32;

        weatherOutput.innerHTML = `
        <h3>Los Angeles, CA</h3>
        <p>Temperature: ${tempF.toFixed(1)}°F</p>
        <p>(${tempC}°C)</p>
        `;
    } catch (error){
        weatherOutput.innerText = "Error loading the weather";
    }
}

weatherButton.addEventListener("click", fetchWeather);

// ---Elements for Currency API ---

const currencyButton = document.getElementById("getExchangeRates");
const currencyOutput = document.getElementById("currency-output");

// Function for Currency API 

async function fetchCurrency(){
    try{
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        const eur = data.rates.EUR;
        const gbp = data.rates.GBP;
        const jpy = data.rates.JPY;
        currencyOutput.innerHTML = `
        <p>1 USD is equivalent to:</p>
        <ul>
            <li>€${eur.toFixed(2)} EUR</li>
            <li>£${gbp.toFixed(2)} GBP</li>
            <li>¥${jpy.toFixed(0)} JPY</li>
        </ul>
        `;
    } catch (error){
        currencyOutput.innerText = "Error loading currency exchange rate";
    } 
}

currencyButton.addEventListener("click", fetchCurrency);

// --- Elements for Movies API ---

const moviesButton = document.getElementById("getMovies");
const moviesOutput = document.getElementById("movies-output");

// Function for Trending Movies API

async function fetchMovies(){
    try{
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=6cd05a42a726f2606d64b64ff504d25c");

        const data = await response.json();
        const movies = data.results;
        let movieHTML = "";

        movies.slice(0,3).forEach(movie => {
            movieHTML += `
            <div class="movie-info">
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" width="100%">
                <h4>${movie.title}</h4>
            </div>
            `;
        });

        moviesOutput.innerHTML = movieHTML;
    } catch (error){
        moviesOutput.innerText = "Error loading movie info";
    }
}

moviesButton.addEventListener("click", fetchMovies);