    const apiKey="e15d3999b66b5c67a5acbdfdbdda8899";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox=document.querySelector(".search input");
    const searchButton=document.querySelector(".search button");

    async function checkWeather(city)
    {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status==404)
        {
            document.querySelector(".error").style.display="block";    
            document.querySelector(".weather").style.display="none";
        }
        else
        {
            var data = await response.json();
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds")
            {
                const weatherIcon=document.querySelector(".weather-icon")
                weatherIcon.src="clouds.png";
            }
            if(data.weather[0].main == "Clear")
            {
                const weatherIcon=document.querySelector(".weather-icon")
                weatherIcon.src="clear.png";
            }
            if(data.weather[0].main == "Rain")
            {
                const weatherIcon=document.querySelector(".weather-icon")
                weatherIcon.src="rain.png";
            }
            if(data.weather[0].main == "Drizzle")
            {
                const weatherIcon=document.querySelector(".weather-icon")
                weatherIcon.src="drizzle.png";
            }
            if(data.weather[0].main == "Mist")
            {
                const weatherIcon=document.querySelector(".weather-icon")
                weatherIcon.src="mist.png";
            }
            if(data.weather[0].main == "Snow")
            {
                const weatherIcon=document.querySelector(".weather-icon")
                weatherIcon.src="snow.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
    }
}

    searchButton.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    })
