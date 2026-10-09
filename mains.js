const listaDeSuper = [];

listaDeSuper.push("leche", "pan", "manzanas");

console.log(`Primer producto: ${listaDeSuper[0]}`);

let ultimoElemento = listaDeSuper.length - 1;
console.log(`Último producto: ${listaDeSuper[ultimoElemento]}`);

listaDeSuper.push("arroz", "café");
listaDeSuper.unshift("huevos", "queso");

const noHabia = listaDeSuper.pop();
const comprado = listaDeSuper.shift();

console.log(`Producto que saqué del final: ${noHabia}`);
console.log(`Producto que saqué del principio: ${comprado}`);
console.log(`La lista tiene ${listaDeSuper.length} productos.`);

function logItems(arreglo) {
	arreglo.forEach((item) => console.log(item));
}

logItems(listaDeSuper);

const otraLista = ["detergente", "jabón", "papel higiénico"];
logItems(otraLista);