// Al poner la t, le digo que le paso cualquier tipo de parametro
function queTipoSoy<T>(argumento: T) {
  return argumento
}

let soyString = queTipoSoy("hola mundo");
let soyNumero = queTipoSoy(1234);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let soyExplicito = queTipoSoy<number>(100); // Al poner number, le digo que le pasaré un numero

