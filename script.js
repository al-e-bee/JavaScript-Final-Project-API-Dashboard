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

// --- Elements for GitHub User API ---

const getUserButton = document.getElementById("getGitHubUser");
const userOutput = document.getElementById("github-output");

// Function for GitHub API

async function fetchUser(){
    const username = prompt("Enter a GitHub username:");
    if(!username) return;
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok){
            userOutput.innerHTML = `<p>User "${username}" not found. Try again!</p>`;
            return;
        }

        const data = await response.json();

        userOutput.innerHTML = `
        <div class="github-profile">
                <img src="${data.avatar_url}" alt="${data.login}" style="width: 80px; border-radius: 50%;">
                <h3>${data.name || data.login}</h3>
                <p>${data.bio || "No bio available"}</p>
                <p><strong>Repos:</strong> ${data.public_repos}</p>
                <a href="${data.html_url}" target="_blank">View Profile</a>
            </div>
            `;
    } catch (error){
        userOutput.innerText = "Error fetching GitHub User";
    }
}

getUserButton.addEventListener("click", fetchUser);


// --- Elements for Joke API ---

const getJokeButton = document.getElementById("getJoke");
const jokeOutput = document.getElementById("joke-output");


// Function for Joke API 

async function fetchJoke(){
    try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
        const data = await response.json();

        let finalJoke = "";

        if(data.type === "single"){
            finalJoke = `<p>${data.joke}</p>`;
        } else {
            finalJoke = `
            <p><strong>${data.setup}</strong></p>
            <p><em>${data.delivery}</em></p>
            `;
        }

        jokeOutput.innerHTML = finalJoke;
    } catch (error){
        jokeOutput.innerText = "Error loading joke. This is some serious funny business..."; 
    }
}

getJokeButton.addEventListener("click", fetchJoke);

// --- Elements for Public API ---

const publicApiButton = document.getElementById("getPublicApiInfo");
const publicApiOutput = document.getElementById("publicapi-output");

// Function for Public API

async function fetchPublicApi(){
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const data = await response.json();

        publicApiOutput.innerHTML = `
        <div class="nasa-container">
            <img src="${data.url}" alt="${data.title}" style="width: 100%; border-radius: 8px";>
            <h4 style="margin-top: 10px;">${data.title}</h4>
            </div>
            `;
    } catch (error){
        publicApiOutput.innerText = "The stars are hidden today. Check back later!";
    }
}

publicApiButton.addEventListener("click", fetchPublicApi);