(function () {
 //Create variables
    const weatherIconJSON = {
        "200": {
            "label": "thunderstorm with light rain",
            "icon": "storm-showers"
        },

        "201": {
            "label": "thunderstorm with rain",
            "icon": "storm-showers"
        },

        "202": {
            "label": "thunderstorm with heavy rain",
            "icon": "storm-showers"
        },

        "210": {
            "label": "light thunderstorm",
            "icon": "storm-showers"
        },

        "211": {
            "label": "thunderstorm",
            "icon": "thunderstorm"
        },

        "212": {
            "label": "heavy thunderstorm",
            "icon": "thunderstorm"
        },

        "221": {
            "label": "ragged thunderstorm",
            "icon": "thunderstorm"
        },

        "230": {
            "label": "thunderstorm with light drizzle",
            "icon": "storm-showers"
        },

        "231": {
            "label": "thunderstorm with drizzle",
            "icon": "storm-showers"
        },

        "232": {
            "label": "thunderstorm with heavy drizzle",
            "icon": "storm-showers"
        },

        "300": {
            "label": "light intensity drizzle",
            "icon": "sprinkle"
        },

        "301": {
            "label": "drizzle",
            "icon": "sprinkle"
        },

        "302": {
            "label": "heavy intensity drizzle",
            "icon": "sprinkle"
        },

        "310": {
            "label": "light intensity drizzle rain",
            "icon": "sprinkle"
        },

        "311": {
            "label": "drizzle rain",
            "icon": "sprinkle"
        },

        "312": {
            "label": "heavy intensity drizzle rain",
            "icon": "sprinkle"
        },

        "313": {
            "label": "shower rain and drizzle",
            "icon": "sprinkle"
        },

        "314": {
            "label": "heavy shower rain and drizzle",
            "icon": "sprinkle"
        },

        "321": {
            "label": "shower drizzle",
            "icon": "sprinkle"
        },

        "500": {
            "label": "light rain",
            "icon": "rain"
        },

        "501": {
            "label": "moderate rain",
            "icon": "rain"
        },

        "502": {
            "label": "heavy intensity rain",
            "icon": "rain"
        },

        "503": {
            "label": "very heavy rain",
            "icon": "rain"
        },

        "504": {
            "label": "extreme rain",
            "icon": "rain"
        },

        "511": {
            "label": "freezing rain",
            "icon": "rain-mix"
        },

        "520": {
            "label": "light intensity shower rain",
            "icon": "showers"
        },

        "521": {
            "label": "shower rain",
            "icon": "showers"
        },

        "522": {
            "label": "heavy intensity shower rain",
            "icon": "showers"
        },

        "531": {
            "label": "ragged shower rain",
            "icon": "showers"
        },

        "600": {
            "label": "light snow",
            "icon": "snow"
        },

        "601": {
            "label": "snow",
            "icon": "snow"
        },

        "602": {
            "label": "heavy snow",
            "icon": "snow"
        },

        "611": {
            "label": "sleet",
            "icon": "sleet"
        },

        "612": {
            "label": "shower sleet",
            "icon": "sleet"
        },

        "615": {
            "label": "light rain and snow",
            "icon": "rain-mix"
        },

        "616": {
            "label": "rain and snow",
            "icon": "rain-mix"
        },

        "620": {
            "label": "light shower snow",
            "icon": "rain-mix"
        },

        "621": {
            "label": "shower snow",
            "icon": "rain-mix"
        },

        "622": {
            "label": "heavy shower snow",
            "icon": "rain-mix"
        },

        "701": {
            "label": "mist",
            "icon": "sprinkle"
        },

        "711": {
            "label": "smoke",
            "icon": "smoke"
        },

        "721": {
            "label": "haze",
            "icon": "day-haze"
        },

        "731": {
            "label": "sand, dust whirls",
            "icon": "cloudy-gusts"
        },

        "741": {
            "label": "fog",
            "icon": "fog"
        },

        "751": {
            "label": "sand",
            "icon": "cloudy-gusts"
        },

        "761": {
            "label": "dust",
            "icon": "dust"
        },

        "762": {
            "label": "volcanic ash",
            "icon": "smog"
        },

        "771": {
            "label": "squalls",
            "icon": "day-windy"
        },

        "781": {
            "label": "tornado",
            "icon": "tornado"
        },

        "800": {
            "label": "clear sky",
            "icon": "sunny"
        },

        "801": {
            "label": "few clouds",
            "icon": "cloudy"
        },

        "802": {
            "label": "scattered clouds",
            "icon": "cloudy"
        },

        "803": {
            "label": "broken clouds",
            "icon": "cloudy"
        },

        "804": {
            "label": "overcast clouds",
            "icon": "cloudy"
        },


        "900": {
            "label": "tornado",
            "icon": "tornado"
        },

        "901": {
            "label": "tropical storm",
            "icon": "hurricane"
        },

        "902": {
            "label": "hurricane",
            "icon": "hurricane"
        },

        "903": {
            "label": "cold",
            "icon": "snowflake-cold"
        },

        "904": {
            "label": "hot",
            "icon": "hot"
        },

        "905": {
            "label": "windy",
            "icon": "windy"
        },

        "906": {
            "label": "hail",
            "icon": "hail"
        },

        "951": {
            "label": "calm",
            "icon": "sunny"
        },

        "952": {
            "label": "light breeze",
            "icon": "cloudy-gusts"
        },

        "953": {
            "label": "gentle breeze",
            "icon": "cloudy-gusts"
        },

        "954": {
            "label": "moderate breeze",
            "icon": "cloudy-gusts"
        },

        "955": {
            "label": "fresh breeze",
            "icon": "cloudy-gusts"
        },

        "956": {
            "label": "strong breeze",
            "icon": "cloudy-gusts"
        },

        "957": {
            "label": "high wind, near gale",
            "icon": "cloudy-gusts"
        },

        "958": {
            "label": "gale",
            "icon": "cloudy-gusts"
        },

        "959": {
            "label": "severe gale",
            "icon": "cloudy-gusts"
        },

        "960": {
            "label": "storm",
            "icon": "thunderstorm"
        },

        "961": {
            "label": "violent storm",
            "icon": "thunderstorm"
        },

        "962": {
            "label": "hurricane",
            "icon": "cloudy-gusts"
        }
    };
    let backColours = chroma.scale(['#ff0000','#a1d3cc']).mode('lch').colors(6);
    let location = document.querySelector(".location"),
        updateIcon = document.querySelector(".icon-window"),
        wind = document.querySelector(".wind"),
        speed = document.querySelector(".speed"),
        temp = document.querySelector(".temp-now"),
        onOff = document.querySelector("#weather"),
        loadMessage = document.querySelector(".loading"),
        windDirection,
        longitude,
        latitude,
        prefix,
        icon,
        code,
        changeUnitsC,
        changeUnitsF,
        //btnBool is used to switch between C and F
        btnBool = true;





//Get Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementsByClassName(".titles").innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        getWeather();
    }


//get weather

function getWeather() {
    let apiKey = "&APPID=b00dc873a7c4e6d3168f7a51fc62af80"
    let api = "https://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon="+ longitude+"&units=metric"+apiKey;
    fetch(api)
        .then(function(response) {
            return response.json();

        })
        .then(function(resp) {
         prefix = 'wi wi-';
         code = resp.weather[0].id;
         icon = weatherIconJSON[code].icon;

        // If we are not in the ranges mentioned above, add a day/night prefix.
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }
        console.log(resp);
        // Finally tack on the prefix.
        icon = prefix + icon;
        //now change the weather and the icons
            location.innerHTML = resp.name;
            updateIcon.innerHTML = "<i class='"+icon+"'></i>";
            windDirection = resp.wind.deg;
            wind.innerHTML = "<i class='wi wi-wind towards-"+windDirection+"-deg'></i>";
            speed.innerHTML =  "Wind Speed: "+resp.wind.speed+ " kph";
            temp.innerHTML = resp.main.temp+" °C";
            //Saving temp in C and F for button
            changeUnitsC = resp.main.temp;
            changeUnitsF = resp.main.temp *1.8 +32;
            changeBackground(resp.main.temp);
           onOff.classList.remove('disabled');
           loadMessage.classList.add("disabled");


    });
}

//background variety based on temp
function changeBackground(tempC){
    if( tempC >= 30) {
        d3.select("body").transition()
            .style("background-color", backColours[0]);
    } else if (tempC >= 25) {

        d3.select("body").transition()
            .style("background-color", backColours[1]);
    } else if (tempC >= 20) {
        d3.select("body").transition()
            .style("background-color", backColours[2]);
    } else if (tempC >=10) {

        d3.select("body").transition()
            .style("background-color", backColours[3]);
    }else if (tempC >= 0) {
        d3.select("body").transition()
            .style("background-color", backColours[4]);
    }
      else {
        d3.select("body").transition()
                .style("background-color", backColours[5]);

    }
//finally the change temp function
    document.querySelector('#change-unit').addEventListener("click",cToF);
    function cToF(){
        if(btnBool){
            temp.innerHTML = changeUnitsF+" °F";
            btnBool = false;
        } else{
            temp.innerHTML = changeUnitsC+" °C";
            btnBool = true;
        }
    }
}
})();

