const fullText = "@ Qwertz";
let indexText = 0;

function animateTitle() {
    indexText++;

    if (indexText > fullText.length) {
        indexText = 1;
    }

    document.title = fullText.substring(0, indexText);
}

setInterval(animateTitle, 700);

const locations = [
    { country: "USA", city: "New York", zone: "America/New_York" },
    { country: "USA", city: "Los Angeles", zone: "America/Los_Angeles" },
    { country: "Germany", city: "Berlin", zone: "Europe/Berlin" },
    { country: "England", city: "London", zone: "Europe/London" },
    { country: "Russia", city: "Moscow", zone: "Europe/Moscow" },
    { country: "Japan", city: "Tokyo", zone: "Asia/Tokyo" },
    { country: "China", city: "Beijing", zone: "Asia/Shanghai" },
];

let currentIndex = 0;

function updateClock() {
    const container = document.getElementById("clock-container");

    if (!container) return;

    container.classList.remove("show");

    setTimeout(() => {
        const loc = locations[currentIndex];

        const timeString = new Date().toLocaleTimeString("de-DE", {
            timeZone: loc.zone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        container.innerHTML = `
            <div class="clock-item">
                <p class="country">${loc.country}</p>
                <p class="city">${loc.city}</p>
                <p class="time">${timeString}</p>
            </div>
        `;

        container.classList.add("show");

        currentIndex = (currentIndex + 1) % locations.length;

    }, 400);
}

updateClock();

setInterval(updateClock, 5000);