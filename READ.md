# 🚀 Multi-API Interactive Dashboard

A dynamic, responsive "mini-app" dashboard built with Vanilla JavaScript, HTML5, and CSS3. This project demonstrates the ability to interact with various third-party REST APIs, handle asynchronous data, and manipulate the DOM to create an engaging user experience.

## 📺 Project Presentation

- **Video Link:** [Attach Disco Video Link Here]
- **Note:** Presentation covers project overview, high-level technical explanation, and a live demonstration.

## 🛠️ Features & APIs Used

This dashboard consolidates eight different mini-applications into a single grid-based interface:

| Section        | API Used         | Functionality                                                                  |
| -------------- | ---------------- | ------------------------------------------------------------------------------ |
| 🐶 Dog Gallery | Dog API          | Fetches and displays a random dog image.                                       |
| 🐱 Cat Gallery | The Cat API      | Fetches random cat images (handles array-based responses).                     |
| 🌤️ Weather     | Open-Meteo       | **Search enabled.** Uses Geocoding for coordinates and displays temp in °F/°C. |
| 💱 Currency    | ExchangeRate API | Converts 1 USD into EUR, GBP, and JPY in real-time.                            |
| 🎬 Movies      | TMDB API         | Displays top 3 trending movies of the day with poster art.                     |
| 🧑‍💻 GitHub      | GitHub API       | **Search enabled.** Fetches user profiles, avatars, and repo counts.           |
| 😂 Joke        | JokeAPI          | Handles single and two-part jokes with safe-mode enabled.                      |
| 🚀 NASA APOD   | NASA API         | (Choice API) Displays the Astronomy Picture of the Day.                        |

## 🧠 Learning Objectives Achieved

- **Asynchronous JavaScript:** Extensive use of `async/await` and the `fetch()` API to handle network requests.
- **Data Handling:** Parsing complex JSON structures, including nested objects (Weather/Currency) and arrays (Cats/Movies).
- **DOM Manipulation:** Dynamically updating the UI using `innerHTML`, `template literals`, and `addEventListener`.
- **Error Handling:** Implemented `try...catch` blocks for every API fetch to ensure a graceful user experience if a service is down.
- **Logic & Math:** Implemented unit conversion (Celsius to Fahrenheit) and string formatting (`.toFixed()`).

## 🚀 Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/al-e-bee/JavaScript-Final-Project-API-Dashboard
    ```

```

```
