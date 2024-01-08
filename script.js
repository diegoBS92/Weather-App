let input = document.getElementById("location");
let btn = document.querySelector(".btn");
let temp = document.querySelector(".temp");
let locationinfo = document.querySelector(".locationinfo");
let displayWeather = document.querySelector(".displaWeather");

async function getWeather() {
  let value = input.value ? input.value : "el salvador";
  let search = `https://api.weatherapi.com/v1/current.json?key=0df75865e9f547bea19182521240601&q=${value}`;
  let request = await fetch(search, { mode: "cors" });
  let data = await request.json();
  console.log(data);

  locationinfo.innerHTML = data.location.name;
  temp.innerHTML = `Temperature: ${data.current["feelslike_c"]} °C /  ${data.current["feelslike_f"]} °F`;
  let img = new Image();
  img.src = data.current.condition.icon;
  temp.appendChild(img);
  displayWeather.classList.add("show");
}

btn.addEventListener("click", getWeather);
