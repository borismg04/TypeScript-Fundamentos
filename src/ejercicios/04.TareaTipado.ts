interface superHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}
  
interface Direccion{
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY'
  },
  mostrarDireccion(){
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
};
//hola prueba de cnexion para hacer uso de esto 
const direccion = superHeroe.mostrarDireccion();
console.log("🚀 ~ file: 04.TareaTipado.ts:28 ~ direccion:", direccion)
console.log(direccion);