namespace Prueba
{
    export class Persona
    {
        public apellido : string;
        protected nombre : string;

        public constructor(apellido : string, nombre : string)
        {
            this.apellido = apellido;
            this.nombre = nombre;
        }

        public GetApellido() : string
        {
            return this.apellido;
        }

        public SetApellido(apellido : string)
        {
            this.apellido = apellido;
        }

        public GetNombre() : string
        {
            return this.nombre;
        }

        public SetNombre(nombre : string)
        {
            this.nombre = nombre;
        }

        public Tostring() : string
        {
            return this.nombre + " - " + this.apellido;
        }
    }    
}
