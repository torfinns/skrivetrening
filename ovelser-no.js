/* Norsk øvelsesbank (bokmål).
   Legg til nye oppgaver NEDERST i hver liste, så beholder gamle oppgaver sin ID i historikken.
   Typer:
     c = velg riktig (q: setning med ___, o: alternativer, a: riktig)
     t = skriv ordet (q: setning med ___, h: hint der _ betyr manglende bokstaver, a: riktig ord)
   Rettesetninger (fix): q = setning med feil, a = riktig setning (kan være liste med godkjente svar)
   Vendinger (phrases): q = situasjon, a = liste med godkjente svar (første brukes som fasit/hint)
*/
window.OVELSER_NO = {
  lang: 'no',
  label: 'Norsk',
  catOrder: ['og/å', 'dobbel konsonant', 'stum h', 'da/når', 'de/dem', 'særskriving',
    'store og små bokstaver', 'faste uttrykk', 'kj, skj og sj', 'stum g og d', 'vanlige ord', 'tegnsetting'],
  rules: {
    'og/å': 'Å står foran verb i infinitiv: å spise, å lese, å søke. Og binder sammen ord og setninger. Tips: Kan du si «to» på engelsk, skal det være å. Kan du si «and», skal det være og.',
    'dobbel konsonant': 'Kort vokal fulgt av én konsonantlyd gir ofte dobbel konsonant: komme, takk, venn, alltid. Lang vokal gir enkel: tak – takk, hat – hatt. Unntak: noen småord har enkel konsonant selv om vokalen er kort: han, hun, skal, vil, til, kan, men, som, dum(t).',
    'stum h': 'Spørreord og noen andre ord starter med en stum h: hva, hvem, hvor, hvordan, hvorfor, hvis, hver, hvit. Også hj-: hjem, hjelp, hjul, hjerte.',
    'da/når': 'Da brukes om én bestemt gang i fortiden: «Da jeg var liten …». Når brukes om noe som gjentar seg, om nåtid og framtid, og i spørsmål: «Når kommer du?»',
    'de/dem': 'De er den som gjør noe (subjekt): «De kommer.» Dem er den det gjøres noe med (objekt): «Jeg så dem.» Tips: they = de, them = dem.',
    'særskriving': 'Sammensatte ord skrives i ett ord på norsk: sommerjobb, arbeidserfaring, fotballtrening. Delt skrivemåte kan endre betydningen: «lamme lår» er noe annet enn «lammelår». Unntak å kjenne: videregående skole.',
    'store og små bokstaver': 'Dager, måneder, høytider, språk og nasjonaliteter skrives med liten bokstav på norsk: mandag, mai, jul, norsk, svensk. Navn på personer, steder, land og bedrifter får stor bokstav: Oslo, Spania, Rema 1000.',
    'faste uttrykk': 'Mange tidsuttrykk skrives i to ord: i dag, i morgen, i går, i kveld, i hvert fall, etter hvert, til slutt, i stedet, så vidt. Men altfor skrives i ett ord.',
    'kj, skj og sj': 'Kj-lyden skrives kj (kjøre, kjenne), k foran i og y (kino, kirke) eller tj (tjue, tjene). Sj-lyden skrives sj (sjef, sjanse), skj (skjønne, skjema) eller sk foran i og y (ski, sky).',
    'stum g og d': 'Mange ord har en stum g eller d: deg, meg, viktig, hyggelig, egentlig, glad, god, rundt, med, ved, tid. Tips: tenk på bøyningsformer – glad → glade, god → gode.',
    'vanlige ord': 'Noen ord skrives feil veldig ofte. Det lønner seg å pugge dem: kanskje, egentlig, fortsatt, selvfølgelig, interessert, sannsynlig, forskjellig, akkurat, dessverre.',
    'tegnsetting': 'Komma foran men: «Jeg vil, men jeg kan ikke.» Komma etter en leddsetning som står først: «Når jeg kommer hjem, skal jeg spise.» Komma mellom ledd i en oppramsing: «pålitelig, blid og ansvarsfull».'
  },

  words: [
    // og/å
    { t: 'c', c: 'og/å', q: 'Jeg har lyst til ___ dra på kino i kveld.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Hun kjøpte melk ___ brød på butikken.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Det er viktig ___ sove nok før en prøve.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Vi satt ___ snakket hele kvelden.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Han begynte ___ trene fotball da han var sju.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Jeg glemte ___ ta med meg nøklene.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Hun er flink til ___ lytte.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Vi spiste pizza ___ så på film.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Jeg håper ___ få svar snart.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Han ble stående ___ vente på bussen.', o: ['og', 'å'], a: 'og', e: '«Bli stående og …», «sitte og …», «ligge og …» bruker og.' },
    { t: 'c', c: 'og/å', q: 'Prøv ___ skrive litt hver dag.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Kom ___ hjelp meg med dette!', o: ['og', 'å'], a: 'og', e: '«Kom og hjelp» – her er det to handlinger: komme og hjelpe.' },
    { t: 'c', c: 'og/å', q: 'Jeg pleier ___ gå tur med hunden etter skolen.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Han sitter ___ spiller hele dagen.', o: ['og', 'å'], a: 'og', e: '«Sitter og spiller» – begge verbene står i samme form.' },
    { t: 'c', c: 'og/å', q: 'Jeg ser fram til ___ høre fra deg.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Jeg har bestemt meg for ___ søke på jobben.', o: ['og', 'å'], a: 'å' },

    // dobbel konsonant
    { t: 't', c: 'dobbel konsonant', q: 'Når skal du ___ hjem?', h: 'ko_e', a: 'komme' },
    { t: 't', c: 'dobbel konsonant', q: 'Tusen ___ for hjelpen!', h: 'ta_', a: 'takk' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg har ___ likt å lage mat.', h: 'a_tid', a: 'alltid' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi skal være ___ hele dagen.', h: 'sa_en', a: 'sammen' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg vet ___ hva jeg skal si.', h: 'i_e', a: 'ikke' },
    { t: 't', c: 'dobbel konsonant', q: 'Han er min beste ___.', h: 've_', a: 'venn' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi ___ dra nå.', h: 'ska_', a: 'skal', e: 'Skal er et av småordene med enkel konsonant. «Skall» betyr noe annet (eggeskall).' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg ___ til butikken i går.', h: 'gi_', a: 'gikk' },
    { t: 't', c: 'dobbel konsonant', q: 'Han ___ en ny telefon i går.', h: 'fi_', a: 'fikk' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg ___ ikke gå på fest i kveld.', h: 'vi_', a: 'vil', e: 'Vil har enkel l. «Vill» betyr «ikke tam», som i vill hest.' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi spiste ___ klokka fem.', h: 'mi_ag', a: 'middag' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi må ___ på bussen.', h: 've_te', a: 'vente' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg ___ deg i morgen.', h: 'ri_er', a: 'ringer' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg er ___ for at du hjalp meg.', h: 'ta_nemlig', a: 'takknemlig' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi ___ hverandre fra skolen.', h: 'kje_er', a: 'kjenner' },
    { t: 't', c: 'dobbel konsonant', q: 'Det er ___ å komme for sent.', h: 'du_t', a: 'dumt' },
    { t: 't', c: 'dobbel konsonant', q: 'Med vennlig ___', h: 'hi_sen', a: 'hilsen', e: 'Hilsen har enkel l og enkel s.' },
    { t: 't', c: 'dobbel konsonant', q: 'Bussen kommer om ti ___.', h: 'minu_er', a: 'minutter' },
    { t: 't', c: 'dobbel konsonant', q: 'Det er ___ det jeg mener.', h: 'a_urat', a: 'akkurat' },
    { t: 't', c: 'dobbel konsonant', q: '___ til på prøven!', h: 'Ly_e', a: 'Lykke' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi bor ___ skolen og butikken.', h: 'me_om', a: 'mellom' },

    // stum h
    { t: 't', c: 'stum h', q: 'Jeg vet ikke ___ han bor.', h: '_vor', a: 'hvor' },
    { t: 't', c: 'stum h', q: '___ heter du?', h: '_va', a: 'Hva' },
    { t: 't', c: 'stum h', q: '___ kommer på festen?', h: '_vem', a: 'Hvem' },
    { t: 't', c: 'stum h', q: '___ gjør man det?', h: '_vordan', a: 'Hvordan' },
    { t: 't', c: 'stum h', q: '___ er du sur?', h: '_vorfor', a: 'Hvorfor' },
    { t: 't', c: 'stum h', q: 'Jeg skal gå ___ nå.', h: '_jem', a: 'hjem' },
    { t: 't', c: 'stum h', q: 'Kan du ___ meg med leksene?', h: '_jelpe', a: 'hjelpe' },
    { t: 't', c: 'stum h', q: '___ du vil, kan vi gå sammen.', h: '_vis', a: 'Hvis' },
    { t: 't', c: 'stum h', q: 'Han trener ___ dag.', h: '_ver', a: 'hver' },
    { t: 't', c: 'stum h', q: 'Hun har en ___ jakke.', h: '_vit', a: 'hvit' },
    { t: 't', c: 'stum h', q: 'Takk for ___!', h: '_jelpen', a: 'hjelpen' },
    { t: 't', c: 'stum h', q: 'Sykkelen har et punktert ___.', h: '_jul', a: 'hjul' },

    // da/når
    { t: 'c', c: 'da/når', q: '___ jeg var liten, bodde vi i Bergen.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: '___ jeg kommer hjem, skal jeg lage middag.', o: ['Da', 'Når'], a: 'Når' },
    { t: 'c', c: 'da/når', q: 'Jeg ble glad ___ jeg fikk jobben.', o: ['da', 'når'], a: 'da' },
    { t: 'c', c: 'da/når', q: 'Hver gang ___ det regner, tar jeg bussen.', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: '___ begynner sommerferien?', o: ['Da', 'Når'], a: 'Når' },
    { t: 'c', c: 'da/når', q: 'Han ringte meg ___ han hadde landet.', o: ['da', 'når'], a: 'da' },
    { t: 'c', c: 'da/når', q: '___ vi var på hytta i fjor, regnet det hele tiden.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: 'Jeg blir alltid sliten ___ jeg har trent.', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: 'Vet du ___ bussen går?', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: 'Alle jublet ___ vi scoret i går.', o: ['da', 'når'], a: 'da' },
    { t: 'c', c: 'da/når', q: '___ du søker jobb, bør søknaden være kort.', o: ['Da', 'Når'], a: 'Når' },
    { t: 'c', c: 'da/når', q: 'Jeg var tolv år ___ jeg lærte å svømme.', o: ['da', 'når'], a: 'da' },
    { t: 'c', c: 'da/når', q: 'Han smiler alltid ___ han ser deg.', o: ['da', 'når'], a: 'når' },

    // de/dem
    { t: 'c', c: 'de/dem', q: '___ kommer klokka sju.', o: ['De', 'Dem'], a: 'De' },
    { t: 'c', c: 'de/dem', q: 'Jeg så ___ på trening i går.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Har du snakket med ___?', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Jeg tror ___ har glemt det.', o: ['de', 'dem'], a: 'de' },
    { t: 'c', c: 'de/dem', q: 'Kan du gi ___ en beskjed?', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Vennene mine sier at ___ vil være med.', o: ['de', 'dem'], a: 'de' },
    { t: 'c', c: 'de/dem', q: 'Jeg ventet på ___ i en halvtime.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: '___ som vil være med, må melde seg på.', o: ['De', 'Dem'], a: 'De', e: '«De som …» – her er de subjekt i setningen.' },
    { t: 'c', c: 'de/dem', q: 'Vi skal møte ___ etter skolen.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Hvor er skoene? Jeg finner ___ ikke.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Hvis ___ ringer, må du svare.', o: ['de', 'dem'], a: 'de' },

    // særskriving
    { t: 'c', c: 'særskriving', q: 'Jeg søker på en ___ i butikken.', o: ['sommer jobb', 'sommerjobb'], a: 'sommerjobb' },
    { t: 'c', c: 'særskriving', q: 'Jeg har ___ i kveld.', o: ['fotballtrening', 'fotball trening'], a: 'fotballtrening' },
    { t: 'c', c: 'særskriving', q: 'Har du noen ___?', o: ['arbeids erfaring', 'arbeidserfaring'], a: 'arbeidserfaring' },
    { t: 'c', c: 'særskriving', q: 'Han tok ___ i fjor.', o: ['førerkort', 'fører kort'], a: 'førerkort' },
    { t: 'c', c: 'særskriving', q: 'Jeg skal på ___ i morgen.', o: ['jobb intervju', 'jobbintervju'], a: 'jobbintervju' },
    { t: 'c', c: 'særskriving', q: 'Hun har en ___ på kafé.', o: ['deltidsjobb', 'deltids jobb'], a: 'deltidsjobb' },
    { t: 'c', c: 'særskriving', q: 'Jeg er god på ___.', o: ['kunde service', 'kundeservice'], a: 'kundeservice' },
    { t: 'c', c: 'særskriving', q: 'Jeg er en god ___.', o: ['lagspiller', 'lag spiller'], a: 'lagspiller' },
    { t: 'c', c: 'særskriving', q: 'Jeg gikk på ___ i Asker.', o: ['ungdoms skolen', 'ungdomsskolen'], a: 'ungdomsskolen' },
    { t: 'c', c: 'særskriving', q: 'Jeg går første år på ___.', o: ['videregående skole', 'videregåendeskole'], a: 'videregående skole', e: 'Unntaket: videregående skole skrives i to ord.' },
    { t: 'c', c: 'særskriving', q: 'Det gikk ___ på prøven!', o: ['kjempe bra', 'kjempebra'], a: 'kjempebra' },
    { t: 'c', c: 'særskriving', q: 'Hva skal du gjøre i ___?', o: ['sommerferien', 'sommer ferien'], a: 'sommerferien' },
    { t: 'c', c: 'særskriving', q: 'Jeg søker stillingen som ___.', o: ['butikk medarbeider', 'butikkmedarbeider'], a: 'butikkmedarbeider' },

    // store og små bokstaver
    { t: 'c', c: 'store og små bokstaver', q: 'Vi har prøve på ___.', o: ['Mandag', 'mandag'], a: 'mandag' },
    { t: 'c', c: 'store og små bokstaver', q: 'Jeg har bursdag i ___.', o: ['Mai', 'mai'], a: 'mai' },
    { t: 'c', c: 'store og små bokstaver', q: 'Hun snakker godt ___.', o: ['Engelsk', 'engelsk'], a: 'engelsk' },
    { t: 'c', c: 'store og små bokstaver', q: 'Vi skal til ___ i sommer.', o: ['spania', 'Spania'], a: 'Spania' },
    { t: 'c', c: 'store og små bokstaver', q: 'Moren hans er ___.', o: ['Svensk', 'svensk'], a: 'svensk' },
    { t: 'c', c: 'store og små bokstaver', q: 'God ___ og godt nytt år!', o: ['Jul', 'jul'], a: 'jul' },
    { t: 'c', c: 'store og små bokstaver', q: 'Kan du komme på ___?', o: ['Fredag', 'fredag'], a: 'fredag' },
    { t: 'c', c: 'store og små bokstaver', q: 'Jeg har ___ i første time.', o: ['Norsk', 'norsk'], a: 'norsk' },
    { t: 'c', c: 'store og små bokstaver', q: 'Vi så kampen mot ___.', o: ['tyskland', 'Tyskland'], a: 'Tyskland' },
    { t: 'c', c: 'store og små bokstaver', q: 'Sommerferien starter i ___.', o: ['juni', 'Juni'], a: 'juni' },

    // faste uttrykk
    { t: 'c', c: 'faste uttrykk', q: 'Jeg skal trene ___.', o: ['idag', 'i dag'], a: 'i dag' },
    { t: 'c', c: 'faste uttrykk', q: 'Vi ses ___!', o: ['imorgen', 'i morgen'], a: 'i morgen' },
    { t: 'c', c: 'faste uttrykk', q: 'Jeg var syk ___.', o: ['igår', 'i går'], a: 'i går' },
    { t: 'c', c: 'faste uttrykk', q: 'Det var ___ morsomt.', o: ['i hvert fall', 'ihvertfall'], a: 'i hvert fall' },
    { t: 'c', c: 'faste uttrykk', q: 'Du blir bedre ___.', o: ['etterhvert', 'etter hvert'], a: 'etter hvert' },
    { t: 'c', c: 'faste uttrykk', q: 'Vi tok bussen ___ for toget.', o: ['i stedet', 'istedet'], a: 'i stedet' },
    { t: 'c', c: 'faste uttrykk', q: 'Det ble ___ sent.', o: ['alt for', 'altfor'], a: 'altfor', e: 'Altfor skrives i ett ord.' },
    { t: 'c', c: 'faste uttrykk', q: '___ kom han likevel.', o: ['Tilslutt', 'Til slutt'], a: 'Til slutt' },
    { t: 'c', c: 'faste uttrykk', q: 'Vi møtes ___.', o: ['i kveld', 'ikveld'], a: 'i kveld' },
    { t: 'c', c: 'faste uttrykk', q: '___ jeg vet, er han syk.', o: ['Så vidt', 'Såvidt'], a: 'Så vidt' },

    // kj, skj og sj
    { t: 't', c: 'kj, skj og sj', q: 'Kan du ___ meg til trening?', h: '_øre', a: 'kjøre' },
    { t: 't', c: 'kj, skj og sj', q: 'Jeg ___ ikke hva du mener.', h: '_ønner', a: 'skjønner' },
    { t: 't', c: 'kj, skj og sj', q: 'Hun er ___ i butikken.', h: '_ef', a: 'sjef' },
    { t: 't', c: 'kj, skj og sj', q: 'Vi ser ham ___.', h: '_elden', a: 'sjelden' },
    { t: 't', c: 'kj, skj og sj', q: 'Vi lager mat på ___.', h: '_økkenet', a: 'kjøkkenet' },
    { t: 't', c: 'kj, skj og sj', q: 'Fyll ut dette ___.', h: '_emaet', a: 'skjemaet' },
    { t: 't', c: 'kj, skj og sj', q: 'Han har på seg en blå ___.', h: '_orte', a: 'skjorte' },
    { t: 't', c: 'kj, skj og sj', q: 'Dette er din store ___!', h: '_anse', a: 'sjanse' },
    { t: 't', c: 'kj, skj og sj', q: 'Hva har ___?', h: '_edd', a: 'skjedd' },
    { t: 't', c: 'kj, skj og sj', q: 'Vi skal på ___ i kveld.', h: '_ino', a: 'kino', e: 'K foran i og y uttales som kj: kino, kirke, kysse.' },
    { t: 't', c: 'kj, skj og sj', q: 'Det koster ___ kroner.', h: '_ue', a: 'tjue' },
    { t: 't', c: 'kj, skj og sj', q: 'Jeg vil ___ penger i sommer.', h: '_ene', a: 'tjene' },

    // stum g og d
    { t: 't', c: 'stum g og d', q: 'Jeg er så ___ i dag!', h: 'gla_', a: 'glad' },
    { t: 't', c: 'stum g og d', q: 'Det var ___ å se deg.', h: 'hyggeli_', a: 'hyggelig' },
    { t: 't', c: 'stum g og d', q: 'Det er ___ å komme presis.', h: 'vikti_', a: 'viktig' },
    { t: 't', c: 'stum g og d', q: 'Vi gikk ___ vannet.', h: 'run_t', a: 'rundt' },
    { t: 't', c: 'stum g og d', q: 'Han er en ___ venn.', h: 'go_', a: 'god' },
    { t: 't', c: 'stum g og d', q: 'Jeg har ikke ___ i dag.', h: 'ti_', a: 'tid' },
    { t: 't', c: 'stum g og d', q: 'Hva vil du ___?', h: 'egentli_', a: 'egentlig' },
    { t: 't', c: 'stum g og d', q: 'Jeg savner ___.', h: 'de_', a: 'deg' },
    { t: 't', c: 'stum g og d', q: 'Vi satt ___ bålet.', h: 've_', a: 'ved' },
    { t: 't', c: 'stum g og d', q: 'Det var en ___ film.', h: 'kjedeli_', a: 'kjedelig' },
    { t: 't', c: 'stum g og d', q: 'Det går ___ bra.', h: 'veldi_', a: 'veldig' },

    // vanlige ord
    { t: 'c', c: 'vanlige ord', q: 'Jeg kommer ___ i morgen.', o: ['kansje', 'kanskje', 'kansk'], a: 'kanskje' },
    { t: 'c', c: 'vanlige ord', q: 'Han bor ___ i Bergen.', o: ['forsatt', 'fortsatt'], a: 'fortsatt' },
    { t: 'c', c: 'vanlige ord', q: 'Ja, ___!', o: ['selvfølgelig', 'selfølgelig', 'sellfølgelig'], a: 'selvfølgelig' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg er veldig ___ i jobben.', o: ['interresert', 'interessert', 'intresert'], a: 'interessert' },
    { t: 'c', c: 'vanlige ord', q: 'Det er ___ at vi vinner.', o: ['sannsynlig', 'sansynlig'], a: 'sannsynlig' },
    { t: 'c', c: 'vanlige ord', q: 'Vi har ___ meninger.', o: ['forskjellige', 'forskjelige', 'forsjellige'], a: 'forskjellige' },
    { t: 'c', c: 'vanlige ord', q: 'Det er ___ viktig i dag.', o: ['spesielt', 'spessielt'], a: 'spesielt' },
    { t: 'c', c: 'vanlige ord', q: 'Det er ikke ___.', o: ['nødvendig', 'nødvendi', 'nødvendlig'], a: 'nødvendig' },
    { t: 'c', c: 'vanlige ord', q: '___ begynte det å regne.', o: ['Plutselig', 'Plutseli', 'Plutslig'], a: 'Plutselig' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg har ___ fra butikkjobb.', o: ['erfaring', 'erfarring'], a: 'erfaring' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg søker på ___ som kokk.', o: ['stillingen', 'stilingen'], a: 'stillingen' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg ___ deg å søke.', o: ['anbefaler', 'annbefaler', 'anbefaller'], a: 'anbefaler' },
    { t: 'c', c: 'vanlige ord', q: 'Hun er veldig ___.', o: ['ansvarsfull', 'ansvarsful', 'ansvarfull'], a: 'ansvarsfull' },
    { t: 'c', c: 'vanlige ord', q: '___ har jeg ikke tid i dag.', o: ['Desverre', 'Dessverre'], a: 'Dessverre' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg er ___ og møter alltid presis.', o: ['pålitelig', 'pålitlig', 'pålitli'], a: 'pålitelig' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg har aldri ___ i Spania.', o: ['vert', 'vært'], a: 'vært' }
  ],

  fix: [
    { c: 'og/å', q: 'Jeg har lyst til og spille fotball.', a: 'Jeg har lyst til å spille fotball.' },
    { c: 'da/når', q: 'Når jeg var liten bodde vi i Trondheim.', a: 'Da jeg var liten, bodde vi i Trondheim.' },
    { c: 'de/dem', q: 'Jeg kjenner de ikke, men dem er sikkert hyggelige.', a: 'Jeg kjenner dem ikke, men de er sikkert hyggelige.' },
    { c: 'faste uttrykk', q: 'Vi skal komme imorgen.', a: 'Vi skal komme i morgen.' },
    { c: 'store og små bokstaver', q: 'Han spiller fotball på Mandager.', a: 'Han spiller fotball på mandager.' },
    { c: 'faste uttrykk', q: 'Jeg har ikkje tid idag.', a: 'Jeg har ikke tid i dag.' },
    { c: 'stum h', q: 'Kva heter du?', a: 'Hva heter du?' },
    { c: 'stum h', q: 'Jeg vet ikke vor han bor.', a: 'Jeg vet ikke hvor han bor.' },
    { c: 'dobbel konsonant', q: 'Han sa at han skall komme samen med venen sin.', a: 'Han sa at han skal komme sammen med vennen sin.' },
    { c: 'særskriving', q: 'Jeg søker på en sommer jobb i butikken.', a: 'Jeg søker på en sommerjobb i butikken.' },
    { c: 'og/å', q: 'Det er kansje lurt og spørre først.', a: 'Det er kanskje lurt å spørre først.' },
    { c: 'stum g og d', q: 'Takk for sist! Det var hyggeli å se deg.', a: 'Takk for sist! Det var hyggelig å se deg.' },
    { c: 'kj, skj og sj', q: 'Kan du skjøre meg til trening?', a: 'Kan du kjøre meg til trening?' },
    { c: 'store og små bokstaver', q: 'Vi snakker Engelsk på skolen.', a: 'Vi snakker engelsk på skolen.' },
    { c: 'særskriving', q: 'Han er en god lag spiller.', a: 'Han er en god lagspiller.' },
    { c: 'tegnsetting', q: 'Hvis du har tid kan du ringe meg.', a: 'Hvis du har tid, kan du ringe meg.' },
    { c: 'tegnsetting', q: 'Jeg liker å trene men jeg er ofte sliten.', a: 'Jeg liker å trene, men jeg er ofte sliten.' },
    { c: 'vanlige ord', q: 'Jeg er veldig interresert i å jobbe hos dere.', a: 'Jeg er veldig interessert i å jobbe hos dere.' },
    { c: 'da/når', q: 'De ringte når vi satt og spiste i går.', a: 'De ringte da vi satt og spiste i går.' },
    { c: 'de/dem', q: 'Jeg ble glad da dem kom.', a: 'Jeg ble glad da de kom.' },
    { c: 'faste uttrykk', q: 'Etterhvert ble det lettere.', a: 'Etter hvert ble det lettere.' },
    { c: 'og/å', q: 'Jeg har alltid likt og lage mat.', a: 'Jeg har alltid likt å lage mat.' },
    { c: 'stum g og d', q: 'Vi går en tur runt vannet hver Søndag.', a: 'Vi går en tur rundt vannet hver søndag.' },
    { c: 'vanlige ord', q: 'Jeg har fortsat ikke fått svar.', a: 'Jeg har fortsatt ikke fått svar.' },
    { c: 'vanlige ord', q: 'Selfølgelig kan jeg jobbe i helgene.', a: 'Selvfølgelig kan jeg jobbe i helgene.' },
    { c: 'særskriving', q: 'Jeg har arbeids erfaring fra en kafé.', a: 'Jeg har arbeidserfaring fra en kafé.' },
    { c: 'tegnsetting', q: 'Jeg er pålitelig ansvarsfull og blid.', a: 'Jeg er pålitelig, ansvarsfull og blid.' },
    { c: 'og/å', q: 'Jeg gleder meg til og høre fra dere.', a: 'Jeg gleder meg til å høre fra dere.' },
    { c: 'og/å', q: 'Han sitter å spiller hele dagen.', a: 'Han sitter og spiller hele dagen.' },
    { c: 'kj, skj og sj', q: 'Jeg sjønner ikke vorfor du er sint på meg.', a: 'Jeg skjønner ikke hvorfor du er sint på meg.' },
    { c: 'store og små bokstaver', q: 'Han tok førerkort i Juni.', a: 'Han tok førerkort i juni.' },
    { c: 'faste uttrykk', q: 'Det var alt for kaldt ute.', a: 'Det var altfor kaldt ute.' },
    { c: 'dobbel konsonant', q: 'Vi må vennte på busen i ti minuter.', a: 'Vi må vente på bussen i ti minutter.' },
    { c: 'særskriving', q: 'Jeg har gått på ungdoms skolen i Bærum.', a: 'Jeg har gått på ungdomsskolen i Bærum.' },
    { c: 'stum h', q: 'Takk for jelpen, det setter jeg pris på.', a: 'Takk for hjelpen, det setter jeg pris på.' },
    { c: 'vanlige ord', q: 'Jeg har aldri vert i spania.', a: 'Jeg har aldri vært i Spania.' },
    { c: 'tegnsetting', q: 'Når jeg er ferdig på skolen går jeg rett på jobb.', a: 'Når jeg er ferdig på skolen, går jeg rett på jobb.' },
    { c: 'dobbel konsonant', q: 'Tusen tak for at du tok deg tid til å lesse søknaden.', a: 'Tusen takk for at du tok deg tid til å lese søknaden.' }
  ],

  phrases: [
    { q: 'Vanlig avslutning i en formell e-post eller søknad (før navnet ditt)', a: ['Med vennlig hilsen'] },
    { q: 'Litt kortere, men fortsatt høflig avslutning', a: ['Vennlig hilsen'] },
    { q: 'Si takk for at noen hjalp deg', a: ['Takk for hjelpen!', 'Takk for hjelpen.', 'Tusen takk for hjelpen!'] },
    { q: 'Avslutt en søknad med at du venter på svar', a: ['Jeg ser fram til å høre fra deg.', 'Jeg ser frem til å høre fra deg.', 'Jeg ser fram til å høre fra dere.', 'Jeg ser frem til å høre fra dere.'] },
    { q: 'Si at CV-en din ligger ved e-posten', a: ['Vedlagt følger CV-en min.', 'Vedlagt ligger CV-en min.'] },
    { q: 'Hils på noen du har møtt før', a: ['Takk for sist!'] },
    { q: 'Følg opp en e-post du ikke har fått svar på', a: ['Jeg viser til e-posten min fra forrige uke.'] },
    { q: 'Si at du søker stillingen som butikkmedarbeider', a: ['Jeg søker på stillingen som butikkmedarbeider.'] },
    { q: 'Si at du kan begynne å jobbe med en gang', a: ['Jeg kan begynne med en gang.'] },
    { q: 'Ønsk noen lykke til', a: ['Lykke til!'] },
    { q: 'Beklag at du svarer sent', a: ['Beklager sent svar.'] },
    { q: 'Si at du gjerne kommer på intervju', a: ['Jeg stiller gjerne til intervju.', 'Jeg kommer gjerne på intervju.'] },
    { q: 'Takk for intervjuet du var på i dag', a: ['Takk for en hyggelig samtale i dag.'] },
    { q: 'Uformell avslutning før helgen', a: ['Ha en fin helg!'] },
    { q: 'Si høflig at du ikke kan komme', a: ['Dessverre har jeg ikke mulighet til å komme.'] },
    { q: 'Inviter mottakeren til å spørre om noe', a: ['Ta gjerne kontakt hvis du har spørsmål.'] },
    { q: 'Si at du er vant til ansvar', a: ['Jeg er vant til å ta ansvar.'] },
    { q: 'Si at du kan jobbe i helgene', a: ['Jeg kan jobbe i helgene.'] }
  ],

  writing: [
    {
      id: 'no-w-sommerjobb-start', lvl: 3, title: 'E-post: spør om sommerjobb',
      task: 'Du vil spørre butikksjef Kari Hansen om butikken trenger folk i sommer. Skriv starten på e-posten: hilsen og 2–3 setninger der du presenterer deg og forklarer hvorfor du skriver.',
      skeleton: 'Hei [navn],\n\nJeg heter [navn] og er [alder] år. Jeg går på [skole og trinn].\nJeg tar kontakt fordi [hvorfor du skriver].',
      min: 25, max: 90,
      checks: [
        { re: '^\\s*(hei|god dag)\\b', f: 'i', ok: 'Du starter med en hilsen.', bad: 'Start med en hilsen, for eksempel «Hei Kari,».' },
        { re: '^[^\\n]+,\\s*\\n', ok: 'Komma etter hilsenen og ny linje.', bad: 'Sett komma etter hilsenen og begynn på en ny linje: «Hei Kari,».' },
        { re: 'jeg heter|mitt navn er', f: 'i', ok: 'Du presenterer deg.', bad: 'Presenter deg kort: navn, alder og skole.' },
        { re: 'sommerjobb|jobb', f: 'i', ok: 'Det er tydelig hva e-posten gjelder.', bad: 'Si tydelig at det gjelder sommerjobb.' }
      ],
      criteria: ['Hilsen med navn og komma', 'Kort presentasjon av meg selv', 'Det er tydelig hvorfor jeg skriver', 'Tonen er høflig, ikke for kjekk'],
      model: 'Hei Kari,\n\nJeg heter Jonas og er 16 år. Jeg går første året på Nydalen videregående skole.\nJeg tar kontakt fordi jeg lurer på om dere trenger flere folk i butikken i sommer. Jeg vil gjerne ha en sommerjobb.'
    },
    {
      id: 'no-w-sommerjobb-slutt', lvl: 3, title: 'E-post: avslutning',
      task: 'Skriv avslutningen på e-posten til Kari: takk for at hun leser, si at du gjerne kommer innom for å presentere deg, og avslutt med hilsen, navn og telefonnummer.',
      skeleton: 'Takk for at du tok deg tid til å lese e-posten min.\nJeg kommer gjerne innom for å [hva].\n\nMed vennlig hilsen\n[Fornavn Etternavn]\n[Telefonnummer]',
      min: 20, max: 70,
      checks: [
        { re: 'takk', f: 'i', ok: 'Du takker mottakeren.', bad: 'Takk for at hun tar seg tid til å lese.' },
        { re: 'Med vennlig hilsen|Vennlig hilsen', ok: 'Riktig avslutningshilsen.', bad: 'Avslutt med «Med vennlig hilsen» – stor M, resten små bokstaver.' },
        { re: 'hilsen\\s*,', neg: true, ok: '', bad: 'Ikke sett komma etter «Med vennlig hilsen» på norsk.' },
        { re: '\\d{3}\\s?\\d{2}\\s?\\d{3}', lvl: 'tips', ok: 'Telefonnummeret er med.', bad: 'Tips: Legg telefonnummeret ditt under navnet, så det er lett å ringe deg.' }
      ],
      criteria: ['Jeg takker høflig', 'Jeg sier hva jeg ønsker skal skje videre', 'Riktig hilsen uten komma', 'Navn og telefonnummer under'],
      model: 'Takk for at du tok deg tid til å lese e-posten min. Jeg kommer gjerne innom butikken for å presentere meg og levere CV-en min.\n\nMed vennlig hilsen\nJonas Berg\n412 34 567'
    },
    {
      id: 'no-w-trener', lvl: 3, title: 'Melding til treneren',
      task: 'Du kan ikke komme på trening på torsdag fordi du har en viktig prøve dagen etter. Skriv en kort og høflig melding til treneren din, Ola.',
      skeleton: 'Hei [navn],\n\nDessverre kan jeg ikke komme på trening [når], fordi [grunn].\n[Si at du er med neste gang.]\n\nHilsen [navn]',
      min: 20, max: 70,
      checks: [
        { re: '^\\s*hei\\b', f: 'i', ok: 'Du starter med en hilsen.', bad: 'Start med en hilsen: «Hei Ola,».' },
        { re: 'fordi|siden|ettersom', f: 'i', ok: 'Du forklarer hvorfor.', bad: 'Forklar kort hvorfor du ikke kan komme (fordi …).' },
        { re: 'dessverre|beklager', f: 'i', ok: 'Høflig tone.', bad: 'Bruk «dessverre» eller «beklager» – det gjør meldingen høfligere.' },
        { re: 'torsdag', f: 'i', ok: 'Du sier hvilken dag det gjelder.', bad: 'Si hvilken dag det gjelder (torsdag – liten t).' }
      ],
      criteria: ['Hilsen', 'Hvilken dag og hvorfor', 'Høflig og kort', 'Avslutning med navn'],
      model: 'Hei Ola,\n\nDessverre kan jeg ikke komme på trening på torsdag, fordi jeg har en viktig prøve i matte dagen etter. Jeg er med igjen på mandag.\n\nHilsen Jonas'
    },
    {
      id: 'no-w-utsettelse', lvl: 3, title: 'E-post til læreren',
      task: 'Du har vært syk i tre dager og trenger to dager ekstra på en innlevering i norsk. Skriv en høflig e-post til læreren din, Ingrid Berg.',
      skeleton: 'Hei [navn],\n\n[Forklar hva som har skjedd.]\n[Spør konkret om det du trenger.]\n[Takk på forhånd.]\n\nMed vennlig hilsen\n[navn og klasse]',
      min: 35, max: 110,
      checks: [
        { re: '^\\s*(hei|god dag)\\b', f: 'i', ok: 'Du starter med en hilsen.', bad: 'Start med en hilsen: «Hei Ingrid,».' },
        { re: 'syk', f: 'i', ok: 'Du forklarer situasjonen.', bad: 'Forklar kort at du har vært syk.' },
        { re: 'utsettelse|ekstra tid|levere|to dager', f: 'i', ok: 'Du ber om noe konkret.', bad: 'Be om noe konkret, for eksempel «to dagers utsettelse».' },
        { re: '\\?', ok: 'Du stiller et spørsmål.', bad: 'Formuler forespørselen som et spørsmål: «Er det mulig å …?»' },
        { re: 'hilsen', f: 'i', ok: 'Du avslutter med hilsen.', bad: 'Avslutt med «Med vennlig hilsen» og navnet ditt.' }
      ],
      criteria: ['Kort forklaring', 'Konkret spørsmål', 'Takk på forhånd', 'Navn og klasse til slutt'],
      model: 'Hei Ingrid,\n\nJeg har vært syk siden mandag og har derfor ikke rukket å bli ferdig med norskinnleveringen. Er det mulig å få to dagers utsettelse, slik at jeg leverer på fredag? Takk på forhånd.\n\nMed vennlig hilsen\nJonas Berg, 1STB'
    },
    {
      id: 'no-w-takkintervju', lvl: 3, title: 'Takk for intervjuet',
      task: 'Du var på jobbintervju i en sportsbutikk i dag. Skriv en kort e-post til lederen, Per, der du takker for samtalen og sier at du fortsatt er interessert i jobben.',
      skeleton: 'Hei [navn],\n\nTakk for [hva].\n[Noe du likte eller lærte.]\n[Si at du fortsatt er interessert.]\n\nMed vennlig hilsen\n[navn]',
      min: 30, max: 90,
      checks: [
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Husk å takke for samtalen.' },
        { re: 'interessert', f: 'i', ok: 'Du sier at du er interessert.', bad: 'Si at du fortsatt er interessert i stillingen.' },
        { re: 'hilsen', f: 'i', ok: 'Avslutning med hilsen.', bad: 'Avslutt med «Med vennlig hilsen».' }
      ],
      criteria: ['Takk for samtalen', 'Én konkret ting fra intervjuet', 'Jeg viser at jeg vil ha jobben', 'Kort – under 100 ord'],
      model: 'Hei Per,\n\nTakk for en hyggelig samtale i dag. Det var fint å høre mer om hvordan dere jobber med kundene i butikken.\nJeg er fortsatt veldig interessert i stillingen og håper å høre fra deg.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-w-byttevakt', lvl: 3, title: 'Bytte vakt med en kollega',
      task: 'Du har fått sommerjobb og trenger å bytte vakta di på lørdag. Skriv en melding til kollegaen din Sara der du spør om hun kan ta vakta, og tilby noe tilbake.',
      skeleton: 'Hei [navn]!\n\n[Spør om hun kan ta vakta di – når.]\n[Si hva du kan gjøre tilbake.]\n[Takk.]\n\n[navn]',
      min: 20, max: 70,
      checks: [
        { re: 'lørdag', f: 'i', ok: 'Du sier hvilken vakt det gjelder.', bad: 'Si hvilken dag det gjelder (lørdag – liten l).' },
        { re: '\\?', ok: 'Du spør, i stedet for å bestemme.', bad: 'Still et spørsmål: «Kan du …?»' },
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Takk henne, selv om hun ikke har svart ennå.' }
      ],
      criteria: ['Tydelig hvilken vakt', 'Høflig spørsmål', 'Jeg tilbyr noe tilbake', 'Kort og vennlig'],
      model: 'Hei Sara!\n\nKan du ta vakta mi på lørdag fra 10 til 16? Jeg kan gjerne ta en av dine vakter neste uke i stedet. Tusen takk hvis det går!\n\nJonas'
    },

    {
      id: 'no-s-innledning', lvl: 4, title: 'Søknad del 1: Innledning',
      task: 'Du søker på en deltidsstilling som butikkmedarbeider i en sportsbutikk. Skriv innledningen: hvilken stilling du søker på, hvor du så annonsen, og én setning om hvorfor du vil ha jobben.',
      skeleton: 'Jeg søker på stillingen som [stilling] hos [bedrift], som jeg så utlyst på [hvor].\nJeg er interessert i stillingen fordi [grunn – gjerne noe som passer til akkurat denne bedriften].',
      min: 30, max: 90,
      checks: [
        { re: 'søker (herved )?på stillingen|søker (herved )?stillingen', f: 'i', ok: 'Du sier tydelig hva du søker på.', bad: 'Begynn med hva du søker på: «Jeg søker på stillingen som …».' },
        { re: 'annonse|utlyst|finn|nettside|instagram|facebook', f: 'i', ok: 'Du sier hvor du så stillingen.', bad: 'Si hvor du så stillingen (for eksempel finn.no eller nettsiden deres).' },
        { re: 'fordi|ettersom|siden|derfor', f: 'i', ok: 'Du begrunner hvorfor.', bad: 'Gi en grunn til at du vil ha akkurat denne jobben.' }
      ],
      criteria: ['Stilling og bedrift er nevnt', 'Hvor jeg så annonsen', 'En grunn som passer akkurat denne bedriften', 'Ingen «Hei, jeg heter …» – det står allerede i søknaden'],
      model: 'Jeg søker på stillingen som butikkmedarbeider hos Sportshuset på Storo, som jeg så utlyst på finn.no. Jeg er interessert i stillingen fordi jeg har spilt fotball i ti år og liker å hjelpe andre med å finne riktig utstyr.'
    },
    {
      id: 'no-s-ommeg', lvl: 4, title: 'Søknad del 2: Om meg',
      task: 'Skriv et avsnitt om deg selv: skole, interesser og tre egenskaper som passer til jobben. Gi et konkret eksempel på minst én av egenskapene.',
      skeleton: 'Jeg er [alder] år og går [trinn] på [skole], der jeg tar [programområde].\nJeg vil beskrive meg selv som [egenskap], [egenskap] og [egenskap]. For eksempel [konkret eksempel].\nPå fritiden [interesser].',
      min: 40, max: 120,
      checks: [
        { re: 'år', f: 'i', ok: 'Alder eller skoleår er med.', bad: 'Ta med alder og skole.' },
        { re: 'pålitelig|ansvarsfull|blid|serviceinnstilt|punktlig|presis|lærevillig|samarbeid|strukturert|positiv|hjelpsom|effektiv', f: 'i', ok: 'Du nevner egenskaper som passer i jobb.', bad: 'Nevn egenskaper en arbeidsgiver ser etter, for eksempel pålitelig, blid, lærevillig.' },
        { re: 'for eksempel|f\\.eks\\.|blant annet|da jeg|når jeg', f: 'i', ok: 'Du gir et eksempel.', bad: 'Gi et konkret eksempel: «For eksempel har jeg …». Det gjør egenskapene troverdige.' }
      ],
      criteria: ['Skole og programområde', 'Tre egenskaper', 'Minst ett konkret eksempel', 'Interesser som sier noe om meg'],
      model: 'Jeg er 16 år og går første året på Nydalen videregående skole, der jeg tar studiespesialisering. Jeg vil beskrive meg selv som pålitelig, blid og lærevillig. For eksempel har jeg ikke gått glipp av en eneste trening på to år, og treneren har gitt meg ansvar for å låse opp garderoben. På fritiden spiller jeg fotball og er med som hjelpetrener for et guttelag.'
    },
    {
      id: 'no-s-erfaring', lvl: 4, title: 'Søknad del 3: Erfaring',
      task: 'Skriv om erfaring som er relevant for jobben. Det kan være jobb, dugnad, idrett, verv eller barnevakt. Forklar hva du gjorde, hva du lærte, og hvorfor det er nyttig i denne jobben.',
      skeleton: 'Jeg har erfaring fra [hva], der jeg [hva du gjorde].\nDer lærte jeg [hva du lærte].\nDette tror jeg vil være nyttig hos dere fordi [kobling til jobben].',
      min: 40, max: 120,
      checks: [
        { re: 'erfaring|jobbet|har vært|trener|dugnad|barnevakt|verv', f: 'i', ok: 'Du beskriver erfaring.', bad: 'Beskriv konkret hva du har gjort før.' },
        { re: 'lært|lærte', f: 'i', ok: 'Du sier hva du lærte.', bad: 'Si hva du lærte – det er det arbeidsgiveren er mest interessert i.' },
        { re: 'nyttig|passer|hos dere|i denne jobben|i jobben', f: 'i', ok: 'Du kobler erfaringen til jobben.', bad: 'Knytt erfaringen til jobben: «Dette vil være nyttig hos dere fordi …».' }
      ],
      criteria: ['Konkret erfaring', 'Hva jeg lærte', 'Koblet til akkurat denne jobben', 'Ærlig – ikke overdrevet'],
      model: 'Jeg har erfaring fra dugnader i fotballklubben, der jeg har stått i kiosken og tatt imot betaling. Der lærte jeg å være rask og hyggelig også når det er lang kø. Dette tror jeg vil være nyttig hos dere, fordi jeg er vant til å snakke med mange forskjellige mennesker.'
    },
    {
      id: 'no-s-avslutning', lvl: 4, title: 'Søknad del 4: Avslutning',
      task: 'Skriv avslutningen på søknaden: når du kan jobbe, at du gjerne kommer på intervju, og en høflig hilsen med navnet ditt.',
      skeleton: 'Jeg kan jobbe [når – ettermiddager, helger, ferier].\nJeg stiller gjerne til intervju og ser fram til å høre fra dere.\n\nMed vennlig hilsen\n[navn]',
      min: 20, max: 70,
      checks: [
        { re: 'kan jobbe|tilgjengelig|kan begynne|helg|ettermiddag|ferie', f: 'i', ok: 'Du sier når du kan jobbe.', bad: 'Si når du kan jobbe – det er viktig for en arbeidsgiver.' },
        { re: 'intervju|samtale', f: 'i', ok: 'Du nevner intervju.', bad: 'Si at du gjerne kommer på intervju.' },
        { re: 'Med vennlig hilsen', ok: 'Riktig avslutningshilsen.', bad: 'Avslutt med «Med vennlig hilsen» (stor M, resten små, ikke komma).' },
        { re: 'hilsen\\s*,', neg: true, ok: '', bad: 'Ikke sett komma etter «Med vennlig hilsen».' }
      ],
      criteria: ['Når jeg kan jobbe', 'Ønske om intervju', 'Positiv og kort', 'Riktig hilsen og navn'],
      model: 'Jeg kan jobbe ettermiddager fra klokka 15, i helgene og i skoleferiene. Jeg stiller gjerne til intervju og ser fram til å høre fra dere.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-s-profil', lvl: 4, title: 'Profiltekst til CV-en',
      task: 'Skriv en kort profiltekst (3–4 setninger) som skal stå øverst på CV-en din. Den skal fortelle hvem du er, hva du er god på og hva slags jobb du ser etter.',
      skeleton: '[Hvem du er: alder og skole.] [Hva du er god på – med et eksempel.] [Hva slags jobb du ser etter.]',
      min: 30, max: 80,
      checks: [
        { re: 'år|skole', f: 'i', ok: 'Det står hvem du er.', bad: 'Start med hvem du er: alder og skole.' },
        { re: 'jobb|stilling|erfaring', f: 'i', ok: 'Det står hva du ser etter.', bad: 'Si hva slags jobb du ser etter.' }
      ],
      criteria: ['Kort – 3–4 setninger', 'Konkret, ikke bare fine ord', 'Ikke alle setninger begynner med «Jeg»'],
      model: 'Sekstenåring fra Oslo som går studiespesialisering på Nydalen videregående skole. Pålitelig og blid, med erfaring fra kiosk og dugnader i fotballklubben. Er vant til å ta ansvar som hjelpetrener for et guttelag. Ser etter deltidsjobb eller sommerjobb innen butikk eller service.'
    },
    {
      id: 'no-full-butikk', lvl: 4, full: true, title: 'Hel søknad: Butikkmedarbeider',
      task: 'Skriv en hel søknad på deltidsstillingen som butikkmedarbeider i en sportsbutikk. Bruk skjelettet. Du kan finne på detaljene, men gjør dem konkrete.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på stilling som [stilling]\n\nHei [navn på leder],\n\n[Innledning: hvilken stilling, hvor du så den, hvorfor du søker.]\n\n[Om deg: skole og egenskaper, med eksempel.]\n\n[Erfaring: hva du har gjort og lært, og hvorfor det passer.]\n\n[Avslutning: når du kan jobbe, intervju.]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'søknad', f: 'i', ok: 'Søknaden har en overskrift.', bad: 'Legg til en overskrift: «Søknad på stilling som …».' },
        { re: '^\\s*(hei|god dag)\\b', f: 'im', ok: 'Du har en hilsen.', bad: 'Husk hilsen: «Hei [navn],».' },
        { re: 'stillingen', f: 'i', ok: 'Du sier hva du søker på.', bad: 'Si tydelig hvilken stilling du søker på.' },
        { re: 'for eksempel|f\\.eks\\.|blant annet', f: 'i', ok: 'Du bruker eksempler.', bad: 'Gi minst ett konkret eksempel.' },
        { re: 'erfaring|jobbet|dugnad|trener|barnevakt', f: 'i', ok: 'Du skriver om erfaring.', bad: 'Skriv om erfaring – også fritid og dugnad teller.' },
        { re: 'intervju', f: 'i', ok: 'Du nevner intervju.', bad: 'Si at du gjerne kommer på intervju.' },
        { re: 'Med vennlig hilsen', ok: 'Riktig avslutning.', bad: 'Avslutt med «Med vennlig hilsen».' }
      ],
      criteria: ['Hele skjelettet er med', 'Én tanke per avsnitt', 'Konkrete eksempler', 'Under én side', 'Jeg har lest gjennom før jeg leverte'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 1. oktober 2026\n\nSøknad på stilling som butikkmedarbeider\n\nHei Mette,\n\nJeg søker på stillingen som butikkmedarbeider hos Sportshuset på Storo, som jeg så utlyst på finn.no. Jeg er interessert i stillingen fordi jeg har spilt fotball i ti år og liker å hjelpe andre med å finne riktig utstyr.\n\nJeg er 16 år og går første året på studiespesialisering ved Nydalen videregående skole. Jeg vil beskrive meg selv som pålitelig, blid og lærevillig. For eksempel har jeg ikke gått glipp av en eneste trening på to år.\n\nJeg har stått i kiosken på mange dugnader i fotballklubben. Der lærte jeg å holde oversikt og være hyggelig også når det er lang kø. Det tror jeg vil være nyttig i en travel butikk.\n\nJeg kan jobbe ettermiddager, i helgene og i skoleferiene. Jeg stiller gjerne til intervju og ser fram til å høre fra dere.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-full-kafe', lvl: 4, full: true, title: 'Hel søknad: Sommerjobb på kafé',
      task: 'En kafé i nærheten søker ungdom til sommerjobb: servering, kasse og rydding. Skriv en hel søknad. Bruk skjelettet og få fram hvorfor du passer til service.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på sommerjobb\n\nHei [navn],\n\n[Innledning]\n\n[Om deg + eksempel]\n\n[Erfaring som passer til service]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'søknad', f: 'i', ok: 'Søknaden har en overskrift.', bad: 'Legg til en overskrift.' },
        { re: 'sommerjobb', f: 'i', ok: 'Du nevner sommerjobben.', bad: 'Si at du søker sommerjobb.' },
        { re: 'kunde|gjest|service|servering', f: 'i', ok: 'Du skriver om service.', bad: 'Vis at du skjønner at jobben handler om gjester og service.' },
        { re: 'juni|juli|august|uke', f: 'i', ok: 'Du sier når du kan jobbe.', bad: 'Si hvilke uker eller måneder du kan jobbe (små bokstaver).' },
        { re: 'Med vennlig hilsen', ok: 'Riktig avslutning.', bad: 'Avslutt med «Med vennlig hilsen».' }
      ],
      criteria: ['Hele skjelettet er med', 'Fokus på gjester og service', 'Konkrete datoer', 'Positiv tone'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 1. mars 2027\n\nSøknad på sommerjobb\n\nHei Lise,\n\nJeg så på Instagram at Kafé Bakken søker ungdom til sommerjobb, og jeg vil gjerne søke. Jeg er ofte innom selv og liker den rolige stemningen dere har.\n\nJeg er 16 år og går på Nydalen videregående skole. Jeg er blid, rask og liker å ha det travelt. For eksempel er det ofte jeg som rydder og vasker opp når vi har besøk hjemme.\n\nJeg har stått i kiosken på dugnader i fotballklubben, der jeg tok imot betaling og serverte vafler. Der lærte jeg at et smil og litt småprat gjør mye for kundene.\n\nJeg kan jobbe hele juli og de to første ukene i august. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-full-ferieklubb', lvl: 4, full: true, title: 'Hel søknad: Aktivitetsleder på ferieklubb',
      task: 'Kommunen søker aktivitetsledere til ferieklubb for barn (6–12 år) i sommerferien. Skriv en hel søknad. Vis at du er trygg, ansvarlig og liker å være med barn.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på stilling som aktivitetsleder\n\nHei,\n\n[Innledning]\n\n[Om deg: hvorfor du passer med barn]\n\n[Erfaring med barn eller ansvar + eksempel]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'aktivitetsleder', f: 'i', ok: 'Du nevner stillingen.', bad: 'Si hvilken stilling du søker på.' },
        { re: 'barn', f: 'i', ok: 'Du skriver om barn.', bad: 'Skriv om hvorfor du passer til å jobbe med barn.' },
        { re: 'ansvar|trygg|sikker|tålmodig', f: 'i', ok: 'Du viser at du er ansvarlig.', bad: 'Vis at du er ansvarlig og trygg – det er det viktigste i denne jobben.' },
        { re: 'Med vennlig hilsen', ok: 'Riktig avslutning.', bad: 'Avslutt med «Med vennlig hilsen».' }
      ],
      criteria: ['Hele skjelettet er med', 'Konkret erfaring med barn eller ansvar', 'Trygghet og ansvar kommer fram', 'Positiv og ærlig'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 15. februar 2027\n\nSøknad på stilling som aktivitetsleder\n\nHei,\n\nJeg søker på stillingen som aktivitetsleder på ferieklubben i sommer, som jeg så på kommunens nettside. Jeg liker å være sammen med barn og vil gjerne bruke sommeren på noe meningsfullt.\n\nJeg er 16 år og går første året på videregående. Jeg er tålmodig, blid og glad i å finne på ting. For eksempel er det ofte jeg som organiserer leker når familien er samlet.\n\nDet siste året har jeg vært hjelpetrener for et fotballag med åtteåringer. Der har jeg lært å gi tydelige beskjeder og å passe på at alle blir inkludert.\n\nJeg kan jobbe alle ukene i juli. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    }
  ],

  /* Ordlister for automatisk sjekk av fritekst */
  autocheck: {
    misspell: {
      kansje: 'kanskje', kanskj: 'kanskje', egentli: 'egentlig', eigentlig: 'egentlig', forsatt: 'fortsatt', fortsat: 'fortsatt',
      selfølgelig: 'selvfølgelig', sellfølgelig: 'selvfølgelig', selvfølgeli: 'selvfølgelig', interresert: 'interessert', intresert: 'interessert',
      interesert: 'interessert', interresant: 'interessant', intresant: 'interessant', sansynlig: 'sannsynlig', sansynligvis: 'sannsynligvis',
      forskjelig: 'forskjellig', forskjelige: 'forskjellige', spessielt: 'spesielt', akuratt: 'akkurat', akurat: 'akkurat', plutseli: 'plutselig',
      desverre: 'dessverre', hilsn: 'hilsen', hillsen: 'hilsen', venlig: 'vennlig', hyggeli: 'hyggelig', vikti: 'viktig', veldi: 'veldig',
      ikkje: 'ikke', ikk: 'ikke', samen: 'sammen', altid: 'alltid', aldrig: 'aldri', jøre: 'gjøre', jelpe: 'hjelpe', jelpen: 'hjelpen',
      vor: 'hvor', vem: 'hvem', vordan: 'hvordan', vorfor: 'hvorfor', kordan: 'hvordan', korleis: 'hvordan', kva: 'hva', ka: 'hva',
      interjvu: 'intervju', intervu: 'intervju', inntervju: 'intervju', anbefalle: 'anbefale', annbefale: 'anbefale', erfarring: 'erfaring',
      stiling: 'stilling', stilingen: 'stillingen', ansvarsful: 'ansvarsfull', imorgen: 'i morgen', idag: 'i dag', igår: 'i går', ikveld: 'i kveld',
      ihvertfall: 'i hvert fall', hvertfall: 'i hvert fall', iallefall: 'i alle fall', etterhvert: 'etter hvert', istedet: 'i stedet',
      tilslutt: 'til slutt', såvidt: 'så vidt', minuter: 'minutter', sjønner: 'skjønner', nødvendi: 'nødvendig', tilgjengeli: 'tilgjengelig',
      pålitlig: 'pålitelig', pålitli: 'pålitelig', engasert: 'engasjert', muligheit: 'mulighet', butik: 'butikk', jobe: 'jobbe', trenning: 'trening',
      lærevilig: 'lærevillig', presiss: 'presis', servise: 'service', kunnder: 'kunder', samarbeidd: 'samarbeid', trivs: 'trives',
      skall: ['skal', 'sjekk'], vill: ['vil', 'sjekk'], vert: ['vært', 'sjekk'], va: ['hva / var', 'sjekk'], eg: ['jeg', 'sjekk'], æ: ['jeg', 'sjekk']
    },
    split: [
      ['sommer jobb', 'sommerjobb'], ['helge jobb', 'helgejobb'], ['deltids jobb', 'deltidsjobb'], ['arbeids erfaring', 'arbeidserfaring'],
      ['fotball trening', 'fotballtrening'], ['lag spiller', 'lagspiller'], ['jobb intervju', 'jobbintervju'], ['kunde service', 'kundeservice'],
      ['fører kort', 'førerkort'], ['ungdoms skolen', 'ungdomsskolen'], ['ungdoms skole', 'ungdomsskole'], ['butikk medarbeider', 'butikkmedarbeider'],
      ['mobil telefon', 'mobiltelefon'], ['data maskin', 'datamaskin'], ['skole året', 'skoleåret'], ['sommer ferien', 'sommerferien'],
      ['sommer ferie', 'sommerferie'], ['kjempe bra', 'kjempebra'], ['kjempe fint', 'kjempefint'], ['arbeids plass', 'arbeidsplass'],
      ['arbeids dag', 'arbeidsdag'], ['sam arbeid', 'samarbeid'], ['ansvars full', 'ansvarsfull'], ['jule ferie', 'juleferie'],
      ['tids nok', 'tidsnok'], ['helge vakter', 'helgevakter'], ['kvelds vakter', 'kveldsvakter'], ['fritids jobb', 'fritidsjobb'],
      ['aktivitets leder', 'aktivitetsleder'], ['ferie klubb', 'ferieklubb'], ['hjelpe trener', 'hjelpetrener'], ['skole ferien', 'skoleferien']
    ],
    // Ord som skal ha liten bokstav inne i en setning
    lowercase: ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag', 'januar', 'februar', 'mars', 'april', 'mai', 'juni',
      'juli', 'august', 'september', 'oktober', 'november', 'desember', 'norsk', 'engelsk', 'svensk', 'dansk', 'tysk', 'fransk', 'spansk',
      'jul', 'påske', 'mandager', 'lørdager', 'søndager', 'helgene'],
    // Ord som ofte står foran «å» – brukes til å fange «og» som burde vært «å»
    beforeAa: ['liker', 'likte', 'pleier', 'pleide', 'prøve', 'prøver', 'prøvde', 'begynte', 'begynner', 'begynne', 'glemte', 'håper', 'ønsker',
      'elsker', 'slutte', 'sluttet', 'klarer', 'klarte', 'fram til', 'frem til', 'meg til', 'vant til', 'flink til', 'god til',
      'mulighet til', 'lyst til', 'interessert i', 'viktig', 'gøy', 'lett', 'vanskelig', 'spennende', 'kjekt', 'artig']
  }
};
