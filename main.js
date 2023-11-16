/*
    Exercise 1
    
    Crea una funzione safeParseJSON che prende 
    una stringa e tenta di analizzarla come JSON.
    Se l'analisi fallisce, la funzione dovrebbe 
    restituire null invece di generare un errore.
    Inoltre, la funzione dovrebbe stampare in 
    console se l'analisi è stata un successo o 
    meno.
*/

const safeParseJSON = (string) => {
  try {
    const stringAnalysis = JSON.parse(string);
    console.log("The analysis was a success");
    return stringAnalysis;
  } catch (error) {
    console.log("The analysis was unsuccesful");
    return null;
  }
};

/*
    Exercise 2    

    Crea una funzione chiamata logElements che 
    prende un array e stampa in console ogni elemento 
    utilizzando il metodo .forEach().
*/

const logElements = (array) => array.forEach((el) => console.log(el));

/*
    Exercise 3

    Scrivi una funzione chiamata divide che prende 
    due parametri, dividendo e divisore. Se il divisore 
    è 0, genera un nuovo errore con il messaggio 
    "Impossibile dividere per zero". Altrimenti, 
    restituisci il risultato della divisione.
*/

const divide = (dividendo, divisore) => {
  if (divisore === 0) {
    throw new Error("Impossibile dividere per zero");
  } else {
    return dividendo / divisore;
  }
};

/*
    Exercise 4

    Scrivi una funzione processNumbers che prende 
    un array, convalida che contenga solo numeri e 
    restituisce un nuovo array con ogni numero elevato 
    al quadrato. Se un elemento dell'array non è un 
    numero, genera un errore indicando a quale indice 
    si trova il valore non numerico.
*/

const processNumbers = (array) => {
  const doubledNumbers = array.map((number, i) => {
    const doubled = number * number;
    if (typeof number !== "number" || isNaN(number)) {
      throw new Error(`Error, not a number at position ${i}`);
    }
    return doubled;
  });
  return doubledNumbers;
};

/*
    Exercise 5

    Scrivi una funzione mapWithIndex che prende un 
    array e restituisce un nuovo array in cui ogni 
    elemento è una stringa che contiene l'elemento 
    originale e il suo indice, formattato come 
    "Elemento [indice]: [elemento]".
*/

const mapWithIndex = (array) => {
  const mapArray = array.map((el, i) => {
    el = `'${el}'`;
    const element = `Elemento ${i}: ${el}`;
    return element;
  });
  return mapArray;
};

/*
    Exercise 6

    Crea una funzione removeShortWords che prende 
    un array di stringhe e una lunghezza minima. 
    Dovrebbe restituire un nuovo array contenente 
    solo le stringhe che sono più lunghe della 
    lunghezza minima. Usa .filter() e assicurati 
    che la funzione non tenga conto delle maiuscole 
    e minuscole.
*/

const removeShortWords = (array, minLength) => {
  const noCaps = array.map((word) => word.toLowerCase());
  const longWords = noCaps.filter((word) => word.length > minLength);
  return longWords;
};
