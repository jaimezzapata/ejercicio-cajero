let usuario = 'admin'
let contrasena = 'admin'
let inputContrasena

function consultarSaldo() {
    console.log('Su saldo es: ')
}
function retirarDinero() {
    console.log('Hizo un retiro por: ')
}
function transferirDinero() {
    console.log('Hizo una transferencia por: ')
}
function consignarDinero() {
    console.log('Hizo una consignación por: ')
}

let inputUsario = prompt('Ingrese su Usuario: ')
if (usuario == inputUsario) {
    inputContrasena = prompt('Ingrese su Contraseña: ')
    if (contrasena == inputContrasena) {
        console.log('Bienvenido: ' + inputUsario)
        while(){
            
        }
    } else {
        console.log('Error de credenciales')
    }
} else {
    console.log('Usuario no existe en la base de datos')
}