// Axios
import axios from 'axios/dist/axios'

// Environment
import env from '../../Environments/environment.js';


async function get_salones() {
    let url_bases = env.url_base;
    try{
        // Consultamos la cita
        const data = await axios(url_bases+'salon/get-todos')
        // const data = await axios(url_bases+'cliente/get-por-id/1')
        return data.data.body;
    } catch (error) { 
        console.log(error);
    }
}

// Retornamos funciones
export default {
  get_salones
};