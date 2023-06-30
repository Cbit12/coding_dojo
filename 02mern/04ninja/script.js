class ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    // agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
    sayName() {
    console.log(ninja.nombre)
    }

    // agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
    showStats() {
    console.log(`${ninja.nombre}, ${ninja.salud}, ${ninja.velocidad}, ${ninja.fuerza}`)
    }   

    // agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja
    drinkSake() {
    this.salud += 10;
    }
}