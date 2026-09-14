/**
 * URL del sistema di prenotazione tavoli di Josè.
 *
 * Le prenotazioni girano su un'app a sé (repo `prenotazioni-white-label`,
 * container su prenota.tenutavillaguerra.it, con pannello per il ristorante):
 * questo sito la linka e basta, non la ospita. Prima al suo posto c'era un link
 * a Pienissimo, servizio esterno da cui il ristorante è uscito.
 *
 * Sta in un punto solo perché i pulsanti "Prenota" sono sparsi su tre pagine:
 * quando il dominio cambia, si cambia qui.
 */
export const BOOKING_URL = 'https://prenota.tenutavillaguerra.it/prenota';
