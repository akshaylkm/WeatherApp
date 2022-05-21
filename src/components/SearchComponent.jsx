import React from 'react'

function SearchComponent(props) {

  const cityChangeHandler = (event)=> {
    props.updatedCity(event.target.value)
    console.log(props.city)
  }
  return (
        <div className=' bg-slate-200 sm:w-96 w-72 h-96 shadow-2xl rounded-xl p-4'>
          <div className=' bg-slate-200 h-1/5 flex justify-center items-center'>
          <h1 className=' font-bold text-3xl text-gray-500'>Weather App</h1>
          </div>
          <form onSubmit={props.fetchWeather} className='bg-slate-200 h-1/5 flex justify-center items-center'>
          <input className='pl-2'  type="text" value={props.city}  placeholder='search city' onChange={cityChangeHandler} />
          <button className=' bg-sky-400 w-20 rounded-r-sm hover:bg-sky-500 text-white font-normal'>Search</button>
          </form>
          <div className=' bg-slate-200 h-3/5 flex justify-center items-center'>
          <img className=' w-64 h-48 rounded-3xl' src="https://st2.depositphotos.com/2697407/8436/v/600/depositphotos_84362514-stock-illustration-low-poly-weather-icon-forecast.jpg" alt="asdfasdf" />
          </div>
        </div>
  )
}

export default SearchComponent