var APIKey = "6874cb6cbf6832b2c30d9f7c58d795c3"
var searchInput = document.getElementById("searchvalue");
var searchButton = document.getElementById("searchbtn");

searchButton.addEventListener("click", function(event){
    var city = searchInput.value;
    var weatherurl = ("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={6874cb6cbf6832b2c30d9f7c58d795c3}" + city + "&appid=" + APIKey)

    event.preventDefault()
    console.log(city);
    console.log("working")

    fetch(weatherurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    });
});