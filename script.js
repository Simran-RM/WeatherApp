let key="1349be8740712b6ac3a56a30022946e2";


let search_btn=document.querySelector('.search');
let weather_Data=document.querySelector('.display');

function fetchData(){
    let input = document.querySelector('.user-input');
    let city_name = input.value;    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=metric`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data=>{
            let Temperature=data.main.temp;
            let Feels_Like = data.main.feels_like;
            let Minimum_Temperature = data.main.temp_min;
            let Maximum_temperature = data.main.temp_max;
            let Weather = data.weather[0].description;

            let result = {
                city_name,
                Temperature,
                Feels_Like,
                Minimum_Temperature,
                Maximum_temperature,
                Weather
            };
            weather_Data.innerHTML = '';

            const values = Object.entries(result);

            for(let [key,value] of values){
                item = document.createElement('p');
                item.textContent=`${key} : ${value}`
                weather_Data.appendChild(item);
                
            }
            input.value = "";
            // console.log("City:",city_name,"Temperature:",data.main.temp,"\nFeels Like:",data.main.feels_like,"\nMinimum_Temperature:",data.main.temp_min,"\nMaximum_temperature:",data.main.temp_max,"\nWeather:",data.weather[0].description);
        })
        .catch(error=>{
            // console.error('Fetch error',error);
            weather_Data.innerHTML = '';
            item=document.createElement('p');
            item.textContent = "Please Enter a Valid city name";
            weather_Data.appendChild(item);
        });
}


search_btn.addEventListener("click",()=>{
    fetchData();
})
