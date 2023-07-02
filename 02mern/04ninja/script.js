class ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
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

const ninja1 = new ninja("Carolin");
ninja1.sayName();
ninja1.showStats();
