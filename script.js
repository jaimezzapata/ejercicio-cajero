let usuario = 'admin'
let contrasena = 'admin'
let inputContrasena
// if (usuario == inputUsario && contrasena == inputContrasena) {
//     console.log('Bienvenido: ' + inputUsario)
// } else {
//     console.log('Usuario y/o contraseña incorrecto')
// }

let inputUsario = prompt('Ingrese su Usuario: ')
if (usuario == inputUsario) {
    inputContrasena = prompt('Ingrese su Contraseña: ')
    if (contrasena == inputContrasena) {
        console.log('Bienvenido: ' + inputUsario)
    } else {
        console.log('Error de credenciales')
    }
} else {
    console.log('Usuario no existe en la base de datos')
}