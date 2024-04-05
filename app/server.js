const express = require('express');
const cors = require('cors');
const config = require('./config/env.json');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors({ origin: config.appDomain }));
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(config.appPort, () => {
  console.log(`Servidor Express escuchando en el puerto ${config.appPort}`);
});


//Primer intento de server

// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();

// app.use(cors({ origin: 'http://localhost:4200' }));

// const protocol = 'https:';
// const ApiUrl = '//gateway.marvel.com:443/v1/public/';
// const ApiKey = '4e25473721ec4cf62e3fb5e5d817bf7d';  
// const hash = 'e5dacd6966feba077ce3a33bf4068292'; 


// function Heroe(id, name, description, modified, thumbnail_path, thumbnail_extension, resourceURI){
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.modified = modified;
//     this.thumbnail_path = thumbnail_path;
//     this.thumbnail_extension = thumbnail_extension;
//     this.resourceURI = resourceURI; 
// }

// async function getHeroes(offset = 0, searchString = '',){
//   let url = '';
//   if(searchString != ''){
//     url = `${protocol}${ApiUrl}characters?ts=1&apikey=${ApiKey}&hash=${hash}&limit=20&offset=${offset}&nameStartsWith=${searchString}`;
//   }else{
//     url = `${protocol}${ApiUrl}characters?ts=1&apikey=${ApiKey}&hash=${hash}&limit=20&offset=${offset}`
//   }
//     const response = await axios.get(url);
//     const total = response.data.data.total;
    
//     let arrayHeroe = [];
//         response.data.data.results.forEach( heroe => {
//             let hero = new Heroe(
//                 heroe.id,
//                 heroe.name,
//                 heroe.description,
//                 heroe.modified,
//                 heroe.thumbnail.path,
//                 heroe.thumbnail.extension,
//                 heroe.resourceURI
//             )
//             arrayHeroe.push(hero)
            
//         });
//         let respuesta = {
//           total: total,
//           heroes: arrayHeroe
//         }
//         return respuesta;
// }



// app.get('/api/marvel', async (req, res) => {
//   try {
//     let offset = parseInt(req.query.offset)
//     let searchString = req.query.searchString
//     let respuesta = await getHeroes(offset, searchString);
//     res.json((respuesta));
//   } catch (error) {
//     console.error('Error fetching Marvel characters:', error);
//     res.status(500).json({ message: 'Internal Server Error' }); 
//   }
// });


// app.listen(3000, () => {
//   console.log('Servidor Express escuchando en el puerto 3000');
// });