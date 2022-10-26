//Funciones 

//Funcion normal
function sumar (a:number, b:number):number{
    return a + b;
  }
  const resultado = sumar(10,20);
  console.log(resultado);
  
  //Funcion flecha
  const sumarFlecha = (a:number, b:number):number => {
    return a + b;
  }
  const resultadoFlecha = sumarFlecha(10,20);
  console.log(resultadoFlecha);
  
  function multiplicar (numero:number, otroNumero?:number, base:number = 2):number{
    return numero * base;
  }
  
  const resultado2 = multiplicar(5,0,10);
  console.log(resultado2);
  
  //Funcion de flecha
  const multiplicarFlecha = (numero:number, otroNumero?:number, base:number = 2):number => numero * base;
  const resultadoFlecha2 = multiplicarFlecha(5,0,10);
  console.log(resultadoFlecha2);
  
  
  //Suppcion de tipos
  interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
  }
  
  
  function curar(personaje:PersonajeLOR , curarX:number):void{
    personaje.pv += curarX;
    console.log(personaje);
  }
  
  const nuevoPersonaje:PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
      console.log('Puntos de vida: ', this.pv);
    }
  }
  
  curar(nuevoPersonaje,20);
  nuevoPersonaje.mostrarHp();