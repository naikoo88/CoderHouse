

function doSomethingInUsers(event, action){
    let ajaxType;
    event.preventDefault();
    if(action == addUser){
        ajaxType = 'POST';
    } else if(action == getUser){
        ajaxType = 'GET';
    } else {
        console.log('hubo un error en el parametro asignado')
    }
    
    $.ajax({
        url:'assets/js/users.json',
        dataType: "json",
        type : ajaxType,
        complete: action,
    })
}

function addUser(data){
        data: {
            users:{
                user: $('#userName')
                password: $('#password')
            }
        }
}


// Variables que le dan valor monetario a las donaciones
const mateValue = 50;
const bizcochosValue = 10;
const facturasValue = 100;


// Template de usuarios
function User(id, nombre, profesion, categoria, mates, bizcochos, facturas) {
    this.id = id,
    this.nombre= nombre,
    this.profesion= profesion,
    this.categoria= categoria,
    this.tesoro.mates= mates,
    this.tesoro.bizcochos= bizcochos,
    this.tesoro.facturas= facturas
    };

//Arreglo que guarda los usuarios
const allUsers = [];

//Funcion accionada por algun futuro boton
function createUser(nombre, profesion, categoria){
   for(let i = 0; allUsers[i] == ''; i++) {
       //Entro en un ternario
       !allUsers[i] ? allUsers[i] = new User({i, nombre, profesion, categoria, NaN, NaN, NaN}) : ''
       break;
       //Y escapo del bucle
   }
}

//Objeto que registra la cantidad
const myMate = (id) => {
    let { tesoro } = allUsers[id].tesoro;
    let myFunds;

    //Se añaden X matesitos
    function addMate(quantity){
        if(tesoro.mates != NaN) {
            tesoro.mates + quantity;
        } else {
            tesoro.mates = 0;
        }
    };

    //Se añaden X bizcochitos
    function addBizcocho(quantity){
        if(tesoro.bizcochos != NaN) {
            tesoro.bizcochos + quantity
        } else {
            tesoro.bizcochos = 0;
        }
    }

    //Se añaden X facturitas
    function addFacturas(quantity){
        if(tesoro.facturas != NaN) {
            tesoro.facturas + quantity
        } else {
            tesoro.facturas = 0;
        }
    }

    //Se convierten nuestras donaciones en dinero
    function checkOut(){
        
        if(tesoro.mates){
            myFunds = myFunds + (tesoro.mates * mateValue);
            tesoro.mates = 0;
        }
        if(tesoro.bizcochos){
            myFunds = myFunds + (tesoro.bizcochos * bizcochosValue)
            tesoro.bizcochos = 0;
        }
        if(tesoro.facturas){
            myFunds = myFunds + (tesoro.facturas * facturasValue)
            tesoro.facturas = 0;
        }


    }

    //Devuelve el objeto tesoro
    return tesoro
}