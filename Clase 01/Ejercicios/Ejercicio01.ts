let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
            "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"]

function mostrar(meses : string[]) : void
{
    for(let i=0; i<12; i++)
    {
        console.log(meses[i] + " " + (i+1));
    }
}

mostrar(meses);
