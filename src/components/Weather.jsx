import humedad from "../assets/humidity_weather_icon_148585.svg";
import temperatura from '../assets/humidity_weather_icon_148585.svg';
import found from '../assets/Monster 404 Error-amico.svg';

const Weather = ({ responses, setResponses, setLleno, lleno }) => {
    const { cod, main, weather, name, wind } = responses;

    const handlechange = e => {
        e.preventDefault();
        setLleno(false);
        setTimeout(() => {
            setResponses({});
        }, 500);
    }
    return (
        <div>
            {cod === 200 ? (
                <div className={`p-9 flex flex-col justify-center items-center gap-5 ${lleno ? "vista-view" : "vista-hidden"}`}>
                    <div>
                        <span className="font-bold text-2xl text-slate-800 text-center">{name}</span>
                    </div>
                    <div className="flex flex-col justify-center mb-4">
                        <img className="img" src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="" />
                        <p className="text-center font-extrabold text-teal-900">{weather[0].main}</p>
                    </div>
                    <div className="flex gap-5 columna">
                        <p className="flex gap-2 text-neutral-600 font-medium"><span className="flex text-gray-900 font-semibold"><img className="img-formato-icon" src={temperatura} alt="temp" />Temperatura:</span>{main.temp}°C</p>
                        <p className="flex gap-2 text-neutral-600 font-medium"><span className="flex text-gray-900 font-semibold"><img className="img-formato-icon" src={humedad} alt="hum" />Humedad:</span> {main.humidity}%</p>
                    </div>
                    <div className="flex gap-5 columna">
                        <p className="flex gap-2 text-neutral-600 font-medium"><span className="flex text-gray-900 font-semibold"><img className="img-formato-icon" src={temperatura} alt="temp" />Speed:</span>{wind.speed}km/h</p>
                        <p className="flex gap-2 text-neutral-600 font-medium"><span className="flex text-gray-900 font-semibold"><img className="img-formato-icon" src={humedad} alt="hum" />Descripcion:</span> {weather[0].description}</p>
                    </div>
                    <div>
                        <button onClick={handlechange} className="bg-slate-900 text-white w-full p-1 rounded-xl hover:bg-slate-600">Resetear</button>
                    </div>
                </div>
            ) : (
                (
                    <div className={`container-found ${lleno ? "vista-view" : "vista-hidden"}`}>
                        <div className="w-full flex justify-center">
                            <img className="img-formato" src={found} alt="404" />
                        </div>
                        <div>
                            <button onClick={handlechange} className="bg-slate-900 text-white w-full p-1 rounded-xl hover:bg-slate-600">Resetear</button>
                        </div>
                    </div>
                )
            )}

        </div>
    )
}

export default Weather