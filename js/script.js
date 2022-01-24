let formulario = document.getElementById('form')
let listarTabla = document.getElementById('listartabla')

let productos = []

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value
    let descripcion = document.getElementById('descripcion').value
    let valor = document.getElementById('valor').value
    let cantidad = document.getElementById('cantidad').value
    console.log(nombre, valor)
    let producto = {
        id: Math.round(Math.random() * (100 - 1) + 1),
        nombre,
        descripcion,
        valor,
        cantidad
    }
    console.log(productos)
    let data = JSON.parse(localStorage.getItem('product'))
    if (data !== null) {
        data.push(producto)
        localStorage.setItem('product', JSON.stringify(data))
    } else {
        productos.push(producto)
        localStorage.setItem('product', JSON.stringify(productos))
    }

listarDatos()
})

const listarDatos = () => {
    listarTabla.innerHTML=''
    let data = JSON.parse(localStorage.getItem('product'))
    data.forEach(element => {
        const{id, nombre, descripcion, valor, cantidad} = element

        listarTabla.innerHTML += `
                            <td>${nombre}</td>
                            <td>${descripcion}</td>
                            <td>${valor}</td>
                            <td>${cantidad}</td>
                            <td><button id=${id} class="btn btn-danger">Eliminar</button></td>
        `
    });
}
document.addEventListener('DOMContentLoaded', listarDatos);

