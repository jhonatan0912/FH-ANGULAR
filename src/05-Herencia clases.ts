class PersonaNormal {

  constructor(
    public nombre: string,
    public direccion: string
  ) { }


}
class Heroe extends PersonaNormal {

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "New York, USA")
  }
}

const spiderMan = new Heroe("Iron Man", 45, "Tony Stark");
console.log(spiderMan);
