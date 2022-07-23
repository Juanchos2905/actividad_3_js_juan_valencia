console.log('funciones')

console.warn('Escribiendo una función tradicional')

function saludar() {
    console.log('Hola Mundo')
}

saludar()

console.warn('Escribiendo una función tradicional en un const')

const saludar1 = function(){
    console.log('Hola Mundo desde otra función')
}

saludar1()

console.warn('Escribiendo una funcion de flecha')

const saludar2 = () => {
    console.log('Saludando desde una función flecha')
}
saludar2()

console.warn('Escribiendo una función de flecha con parámetro')

const saludar3 = (nombre) => {
    console.log(`Hola ${nombre}`)

}

saludar3('Valencia')
saludar3('Giraldo')

console.warn('Escribiendo una función de flecha con retorno')

const saludar4 = (nombre) =>{
    return `Hola ${nombre}`
}

let saludando = saludar4('Antonio')

console.log(saludando)

console.warn('Escribiendo una función de flecha con retorno abreviada')

const saludar5 = (nombre) => `Hola ${nombre}`

let saludo2 = saludar5('Yolanda')
console.log(saludo2)

//console.warn('Función con math.random')

/*function rand(){
    return Math.random()
}*/

// console.log(rand())

/*Actividad #3: Realizar la funcion números random utilizando la funcion flecha abreviada.*/
console.warn('Función con math.random - funcion flecha abreviada')

const rand = () => Math.random()

console.log(rand())