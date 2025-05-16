// Importa le funzioni da testare dal file snacks.js
const { getInitials, createSlug, average, isPalindrome } = require('./snacks');

// Snack 1 - Test per la funzione getInitials
// Verifica che la funzione restituisca correttamente le iniziali del nome completo
test('getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Mario Rossi')).toBe('MR'); // Test con lettere maiuscole
    expect(getInitials('anna maria')).toBe('AM');  // Test con lettere minuscole
});


// Snack 2 - Test per la funzione createSlug (lowercase)
// Verifica che la funzione restituisca la stringa tutta in minuscolo
test('createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('TEST')).toBe('test'); // Test semplice
    expect(createSlug('Questo È UN TEST')).toBe('questo-è-un-test'); // Test con maiuscole e accenti
});


// Snack 3 - Test per la funzione average
// Verifica che la funzione calcoli la media aritmetica di un array di numeri
test('average calcola la media aritmetica di un array di numeri', () => {
    expect(average([2, 4, 6])).toBe(4);             // Media normale
    expect(average([1, 1, 1, 1])).toBe(1);          // Tutti numeri uguali
    expect(average([])).toBe(0);                    // Array vuoto: media = 0
});


// Snack 4 - Test per la funzione createSlug (spazi in -)
// Verifica che la funzione sostituisca gli spazi con trattini "-"
test('createSlug sostituisce gli spazi con "-"', () => {
    expect(createSlug('Questo è un test')).toBe('questo-è-un-test'); // Frase con spazi
    expect(createSlug('ciao mondo')).toBe('ciao-mondo');             // Frase più semplice
});


// Snack 5 - Test per la funzione isPalindrome
// Verifica se una stringa è un palindromo, anche con frasi
test('isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('anna')).toBe(true);                         // Palindromo semplice
    expect(isPalindrome('racecar')).toBe(true);                      // Palindromo inglese
    expect(isPalindrome('ciao')).toBe(false);                        // Non palindromo
    expect(isPalindrome('I topi non avevano nipoti')).toBe(true);    // Palindromo con spazi
});