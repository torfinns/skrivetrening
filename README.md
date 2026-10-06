# Skrivetrening

En liten nettside for daglig rettskrivingstrening, først på norsk og senere på engelsk. Hver økt tar omtrent 5 minutter (kort) eller 10 minutter (lang). Oppgaven, svaret og tilbakemeldingen vises på samme skjerm, og alt fungerer på mobil.

## Legge siden ut på GitHub Pages

1. Logg inn på github.com og lag et nytt repository, for eksempel `skrivetrening`. Det kan være offentlig (gratis Pages) – siden inneholder ingen personlige data.
2. Last opp alle filene i denne mappen (`index.html`, `style.css`, `app.js`, `ovelser-no.js`, `ovelser-no-2.js`, `ovelser-en.js`, `ovelser-en-2.js`, `README.md`) til roten av repoet. Enklest: «Add file» → «Upload files», dra filene inn, og trykk «Commit changes».
3. Gå til «Settings» → «Pages». Under «Build and deployment» velger du «Deploy from a branch», branch `main` og mappe `/ (root)`. Trykk «Save».
4. Etter et minutt eller to dukker adressen opp øverst på samme side, typisk `https://brukernavn.github.io/skrivetrening/`.
5. Åpne adressen på sønnens mobil og legg den til på hjemskjermen («Del» → «Legg til på Hjem-skjerm» på iPhone, menyen → «Legg til på startskjermen» på Android). Da oppfører den seg nesten som en app.

## Hvordan øktene fungerer

Hver dag lages en ny økt automatisk ut fra datoen, så oppgavene skifter fra dag til dag. Etter dagens økt kan han ta ekstraøkter hvis han vil.

Progresjonen går i fire nivåer per språk:

| Nivå | Innhold | Låses opp etter |
|---|---|---|
| 1 | Ord (velg riktig / skriv ordet) | Start |
| 2 | Ord og setninger (rett feilene i en setning) | 5 beståtte økter |
| 3 | Faste vendinger og korte e-poster | 12 beståtte økter |
| 4 | Søknader og e-poster, med skjelett først | 20 beståtte økter |

En økt er bestått med minst 60 % riktig. Nye temaer (stum h, dobbel konsonant, og/å, særskriving osv.) kommer gradvis til. Oppgaver han bommer på, kommer tilbake i senere økter til han har fått dem riktig to ganger, og temaer han sliter med, dukker oftere opp. På nivå 4 er hver femte økt en hel jobbsøknad, der han først ser et skjelett og så skriver sin egen versjon.

Den faste oppgavebanken har omtrent 1 000 oppgaver:

| | Ord | Setninger å rette | Vendinger | Skriveoppgaver (e-post / søknadsdel / hel søknad) |
|---|---|---|---|---|
| Norsk | 356 | 129 | 47 | 36 (15 / 13 / 8) |
| Engelsk | 174 | 90 | 40 | 26 (11 / 10 / 5) |

Det holder til flere måneder med daglige økter uten at det føles likt. Ordoppgavene kommer igjen etter hvert, og det er meningen – det er slik ordbildet sitter. Skriveoppgavene er det som tar slutt først, og det er der KI-oppgavene (under) gjør størst forskjell.

Engelsk låses opp etter 15 norske økter. Under «Innstillinger» kan du låse det opp med en gang, og du kan også flytte nivået opp eller ned manuelt.

## Tilbakemelding

Ord og setninger rettes automatisk og eksakt, med forklaring av regelen. Fritekst (e-poster og søknader) får en automatisk sjekk av vanlige feil – stavefeil, særskriving, og/å, store og små bokstaver og tegnsetting – sammen med en eksempeltekst og en liste han kan sjekke selv. Den automatiske sjekken fanger mye, men ikke alt.

### Valgfri KI: tilbakemelding og nye oppgaver

Med en egen API-nøkkel fra Anthropic under «Innstillinger» får du to ting. Dette er helt valgfritt; siden fungerer uten.

