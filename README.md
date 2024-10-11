# MovieTest
Questo sito è stato creato per visualizzare la descrizione dei film direttamente nella home page. Una volta avviato, troverai i film più popolari del momento. Dalla barra superiore, puoi effettuare la ricerca di un film specifico e, cliccando su "Ricerca avanzata", puoi filtrare i film per genere o lingua originale. Selezionando la card di un film, si aprirà una pagina di dettaglio dove potrai visualizzare tutte le informazioni sul film, inclusi la trama, la valutazione (da 1 a 10) e la data di uscita.

## Tecnologie Utilizzate

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Vue 3 (options)**
- **Bootstrap 5.3**
- **Axios**
- **TMDb API**
  
## Requisiti

Prima di avviare il progetto, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 14 o successiva)
- [npm](https://www.npmjs.com/)

## Installazione

Segui questi passaggi per installare il progetto localmente:

1. Clona il repository:
    ```bash
    git clone https://github.com/AntoCic/frontend-challenge-main.git
    ```
2. Vai nella cartella del progetto:
    ```bash
    cd frontend-challenge-main
    ```
3. Installa le dipendenze:
    ```bash
    npm i
    ```

## Avvio del Progetto

Per avviare l'ambiente di sviluppo locale:

```bash
npm run dev
```

## Creazione della Build

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```
La build verrà generata nella cartella `dist`.

## Struttura del Progetto

```
frontend-challenge-main/
├── public/             # File pubblici
├── src/                # Codice sorgente
│   ├── assets/         # Risorse come immagini e stili
│   ├── components/     # Componenti riutilizzabili
│   ├── pages/          # Pagine principali
│   ├── App.vue         # Componente principale dell'applicazione
│   ├── countries.js    # Contiene on object con tutte le emoji delle bandiere come value e come key la corrispondente dal sito TMDB
│   ├── main.js         # Avvia l'app Vue e configura componenti e router
│   ├── router.js       # Contiene le rotte del sito
│   └── store.vue       # Gestisce lo stato globale e le chiamate API in Vue.
├── package.json        # Dipendenze del progetto
└── README.md           # Documentazione
```

## Gestione dello Store e Chiamate API

Il progetto utilizza uno **store reattivo** per gestire lo stato globale dell'applicazione. Ecco una panoramica delle principali funzionalità e variabili gestite:

- **TMDB_KEY**: Chiave di autenticazione per accedere all'API di The Movie Database (TMDb).
- **currentMovies**: Contiene i film attualmente caricati in pagina.
- **currentPage** e **totalPages**: Monitorano lo stato della paginazione delle risposte API.
- **favoritesFilm**: Memorizza i film preferiti salvati in locale (localStorage).
- **lastCall**: Salva l'ultima chiamata API effettuata per supportare la navigazione tra le pagine.
- **homeTitle**: Titolo visualizzato in cima alla pagina (es. "Best Movie" o titoli personalizzati durante la ricerca).
- **genres**: Elenco dei generi cinematografici recuperati dall'API TMDb.
- **countries**: Oggetto che mappa le bandiere dei paesi alle lingue dei film.

### Funzionalità Principali:

1. **start()**: 
   - Viene eseguito all'avvio della pagina e carica i film preferiti dal localStorage. Poi, dopo un breve ritardo per mostrare il caricamento, esegue una chiamata API per ottenere i film popolari.

2. **callAPI(action = 'discover/movie', params = {}, advancedSearch = null)**:
   - Esegue una chiamata API a TMDb per ottenere i film in base ai parametri forniti (es. lingua, ordinamento per popolarità, ecc.).
   - Se viene effettuata una ricerca avanzata, filtra i film per genere e lingua.
   - Memorizza l'ultima chiamata API per permettere la navigazione tra le pagine dei risultati.

3. **newMovieFromMovie(movie)**:
   - Metodo per creare un nuovo oggetto `Movie` a partire dai dati del film.

4. **loading**: 
   - Gestisce lo stato di caricamento e mostra un messaggio randomizzato mentre l'API sta rispondendo. Puoi personalizzare questi messaggi nel campo `defaultMsg`.

### Classe `Movie`:
La classe `Movie` crea un oggetto film a partire dai dati restituiti dall'API di TMDb, mappando le informazioni principali come:
   - **ID**: identificatore unico del film
   - **Titolo**
   - **Data di uscita**
   - **Trama**
   - **Genere**
   - **Voto** con un sistema di colori per indicare la qualità (verde, giallo, rosso)
   - **Immagine**
   - **poster**
   - **Lingua originale**

### Funzionalità Extra:
- **Paginazione**: Gli utenti possono navigare tra le pagine dei risultati grazie ai metodi `nextPage` e `previousPage`, che aggiornano i risultati sulla base dell'ultima chiamata API.
- **Gestione dei Preferiti**: I film preferiti vengono memorizzati nel localStorage e possono essere recuperati e visualizzati quando richiesto.
- **Ricerca Avanzata**: Gli utenti possono filtrare i film per genere e lingua.