var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Prueba;
(function (Prueba) {
    var Persona = /** @class */ (function () {
        function Persona(apellido, nombre) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        Persona.prototype.GetApellido = function () {
            return this.apellido;
        };
        Persona.prototype.SetApellido = function (apellido) {
            this.apellido = apellido;
        };
        Persona.prototype.GetNombre = function () {
            return this.nombre;
        };
        Persona.prototype.SetNombre = function (nombre) {
            this.nombre = nombre;
        };
        Persona.prototype.Tostring = function () {
            return this.nombre + " - " + this.apellido;
        };
        return Persona;
    }());
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
/// <reference path="./persona.ts" />
var Prueba;
(function (Prueba) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(apellido, nombre, legajo) {
            var _this = _super.call(this, apellido, nombre) || this;
            _this.legajo = legajo;
            return _this;
        }
        Alumno.prototype.GetLegajo = function () {
            return this.legajo;
        };
        Alumno.prototype.SetLegajo = function (legajo) {
            this.legajo = legajo;
        };
        Alumno.prototype.Tostring = function () {
            return _super.prototype.Tostring.call(this) + " - " + this.legajo;
        };
        return Alumno;
    }(Prueba.Persona));
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
var Manejador;
(function (Manejador) {
    function CrearAlumno() {
        var apellido = document.getElementById("apellido").value;
        var nombre = document.getElementById("nombre").value;
        var legajo = parseInt(document.getElementById("legajo").value);
        var alumno = new Prueba.Alumno(apellido, nombre, legajo);
        console.log(alumno.Tostring());
        alert(alumno.Tostring());
    }
    Manejador.CrearAlumno = CrearAlumno;
})(Manejador || (Manejador = {}));
