import express, {json} from 'express';
const router = express.Router();

import Entrada_vehiculo from '../models/entrada_vehiculos';

router.get('/entrada_vehiculo/lista', async(req, res)=>{
  // const finalizadas = req.body.finalizadas;
  try{
    // const lista;
    // if(finalizadas)
    //   lista = await Entrada_vehiculo.find();
    // else
    const lista = await Entrada_vehiculo.find({activo: true});
    res.json(lista);
  }catch (error){
    return res.status(400).json({
      mensaje: 'Ha ocurrido un error al intentar obtener la lista de vehiculos en entrada',
      error
    });
  }
});

//Funcion para la entrada de un item nuevo
router.post('/entrada_vehiculo', async(req, res) =>{
  const body= req.body;
  try {
    const entrada_nuevo = await Entrada_vehiculo.create(body);
    res.status(200).json(entrada_nuevo);
  } catch (error) {
    return res.status(500).json({ 
      mensaje: `Ocurrio un error', ${error}`,
      error,
    });
  }
});

//funcion para actualizar el estado de un registro
router.put('/entrada_vehiculo/salida/:id', async(req, res)=>{
  const id = req.params.id;
  try {
    // const entrada_salida = await Entrada_vehiculo.findOne({_})
  } catch (error) {
    
  }
});

module.exports = router;