// Ritorna le iniziali di un nome completo, es. "Mario Rossi" => "MR"
function getInitials(fullName) {

    return fullName
        .split(' ') // Divide il nome in parole
        .map(word => word[0].toUpperCase()) // Prende la prima lettera di ogni parola e la rende maiuscola
        .join(''); // Unisce le iniziali

}


// Restituisce uno slug in lowercase con spazi sostituiti da trattini
// es. "Questo è un test" => "questo-è-un-test"
function createSlug(text, existingPosts = []) {

    // Controlla che il testo sia valido (stringa non vuota)
    if (typeof text !== 'string' || text.trim() === '') {
        throw new Error('Titolo non valido');
    }

    // Converte il testo in minuscolo, rimuove spazi iniziali/finali, sostituisce spazi interni con "-"
    let baseSlug = text.toLowerCase().trim().replace(/\s+/g, '-');
    let slug = baseSlug;
    let counter = 1;

    while (existingPosts.some(post => post.slug === slug)) {
        slug = `${baseSlug}-${counter++}`;
    }

    return slug;

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

    const normalized = str.toLowerCase().replace(/\s+/g, ''); // Minuscolo e rimuove spazi
    return normalized === normalized.split('').reverse().join(''); // Confronta con la versione invertita

}


// Trova un post nell'array dato il suo ID numerico
function findPostById(posts, id) {

    // Controlla che l'id sia un numero
    if (typeof id !== 'number') {
        throw new Error('ID non valido');
    }

    return posts.find(post => post.id === id); // Cerca il post con id corrispondente

}


// Aggiunge un nuovo post all'array, verificando duplicati
function addPost(posts, newPost) {

    // Controlla che non ci sia già un post con lo stesso ID
    if (posts.some(post => post.id === newPost.id)) {
        throw new Error('Id già esistente');
    }
    // Controlla che non ci sia già un post con lo stesso slug
    if (posts.some(post => post.slug === newPost.slug)) {
        throw new Error('Slug già esistente');
    }
    // Aggiunge il nuovo post all'array
    posts.push(newPost);

}


// Rimuove un post dall'array dato l'id
function removePost(posts, id) {

    // Trova l'indice del post con l'id specificato
    const index = posts.findIndex(post => post.id === id);
    // Se trovato (indice diverso da -1), lo rimuove con splice
    if (index !== -1) {
        posts.splice(index, 1);
    }

}


// Esporta tutte le funzioni per poterle testare
module.exports = {

    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost

};
