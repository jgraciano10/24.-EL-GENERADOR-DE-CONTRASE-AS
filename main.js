let obtener_aleatorios=((min, max) => Math.floor(Math.random() * (max - min)) + min)

let password_length = obtener_aleatorios(8, 17)
console.log(password_length)
 
function get_password(){
    let new_password=""
    let character_aleatorio= ""
    
    for(let i=0;i<password_length;i++){
        character_aleatorio= obtener_aleatorios(33, 123)
        new_password+= String.fromCharCode(character_aleatorio)
    }
    document.getElementById("escribir").innerHTML = `Su contraseña es: ${new_password}`
    console.log(new_password)
}

//65-90 for A-Z, and the lowercase version uses the range 97-122 for a-z.
//for digits '0' to '9', which are from 48 to 57.
