interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  año: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    año: 2015
  }
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles

console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La canción actual es: ${cancion}`);
console.log(`El autor  es: ${autor}`);
