console.log('Objetos listerales')

console.warn('Creando un objeto literal')

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    estaVivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.7,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California',
    },
    'ultima-pelicula': 'End Game',
}


/* console.warn('Accediendo al objeto y a sus propiedades')
console.log(personaje)
console.log(`nombre: ${personaje.nombre}`)
console.log(`apodo: ${personaje['codeName']}`)
console.log(`edad: ${personaje.edad}`)
console.log(`latitud: ${personaje.coords.lat}`)

let x = 'estaVivo'
console.log(`estaVivo: ${personaje[x]}`)
console.log(`última película: ${personaje['ultima-pelicula']}`) */

console.warn('Boorando una propiedad del objeto')
delete personaje.edad
console.log(`Edad: ${personaje.edad}`)

console.warn('Creando uina nueva propiedad del objeto')
personaje.casado = false

console.log({personaje})

/*Actividad #2: Mostrar el tamaño del arreglo "trajes". Mostrar el último traje del arreglo "trajes".*/
console.log(`Cantidad de trajes: ${personaje.trajes.length}`)
console.log(`Último traje: ${personaje.trajes[personaje.trajes.length - 1]}`)








