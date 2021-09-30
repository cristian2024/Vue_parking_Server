import express, { json } from 'express';
const router = express.Router();

//importando el modelo vehiculo
import Vehiculo from '../models/vehiculos';

router.post('/nuevo-vehiculo', async(req, res)=>{
  const body = req.body;
  // console.log(req);  
  try{
    // console.log("This is the body : ",req.body);
    const notaDB = await Vehiculo.create(body);
    res.status(200).json(body);
  }catch(error){
    return res.status(500).json({
      mensaje: `${error}`,
      error
    })  
  }
});

module.exports = router;