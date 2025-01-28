function calcularCosto() {
    const precioHarina = parseFloat(document.getElementById('precioHarina').value);
    const cantidadHarina = parseFloat(document.getElementById('cantidadHarina').value);
    const precioAzucar = parseFloat(document.getElementById('precioAzucar').value);
    const cantidadAzucar = parseFloat(document.getElementById('cantidadAzucar').value);
    const precioMantequilla = parseFloat(document.getElementById('precioMantequilla').value);
    const cantidadMantequilla = parseFloat(document.getElementById('cantidadMantequilla').value);
    const precioHuevo = parseFloat(document.getElementById('precioHuevo').value);
    const cantidadHuevo = parseFloat(document.getElementById('cantidadHuevo').value);
    const precioVainilla = parseFloat(document.getElementById('precioVainilla').value);
    const cantidadVainilla = parseFloat(document.getElementById('cantidadVainilla').value);
    const precioAceite = parseFloat(document.getElementById('precioAceite').value);
    const cantidadAceite = parseFloat(document.getElementById('cantidadAceite').value);
    const precioPolvoDeHornear = parseFloat(document.getElementById('precioPolvoDeHornear').value);
    const cantidadPolvoDeHornear = parseFloat(document.getElementById('cantidadPolvoDeHornear').value);
    const precioLeche = parseFloat(document.getElementById('precioLeche').value);
    const cantidadLeche = parseFloat(document.getElementById('cantidadLeche').value);

    const costoHarina = (precioHarina / 1000) * cantidadHarina;
    const costoAzucar = (precioAzucar / 1000) * cantidadAzucar;
    const costoMantequilla = (precioMantequilla / 1000) * cantidadMantequilla;
    const costoHuevo = precioHuevo * cantidadHuevo;
    const costoVainilla = (precioVainilla / 1000) * cantidadVainilla;
    const costoAceite = (precioAceite / 1000) * cantidadAceite;
    const costoPolvoDeHornear = (precioPolvoDeHornear / 1000) * cantidadPolvoDeHornear;
    const costoLeche = (precioLeche / 1000) * cantidadLeche;

    // Calcular costo total
    const costoTotal = costoHarina + costoAzucar + costoMantequilla + costoHuevo + costoVainilla + costoAceite + costoPolvoDeHornear + costoLeche;

    // Mostrar resultado
    document.getElementById('resultado').textContent = `Costo Total: ${costoTotal.toFixed(2)} Bs`;
}
