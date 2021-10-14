var submitBtn = $('#submitBtn');

// var objUsers = [ {userName: 'admin', password: 'admin'}
// ];

// constructor usuario
class User {
    constructor(nombre, totalClicks,) {
        this.nombre = nombre;
        this.totalClicks = totalClicks;
        this.upgrades = [];
    }
}

// array user
usuarios = [];


// funcion para crear un nuevo user

function login() {
    nombre = $('#username').val();

    let paso1 = JSON.parse(localStorage.getItem('usuarios'));

    // condicionales

    if (localStorage.getItem('usuarios') != null) {
        let index = paso1.length + 1;
        let usuario = new User(nombre)
        paso1.push(usuario);
    } else {
        localStorage.clear();
        let index = 1;
        let usuario = new User(nombre);
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuario));
    }


    location.href = 'sections/clicker.html'
    console.log('datos incorrectos')
}


submitBtn.on('click', login);