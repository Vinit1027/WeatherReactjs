import React from 'react';





const api = {
    key : "cb6ac3bb085edc21f79c3e491932b82c",
    base : 'http://api.openweathermap.org/data/2.5/'
}

const Weatherapp = () => {
  return (
    <main className='mainback'>
      <div className="searchbox">
        <input type='text' classname='search-bar' placeholder='Search...'/>
      </div>
    </main>
  )
}

export default Weatherapp