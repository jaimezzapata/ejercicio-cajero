let usuario = 'admin'
let contrasena = 'admin'
let inputContrasena
let inputUsario
let valorTransaccion
let saldoCuenta = 100000

function consultarSaldo() {
    console.log('Su saldo es: ' + saldoCuenta)
}
function retirarDinero() {
    valorTransaccion = Number(prompt('Ingrese el monto que desea retirar: '))
    if (valorTransaccion < 10000) {
        console.log('No se puede retirar menos de 10 mil')
    } else if (valorTransaccion > saldoCuenta) {
        console.log('Está tirando en la chanda...')
    } else {
        console.log('Usted hizo un retiro por valor de: ' + valorTransaccion)
        saldoCuenta -= valorTransaccion
        console.log('Su nuevo saldo es: ' + saldoCuenta)
    }
}
function transferirDinero() {
    valorTransaccion = Number(prompt('Ingrese el monto que desea transferir: '))
    if (valorTransaccion > saldoCuenta) {
        console.log('Está tirando en la chanda...')
    } else {
        console.log('Usted hizo una trasacción por valor de: ' + valorTransaccion)
        saldoCuenta -= valorTransaccion
        console.log('Su nuevo saldo es: ' + saldoCuenta)
    }
}
function consignarDinero() {
    valorTransaccion = Number(prompt('Ingrese el monto que desea retirar: '))
    if (valorTransaccion < 10000) {
        console.log('No se puede consignar menos de 10 mil')
    } else {
        console.log('Usted hizo una consignación por valor de: ' + valorTransaccion)
        saldoCuenta += valorTransaccion
        console.log('Su nuevo saldo es: ' + saldoCuenta)
    }
}
inputUsario = prompt('Ingrese su Usuario: ')
if (usuario == inputUsario) {
    inputContrasena = prompt('Ingrese su Contraseña: ')
    if (contrasena == inputContrasena) {
        console.log('Bienvenido: ' + inputUsario)
        let repetir = true
        while (repetir) {
            let opcion = Number(prompt('Seleccione: \n1 - Consultar Saldo\n2 - Retirar Dineron\n3 - Transferir\n4 - Consignar\n5 - Salir'))
            switch (opcion) {
                case 1:
                    consultarSaldo()
                    break
                case 2:
                    retirarDinero()
                    break
                case 3:
                    transferirDinero()
                    break
                case 4:
                    consignarDinero()
                    break
                case 5:
                    repetir = false
                    break
            }
        }

    } else {
        console.log('Error de credenciales')
    }
} else {
    console.log('Usuario no existe en la base de datos')
}