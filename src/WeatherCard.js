import React, {useState, useEffect} from 'react';
import './style.css';


const WeatherCard = ({newWeatherInfo}) => {
  const [weatherState, setWeatherState] = useState('');
  const {temp, temp_min, temp_max, weathermood, speed, place, humidity, pressure} = newWeatherInfo;

  //let sec = dt;
  //let date = new Date(sec * 1000);
  //let timeStr =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   //const timeZoneList = Intl.Locale.prototype.timeZones;
   //console.log(timeZoneList);

  useEffect(()=>{
    if (weathermood){
      switch (weathermood){
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;

        case 'Haze':
          setWeatherState("wi-fog");
          break;

        case 'Clear':
          setWeatherState("wi-day-sunny");
          break;

        case 'Mist':
          setWeatherState("wi-day-sprinkle");
          break;

          case 'Thunderstorm':
          setWeatherState("wi-thunderstorm");
          break;
  

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
  return (
    <>

<div className='cards'>
      <div className='card'>
        <div className='container'>
          <div className='icons'>
          <i className={`wi ${weatherState}`}></i>
          </div>
          </div>
          
          <div className='currentInfo'>
{/*<div className='currentData'><span className= 'dataStyle'><h4>Current Date</h4> </span> {}</div>*/}
                     
            <div className='currentData'><span className= 'dataStyle'><h4>Location </h4> </span> {place}</div>
            <div className='currentData'> <span className= 'dataStyle'><h4>Temperature </h4> </span> {temp}&deg;C</div>
            <div className='currentData'><span className= 'dataStyle'><h4>Humidity </h4> </span> {humidity}</div>
            <div className='currentData'><span className= 'dataStyle'><h4>Pressure </h4> </span> {pressure}</div>
          </div>
      
        
          <div className='weatherInfo'>
              
            <div className='currentData1'><span className= 'dataStyle'><h4>MinTemp</h4> </span>  {temp_min}&deg;C </div>
            <div className='currentData1'><span className='dataStyle'> <h4>MaxTemp</h4> </span> {temp_max}&deg;C</div>
            <div className='currentData1'><span className='dataStyle'> <h4>WindSpeed</h4> </span> {speed}</div>
            <div className='currentData1'><span className='dataStyle'> <h4>Observation</h4> </span> {weathermood}</div>
          </div>
{/*<div className='coronaInfo'>
            
            <div className='currentData'>NewCases </div>
            <div className='currentData'>TotalCases </div>
            <div className='currentData'>Recovered</div>
            <div className='currentData'>TotalDeath</div>
             
            </div>
          <div className='liveTraffic'>Traffic</div>*/}

      
      </div>

    </div>

    </>
  )
}

export default WeatherCard;