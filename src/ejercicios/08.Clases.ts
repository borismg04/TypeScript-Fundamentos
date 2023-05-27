class PersonaNormal{
	constructor(
		public nombre:string, 
		public direccion:string

	){}  
}

class Heroe extends PersonaNormal{
// alterEgo:string;
// edad:number;
// nombreReal:string;

public person: PersonaNormal;

constructor( 
	public alterEgo:string,
	public edad:number, 
	public nombreReal:string){
		super(nombreReal, 'New York, USA'); 
	}
}

const tony = new Heroe('Ironman', 45, 'Tony Stark');
const spiderMan = new Heroe('Spiderman', 30, 'Peter Parker');

console.log(tony);
console.log(spiderMan);
console.log(tony.person);