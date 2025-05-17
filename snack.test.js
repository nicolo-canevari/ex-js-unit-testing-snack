// Importa le funzioni da testare dal file snacks.js
const { getInitials, createSlug, average, isPalindrome, findPostById,
    addPost, removePost } = require('./snacks');


describe('getInitials', () => {

    // Test di base per verificare che getInitials ritorni le iniziali maiuscole corrette
    test('restituisce le iniziali di un nome completo', () => {
        // Controlla iniziali di "Mario Rossi"
        expect(getInitials('Mario Rossi')).toBe('MR');
        // Controlla iniziali di "anna maria" (verifica anche che maiuscole vengano gestite)
        expect(getInitials('anna maria')).toBe('AM');
    });

});


describe('createSlug', () => {

    // Test che verifica che il risultato sia tutto in lowercase
    test('restituisce una stringa in lowercase', () => {
        expect(createSlug('TEST')).toBe('test');  // Input maiuscolo, output minuscolo
        expect(createSlug('Questo È UN TEST')).toBe('questo-è-un-test'); // Frase complessa con lettere maiuscole e accentate

    });

    // Test per sostituire gli spazi con trattini "-"
    test('sostituisce gli spazi con "-"', () => {

        expect(createSlug('Questo è un test')).toBe('questo-è-un-test'); // Spazi convertiti in trattini
        expect(createSlug('ciao mondo')).toBe('ciao-mondo');             // Due parole separate da trattino

    });

    // Test per assicurarsi che venga lanciato errore se il titolo non è valido
    test('lancia un errore se il titolo è vuoto o non valido', () => {

        expect(() => createSlug('')).toThrow('Titolo non valido');       // Stringa vuota
        expect(() => createSlug('   ')).toThrow('Titolo non valido');    // Solo spazi
        expect(() => createSlug(null)).toThrow('Titolo non valido');     // Valore null
        expect(() => createSlug(undefined)).toThrow('Titolo non valido');// Valore undefined

    });

    // Testa che venga aggiunto un suffisso numerico se lo slug esiste già
    test('incrementa di 1 se lo slug esiste già', () => {

        const existingPosts = [
            { id: 1, title: 'Titolo', slug: 'titolo' },       // Primo slug esistente
            { id: 2, title: 'Titolo', slug: 'titolo-1' },     // Secondo slug con numero
        ];
        // Il nuovo slug deve essere "titolo-2" perché i primi due esistono già
        expect(createSlug('Titolo', existingPosts)).toBe('titolo-2');
    });

});


describe('average', () => {

    // Test della funzione che calcola la media di un array di numeri
    test('calcola la media aritmetica di un array di numeri', () => {
        expect(average([2, 4, 6])).toBe(4);      // Media di 3 numeri diversi
        expect(average([1, 1, 1, 1])).toBe(1);   // Media di numeri uguali
        expect(average([])).toBe(0);              // Media di array vuoto deve essere 0
    });

});

describe('isPalindrome', () => {

    // Testa se la funzione riconosce correttamente le stringhe palindrome
    test('verifica se una stringa è un palindromo', () => {
        expect(isPalindrome('anna')).toBe(true);                     // Palindromo semplice, minuscolo
        expect(isPalindrome('racecar')).toBe(true);                  // Palindromo inglese
        expect(isPalindrome('ciao')).toBe(false);                     // Non palindromo
        expect(isPalindrome('I topi non avevano nipoti')).toBe(true); // Palindromo complesso con spazi e maiuscole
    });

});

describe('findPostById', () => {

    // Array di post da usare nei test
    const posts = [
        { id: 1, title: 'Post Uno', slug: 'post-uno' },
        { id: 2, title: 'Post Due', slug: 'post-due' },
        { id: 3, title: 'Post Tre', slug: 'post-tre' }

    ];

    // Verifica che la funzione trovi il post giusto dato un id valido
    test('restituisce il post corretto dato un id', () => {

        const result = findPostById(posts, 2);   // Cerca post con id 2
        expect(result).toEqual({ id: 2, title: 'Post Due', slug: 'post-due' });  // Deve corrispondere al post corretto

    });

    // Controlla che ogni post abbia le proprietà essenziali
    test('ogni post ha id, title e slug', () => {

        posts.forEach(post => {
            expect(post).toHaveProperty('id');      // Deve avere proprietà 'id'
            expect(post).toHaveProperty('title');   // Deve avere proprietà 'title'
            expect(post).toHaveProperty('slug');    // Deve avere proprietà 'slug'
        });

    });

    // Verifica che venga lanciato un errore se l'id passato non è un numero
    test('lancia errore se id non è un numero', () => {

        expect(() => findPostById(posts, '2')).toThrow('ID non valido');  // stringa non valida
        expect(() => findPostById(posts, null)).toThrow('ID non valido'); // null non valido
    });

});

describe('addPost e removePost', () => {

    let posts;

    // Prima di ogni test resetta l'array posts
    beforeEach(() => {
        posts = [
            { id: 1, title: 'Post Uno', slug: 'post-uno' },
            { id: 2, title: 'Post Due', slug: 'post-due' }
        ];

    });

    // Test per verificare che addPost aggiunga un nuovo post correttamente
    test('addPost aggiunge un nuovo post all\'array', () => {

        const newPost = { id: 3, title: 'Post Tre', slug: 'post-tre' }; // Nuovo post da aggiungere
        addPost(posts, newPost);         // Aggiunge il post all'array
        expect(posts.length).toBe(3);   // L'array deve avere ora 3 elementi
        expect(posts[2]).toEqual(newPost);  // L'ultimo elemento è il nuovo post

    });

    // Test per verificare che removePost rimuova correttamente un post dato l'id
    test('removePost rimuove un post dato l\'id', () => {

        removePost(posts, 1);            // Rimuove il post con id 1
        expect(posts.length).toBe(1);   // Ora deve esserci solo 1 post
        expect(posts.find(p => p.id === 1)).toBeUndefined();  // Il post con id 1 non deve più esistere

    });

    // Test per verificare che addPost lanci errore se l'id esiste già
    test('addPost lancia errore se id esiste già', () => {

        const duplicateIdPost = { id: 1, title: 'Duplicato', slug: 'post-nuovo' };
        expect(() => addPost(posts, duplicateIdPost)).toThrow('Id già esistente');  // Errore per id duplicato

    });

    // Test per verificare che addPost lanci errore se lo slug esiste già
    test('addPost lancia errore se slug esiste già', () => {

        const duplicateSlugPost = { id: 99, title: 'Duplicato', slug: 'post-due' };
        expect(() => addPost(posts, duplicateSlugPost)).toThrow('Slug già esistente');  // Errore per slug duplicato

    });

});