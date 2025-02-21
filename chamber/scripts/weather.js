// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

// Declare the URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=fa11bf6462ba993532ee5994fb095f22';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();


document.addEventListener("DOMContentLoaded", () => {
    const activitiesContainer = document.getElementById("activities");

    fetch("data/links.json")
        .then(response => response.json())
        .then(data => {
            data.weeks.forEach(week => {
                // Create a section for each week
                const weekSection = document.createElement("section");
                const weekTitle = document.createElement("h2");
                weekTitle.textContent = week.week;

                // Create a list for links
                const linkList = document.createElement("ul");

                week.links.forEach(activity => {
                    const listItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.href = activity.url;
                    link.textContent = activity.title;
                    listItem.appendChild(link);
                    linkList.appendChild(listItem);
                });

                weekSection.appendChild(weekTitle);
                weekSection.appendChild(linkList);
                activitiesContainer.appendChild(weekSection);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
