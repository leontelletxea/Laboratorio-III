function iterar(numero, palabra) {
    if (palabra) {
        for (var i = 0; i < numero; i++) {
            console.log(palabra);
        }
    }
    else {
        console.log(-numero);
    }
}
iterar(9);
iterar(5, "Anashei");
