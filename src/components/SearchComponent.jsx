import { Search } from '@mui/icons-material'
import React from 'react'

function SearchComponent(props) {

  const cityChangeHandler = (event)=> {
    props.updatedCity(event.target.value)
    console.log(props.city)
  }
  return (
        <div className=' bg-slate-200   sm:w-96 w-72 h-96 shadow-2xl rounded-xl p-4'>
          <div className=' bg-slate-200 h-1/5 flex justify-center items-center'>
          <h1 className=' font-bold text-3xl text-gray-500'>Weather App</h1>
          </div>
          <form onSubmit={props.fetchWeather} className='bg-slate-200 h-1/5 flex justify-center items-center'>
          <input className=' bg-slate-100 pl-2 h-9 sm:w-62 w-52 rounded-l-md'  type="text" value={props.city}  placeholder='search city' onChange={cityChangeHandler} />
          <button className=' bg-sky-400 w-12 h-9 rounded-r-sm hover:bg-sky-500 text-white font-normal'>
            <Search/>
          </button>
          </form>
          <div className=' bg-slate-200 h-3/5 flex justify-center items-center'>
          <img className=' w-96 h-48 rounded-3xl' src="https://c.tenor.com/LFO86xmMuWYAAAAC/rain-umbrella.gif" alt="asdfasdf" />
          </div>
        </div>
  )
}

export default SearchComponent