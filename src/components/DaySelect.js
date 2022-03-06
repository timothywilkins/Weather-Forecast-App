//make days work

function DaySelect(props) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // const day = new Date(props.queryResponseDateTime * 1000).getDay()

    return (
        <div className="forecast_day">
            {props.queryResponseDateTime && days.map((d, index) => (
                <div key={index.toString()} className="">
                    <div className="">
                        <div className="">{props.dailyTempMax[index]}</div>
                        <div className="">{props.dailyTempMin[index]}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DaySelect
