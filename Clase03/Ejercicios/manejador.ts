namespace Manejador
{
    export function CrearAlumno() : void
    {
        let apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
        let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
        let legajo = parseInt((<HTMLInputElement>document.getElementById("legajo")).value);

        let alumno = new Prueba.Alumno(apellido, nombre, legajo);

        console.log(alumno.Tostring());
        alert(alumno.Tostring());
    }
}