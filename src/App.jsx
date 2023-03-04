import React, { useState } from 'react';
import icon from './assets/busqueda.svg';
import Weather from './components/Weather';

function App() {

  const [pais, setPais] = useState("");
  const [responses, setResponses] = useState({});
  const [lleno, setLleno] = useState(false);

  const searchWeatherCountry = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${pais}&units=metric&appid=fd1be5b964c5e961337af39b8e09bad9`;
    const weatherCountry = await fetch(url);
    const response = await weatherCountry.json();
    const status = await response ? true : false;
    setTimeout(() => {
      setLleno(status);
    }, 1000);
    setResponses(response);
    setPais("");
  }

  return (
    <div className="bg-slate-600 w-full h-screen flex justify-center items-center">
      <div className={`w-2/6 h-24 bg-slate-400 p-3.5 rounded-3xl container-weather ${Object.entries(responses).length ? `alto` : `bajo`} `}>
        <div className="flex justify-around rounded-md">
          <input value={pais} onChange={(e) => setPais(e.target.value)} className='w-4/5 p-3 rounded-lg bg-slate-300 placeholder:text-blue-900 text-blue-900 h-10' type="text" placeholder="Search Country" />
          <button onClick={searchWeatherCountry}><img className='boton p-1 rounded-full w-4/5' src={icon} alt="search-icon" /></button>
        </div>
        <div>
          {Object.entries(responses).length !== 0 ? (
            <Weather
              responses={responses}
              setResponses={setResponses}
              setLleno={setLleno}
              lleno={lleno}
            />
          ) : (
            <div className='p-3.5 font-bold'>Sin busquedas</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
