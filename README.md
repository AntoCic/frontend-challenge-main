# MovieTest
Questo sito è stato creato per visualizzare la descrizione dei film direttamente nella home page. Una volta avviato, troverai i film più popolari del momento. Dalla barra superiore, puoi effettuare la ricerca di un film specifico e, cliccando su "Ricerca avanzata", puoi filtrare i film per genere o lingua originale. Selezionando la card di un film, si aprirà una pagina di dettaglio dove potrai visualizzare tutte le informazioni sul film, inclusi la trama, la valutazione (da 1 a 10) e la data di uscita.

## Tecnologie Utilizzate

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Vue 3 (options)**
- **Bootstrap 5.3**
  
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
│   ├── views/          # Pagine principali
│   └── App.vue         # Componente principale dell'applicazione
├── package.json        # Dipendenze del progetto
└── README.md           # Documentazione
```