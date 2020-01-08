

function DataHora (section) {
    const data = {
        day: new Date().getDate(), //Current Date
        month: new Date().getMonth() + 1, //Current Month
        year: new Date().getFullYear(), //Current Year
        hour: new Date().getHours(), //Current Hours
        min: new Date().getMinutes(), //Current Minutes
        sec: new Date().getSeconds(), //Current Seconds
    }

    if (section == null) {
        return data
    } else if (section === 'hours') {
        return data.hour + ':' + data.min + ':' + data.sec
    } else if (section === 'data') {
        return data.day + '/' + data.month + '/' + data.year
    }
}


export default DataHora