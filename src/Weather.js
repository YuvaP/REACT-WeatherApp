import React, {useState, useEffect} from 'react';
import './style.css';
import WeatherCard from './WeatherCard';
import Clock from './Clock';
 

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Santa Clara");
  const [newWeatherInfo, setNewWeatherInfo] = useState({});

  useEffect(()=>{
    getWeatherInfo();
  },[]);

  const getWeatherInfo = async ()=>{
    try{
      //const api_key=process.env.REACT_APP_RAPID_API_KEY;
      const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=imperial&appid=859173d15e3462bf37fb216800794adb`
      const fetch_response=await fetch(api_url);
      const json_data = await fetch_response.json();
      
      console.log("hello");
      const {temp, temp_min, temp_max, humidity, pressure} = json_data.main;
      const {main:weathermood} = json_data.weather[0];
      const {speed} = json_data.wind;
      const {name:place} = json_data; 
     // const {dt} = json_data;
      //console.log(dt);
            
      const myNewWeatherInfo = {temp, temp_min, temp_max, weathermood, speed, place, humidity, pressure};


      console.log(myNewWeatherInfo);
      setNewWeatherInfo(myNewWeatherInfo);
      console.log(newWeatherInfo);
     
    }catch(error){
      console.log(error);
    }
  } ;

 

  return (
<>
    <div className='searchbox'>
        <input type='text' name='box' id="myplace" placeholder='Type City Name Here...' autoFocus
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        />
              
        <div className='btn'>
          <button type='submit' onClick={getWeatherInfo}><i className='material-icons'>search</i></button>
        </div>
    </div>

    <WeatherCard newWeatherInfo={newWeatherInfo} />
    <Clock />
  </>
  ) 
}

export default Weather;