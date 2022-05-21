import { Search } from '@mui/icons-material'
import React from 'react'

function SearchComponent(props) {

  const cityChangeHandler = (event)=> {
    props.updatedCity(event.target.value)
    console.log(props.city)
  }
  return (
        <div className=' bg-slate-200  w-96 h-96 shadow-2xl rounded-xl p-4'>
          <div className=' bg-slate-200 h-1/5 flex justify-center items-center'>
          <h1 className=' font-bold text-3xl text-gray-500'>Weather App</h1>
          </div>
          <form onSubmit={props.fetchWeather} className='bg-slate-200 h-1/5 flex justify-center items-center'>
          <input className=' bg-slate-100 pl-2 h-9 rounded-l-md'  type="text" value={props.city}  placeholder='search city' onChange={cityChangeHandler} />
          <button className=' bg-sky-400 w-12 h-9 rounded-r-sm hover:bg-sky-500 text-white font-normal'>
            <Search/>
          </button>
          </form>
          <div className=' bg-slate-200 h-3/5 flex justify-center items-center'>
          <img className=' w-96 h-48 rounded-3xl' src="https://images.pond5.com/glowing-neon-line-sun-and-footage-139642648_iconl.jpeg" alt="asdfasdf" />
          </div>
        </div>
  )
}

export default SearchComponent