- **Tilbakemelding på skriveoppgaver** – rettskriving, ordlyd og innhold, med en forbedret versjon av teksten.
- **Nye oppgaver laget til ham** – fra nivå 2 lager appen i bakgrunnen nye setninger å rette og nye skriveoppgaver, og legger dem i en reserve. Setningene øver på de kategoriene han treffer dårligst på, og på ord og regler han faktisk har bommet på i historikken. Skriveoppgavene unngår temaer han allerede har hatt, og på nivå 4 får han også nye arbeidslivs-e-poster og hele søknader med en tenkt stillingsannonse. Omtrent 60 % av setningene i en økt kommer da fra reserven, og skriveoppgaven er som oftest ny. Slike oppgaver er merket «laget til deg».

KI-oppgavene sjekkes automatisk (at setningen faktisk inneholder en feil, at kategorien finnes, at lengden er rimelig) før de tas i bruk. Det fanger tull, men ikke alt: KI kan av og til ta feil om rettskriving. Ser du en oppgave med feil fasit i historikken, er det verdt å nevne for ham. Under «Innstillinger» ser du hvor mange oppgaver som ligger i reserve, og du kan slå av KI-oppgavene uten å slå av tilbakemeldingen. Påfyll skjer omtrent én gang per økt, så kostnaden er liten – grovt anslått noen få kroner i måneden ved daglig bruk.

- Lag nøkkel på console.anthropic.com, og sett en lav månedlig utgiftsgrense (for eksempel noen få dollar). En skriveoppgave koster en brøkdel av en krone.
- Nøkkelen lagres bare i nettleseren på den enheten der den er lagt inn, og sendes kun direkte til Anthropic. Den havner aldri i GitHub-repoet.
- Fordi nøkkelen ligger i nettleseren, bør den bare legges inn på en enhet du stoler på. Du kan når som helst slette den i innstillingene eller trekke den tilbake hos Anthropic.

## Historikk og sikkerhetskopi

Alle svar og resultater lagres i nettleseren (localStorage) på enheten han bruker. Under «Historikk» ser han tidligere økter, hva han svarte og hva som var riktig, samt statistikk per tema. Med «Del med en forelder» etter en økt kan han sende deg et kort sammendrag.

Viktig: dataene følger enheten og nettleseren, ikke kontoen. Bytter han telefon eller tømmer nettleserdata, forsvinner historikken. Bruk derfor «Last ned kopi» under «Innstillinger» → «Sikkerhetskopi» av og til for å lagre en JSON-fil, og «Hent inn kopi» for å legge den inn igjen på en ny enhet.

## Legge til flere oppgaver

Oppgavene ligger i `ovelser-no.js` og `ovelser-no-2.js` (norsk) og `ovelser-en.js` og `ovelser-en-2.js` (engelsk). Filene med «-2» lastes etter de første og legger oppgavene sine til nederst. Hver liste (ord, setninger, vendinger, skriveoppgaver) har samme format som oppgavene som står der fra før – kopier en eksisterende oppgave og endre innholdet.

Legg alltid nye oppgaver til **nederst** i listen, det vil si i den siste fila (eller i en ny fil, for eksempel `ovelser-no-3.js`, som legges inn i `index.html` etter de andre). Oppgavene får nummer etter plasseringen, og historikken peker på disse numrene. Setter du inn noe i midten eller sletter noe, blir historikken og «feil som skal komme tilbake» koblet til feil oppgave. Vil du fjerne en oppgave, er det tryggere å endre teksten enn å slette den.

Etter endringer laster du opp filen på nytt i GitHub (eller redigerer den direkte der med blyantikonet). Siden oppdateres i løpet av et par minutter.

## Filer

- `index.html` – selve siden
- `style.css` – utseende, lys og mørk modus
- `app.js` – logikk for økter, retting, progresjon og historikk
- `ovelser-no.js` og `ovelser-no-2.js` – norske oppgaver og regler
- `ovelser-en.js` og `ovelser-en-2.js` – engelske oppgaver (forklaringene er på norsk)
