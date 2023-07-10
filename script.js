    const apiKey="7396ed72679b58559b4ad55bee27e42e";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    

    const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");

    

async function checkweather(city){
 const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp + "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%"; 
document.querySelector(".wind").innerHTML=data.wind.speed + "Km/Hr";


}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
  });

window.addEventListener("load", async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        const url1 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
        const response = await fetch(url1);
        var data = await response.json();
  
        console.log(data);
  
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/Hr";
      });
    }
  });

