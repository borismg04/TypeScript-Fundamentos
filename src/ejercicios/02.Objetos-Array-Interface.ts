//Objetos Arreglos e interfaces
// Declaramos una variable de tipo arreglo 
let habilidades: ( boolean | string | number)[] = ['Bash', 'Counter', 'Healing'];
habilidades.push(100);

console.log(habilidades);

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje:Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
