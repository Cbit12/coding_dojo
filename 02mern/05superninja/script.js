class ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
    console.log(ninja.nombre);
    }
    showStats() {
    console.log(`Nombre: ${ninja.nombre} - Salud: ${ninja.salud}, - Velocidad: ${ninja.velocidad}, - Fuerza: ${ninja.fuerza}`);
    }  
    drinkSake() {
    this.salud += 10;
    }
}

const ninja1 = new ninja("Carolin");
ninja1.sayName();
ninja1.showStats();

class sensei extends ninja {
    constructor(nombre){
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom(){
        console.log('1 Sensei + 1 Sensei son 2')
    }
}

const superSensei = new sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

