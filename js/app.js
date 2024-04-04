//creare una funzione che al submit calcoli il prezzo del preventivo

//prendere il form dal document
//prendere i valori inseriti dall'utenete
//fare il calcolo del prezzo totale
//fare validazione se inserito un codice sconto
// in caso di codice sconto effettuare calcolo del prezzo totale con sconto
//la funzione deve stampare il prezzo finale su pagina html


const form = document.getElementById('calcolo-prezzo')

form.addEventListener('submit', calcoloPreventivo)


function calcoloPreventivo(e){
    e.preventDefault()

    const oreLavoro = 10
    const tipoLavoro = parseFloat(document.getElementById('tipo-lavoro').value)
    console.log(tipoLavoro)
    const discount = document.getElementById('codice-prom').value

     let totalePreventivo = parseFloat(tipoLavoro * oreLavoro).toFixed(2)
     console.log(totalePreventivo)

     let prezzoDiscount = 0
     if( discount === 'YHDNU32'|| discount === 'JANJC63'|| discount === 'PWKCN25'|| discount === 'SJDPO96'|| discount === 'POCIE24'){
        prezzoDiscount = totalePreventivo * 0.25
        totalePreventivo = totalePreventivo - prezzoDiscount
        console.log(prezzoDiscount)
        console.log(totalePreventivo)
     }else if(discount === ''){
        console.log(totalePreventivo)
     }
     else{
        console.log(totalePreventivo)
        alert('codice promozionale non valido')
     }

     const prezzoFinalestrg = `<h2>&euro;${totalePreventivo}</h2>`
     const h1ElementPrezzoFinale = document.getElementById('prezzo-finale')

    h1ElementPrezzoFinale.innerHTML = prezzoFinalestrg

}