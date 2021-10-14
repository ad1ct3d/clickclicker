//////////VARIABLES INICIALES

let user = JSON.parse(localStorage.getItem('usuarios'));

let userdata = $('#userdata');

let boton = $('#btn_click');

let boton2x = $('#btn_2x');

let clicks = 0;

let click_value = 1;

let numeros = document.getElementById('numeros');

/////////LISTENER


/////// USER DATA

// constructor usuario

// class User {
//     constructor(userName, password, totalClicks,) {
//         this.userName = userName;
//         this.password = password;
//         this.totalClicks = totalClicks;
//         this.upgrades = [];
//     }
// }

totalClicks = clicks;



//////FUNCIONES

userdata.innerHTML=user;




// SUMAR AL CONTADOR AL HACER CLICK
function click() {
    numeros.innerHTML=clicks;

    // desbloqueo de 2x
    function dobleclk() {
        if (clicks > 20 || clicks == 20) {
        clicks = clicks - 20;
        click_value = 2;
        boton2x.prop('disabled', true);
        // testUser.upgrades.push(doble_click);
        // console.log(testUser.upgrades);
        };
    };

    boton2x.on('click', dobleclk);

    clicks = clicks + click_value;
};

boton.on('click', click);

function disable(){

}
