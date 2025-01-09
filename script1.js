const apiKey="d19de8561d6c69539e1a1c9100cfe136";
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city) {
   const response =await fetch(apiUrl + city +`&APPID=${apiKey}`);
   if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";   
   }
  else{
   var data = await response.json();
    //console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src ="images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src ="images/rain.png";
    }
    else if(data.weather[0].main =="drizzle"){
        weatherIcon.src ="images/Drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src ="images/mist.png";
    }
   document.querySelector(".weather").style.display ="block";
   document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click",()=>{

checkWeather(searchBox.value);
})