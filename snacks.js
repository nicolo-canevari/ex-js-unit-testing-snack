
// Ritorna le iniziali di un nome completo, es. "Mario Rossi" => "MR"
function getInitials(fullName) {
    return fullName
        .split(' ') // Divide il nome in parole
        .map(word => word[0].toUpperCase()) // Prende la prima lettera di ogni parola e la rende maiuscola
        .join(''); // Unisce le iniziali
}

// Restituisce uno slug in lowercase con spazi sostituiti da trattini
// es. "Questo è un test" => "questo-è-un-test"
function createSlug(text) {
    return text
        .toLowerCase() // Tutto minuscolo
        .replace(/\s+/g, '-'); // Sostituisce gli spazi con "-"
}

// Calcola la media aritmetica di un array di numeri
function average(numbers) {
    if (numbers.length === 0) return 0; // Gestisce array vuoto
    const sum = numbers.reduce((a, b) => a + b, 0); // Somma i numeri
    return sum / numbers.length; // Ritorna la media
}

// Verifica se una stringa è palindroma
// es. "Anna" => true, "Ciao" => false
function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/\s+/g, ''); // Rende tutto minuscolo e rimuove spazi
    return normalized === normalized.split('').reverse().join(''); // Confronta con la versione invertita
}

// Esportiamo le funzioni per poterle testare
module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
};