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
    try{
        const stringAnalysis = JSON.parse(string);
        console.log('The analysis was a success');
    }catch(error){
        console.log('The analysis was unsuccesful');
        return null;
    }
};

/*
    Exercise 2    

    Crea una funzione chiamata logElements che 
    prende un array e stampa in console ogni elemento 
    utilizzando il metodo .forEach().
*/

const logElements = (array)=>{
    array.forEach( el => console.log(el));
};

