const apiKey = "b8142e07164431e328e6e6aaaa5d08c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".searchbox");
const searchbtn = document.querySelector(".searchbutton");
const weathericon = document.querySelector(".weathericon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temper").innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector(".percent").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".err").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})