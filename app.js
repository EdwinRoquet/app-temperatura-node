const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



// lugar.getLugarLatLng( argv.direccion )
//      .then( console.log);

// clima.getClima( 18.139999, -94.440002 )
//       .then(console.log)
//       .catch(console.log);
const getInfo = async ( direccion ) => {
   
  try {
    const coords = await lugar.getLugarLatLng( direccion);
    const temp = await clima.getClima( coords.lat, coords.lng );
    return`El clima de ${coords.direccion} es de ${temp} Celsius`;
  } catch (error) {
     return `No se puede determinar el clima de ${direccion}`
  }



}


getInfo( argv.direccion )
      .then(console.log)
      .catch(console.log);

