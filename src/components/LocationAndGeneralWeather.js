
function LocationAndGeneralWeather(props) {
    return (
        <div>
            <div className="">
                <div className="">{props.temperature}</div>
                <div className="">
                    <div className="">Precipitation: {props.precipitation}</div>
                    <div className="">Humidity: {props.humidity}</div>
                    <div className="">Wind: {props.windspeed}</div>
                </div>
            </div>
            <div className="">
                <div className="">{props.locationOfWeather}</div>
                <div className="">{props.weatherDateTime}</div>
                <div className="">{props.weatherGeneral}</div>
            </div>
        </div>
    )
}

export default LocationAndGeneralWeather
