/// <reference path="./persona.ts" />

namespace Prueba
{
    export class Alumno extends Persona
    {
        protected legajo : number;

        public constructor(apellido : string, nombre : string, legajo : number)
        {
            super(apellido, nombre);
            this.legajo = legajo;
        }

        public GetLegajo() : number
        {
            return this.legajo;
        }

        public SetLegajo(legajo : number)
        {
            this.legajo = legajo;
        }

        public Tostring() : string
        {
            return super.Tostring() + " - " + this.legajo;
        }
    }    
}
