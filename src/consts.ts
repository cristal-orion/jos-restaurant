/**
 * URL a cui puntano tutti i pulsanti "Prenota" del sito.
 *
 * Sta in un punto solo perché i pulsanti sono sparsi su quattro pagine (home,
 * jose, tenuta, cantina) in italiano e in inglese: il canale di prenotazione si
 * cambia qui e basta.
 *
 * STATO (15 settembre 2026): TEMPORANEAMENTE di nuovo su Pienissimo, su
 * richiesta del ristorante. L'app dedicata (repo `prenotazioni-white-label`,
 * container su prenota.tenutavillaguerra.it, con il pannello per confermare le
 * richieste) resta online e raggiungibile: per rimetterla al suo posto basta
 * riassegnare BOOKING_URL a BOOKING_APP_URL qui sotto e ricostruire.
 *
 * Nota: nginx.conf rimanda /prenota (la vecchia pagina interna, parcheggiata)
 * all'app con un 301, non a Pienissimo. È un indirizzo non linkato e noindex,
 * quindi resta com'è finché il giro da Pienissimo è temporaneo.
 */
export const BOOKING_APP_URL = 'https://prenota.tenutavillaguerra.it/prenota';
export const PIENISSIMO_URL =
  'https://mqv9bou19i9twdl5va81fbt5e4ndsmyt.forms.pienissimo.pro/info-client?id=Fl7E3J';

export const BOOKING_URL = PIENISSIMO_URL;
