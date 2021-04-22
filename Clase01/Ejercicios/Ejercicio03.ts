function esPar(numero : number) : void
{
    if(numero % 2 == 0)
    {
        console.log("El número " + numero + " es par, siendo " + numero + " el número recibido como parámetro.");
    }
    else
    {
        console.log("El número " + numero + " es impar, siendo " + numero + " el número recibido como parámetro.");
    }
}

esPar(5);
esPar(8);
esPar(4);
esPar(7);