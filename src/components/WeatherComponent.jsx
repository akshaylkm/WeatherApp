import { Air, LightMode, Opacity } from '@mui/icons-material';
import React from 'react'

function WeatherComponent(weather) {
  console.log(weather);
  return (
        <div className=' bg-slate-200 sm:w-96 w-64 h-96 p-4 rounded-xl sh'>
          <div className=' bg-slate-200 h-1/6 text-center'>
              <h1 className=' text-gray-500 font-bold text-3xl'>Weather APP</h1>
          </div>
          <div className=' bg-slate-200 h-2/6 flex justify-evenly items-center'>
              <h1 className='text-2xl font-extrabold text-gray-700'>{`${Math.floor(weather.weather.main.temp-273)}°C`}</h1>
              <h1>{`l ${weather?.weather.weather[0].description}`}</h1>
              {/* <img src="" alt="img" /> */}
          </div>
          <div className=' bg-slate-200 h-3/6'>
              <h1 className='text-4xl font-normal text-center text-gray-500'>{weather?.weather.name}</h1>
              <div className=' h-36 flex justify-around items-center'>
                
                <div className=' w-20 h-24 p-3 text-center shadow-xl rounded-md'>
                  <LightMode/>
                  <h1>{weather.weather.main.humidity}</h1>
                  <p>Humidity</p>
                </div>
                <div className=' w-20 h-24 p-3 text-center shadow-xl rounded-md'>
                  <Air/>
                  <h1>{weather.weather.wind.speed}</h1>
                  <p>wind</p>
                </div>
                <div className=' w-20 h-24 p-3 text-center shadow-xl rounded-md'>
                  <Opacity/>
                  <h1>{weather.weather.main.pressure}</h1>
                  <p>pressure</p>
                </div>
              </div>
          </div>
        </div>
  )
}

export default WeatherComponent