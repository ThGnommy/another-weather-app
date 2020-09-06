const API_KEY = process.env.API_KEY;

const apiContainer = document.querySelectorAll("#api-container");
const cityNotFound = document.getElementById("citynotfound");

const showDangerText = () => {
  cityNotFound.style.display = "flex";
};

const hideDangerText = () => {
  cityNotFound.style.display = "none";
};

const hiddenContainer = () => {
  apiContainer.forEach((element) => {
    element.style.display = "none";
  });
};

const showContainer = () => {
  apiContainer.forEach((element) => {
    element.style.display = "flex";
  });
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const input = document.querySelector("input");
const button = document.querySelector("button");

let currentCity = document.getElementById("city");
let description = document.getElementById("weather-description");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let iconCondition = document.getElementById("icon-condition");

const updateData = (city, desc, tmp, h, ws, img) => {
  currentCity.innerHTML = city;
  description.innerHTML = desc;
  temp.innerHTML = tmp.toFixed(0) + "°";
  humidity.innerHTML = h.toFixed(0);
  windSpeed.innerHTML = ws.toFixed(0);
  iconCondition.src = img;
};

const fetchData = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${API_KEY}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      if (input.value === "") {
        hiddenContainer();
      } else if (!res.ok) {
        showDangerText();
        hiddenContainer();
      } else if (res.ok) {
        hideDangerText();
        showContainer();
      }
      return res.json();
    })
    .then((data) => {
      updateData(
        capitalize(`${data.name}, ${data.sys.country}`),
        capitalize(data.weather[0].description),
        data.main.temp,
        data.main.humidity,
        data.wind.speed,
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener("click", fetchData);
