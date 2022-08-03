//class to hold and describe data
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//to update table and display
function updateDisplay() {
    console.log("updateDisplay() started");

    theTime = new Date();
    //for troubleshooting...
    console.log(theTime.getHours()
        + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
        + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //to update the screen
    document.getElementById("currentTime").innerHTML =
        theTime.getHours()
        + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
        + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

    //time to update the table
    var timeRead = data[index].time_seconds
    if (timeRead >= 10) {
        //getElement from table id, rows from tr on table, data[index] from class
        document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, "&#176;");
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, "&#176;");
        document.getElementById("data").rows["gpsAltitude"].innerHTML =
            dataRow("GPS Altitude", data[index].gps_altitude, "meters");
        document.getElementById("data").rows["bmpAltitude"].innerHTML =
            dataRow("BMP Altitude", data[index].bmpSensor_altitude, "meters");
        document.getElementById("data").rows["bmpPress"].innerHTML =
            dataRow("BMP Pressure", data[index].bmpSensor_pressure, "atm");
        document.getElementById("data").rows["bmpTemp"].innerHTML =
            dataRow("BMP Temperature", data[index].bmpSensor_temp, "&#176; C");
        document.getElementById("data").rows["digTemp"].innerHTML =
            dataRow("Digital Temperature", data[index].digSensor_temp, "&#176; C");
        document.getElementById("data").rows["cssTemp"].innerHTML =
            dataRow("CSS Temperature", data[index].cssSensor_temp, "&#176; C");
        document.getElementById("data").rows["cssCO2"].innerHTML =
            dataRow("CSS CO2", data[index].cssSensor_eCO2, "ppm");
        document.getElementById("data").rows["cssTVOC"].innerHTML =
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, "ppm");
        document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, "");
        document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("Acceleration X", data[index].accelX, "m/s^2");
        document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("Acceleration Y", data[index].accelY, "m/s^2");
        document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("Acceleration Z", data[index].accelZ, "m/s^2");
        document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("Magnetic X", data[index].magneticX, "T");
        document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("Magnetic Y", data[index].magneticY, "T");
        document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("Magnetic Z", data[index].magneticZ, "T");
        document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("Gyro X", data[index].gyroX, "&#176;/sec");
        document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("Gyro Y", data[index].gyroY, "&#176;/sec");
        document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("Gyro Z", data[index].gyroZ, "&#176;/sec");
    }

    if (index < 500) {
        index++;
    } else {
        index = 0;
    }
}


//function to get data from the dataLoader.js
function getData() {
    console.log("getdata() started");
    var loadedData = loadData();
    return loadedData;
}

//function to setup the table loading
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
