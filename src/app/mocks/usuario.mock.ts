import { Imagen } from '../modelos/imagen.model';
import { Usuario } from './../modelos/usuario.model';

const imagenTemporal = new Imagen(0, '', '', '', '', '', '');

export let ARREGLO_USUARIO: Array<Usuario>=[
  new Usuario(0, imagenTemporal, '1234', 'CC', 'Juan', 'Ulloa', 'admin@hotmail.com', '3627909a29c31381a071ec27f7c9ca97726182aed29a7ddd2e54353322cfb30abb9e3a6df2ac2c20fe23436311d678564d0c8d305930575f60e2d3d048184d79'),
  new Usuario(1, imagenTemporal, '4321', 'CC', 'Ramon', 'Valdez', 'ramon@gmail.com', '0220645749be074da7fad73342fa8895c23cdfc0522f4dfeddfd2524a5e9b8aa1e502532ac25c97e518133899096f32c4ea8eeed9d8aecdfa27d370ff27197b8'),
  new Usuario(2, imagenTemporal, '8888', 'CC', 'Chavo', 'del 8', 'chavo@outlock.com', '6c5113211aa3157e3d64adcdf3c971204a7dfdd4e9d215a9287c7680be30ceeb956249cfd406cf460cf00ec40214bc0b94afbedbc4e99db9afc3d5930bb7fbb6'),
];
