var APIKey = "6874cb6cbf6832b2c30d9f7c58d795c3"

var searchInput = document.getElementById("searchvalue");
var searchButton = document.getElementById("searchbtn");
var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
if (!searchHistory) {
    searchHistory = [];
}
function renderHistoryButtons() {
    while (historyButtons.one) {
        historyButtons.remove(historyButtons.one);
    }
    searchHistory.forEach(function(city) {
        var button = document.createElement('button');
        button.classList.add('cityButton');
        button.textContent = city;
        button.dataset.city = city;
        historyButtons.append(button);
    });
}
renderHistoryButtons();

searchButton.addEventListener("click", function(event){
    var city = searchInput.value;
    var weatherurl = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial")
    var forecastUrl = ("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial")
    event.preventDefault()
    
    fetch(weatherurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
        var cityNameEl= document.getElementById("cityName")
        cityNameEl.innerHTML= (data.name)
        var cityDataCardEl= document.getElementById("cityDataCard")
        cityDataCardEl.innerHTML= ("Weather: " + data.weather[0].description)
        var cityDataCardTemp= document.getElementById("cityDataCardTemp")
        cityDataCardTemp.innerHTML= ("Temp: " + data.main.temp + "°F")
        var cityDataCardHumid= document.getElementById("cityDataCardHumid")
        cityDataCardHumid.innerHTML = ("Humidity: " + data.main.humidity)
        var cityDataCardWind= document.getElementById("cityDataCardWind")
        cityDataCardWind.innerHTML = ("Wind: " + data.wind.speed + "mph")
    })
    .catch(error => {
      console.log(error)
    });
    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        var firstDayDate = document.getElementById("firstDayDate")
        var firstDayWeather = document.getElementById("firstDayWeather")
        var firstDayLow = document.getElementById("firstDayLow")
        var firstDayHigh = document.getElementById("firstDayHigh")

        firstDayDate.innerHTML = dayjs().format('MMMM-D-YYYY')
        firstDayWeather.innerHTML = (data.list[0].weather[0].main)
        firstDayLow.innerHTML = ("Low: " + data.list[0].main.temp_min + "°F")
        firstDayHigh.innerHTML = ("High: " + data.list[0].main.temp_max + "°F")

        var secondDayDate = document.getElementById("secondDayDate")
        var secondDayWeather = document.getElementById("secondDayWeather")
        var secondDayLow = document.getElementById("secondDayLow")
        var secondDayHigh = document.getElementById("secondDayHigh")

        secondDayDate.innerHTML = dayjs().add(1, 'day').format('MMMM-D-YYYY')
        secondDayWeather.innerHTML = (data.list[1].weather[0].main)
        secondDayLow.innerHTML = ("Low: " + data.list[1].main.temp_min + "°F")
        secondDayHigh.innerHTML = ("High: " + data.list[1].main.temp_max + "°F")

        var thirdDayDate = document.getElementById("thirdDayDate")
        var thirdDayWeather = document.getElementById("thirdDayWeather")
        var thirdDayLow = document.getElementById("thirdDayLow")
        var thirdDayHigh = document.getElementById("thirdDayHigh")

        thirdDayDate.innerHTML = dayjs().add(2, 'day').format('MMMM-D-YYYY')
        thirdDayWeather.innerHTML = (data.list[2].weather[0].main)
        thirdDayLow.innerHTML = ("Low: " + data.list[2].main.temp_min + "°F")
        thirdDayHigh.innerHTML = ("High: " + data.list[2].main.temp_max + "°F")

        var fourthDayDate = document.getElementById("fourthDayDate")
        var fourthDayWeather = document.getElementById("fourthDayWeather")
        var fourthDayLow = document.getElementById("fourthDayLow")
        var fourthDayHigh = document.getElementById("fourthDayHigh")

        fourthDayDate.innerHTML = dayjs().add(3, 'day').format('MMMM-D-YYYY')
        fourthDayWeather.innerHTML = (data.list[3].weather[0].main)
        fourthDayLow.innerHTML = ("Low: " + data.list[3].main.temp_min + "°F")
        fourthDayHigh.innerHTML = ("High: " + data.list[3].main.temp_max + "°F")

        var fifthDayDate = document.getElementById("fifthDayDate")
        var fifthDayWeather = document.getElementById("fifthDayWeather")
        var fifthDayLow = document.getElementById("fifthDayLow")
        var fifthDayHigh = document.getElementById("fifthDayHigh")

        fifthDayDate.innerHTML = dayjs().add(4, 'day').format('MMMM-D-YYYY')
        fifthDayWeather.innerHTML = (data.list[4].weather[0].main)
        fifthDayLow.innerHTML = ("Low: " + data.list[4].main.temp_min + "°F")
        fifthDayHigh.innerHTML = ("High: " + data.list[4].main.temp_max + "°F")
     })
    .catch(error => {
      console.log(error)
    });

    var historyButtons = document.getElementById('historyButtons');
    var maxHistoryEntries = 5;
    searchButton.addEventListener('click', function() {
        var city = searchInput.value.trim();
        if (city) {
            searchHistory.unshift(city);
            if (searchHistory.length > maxHistoryEntries) {
                searchHistory.pop();
            }
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            searchInput.value = '';
            renderHistoryButtons();
        }
    });
    historyButtons.addEventListener('click', function(event) {
        var button = event.target.closest('.cityButton');
        if (button) {
            searchInput.value = button.dataset.city;
        }
    });
});