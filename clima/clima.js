const axios = require('axios');

const getClima = async ( lat, lng ) => {

    const appid = "1dfaf82b0fb07ea97fab4aeee048b1b0";

    //Constante de cero grado kelvin
    const temperatura  = 273.15;

    const resp =  await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}`);
    //Se obtiene temperatura
    const temperaturaObtenida = resp.data.main.temp;
    
    //Se retorna la temperatura  en celsius
    return parseFloat( temperaturaObtenida - temperatura ).toFixed(2);

}

module.exports = {
    getClima
}