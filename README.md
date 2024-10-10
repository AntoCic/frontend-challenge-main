# MovieTest
CMD to start
```sh
npm i
npm run dev
```

> **NOTA:** Se non hai interesse nell'utilizzo di Netlify Functions, puoi cancellare il file `netlify.toml` e la cartella `functions`, e fermarti di leggere qui. Se vuoi comunque pubblicare il sito su Netlify, puoi farlo seguendo solo la "Guida per pubblicare un progetto su Netlify" qui sotto.

> **ATTENZIONE:** Se utilizzi Netlify Functions, assicurati di aver un account su Netlify e segui i passaggi elencati di seguito:

### Guida per pubblicare un progetto su Netlify

1. **Pubblica il progetto su GitHub**
   - Assicurati che il tuo progetto sia stato caricato su GitHub.

2. **Collega il tuo account GitHub con Netlify**
   - Vai su Netlify e collega il tuo account GitHub a Netlify.

3. **Aggiungi un nuovo sito**
   - Su Netlify, clicca su "Aggiungi un nuovo sito".

4. **Importa da un progetto esistente**
   - Seleziona "Importa da un progetto esistente".

5. **Seleziona GitHub**
   - Scegli GitHub come fonte del progetto.

6. **Seleziona il tuo progetto**
   - Dalla lista dei tuoi progetti su GitHub, seleziona quello che vuoi pubblicare.

7. **Aggiungi un nome disponibile per il sito**
   - Inserisci un nome disponibile per il sito su Netlify.

8. **Fai il deploy**
   - Clicca sul bottone apposito in basso per avviare il deploy.

9. **Il tuo sito è online**
   - Una volta completato il deploy, il tuo sito sarà online.

### Netlify CLI
Installa Netlify CLI a livello globale lanciando
```sh
npm install netlify-cli -g
```

Effettua il login con il comando di sotto. e segui la procedura di login a netlify
```sh
ntl login
```

Collega il progetto locale con il sito online. 
In questa maniera se hai dichiarato environment variables nel sito online verranno lette anche in locale
lancia
```sh
ntl link
```

testa il progetto su un serverver locale lanciando
```sh
ntl dev
```


# Sfida

Questa sfida è creata per coloro che, per qualsiasi motivo, non hanno progetti o esempi di codice che ci permettano di analizzare e valutare con precisione le loro capacità.

Sappiamo che, in alcuni casi, queste sfide devono essere risolte nel vostro tempo libero, quindi abbiamo fatto del nostro meglio per renderle facili o complesse come decidete voi, sperando che non abbiano un impatto eccessivo sulla vostra vita personale. Il più delle volte, anche una sfida incompleta può darci informazioni sufficienti su ciò che siete in grado di fare.

<!-- # Le sfide -->

È possibile utilizzare qualsiasi approccio che si preferisce, cercando di mantenerlo semplice. Vi incoraggiamo a usare i vostri strumenti e pacchetti preferiti per costruire la migliore applicazione possibile.

### A) Ricerca di film

Questa sfida è più orientata ai dati. Dovrete costruire un'applicazione che elenchi i film e mostri alcuni dettagli.

- **[Istruzioni per la ricerca di film](/movie-search)**

<!-- ### B) Sfide dell'interfaccia utente

Queste sfide sono più orientate al design. Cerchiamo attenzione ai dettagli e perfezionismo.

Scegliete una delle seguenti opzioni:

- **[Lettore audio](/audio-player)**
- **[Calendario](/calendar-picker)** -->

<!-- ## Come partecipare

1. Scegliere la sfida e leggere le istruzioni;
2. Risolvete la sfida nel miglior modo possibile; -->


### Suggerimenti

- Scrivete un buon README con informazioni di base (ad esempio: come avviare il progetto e come costruirlo);
- Fare domande è positivo. Non vi penalizzeremo per aver fatto domande;
- Cerchiamo segnali di comprensione di concetti come events, promises e reactivity e di come questi concetti siano implementati in Javascript;
- I test unitari saranno molto apprezzati;
- La cronologia git sarà presa in considerazione;
- Il vostro codice sarà valutato in base a: semantica, struttura, leggibilità, eleganza (oltre ad altri fattori);


# Ricerca di film

Questa app dovrebbe essere una ricerca di film con due pagine:

- **Home page:** campo di ricerca e un elenco risultati;
  _Pensate allo stato vuoto, al caricamento e al filmato non trovato_

- **Movie page:** pagina dettaglio;
  _Pensate al caricamento e al filmato non trovato_

Lo scopo di questa sfida è valutare le vostre competenze in HTML, CSS, Javascript e API e l'approccio complessivo durante la composizione di una semplice applicazione web con una serie di schermate e un feed API.

## Skills Principali

1. Scrivere una solida applicazione;
2. Effettuare chiamate API;
3. Filtrare i dati e modellarli per visualizzarli sull'interfaccia utente;
4. Cura del design dell'app.

## Cosa ci si aspetta

- Un'applicazione con due schermate (`Home` e `Dettaglio`);
- Un layout e un design puliti;
<!-- - Un modo per etichettare i film come _favoriti_ (e farli persistere sarebbe fantastico!). -->
