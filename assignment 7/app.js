let inputValue = document.getElementById("cityinput");
let button = document.getElementById("btn");
let temp = document.getElementById("temp");
let conditions = document.getElementById("conditions");
let cityname = document.getElementById("cityname");
let img = document.getElementById("weatherimg")
let minmax = document.getElementById("minmax");


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        cityname.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp-273) ;
        conditions.innerHTML = data.weather[0].description;
        let tempIcon = data.weather[0].icon;
        img.src = "http://openweathermap.org/img/wn/"+tempIcon+"@2x.png";
        // mintemp.innerHTML = Math.round(data.main.temp_min-273);
        // maxtemp.innerHTML = Math.round(data.main.temp_max-273);
        minmax.innerHTML = "min "+ Math.round(data.main.temp_min-273) + "&degC  / max " + Math.round(data.main.temp_max-273) +"&degC";
        inputValue.value = "";
        
              
    })

    .catch(err => alert("Wrong city name!"));
    
})
