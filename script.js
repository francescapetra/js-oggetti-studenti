// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var studente = {
  nome: "Francesca",
  cognome: "Petraroia",
  eta : 32,
};
for (var key in studente) {
console.log(studente[key]);
// $(".dati_studente").text();
}
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var studenti = [
{
  nome: "tizio",
  cognome: "rossi",
},
{
  nome: "caio",
  cognome: "bianchi",
},
{
  nome: "sempronio",
  cognome: "verdi",
},
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.
//
  var studenti2 = [{
      nome2: "maria",
      cognome2: "rossi",
      eta2: 22
    },
    {
      nome2: "mario",
      cognome2: "blu",
      eta2: 20
    }
  ]

  // Crea un nuovo profilo e inseriscilo
  var nuovoStudente2 = prompt("Hai già un account?")
  if (nuovoStudente2 === "no") {
    var newUser = prompt("inserisci il tuo nome");
    var newAccount = {nome2: newUser};
    newAccount.cognome2 = prompt("inserisci il tuo cognome:");
    newAccount.eta2 = prompt("inserisci la tua eta:");
    studenti2.push(newAccount);
  };

  // tutti gli newAccount
  console.log(studenti2);
