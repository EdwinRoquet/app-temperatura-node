
const axios = require('axios');


const getLugarLatLng = async ( dir ) => {

    const encodeUrl = encodeURI( dir );
  
      const instance = axios.create({
          baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
          headers: {'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
                     'x-rapidapi-key': 'f9e63d4891msh12c2cccce928f57p12a818jsn61193df9f61b'}
        });

    const resp = await  instance.get();
    if(resp.data.Results.length === 0){
        throw new Error (`No hay resultados para ${ dir }`);
    }

    const data =resp.data.Results[0];
    const direccion = data.name;
    const lat  = data.lat;
    const lng = data.lon;

return {
    direccion,
    lat,
    lng
}

}


module.exports = {
    getLugarLatLng
}
 