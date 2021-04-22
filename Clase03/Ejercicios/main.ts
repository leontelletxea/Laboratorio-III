/// <reference path="./alumno.ts" />

namespace TestPrueba
{
    let alumno1 = new Prueba.Alumno("Mazzucchelli", "Juan", 109755);
    let alumno2 = new Prueba.Alumno("Mazzucchelli", "Juan", 109755);
    let alumno3 = new Prueba.Alumno("Mazzucchelli", "Juan", 109755);

    let lista  = Array<Prueba.Persona>();
    lista.push(alumno1, alumno2, alumno3);

    lista.forEach(element => {
        console.log(element.Tostring()); 
    });
}