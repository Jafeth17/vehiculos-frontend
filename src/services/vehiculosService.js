import axios from 'axios';
//Se declara la url base de la API para las entradas y salidas
const API_URL = 'http://localhost:5000/vehiculos';

//Estructura para cada una de las consultas de vehiculos
const obtenerVehiculos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const crearVehiculo = async (vehiculo) => {
    const response = await axios.post(API_URL, vehiculo);
    return response.data;
};

const actualizarVehiculo = async (id, vehiculo) => {
    const response = await axios.put(`${API_URL}/${id}`, vehiculo);
    return response.data;
};

const eliminarVehiculo = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export { obtenerVehiculos, crearVehiculo, actualizarVehiculo, eliminarVehiculo };
