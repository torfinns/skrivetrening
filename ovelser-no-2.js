/* Norsk utvidelse – oppgavebank del 2.
   Legges til ETTER oppgavene i ovelser-no.js, så gamle oppgaver beholder ID-en sin.
   Nye oppgaver legges til nederst her (eller i en ny fil som lastes etter denne). */
(() => {
  const L = window.OVELSER_NO;
  L.catOrder.push('verbbøying', 'jobbord', 'ligge/legge');
  Object.assign(L.rules, {
    'verbbøying': 'Mange vanlige verb bøyes uregelmessig, og de må pugges: gjøre – gjorde – har gjort, si – sa – har sagt, spørre – spurte – har spurt, vite – visste – har visst, selge – solgte – har solgt, se – så – har sett, lese – leste – har lest, skrive – skrev – har skrevet, sitte – satt – har sittet.',
    'jobbord': 'Ord som går igjen i søknader og på jobb. Mange har dobbel konsonant eller er sammensatte: stilling, erfaring, kvalifikasjoner, referanse, intervju, attest, arbeidsgiver, ansettelse, pålitelig, lærevillig, serviceinnstilt.',
    'ligge/legge': 'Ligge (ligger – lå – har ligget) betyr å være i liggende stilling. Legge (legger – la – har lagt) betyr å plassere noe. Tips: Du legger noe, men du ligger selv. Sitte og sette fungerer likt: Du setter deg, og så sitter du.'
  });

  L.words.push(
    // og/å
    { t: 'c', c: 'og/å', q: 'Det var kjekt ___ se deg igjen.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Han løp ut ___ smalt igjen døra.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Jeg prøvde ___ ringe deg i går.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Mamma ___ pappa kommer på kampen.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Husk ___ låse døra når du går.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Hun liker ___ bake kaker.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Det tar tid ___ lære et nytt språk.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Jeg håper ___ få jobben.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Han sto ___ ventet på bussen.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Jeg har bestemt meg for ___ søke.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Det er lett ___ glemme leksene.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Hun gikk hjem ___ la seg.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Er du flink til ___ regne?', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Jeg ble sittende ___ tenke på det.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Kunden ba meg ___ hente en annen størrelse.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Jeg begynner ___ bli sulten.', o: ['og', 'å'], a: 'å' },
    { t: 'c', c: 'og/å', q: 'Han ringte ___ spurte om vakta.', o: ['og', 'å'], a: 'og' },
    { t: 'c', c: 'og/å', q: 'Vi pleier ___ trene på tirsdager.', o: ['og', 'å'], a: 'å' },

    // dobbel konsonant
    { t: 'c', c: 'dobbel konsonant', q: 'Butikken ___ klokka ni.', o: ['åpner', 'åppner'], a: 'åpner' },
    { t: 'c', c: 'dobbel konsonant', q: 'Han ___ bussen i siste liten.', o: ['rakk', 'rak'], a: 'rakk' },
    { t: 'c', c: 'dobbel konsonant', q: 'Jeg er ___ på å få svar.', o: ['spent', 'spennt'], a: 'spent' },
    { t: 'c', c: 'dobbel konsonant', q: 'Vi hadde det ___ på turen.', o: ['moro', 'morro'], a: 'moro' },
    { t: 'c', c: 'dobbel konsonant', q: 'Det er ___ å vente så lenge.', o: ['dumt', 'dummt'], a: 'dumt' },
    { t: 'c', c: 'dobbel konsonant', q: 'Jeg har ___ mange nye folk.', o: ['møtt', 'møt'], a: 'møtt' },
    { t: 'c', c: 'dobbel konsonant', q: 'Hun ___ opp hele matpakka.', o: ['spiste', 'spisste'], a: 'spiste' },
    { t: 'c', c: 'dobbel konsonant', q: 'Han har ___ på bussen i to timer.', o: ['sittet', 'sitet'], a: 'sittet' },
    { t: 'c', c: 'dobbel konsonant', q: 'Vi ___ hjem sent i går.', o: ['kom', 'komm'], a: 'kom' },
    { t: 'c', c: 'dobbel konsonant', q: 'Det var helt ___ i klasserommet.', o: ['stille', 'stile'], a: 'stille' },
    { t: 'c', c: 'dobbel konsonant', q: 'Jeg fikk en ___ fra sjefen.', o: ['melding', 'mellding'], a: 'melding' },
    { t: 'c', c: 'dobbel konsonant', q: 'Jeg ___ ikke hva jeg skal svare.', o: ['vet', 'vett'], a: 'vet' },
    { t: 'c', c: 'dobbel konsonant', q: 'Hun har ___ lappen.', o: ['tatt', 'tat'], a: 'tatt' },
    { t: 'c', c: 'dobbel konsonant', q: 'Du må ___ fram legitimasjon.', o: ['vise', 'visse'], a: 'vise' },
    { t: 'c', c: 'dobbel konsonant', q: 'Vi har ___ hele uka.', o: ['jobbet', 'jobet'], a: 'jobbet' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg har ___ fotball i ti år.', h: 'spi_t', a: 'spilt' },
    { t: 't', c: 'dobbel konsonant', q: 'Takk for at du ___ meg i går.', h: 'hja_p', a: 'hjalp' },
    { t: 't', c: 'dobbel konsonant', q: 'Det var en ___ dag på jobb.', h: 'tra_el', a: 'travel' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi må ___ med en gang.', h: 'begy_e', a: 'begynne' },
    { t: 't', c: 'dobbel konsonant', q: 'Det er ___ å bli kjent med nye folk.', h: 'spe_ende', a: 'spennende' },
    { t: 't', c: 'dobbel konsonant', q: 'Kan jeg få ___, takk?', h: 'reg_ingen', a: 'regningen' },
    { t: 't', c: 'dobbel konsonant', q: 'Jeg glemte ___ hjemme.', h: 'lo_eboka', a: 'lommeboka' },
    { t: 't', c: 'dobbel konsonant', q: 'Vi sees ___ helg.', h: 'ne_te', a: 'neste' },

    // stum h
    { t: 't', c: 'stum h', q: '___ mange skal komme på festen?', h: '_vor', a: 'Hvor' },
    { t: 't', c: 'stum h', q: 'Han hilste på ___ eneste gjest.', h: '_ver', a: 'hver' },
    { t: 't', c: 'stum h', q: 'Jeg vil gjerne ___ deg.', h: '_jelpe', a: 'hjelpe' },
    { t: 't', c: 'stum h', q: 'Vi skal gå ___ etter skolen.', h: '_jem', a: 'hjem' },
    { t: 'c', c: 'stum h', q: 'Hun har på seg ___ sko.', o: ['vite', 'hvite'], a: 'hvite' },
    { t: 'c', c: 'stum h', q: '___ er sjefen din?', o: ['Vem', 'Hvem'], a: 'Hvem' },
    { t: 'c', c: 'stum h', q: '___ du har tid, kan du ringe meg.', o: ['Hvis', 'Vis'], a: 'Hvis' },
    { t: 'c', c: 'stum h', q: 'Kan du ___ meg veien til stasjonen?', o: ['vise', 'hvise'], a: 'vise' },
    { t: 'c', c: 'stum h', q: 'Vi ___ litt i pausen.', o: ['hviler', 'viler'], a: 'hviler' },
    { t: 'c', c: 'stum h', q: 'Han ___ noe til meg i timen.', o: ['hvisket', 'visket'], a: 'hvisket' },
    { t: 'c', c: 'stum h', q: '___ lenge har du jobbet her?', o: ['Vor', 'Hvor'], a: 'Hvor' },
    { t: 'c', c: 'stum h', q: 'Hun spurte ___ jeg kom fra.', o: ['vor', 'hvor'], a: 'hvor' },
    { t: 'c', c: 'stum h', q: '___ gang jeg ser den filmen, ler jeg.', o: ['Hver', 'Ver'], a: 'Hver' },

    // da/når
    { t: 'c', c: 'da/når', q: '___ jeg kom hjem i går, var det ingen der.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: '___ jeg kommer hjem i dag, skal jeg spise.', o: ['Da', 'Når'], a: 'Når' },
    { t: 'c', c: 'da/når', q: '___ begynner du på jobb?', o: ['Da', 'Når'], a: 'Når' },
    { t: 'c', c: 'da/når', q: '___ vi var i Spania i fjor, regnet det mye.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: 'Hver gang ___ det snør, kommer bussen for sent.', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: '___ jeg fikk jobben, ble jeg veldig glad.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: 'Ring meg ___ du er ferdig.', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: '___ jeg var tolv, flyttet vi til Bergen.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: 'Jeg blir alltid sulten ___ jeg har trent.', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: 'Vi spiser ___ pappa kommer hjem.', o: ['da', 'når'], a: 'når' },
    { t: 'c', c: 'da/når', q: '___ kampen var slutt, dro vi hjem.', o: ['Da', 'Når'], a: 'Da' },
    { t: 'c', c: 'da/når', q: 'Jeg vet ikke ___ vakta mi starter.', o: ['da', 'når'], a: 'når' },

    // de/dem
    { t: 'c', c: 'de/dem', q: 'Har du sett ___ nye skoene mine?', o: ['de', 'dem'], a: 'de' },
    { t: 'c', c: 'de/dem', q: 'Jeg ga ___ en klem.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: '___ som kom for sent, fikk ikke være med.', o: ['De', 'Dem'], a: 'De' },
    { t: 'c', c: 'de/dem', q: 'Kan du hjelpe ___ med leksene?', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Jeg spurte om ___ ville bli med.', o: ['de', 'dem'], a: 'de' },
    { t: 'c', c: 'de/dem', q: 'Vi møtte ___ på kafeen.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: '___ jobber i samme butikk som meg.', o: ['De', 'Dem'], a: 'De' },
    { t: 'c', c: 'de/dem', q: 'Sjefen ringte ___ i går.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Jeg tror ___ kommer snart.', o: ['de', 'dem'], a: 'de' },
    { t: 'c', c: 'de/dem', q: 'Det var ___ som vant kampen.', o: ['de', 'dem'], a: 'de' },
    { t: 'c', c: 'de/dem', q: 'Jeg har ikke hørt fra ___ på lenge.', o: ['de', 'dem'], a: 'dem' },
    { t: 'c', c: 'de/dem', q: 'Kundene var fornøyde, og ___ kom tilbake.', o: ['de', 'dem'], a: 'de' },

    // særskriving
    { t: 'c', c: 'særskriving', q: 'Jeg gleder meg til ___.', o: ['sommerferien', 'sommer ferien'], a: 'sommerferien' },
    { t: 'c', c: 'særskriving', q: 'Vi har ___ i kveld.', o: ['fotballtrening', 'fotball trening'], a: 'fotballtrening' },
    { t: 'c', c: 'særskriving', q: 'Jeg har søkt på en ___.', o: ['deltidsjobb', 'deltids jobb'], a: 'deltidsjobb' },
    { t: 'c', c: 'særskriving', q: 'Hun har lang ___.', o: ['arbeidserfaring', 'arbeids erfaring'], a: 'arbeidserfaring' },
    { t: 'c', c: 'særskriving', q: 'Jeg har ___ på fredag.', o: ['jobbintervju', 'jobb intervju'], a: 'jobbintervju' },
    { t: 'c', c: 'særskriving', q: 'Han tar ___ neste år.', o: ['førerkortet', 'fører kortet'], a: 'førerkortet' },
    { t: 'c', c: 'særskriving', q: 'Glem ikke ___ din!', o: ['mobiltelefonen', 'mobil telefonen'], a: 'mobiltelefonen' },
    { t: 'c', c: 'særskriving', q: 'Hun jobber i ___.', o: ['kundeservice', 'kunde service'], a: 'kundeservice' },
    { t: 'c', c: 'særskriving', q: 'Vi skal ha ___ på skolen.', o: ['foreldremøte', 'foreldre møte'], a: 'foreldremøte' },
    { t: 'c', c: 'særskriving', q: 'Jeg kjøpte nye ___.', o: ['joggesko', 'jogge sko'], a: 'joggesko' },
    { t: 'c', c: 'særskriving', q: 'Han er en god ___.', o: ['lagspiller', 'lag spiller'], a: 'lagspiller' },
    { t: 'c', c: 'særskriving', q: 'Vi bestilte ___ til lunsj.', o: ['kyllingsalat', 'kylling salat'], a: 'kyllingsalat' },
    { t: 'c', c: 'særskriving', q: 'Jeg må lese til ___.', o: ['engelskprøven', 'engelsk prøven'], a: 'engelskprøven' },
    { t: 'c', c: 'særskriving', q: 'Det står i ___.', o: ['stillingsannonsen', 'stillings annonsen'], a: 'stillingsannonsen' },
    { t: 'c', c: 'særskriving', q: 'Jeg trenger en ny ___.', o: ['skolesekk', 'skole sekk'], a: 'skolesekk' },
    { t: 'c', c: 'særskriving', q: 'Vi har ___ hele neste uke.', o: ['høstferie', 'høst ferie'], a: 'høstferie' },
    { t: 'c', c: 'særskriving', q: 'Han er ___ på sportsbutikken.', o: ['butikkmedarbeider', 'butikk medarbeider'], a: 'butikkmedarbeider' },
    { t: 'c', c: 'særskriving', q: 'Hun har fått ___ på kafeen.', o: ['sommerjobb', 'sommer jobb'], a: 'sommerjobb' },

    // store og små bokstaver
    { t: 'c', c: 'store og små bokstaver', q: 'Vi har prøve på ___.', o: ['onsdag', 'Onsdag'], a: 'onsdag' },
    { t: 'c', c: 'store og små bokstaver', q: 'Jeg er født i ___.', o: ['august', 'August'], a: 'august' },
    { t: 'c', c: 'store og små bokstaver', q: 'Hun snakker ___ og spansk.', o: ['tysk', 'Tysk'], a: 'tysk' },
    { t: 'c', c: 'store og små bokstaver', q: 'Vi feirer ___ hos besteforeldrene.', o: ['jul', 'Jul'], a: 'jul' },
    { t: 'c', c: 'store og små bokstaver', q: 'Han bor i ___.', o: ['Bergen', 'bergen'], a: 'Bergen' },
    { t: 'c', c: 'store og små bokstaver', q: 'Vi var i ___ i sommer.', o: ['Hellas', 'hellas'], a: 'Hellas' },
    { t: 'c', c: 'store og små bokstaver', q: 'Han er ___, men bor i Norge.', o: ['svensk', 'Svensk'], a: 'svensk' },
    { t: 'c', c: 'store og små bokstaver', q: 'Jeg jobber på ___ på lørdager.', o: ['Kiwi', 'kiwi'], a: 'Kiwi' },
    { t: 'c', c: 'store og små bokstaver', q: 'Vi har fri i ___.', o: ['påsken', 'Påsken'], a: 'påsken' },
    { t: 'c', c: 'store og små bokstaver', q: 'Vi har ___ i fjerde time.', o: ['norsk', 'Norsk'], a: 'norsk' },
    { t: 'c', c: 'store og små bokstaver', q: 'Konserten er i ___.', o: ['desember', 'Desember'], a: 'desember' },
    { t: 'c', c: 'store og små bokstaver', q: 'Butikken er stengt på ___.', o: ['søndager', 'Søndager'], a: 'søndager' },
    { t: 'c', c: 'store og små bokstaver', q: 'Han kommer fra ___.', o: ['Polen', 'polen'], a: 'Polen' },
    { t: 'c', c: 'store og små bokstaver', q: 'Hun er ___ og snakker også fransk.', o: ['norsk', 'Norsk'], a: 'norsk' },

    // faste uttrykk
    { t: 'c', c: 'faste uttrykk', q: 'Vi spiser ute ___.', o: ['i kveld', 'ikveld'], a: 'i kveld' },
    { t: 'c', c: 'faste uttrykk', q: 'Jeg kommer ___ ikke i dag.', o: ['i hvert fall', 'ihvertfall'], a: 'i hvert fall' },
    { t: 'c', c: 'faste uttrykk', q: 'Han rakk bussen ___.', o: ['så vidt', 'såvidt'], a: 'så vidt' },
    { t: 'c', c: 'faste uttrykk', q: 'Vi tok bussen ___ for å gå.', o: ['i stedet', 'istedet'], a: 'i stedet' },
    { t: 'c', c: 'faste uttrykk', q: 'Det var ___ varmt i dag.', o: ['altfor', 'alt for'], a: 'altfor' },
    { t: 'c', c: 'faste uttrykk', q: '___ vant vi kampen.', o: ['Til slutt', 'Tilslutt'], a: 'Til slutt' },
    { t: 'c', c: 'faste uttrykk', q: 'Jeg har ikke tid ___.', o: ['i dag', 'idag'], a: 'i dag' },
    { t: 'c', c: 'faste uttrykk', q: 'Vi kan ta det ___.', o: ['etterpå', 'etter på'], a: 'etterpå' },
    { t: 'c', c: 'faste uttrykk', q: 'Jeg jobber ___ i helgene.', o: ['av og til', 'avogtil'], a: 'av og til' },
    { t: 'c', c: 'faste uttrykk', q: 'Jeg er ferdig ___.', o: ['om litt', 'omlitt'], a: 'om litt' },
    { t: 'c', c: 'faste uttrykk', q: 'Han har jobbet her ___ i sommer.', o: ['siden', 'sidn'], a: 'siden' },

    // kj, skj og sj
    { t: 't', c: 'kj, skj og sj', q: 'Jeg fikk en ___ til å vise hva jeg kan.', h: '_anse', a: 'sjanse' },
    { t: 't', c: 'kj, skj og sj', q: 'Fyll ut ___ og send det inn.', h: '_emaet', a: 'skjemaet' },
    { t: 't', c: 'kj, skj og sj', q: 'Vi kjøpte ___ til middag.', h: '_øtt', a: 'kjøtt' },
    { t: 't', c: 'kj, skj og sj', q: 'Det skjer ___ noe her.', h: '_elden', a: 'sjelden' },
    { t: 't', c: 'kj, skj og sj', q: 'Hva ___ i helgen?', h: '_er', a: 'skjer' },
    { t: 't', c: 'kj, skj og sj', q: 'Han tok på seg en ren ___.', h: '_orte', a: 'skjorte' },
    { t: 't', c: 'kj, skj og sj', q: 'Vi gikk på ___ i går.', h: '_ino', a: 'kino' },
    { t: 't', c: 'kj, skj og sj', q: 'Det var en ___ fin dag.', h: '_ikkelig', a: 'skikkelig' },
    { t: 't', c: 'kj, skj og sj', q: 'Jeg må spørre ___ først.', h: '_efen', a: 'sjefen' },
    { t: 't', c: 'kj, skj og sj', q: 'Jeg ___ en som bor i nærheten.', h: '_enner', a: 'kjenner' },
    { t: 't', c: 'kj, skj og sj', q: 'Han ___ ballen rett i mål.', h: '_øt', a: 'skjøt' },

    // stum g og d
    { t: 't', c: 'stum g og d', q: 'Det var ___ hyggelig å møte deg.', h: 'vel_i_', a: 'veldig' },
    { t: 't', c: 'stum g og d', q: 'Jeg er ___ for svaret.', h: 'gla_', a: 'glad' },
    { t: 't', c: 'stum g og d', q: 'Vi gikk ___ huset.', h: 'run_t', a: 'rundt' },
    { t: 't', c: 'stum g og d', q: 'Han er ___ til å lage mat.', h: 'go_', a: 'god' },
    { t: 't', c: 'stum g og d', q: 'Det var en ___ dag på stranda.', h: 'deili_', a: 'deilig' },
    { t: 't', c: 'stum g og d', q: 'Vi bodde ___ sjøen.', h: 've_', a: 'ved' },
    { t: 't', c: 'stum g og d', q: 'Det er ___ kaldt ute.', h: 'utroli_', a: 'utrolig' },
    { t: 't', c: 'stum g og d', q: 'Hun var ___ og blid.', h: 'roli_', a: 'rolig' },
    { t: 't', c: 'stum g og d', q: 'Er du ___ med oppgaven?', h: 'ferdi_', a: 'ferdig' },
    { t: 'c', c: 'stum g og d', q: 'Han kom ___ fram.', o: ['endelig', 'endeli'], a: 'endelig' },
    { t: 'c', c: 'stum g og d', q: 'Hun er alltid så ___.', o: ['blid', 'bli'], a: 'blid' },
    { t: 'c', c: 'stum g og d', q: 'Jeg kjøpte en ___ jakke.', o: ['rød', 'rø'], a: 'rød' },

    // vanlige ord
    { t: 'c', c: 'vanlige ord', q: 'Jeg kommer ___ litt for sent.', o: ['kanskje', 'kansje'], a: 'kanskje' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg er ___ i stillingen.', o: ['interessert', 'interresert', 'interesert'], a: 'interessert' },
    { t: 'c', c: 'vanlige ord', q: 'Det er ___ at vi får sol i morgen.', o: ['sannsynlig', 'sansynlig'], a: 'sannsynlig' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg kan ___ ikke komme.', o: ['dessverre', 'desverre'], a: 'dessverre' },
    { t: 'c', c: 'vanlige ord', q: '___, det skal jeg gjøre!', o: ['Selvfølgelig', 'Selfølgelig'], a: 'Selvfølgelig' },
    { t: 'c', c: 'vanlige ord', q: 'Det var ___ det jeg mente.', o: ['akkurat', 'akurat'], a: 'akkurat' },
    { t: 'c', c: 'vanlige ord', q: 'Vi har ___ meninger om det.', o: ['forskjellige', 'forskjelige'], a: 'forskjellige' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg har ___ ikke fått svar.', o: ['fortsatt', 'forsatt'], a: 'fortsatt' },
    { t: 'c', c: 'vanlige ord', q: 'Hun ble ___ syk.', o: ['plutselig', 'plutseli'], a: 'plutselig' },
    { t: 'c', c: 'vanlige ord', q: 'Det er ___ viktig å møte presis.', o: ['spesielt', 'spessielt'], a: 'spesielt' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg har ___ lyst til å bli med.', o: ['egentlig', 'eigentlig'], a: 'egentlig' },
    { t: 'c', c: 'vanlige ord', q: 'Det var en ___ film.', o: ['interessant', 'interresant'], a: 'interessant' },
    { t: 'c', c: 'vanlige ord', q: 'Er du ___ på lørdag?', o: ['tilgjengelig', 'tilgjengli'], a: 'tilgjengelig' },
    { t: 'c', c: 'vanlige ord', q: 'Det er ___ å få jobb uten erfaring.', o: ['vanskelig', 'vanskli'], a: 'vanskelig' },
    { t: 'c', c: 'vanlige ord', q: 'Han svarte ___ på e-posten.', o: ['umiddelbart', 'umidelbart'], a: 'umiddelbart' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg er ___ på lørdag, dessverre.', o: ['opptatt', 'oppatt'], a: 'opptatt' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg gjorde det ___.', o: ['ordentlig', 'ordenlig'], a: 'ordentlig' },
    { t: 'c', c: 'vanlige ord', q: '___ var det noen hjemme.', o: ['Heldigvis', 'Heldigviss'], a: 'Heldigvis' },
    { t: 'c', c: 'vanlige ord', q: 'Det var ___ for meg å ta den vakta.', o: ['nødvendig', 'nødvendi'], a: 'nødvendig' },
    { t: 'c', c: 'vanlige ord', q: 'Jeg prøver å ___ meg godt til intervjuet.', o: ['forberede', 'forbrede'], a: 'forberede' },

    // verbbøying
    { t: 'c', c: 'verbbøying', q: 'I går ___ jeg leksene mine.', o: ['gjorde', 'gjore', 'gjordte'], a: 'gjorde' },
    { t: 'c', c: 'verbbøying', q: 'Hun ___ at hun var syk.', o: ['sa', 'sae', 'sadde'], a: 'sa' },
    { t: 'c', c: 'verbbøying', q: 'Jeg har ___ om fri på fredag.', o: ['spurt', 'spørt', 'spurrt'], a: 'spurt' },
    { t: 'c', c: 'verbbøying', q: 'Jeg ___ ikke at det var stengt.', o: ['visste', 'viste', 'vist'], a: 'visste' },
    { t: 'c', c: 'verbbøying', q: 'Han har ___ sykkelen sin.', o: ['solgt', 'selgt', 'selget'], a: 'solgt' },
    { t: 'c', c: 'verbbøying', q: 'Vi ___ på kino i går.', o: ['gikk', 'gjikk', 'gådde'], a: 'gikk' },
    { t: 'c', c: 'verbbøying', q: 'Hun har ___ meg mye.', o: ['lært', 'lærdt', 'lærte'], a: 'lært' },
    { t: 'c', c: 'verbbøying', q: 'I fjor ___ vi til Tyskland.', o: ['reiste', 'reist', 'reisde'], a: 'reiste' },
    { t: 'c', c: 'verbbøying', q: 'Har du ___ filmen?', o: ['sett', 'sedd', 'set'], a: 'sett' },
    { t: 'c', c: 'verbbøying', q: 'Jeg ___ mobilen på bussen.', o: ['glemte', 'glømte', 'glemde'], a: 'glemte' },
    { t: 'c', c: 'verbbøying', q: 'Han ___ seg da han falt.', o: ['slo', 'slådde', 'slog'], a: 'slo' },
    { t: 'c', c: 'verbbøying', q: 'Jeg har ___ hele boka.', o: ['lest', 'leset', 'læst'], a: 'lest' },
    { t: 'c', c: 'verbbøying', q: 'I går ___ jeg på bussen i en time.', o: ['satt', 'sitta', 'satte'], a: 'satt' },
    { t: 'c', c: 'verbbøying', q: 'Han har ___ et brev til kommunen.', o: ['skrevet', 'skrivd', 'skrevd'], a: 'skrevet' },
    { t: 'c', c: 'verbbøying', q: 'Vi ___ hverandre på festen.', o: ['traff', 'treffet', 'treffte'], a: 'traff' },
    { t: 'c', c: 'verbbøying', q: 'Jeg har ___ for mye sjokolade.', o: ['spist', 'spiste', 'spisst'], a: 'spist' },
    { t: 'c', c: 'verbbøying', q: 'Hun har ___ hjem.', o: ['dratt', 'dradd', 'drat'], a: 'dratt' },
    { t: 'c', c: 'verbbøying', q: 'Jeg har ___ på søknaden.', o: ['svart', 'svaret', 'svarte'], a: 'svart' },

    // jobbord
    { t: 't', c: 'jobbord', q: 'Jeg søker på ___ som butikkmedarbeider.', h: 'sti_ingen', a: 'stillingen' },
    { t: 't', c: 'jobbord', q: 'Jeg har relevant ___.', h: 'erfa_ing', a: 'erfaring' },
    { t: 't', c: 'jobbord', q: 'Hva slags ___ har du?', h: 'kvali_ikasjoner', a: 'kvalifikasjoner' },
    { t: 't', c: 'jobbord', q: 'Treneren min kan være ___ for meg.', h: 'refe_anse', a: 'referanse' },
    { t: 't', c: 'jobbord', q: 'Jeg ble kalt inn til ___.', h: 'inte_vju', a: 'intervju' },
    { t: 't', c: 'jobbord', q: 'Du får en ___ når du slutter.', h: 'atte_t', a: 'attest' },
    { t: 't', c: 'jobbord', q: 'Min ___ er veldig fornøyd med meg.', h: 'arbeids_iver', a: 'arbeidsgiver' },
    { t: 't', c: 'jobbord', q: 'Hun fikk fast ___.', h: 'anse_else', a: 'ansettelse' },
    { t: 't', c: 'jobbord', q: 'Han er blid og ___.', h: 'service_nnstilt', a: 'serviceinnstilt' },
    { t: 't', c: 'jobbord', q: 'Jeg er ___ og liker å lære nye ting.', h: 'lære_illig', a: 'lærevillig' },
    { t: 't', c: 'jobbord', q: '___ er 1. mars.', h: 'Søknadsfr_sten', a: 'Søknadsfristen' },
    { t: 't', c: 'jobbord', q: 'Jeg har ___ for kassa på lørdager.', h: 'ans_ar', a: 'ansvar' },
    { t: 't', c: 'jobbord', q: 'Hun jobber i en ___.', h: 'deltids_tilling', a: 'deltidsstilling' },
    { t: 't', c: 'jobbord', q: 'Når får vi utbetalt ___?', h: 'lø_a', a: 'lønna' },
    { t: 't', c: 'jobbord', q: 'Jeg er rask og ___.', h: 'e_fektiv', a: 'effektiv' },
    { t: 't', c: 'jobbord', q: 'Kunden ville ___ varen.', h: 'retu_nere', a: 'returnere' },
    { t: 't', c: 'jobbord', q: 'Jeg kan jobbe ___.', h: 'helge_e', a: 'helgene' },

    // ligge/legge
    { t: 'c', c: 'ligge/legge', q: 'Kan du ___ boka på bordet?', o: ['legge', 'ligge'], a: 'legge' },
    { t: 'c', c: 'ligge/legge', q: 'Telefonen ___ på kjøkkenet.', o: ['ligger', 'legger'], a: 'ligger' },
    { t: 'c', c: 'ligge/legge', q: 'Jeg ___ meg tidlig i kveld.', o: ['legger', 'ligger'], a: 'legger' },
    { t: 'c', c: 'ligge/legge', q: 'Hun ___ i senga og leser.', o: ['ligger', 'legger'], a: 'ligger' },
    { t: 'c', c: 'ligge/legge', q: 'I går ___ jeg nøklene på benken.', o: ['la', 'lå'], a: 'la' },
    { t: 'c', c: 'ligge/legge', q: 'Katten ___ i sola hele dagen i går.', o: ['lå', 'la'], a: 'lå' },
    { t: 'c', c: 'ligge/legge', q: 'Har du ___ ved CV-en?', o: ['lagt', 'ligget'], a: 'lagt' },
    { t: 'c', c: 'ligge/legge', q: 'Boka har ___ der i flere uker.', o: ['ligget', 'lagt'], a: 'ligget' },
    { t: 'c', c: 'ligge/legge', q: 'Kan du ___ deg ned her?', o: ['sette', 'sitte'], a: 'sette' },
    { t: 'c', c: 'ligge/legge', q: 'Vi ___ på benken og pratet.', o: ['satt', 'satte'], a: 'satt' },
    { t: 'c', c: 'ligge/legge', q: 'Han ___ koppen på bordet.', o: ['satte', 'satt'], a: 'satte' },
    { t: 'c', c: 'ligge/legge', q: 'Husk å ___ ved attesten.', o: ['legge', 'ligge'], a: 'legge' }
  );

  L.fix.push(
    { c: 'og/å', q: 'Jeg liker og hjelpe kunder.', a: 'Jeg liker å hjelpe kunder.' },
    { c: 'og/å', q: 'Vi gikk på kino å spiste popkorn.', a: 'Vi gikk på kino og spiste popkorn.' },
    { c: 'og/å', q: 'Det er gøy og lære nye ting på jobben.', a: 'Det er gøy å lære nye ting på jobben.' },
    { c: 'og/å', q: 'Jeg håper og høre fra dere snart.', a: 'Jeg håper å høre fra dere snart.' },
    { c: 'og/å', q: 'Han satt å ventet i en time.', a: 'Han satt og ventet i en time.' },
    { c: 'og/å', q: 'Jeg er flink til og samarbeide å lytte til andre.', a: 'Jeg er flink til å samarbeide og lytte til andre.' },
    { c: 'og/å', q: 'Hun begynte og jobbe der i fjor.', a: 'Hun begynte å jobbe der i fjor.' },
    { c: 'og/å', q: 'Vi pleier og spise middag klokka fem.', a: 'Vi pleier å spise middag klokka fem.' },
    { c: 'og/å', q: 'Jeg ser fram til og høre fra dere.', a: 'Jeg ser fram til å høre fra dere.' },
    { c: 'dobbel konsonant', q: 'Jeg har jobet på butik i et år.', a: 'Jeg har jobbet på butikk i et år.' },
    { c: 'dobbel konsonant', q: 'Vi skall møtes på kafeen klokka tre.', a: 'Vi skal møtes på kafeen klokka tre.' },
    { c: 'dobbel konsonant', q: 'Takk for at du hjallp meg i går.', a: 'Takk for at du hjalp meg i går.' },
    { c: 'dobbel konsonant', q: 'Jeg har alltid likt å spille håndbal.', a: 'Jeg har alltid likt å spille håndball.' },
    { c: 'dobbel konsonant', q: 'Han vill gjerne komme på intervju.', a: 'Han vil gjerne komme på intervju.' },
    { c: 'dobbel konsonant', q: 'Vi hadde det moro samen hele dagen.', a: 'Vi hadde det moro sammen hele dagen.' },
    { c: 'dobbel konsonant', q: 'Jeg trives godt med å jobbe samen med andre.', a: 'Jeg trives godt med å jobbe sammen med andre.' },
    { c: 'stum h', q: 'Vem skal jobbe på lørdag?', a: 'Hvem skal jobbe på lørdag?' },
    { c: 'stum h', q: 'Jeg vet ikke vor jeg la nøklene.', a: 'Jeg vet ikke hvor jeg la nøklene.' },
    { c: 'stum h', q: 'Kan du jelpe meg med denne oppgaven?', a: 'Kan du hjelpe meg med denne oppgaven?' },
    { c: 'stum h', q: 'Vis du har tid, kan vi ta en kaffe.', a: 'Hvis du har tid, kan vi ta en kaffe.' },
    { c: 'stum h', q: 'Vordan går det med deg?', a: 'Hvordan går det med deg?' },
    { c: 'da/når', q: 'Når vi var på ferie i fjor, regnet det hver dag.', a: 'Da vi var på ferie i fjor, regnet det hver dag.' },
    { c: 'da/når', q: 'Da jeg kommer hjem, skal jeg lage middag.', a: 'Når jeg kommer hjem, skal jeg lage middag.' },
    { c: 'da/når', q: 'Når jeg fikk svar på søknaden, ble jeg glad.', a: 'Da jeg fikk svar på søknaden, ble jeg glad.' },
    { c: 'da/når', q: 'Da begynner skolen igjen?', a: 'Når begynner skolen igjen?' },
    { c: 'de/dem', q: 'Jeg ringte de i går, men dem svarte ikke.', a: 'Jeg ringte dem i går, men de svarte ikke.' },
    { c: 'de/dem', q: 'Dem som vil være med, må melde seg på.', a: 'De som vil være med, må melde seg på.' },
    { c: 'de/dem', q: 'Kan du gi de beskjed om møtet?', a: 'Kan du gi dem beskjed om møtet?' },
    { c: 'de/dem', q: 'Jeg tror dem har stengt i dag.', a: 'Jeg tror de har stengt i dag.' },
    { c: 'de/dem', q: 'Dem sier at det er travelt i helgene.', a: 'De sier at det er travelt i helgene.' },
    { c: 'særskriving', q: 'Jeg har søkt på en sommer jobb i butikk.', a: 'Jeg har søkt på en sommerjobb i butikk.' },
    { c: 'særskriving', q: 'Han har ingen arbeids erfaring ennå.', a: 'Han har ingen arbeidserfaring ennå.' },
    { c: 'særskriving', q: 'Vi har fotball trening hver tirsdag.', a: 'Vi har fotballtrening hver tirsdag.' },
    { c: 'særskriving', q: 'Jeg gleder meg til sommer ferien.', a: 'Jeg gleder meg til sommerferien.' },
    { c: 'særskriving', q: 'Hun er en god lag spiller.', a: 'Hun er en god lagspiller.' },
    { c: 'særskriving', q: 'Jeg har jobb intervju på fredag.', a: 'Jeg har jobbintervju på fredag.' },
    { c: 'særskriving', q: 'Han jobber i kunde service i et tele selskap.', a: 'Han jobber i kundeservice i et teleselskap.' },
    { c: 'særskriving', q: 'Jeg har vært hjelpe trener for et guttelag.', a: 'Jeg har vært hjelpetrener for et guttelag.' },
    { c: 'store og små bokstaver', q: 'Jeg kan jobbe på Lørdager og Søndager.', a: 'Jeg kan jobbe på lørdager og søndager.' },
    { c: 'store og små bokstaver', q: 'Vi har fri i hele Juli.', a: 'Vi har fri i hele juli.' },
    { c: 'store og små bokstaver', q: 'Hun snakker Norsk, Engelsk og litt Spansk.', a: 'Hun snakker norsk, engelsk og litt spansk.' },
    { c: 'store og små bokstaver', q: 'jeg bor i oslo og går på skole der.', a: 'Jeg bor i Oslo og går på skole der.' },
    { c: 'store og små bokstaver', q: 'Vi skal til spania i Påsken.', a: 'Vi skal til Spania i påsken.' },
    { c: 'store og små bokstaver', q: 'Jeg kan begynne i Juni.', a: 'Jeg kan begynne i juni.' },
    { c: 'faste uttrykk', q: 'Jeg kan ikke komme idag, men imorgen går det fint.', a: 'Jeg kan ikke komme i dag, men i morgen går det fint.' },
    { c: 'faste uttrykk', q: 'Vi var på kino igår.', a: 'Vi var på kino i går.' },
    { c: 'faste uttrykk', q: 'Jeg blir flinkere etterhvert.', a: 'Jeg blir flinkere etter hvert.' },
    { c: 'faste uttrykk', q: 'Han tok bussen istedet for å gå.', a: 'Han tok bussen i stedet for å gå.' },
    { c: 'faste uttrykk', q: 'Jeg skal ihvertfall prøve.', a: 'Jeg skal i hvert fall prøve.' },
    { c: 'faste uttrykk', q: 'Det var alt for kaldt i går.', a: 'Det var altfor kaldt i går.' },
    { c: 'faste uttrykk', q: 'Vi sees imorgen klokka ni.', a: 'Vi sees i morgen klokka ni.' },
    { c: 'kj, skj og sj', q: 'Jeg sjønner ikke oppgaven.', a: 'Jeg skjønner ikke oppgaven.' },
    { c: 'kj, skj og sj', q: 'Kan du fylle ut sjemaet?', a: 'Kan du fylle ut skjemaet?' },
    { c: 'kj, skj og sj', q: 'Mamma skal sjøre meg til jobb.', a: 'Mamma skal kjøre meg til jobb.' },
    { c: 'kj, skj og sj', q: 'Jeg fikk en sanse til å vise meg fram.', a: 'Jeg fikk en sjanse til å vise meg fram.' },
    { c: 'stum g og d', q: 'Det er vikti å komme presis.', a: 'Det er viktig å komme presis.' },
    { c: 'stum g og d', q: 'Jeg var veldi gla for svaret.', a: 'Jeg var veldig glad for svaret.' },
    { c: 'stum g og d', q: 'Vi gikk runt i byen hele dagen.', a: 'Vi gikk rundt i byen hele dagen.' },
    { c: 'stum g og d', q: 'Hun hadde ikke ti til å spise.', a: 'Hun hadde ikke tid til å spise.' },
    { c: 'vanlige ord', q: 'Jeg er veldig interresert i stillingen.', a: 'Jeg er veldig interessert i stillingen.' },
    { c: 'vanlige ord', q: 'Jeg kan desverre ikke komme på fredag.', a: 'Jeg kan dessverre ikke komme på fredag.' },
    { c: 'vanlige ord', q: 'Kansje vi kan møtes neste uke?', a: 'Kanskje vi kan møtes neste uke?' },
    { c: 'vanlige ord', q: 'Jeg har forsatt ikke fått svar.', a: 'Jeg har fortsatt ikke fått svar.' },
    { c: 'vanlige ord', q: 'Det var akurat det jeg trengte.', a: 'Det var akkurat det jeg trengte.' },
    { c: 'vanlige ord', q: 'Selfølgelig kan jeg ta den vakta.', a: 'Selvfølgelig kan jeg ta den vakta.' },
    { c: 'vanlige ord', q: 'Vi lærte mye da vi hadde utplasering i barnehagen.', a: 'Vi lærte mye da vi hadde utplassering i barnehagen.' },
    { c: 'tegnsetting', q: 'Jeg ville gjerne bli med men jeg måtte jobbe.', a: 'Jeg ville gjerne bli med, men jeg måtte jobbe.' },
    { c: 'tegnsetting', q: 'Når jeg er ferdig på skolen går jeg på trening.', a: 'Når jeg er ferdig på skolen, går jeg på trening.' },
    { c: 'tegnsetting', q: 'Jeg er blid pålitelig og lærevillig.', a: 'Jeg er blid, pålitelig og lærevillig.' },
    { c: 'tegnsetting', q: 'Hvis du har spørsmål kan du ringe meg.', a: 'Hvis du har spørsmål, kan du ringe meg.' },
    { c: 'tegnsetting', q: 'Fordi bussen var forsinket kom jeg for sent.', a: 'Fordi bussen var forsinket, kom jeg for sent.' },
    { c: 'tegnsetting', q: 'Jeg har jobbet i kiosk på kafé og i butikk.', a: 'Jeg har jobbet i kiosk, på kafé og i butikk.' },
    { c: 'tegnsetting', q: 'Da jeg kom hjem var det ingen der.', a: 'Da jeg kom hjem, var det ingen der.' },
    { c: 'verbbøying', q: 'I går gjore jeg ferdig oppgaven.', a: 'I går gjorde jeg ferdig oppgaven.' },
    { c: 'verbbøying', q: 'Jeg har spørt sjefen om fri.', a: 'Jeg har spurt sjefen om fri.' },
    { c: 'verbbøying', q: 'Jeg viste ikke at butikken var stengt.', a: 'Jeg visste ikke at butikken var stengt.' },
    { c: 'verbbøying', q: 'Han har selgt sykkelen sin.', a: 'Han har solgt sykkelen sin.' },
    { c: 'verbbøying', q: 'Hun sae at hun var syk.', a: 'Hun sa at hun var syk.' },
    { c: 'verbbøying', q: 'Vi har sedd den filmen før.', a: 'Vi har sett den filmen før.' },
    { c: 'verbbøying', q: 'Jeg har skrivd en søknad til butikken.', a: 'Jeg har skrevet en søknad til butikken.' },
    { c: 'jobbord', q: 'Jeg søker på stilingen som kassamedarbeider.', a: 'Jeg søker på stillingen som kassamedarbeider.' },
    { c: 'jobbord', q: 'Treneren min kan være referranse.', a: 'Treneren min kan være referanse.' },
    { c: 'jobbord', q: 'Jeg er pålitlig og lærevilig.', a: 'Jeg er pålitelig og lærevillig.' },
    { c: 'jobbord', q: 'Jeg har lang erfarring med kunder.', a: 'Jeg har lang erfaring med kunder.' },
    { c: 'jobbord', q: 'Jeg legger ved attesten fra min forige arbeidsgiver.', a: 'Jeg legger ved attesten fra min forrige arbeidsgiver.' },
    { c: 'jobbord', q: 'Jeg gleder meg til interjvuet på mandag.', a: 'Jeg gleder meg til intervjuet på mandag.' },
    { c: 'ligge/legge', q: 'Kan du ligge papirene på pulten min?', a: 'Kan du legge papirene på pulten min?' },
    { c: 'ligge/legge', q: 'Telefonen legger på bordet.', a: 'Telefonen ligger på bordet.' },
    { c: 'ligge/legge', q: 'Jeg la i senga hele dagen i går.', a: 'Jeg lå i senga hele dagen i går.' },
    { c: 'ligge/legge', q: 'Han satt koppen i oppvaskmaskinen.', a: 'Han satte koppen i oppvaskmaskinen.' },
    { c: 'ligge/legge', q: 'Vi sitter oss ved vinduet.', a: 'Vi setter oss ved vinduet.' }
  );

  L.phrases.push(
    { q: 'Si at du søker på stillingen som butikkmedarbeider', a: ['Jeg søker på stillingen som butikkmedarbeider.', 'Jeg søker herved på stillingen som butikkmedarbeider.'] },
    { q: 'Si at du så annonsen på finn.no', a: ['Jeg så annonsen på finn.no.', 'Jeg så stillingen utlyst på finn.no.'] },
    { q: 'Si at du kan begynne med en gang', a: ['Jeg kan begynne med en gang.', 'Jeg kan begynne umiddelbart.'] },
    { q: 'Takk arbeidsgiveren for intervjuet i går', a: ['Takk for intervjuet i går.', 'Tusen takk for intervjuet i går.', 'Takk for intervjuet i går!'] },
    { q: 'Si fra at du er syk og ikke kan komme på jobb i dag', a: ['Jeg er syk og kan dessverre ikke komme på jobb i dag.', 'Jeg er dessverre syk og kan ikke komme på jobb i dag.'] },
    { q: 'Spør om noen kan bytte vakt med deg', a: ['Er det noen som kan bytte vakt med meg?', 'Kan noen bytte vakt med meg?'] },
    { q: 'Si at du gleder deg til å begynne', a: ['Jeg gleder meg til å begynne.', 'Jeg gleder meg til å begynne!'] },
    { q: 'Be om unnskyldning for at du svarer sent', a: ['Beklager at jeg svarer sent.', 'Beklager sent svar.'] },
    { q: 'Si at du dessverre kommer litt for sent', a: ['Jeg kommer dessverre litt for sent.', 'Jeg blir dessverre litt forsinket.'] },
    { q: 'Spør om de har fått søknaden din', a: ['Har dere fått søknaden min?'] },
    { q: 'Si takk på forhånd', a: ['Takk på forhånd!', 'Takk på forhånd.'] },
    { q: 'Si at du har lagt ved CV og attest', a: ['Jeg har lagt ved CV og attest.', 'Vedlagt følger CV og attest.'] },
    { q: 'Si ærlig at du ikke har mye erfaring, men lærer fort', a: ['Jeg har ikke mye erfaring, men jeg lærer fort.', 'Jeg har lite erfaring, men jeg lærer fort.'] },
    { q: 'Avslutt en uformell melding til en kollega med «hilsen» og navnet Jonas', a: ['Hilsen Jonas'] },
    { q: 'Spør om det er mulig å få fri på fredag', a: ['Er det mulig å få fri på fredag?'] },
    { q: 'Ønsk noen god helg', a: ['Ha en fin helg!', 'Ha en god helg!', 'God helg!'] },
    { q: 'Spør treneren om du kan bruke ham som referanse', a: ['Kan jeg bruke deg som referanse?'] },
    { q: 'Si at du er interessert i stillingen', a: ['Jeg er interessert i stillingen.', 'Jeg er veldig interessert i stillingen.'] },
    { q: 'Si at du kan jobbe i helgene og i feriene', a: ['Jeg kan jobbe i helgene og i feriene.', 'Jeg kan jobbe i helger og ferier.'] },
    { q: 'Si at du svarer så fort du kan', a: ['Jeg svarer så fort jeg kan.'] },
    { q: 'Takk noen for at de svarte deg', a: ['Takk for svaret!', 'Takk for svaret.', 'Tusen takk for svaret!'] },
    { q: 'Si at tidspunktet passer fint', a: ['Det passer fint.', 'Det passer bra.', 'Det passer fint!'] },
    { q: 'Si at du har et spørsmål om vaktene', a: ['Jeg har et spørsmål om vaktene.', 'Jeg lurer på noe angående vaktene.'] },
    { q: 'Si fra at du vil si opp stillingen din', a: ['Jeg ønsker å si opp stillingen min.', 'Jeg vil si opp stillingen min.'] },
    { q: 'Spør om det er noe du skal ta med første dag', a: ['Er det noe jeg skal ta med første dag?'] },
    { q: 'Si at de kan nå deg på telefon', a: ['Dere kan nå meg på telefon.', 'Du kan nå meg på telefon.'] },
    { q: 'Be kunden vente litt mens du sjekker lageret', a: ['Et øyeblikk, så skal jeg sjekke lageret.', 'Vent litt, så sjekker jeg lageret.'] },
    { q: 'Si unnskyld til en kunde for ventetiden', a: ['Beklager ventetiden.', 'Beklager at du måtte vente.'] },
    { q: 'Spør hva du kan hjelpe kunden med', a: ['Hva kan jeg hjelpe deg med?', 'Kan jeg hjelpe deg med noe?'] }
  );

  const hilsen = { re: 'Med vennlig hilsen|Vennlig hilsen', ok: 'Riktig avslutningshilsen.', bad: 'Avslutt med «Med vennlig hilsen» eller «Vennlig hilsen».' };
  const ikkeKomma = { re: 'hilsen\\s*,', neg: true, ok: '', bad: 'Ikke sett komma etter «hilsen» på norsk.' };
  const startHei = { re: '^\\s*(hei|god dag|kjære)\\b', f: 'i', ok: 'Du starter med en hilsen.', bad: 'Start med en hilsen, for eksempel «Hei Kari,».' };

  L.writing.push(
    // ---------- Nivå 3: korte e-poster og meldinger ----------
    {
      id: 'no-w-syk', lvl: 3, title: 'Melding: Du er syk',
      task: 'Du har vakt på butikken i dag kl. 16, men har feber. Skriv en kort melding til sjefen din, Anne. Si fra tidlig, forklar kort, og si når du tror du er tilbake.',
      skeleton: 'Hei [navn],\n\nJeg er dessverre syk og kan ikke komme på vakta mi i dag kl. [tid].\n[Kort om når du tror du er tilbake.]\n[Tilby noe, for eksempel å bytte vakt.]\n\nHilsen [navn]',
      min: 25, max: 80,
      checks: [
        startHei,
        { re: 'syk|feber', f: 'i', ok: 'Det er tydelig hvorfor du ikke kommer.', bad: 'Si kort hvorfor du ikke kan komme.' },
        { re: 'dessverre|beklager', f: 'i', ok: 'Du er høflig.', bad: 'Bruk gjerne «dessverre» eller «beklager» – det viser at du tar det på alvor.' },
        { re: 'i morgen|tilbake|frisk|neste', f: 'i', ok: 'Du sier noe om når du er tilbake.', bad: 'Si når du tror du er tilbake på jobb.' }
      ],
      criteria: ['Sendt i god tid før vakta', 'Kort forklaring – ingen detaljer om sykdommen', 'Sier når jeg er tilbake', 'Hilsen og navn'],
      model: 'Hei Anne,\n\nJeg er dessverre syk og kan ikke komme på vakta mi i dag kl. 16. Jeg har feber, men håper å være frisk til lørdag.\nJeg kan gjerne ta en ekstra vakt neste uke hvis dere trenger det.\n\nHilsen Jonas'
    },
    {
      id: 'no-w-forsinket', lvl: 3, title: 'Melding: Du blir forsinket',
      task: 'Bussen er innstilt, og du kommer 20 minutter for sent på jobb. Skriv en kort melding til vaktansvarlig Ali.',
      skeleton: 'Hei [navn]!\n\n[Hva har skjedd?] Jeg er der omtrent kl. [tid].\n[Beklag.]\n\n[Navn]',
      min: 15, max: 60,
      checks: [
        startHei,
        { re: 'buss|tog|trikk|t-bane', f: 'i', ok: 'Du forklarer hva som har skjedd.', bad: 'Forklar kort hvorfor du blir forsinket.' },
        { re: '\\d', ok: 'Du sier når du kommer.', bad: 'Si omtrent når du er på plass, med klokkeslett eller antall minutter.' },
        { re: 'beklager|sorry|unnskyld', f: 'i', ok: 'Du beklager.', bad: 'Beklag kort at du blir forsinket.' }
      ],
      criteria: ['Melding før vakta starter', 'Klokkeslett eller antall minutter', 'Kort og høflig'],
      model: 'Hei Ali!\n\nBussen min er innstilt, så jeg kommer omtrent 20 minutter for sent. Jeg er der rundt kl. 16.20. Beklager!\n\nJonas'
    },
    {
      id: 'no-w-fravaer', lvl: 3, title: 'E-post til kontaktlæreren',
      task: 'Du må til tannlegen på torsdag og går glipp av to timer engelsk. Skriv en e-post til kontaktlæreren din, Morten Lie. Si fra om fraværet og spør hva du bør gjøre for å ta igjen det du går glipp av.',
      skeleton: 'Hei [navn],\n\nJeg skal til [hvor] på [dag] og går derfor glipp av [hvilke timer].\nKan du si meg [hva du lurer på]?\n\nVennlig hilsen\n[Navn], [klasse]',
      min: 30, max: 90,
      checks: [
        startHei,
        { re: 'tannlege', f: 'i', ok: 'Du sier hvorfor du er borte.', bad: 'Si hvorfor du er borte.' },
        { re: '\\?', ok: 'Du stiller et konkret spørsmål.', bad: 'Still et konkret spørsmål, for eksempel om lekser eller arbeidsplan.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Dag og hvilke timer', 'Konkret spørsmål', 'Navn og klasse til slutt'],
      model: 'Hei Morten,\n\nJeg skal til tannlegen på torsdag og går derfor glipp av de to engelsktimene.\nKan du si meg hva vi skal gjøre i timene, så jeg kan jobbe med det hjemme?\n\nVennlig hilsen\nJonas Berg, 1STB'
    },
    {
      id: 'no-w-referanse', lvl: 3, title: 'Spør om noen vil være referanse',
      task: 'Du skal søke sommerjobb. Skriv en melding til fotballtreneren din, Lars, og spør om du kan oppgi ham som referanse. Forklar kort hva du søker på.',
      skeleton: 'Hei [navn]!\n\nJeg skal søke på [jobb] hos [bedrift].\nKan jeg oppgi deg som referanse? [Hvorfor akkurat han?]\n\nTusen takk!\n[Navn]',
      min: 25, max: 80,
      checks: [
        startHei,
        { re: 'referanse', f: 'i', ok: 'Det er tydelig hva du spør om.', bad: 'Bruk ordet «referanse» så det er tydelig hva du spør om.' },
        { re: 'søke|søker|søknad', f: 'i', ok: 'Du forklarer hva du søker på.', bad: 'Si kort hva du søker på.' },
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Avslutt med å takke.' }
      ],
      criteria: ['Hva jeg søker på', 'Høflig spørsmål', 'Takk', 'Navn'],
      model: 'Hei Lars!\n\nJeg skal søke på sommerjobb som butikkmedarbeider hos Sportshuset. Kan jeg oppgi deg som referanse? Du har kjent meg i mange år og vet at jeg møter opp og tar ansvar.\n\nTusen takk!\nJonas'
    },
    {
      id: 'no-w-fri', lvl: 3, title: 'E-post: Be om fri en helg',
      task: 'Du jobber helgevakter på en kafé. Om tre uker skal du på cup med fotballaget og trenger fri hele helgen. Skriv en e-post til sjefen, Line, i god tid.',
      skeleton: 'Hei [navn],\n\nJeg lurer på om jeg kan få fri [hvilken helg], fordi [grunn].\n[Tilby en løsning.]\n\nVennlig hilsen\n[Navn]',
      min: 30, max: 90,
      checks: [
        startHei,
        { re: 'fri', f: 'i', ok: 'Du spør om fri.', bad: 'Spør tydelig om du kan få fri.' },
        { re: 'fordi|ettersom|siden', f: 'i', ok: 'Du begrunner.', bad: 'Gi en kort grunn.' },
        { re: 'bytte|ta en annen|ekstra|i stedet', f: 'i', lvl: 'tips', ok: 'Du tilbyr en løsning.', bad: 'Tips: Tilby å bytte vakt eller ta en ekstra vakt. Det gjør det lettere å si ja.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Spør i god tid', 'Hvilken helg og hvorfor', 'Tilbyr en løsning', 'Høflig avslutning'],
      model: 'Hei Line,\n\nJeg lurer på om jeg kan få fri helgen 14.–15. juni, fordi jeg skal på cup med fotballaget.\nJeg har spurt Emma, og hun kan ta vaktene mine. Jeg tar gjerne en av hennes vakter i stedet.\n\nVennlig hilsen\nJonas'
    },
    {
      id: 'no-w-bekreft-intervju', lvl: 3, title: 'E-post: Bekreft intervju',
      task: 'Du har fått en e-post fra Marte i en dagligvarebutikk. Hun spør om du kan komme på intervju tirsdag kl. 15. Skriv et kort svar der du takker og bekrefter tidspunktet.',
      skeleton: 'Hei [navn],\n\nTakk for [hva].\n[Bekreft dag og klokkeslett.]\n[Si at du gleder deg.]\n\nVennlig hilsen\n[Navn]\n[Telefon]',
      min: 20, max: 70,
      checks: [
        startHei,
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Takk for at du er invitert til intervju.' },
        { re: 'tirsdag', f: 'i', ok: 'Du gjentar dagen.', bad: 'Gjenta dag og tidspunkt, så det ikke blir misforståelser.' },
        { re: '[a-zæøå,]\\s+Tirsdag', neg: true, ok: '', bad: 'Ukedager skrives med liten bokstav inne i en setning: «tirsdag».' },
        hilsen, ikkeKomma
      ],
      criteria: ['Takk', 'Dag og klokkeslett gjentatt', 'Positiv og kort'],
      model: 'Hei Marte,\n\nTakk for invitasjonen til intervju.\nTirsdag kl. 15 passer fint, og jeg kommer til butikken.\nJeg gleder meg til å møte deg.\n\nVennlig hilsen\nJonas Berg\n412 34 567'
    },
    {
      id: 'no-w-praksis', lvl: 3, title: 'E-post: Takk for arbeidsuka',
      task: 'Du har hatt en uke arbeidspraksis i en barnehage. Skriv en takke-e-post til styreren, Kristin. Nevn noe konkret du lærte eller likte.',
      skeleton: 'Hei [navn],\n\nTusen takk for [hva].\n[Noe konkret du lærte eller likte.]\n[Hilsen til de andre ansatte eller barna.]\n\nVennlig hilsen\n[Navn]',
      min: 30, max: 100,
      checks: [
        startHei,
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Husk å takke for uka.' },
        { re: 'lærte|likte|fikk', f: 'i', ok: 'Du nevner noe konkret.', bad: 'Nevn noe konkret du lærte eller likte. Det gjør takken ekte.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Takker for uka', 'Én konkret ting', 'Hilsen til de andre', 'Riktig avslutning'],
      model: 'Hei Kristin,\n\nTusen takk for at jeg fikk ha arbeidspraksis hos dere.\nJeg likte spesielt å være med på turdagen, og jeg lærte mye om hvordan man gir tydelige beskjeder til små barn.\nHils til alle de ansatte og barna på Blåklokka!\n\nVennlig hilsen\nJonas'
    },
    {
      id: 'no-w-smajobb', lvl: 3, title: 'Lapp i postkassa: Tilby småjobber',
      task: 'Du vil tjene litt penger på å klippe plen og måke snø for naboene. Skriv en kort lapp du kan legge i postkassene. Si hvem du er, hva du tilbyr, pris og hvordan de kan ta kontakt.',
      skeleton: 'Hei!\n\nJeg heter [navn], er [alder] år og bor i [gate].\nJeg tilbyr [tjenester]. Pris: [pris].\nRing eller send melding på [telefon].\n\nHilsen [navn]',
      min: 30, max: 90,
      checks: [
        { re: 'jeg heter', f: 'i', ok: 'Du presenterer deg.', bad: 'Si hvem du er og hvor du bor – folk vil vite hvem de slipper inn i hagen.' },
        { re: 'kr|kroner|pris', f: 'i', ok: 'Du nevner pris.', bad: 'Ta med pris, for eksempel per gang eller per time.' },
        { re: '\\d{3}\\s?\\d{2}\\s?\\d{3}', ok: 'Telefonnummeret er med.', bad: 'Ta med telefonnummeret ditt.' }
      ],
      criteria: ['Hvem jeg er', 'Hva jeg tilbyr og pris', 'Hvordan de tar kontakt', 'Kort og ryddig'],
      model: 'Hei!\n\nJeg heter Jonas, er 16 år og bor i Solveien 12.\nJeg tilbyr plenklipping om sommeren og snømåking om vinteren. Pris: 150 kroner per gang for en vanlig hage.\nRing eller send melding på 412 34 567.\n\nHilsen Jonas'
    },
    {
      id: 'no-w-kollega-hjelp', lvl: 3, title: 'Melding: Spør en kollega om hjelp',
      task: 'Du er ny på jobb i en matbutikk og er usikker på hvordan du skal registrere svinn (varer som er gått ut på dato). Skriv en melding til kollegaen din, Sofie, og be om hjelp neste gang dere jobber sammen.',
      skeleton: 'Hei [navn]!\n\n[Hva du lurer på.]\nKan du vise meg [hva] neste gang vi [når]?\n\nTakk!\n[Navn]',
      min: 20, max: 70,
      checks: [
        startHei,
        { re: 'svinn|dato|registrere', f: 'i', ok: 'Det er tydelig hva du lurer på.', bad: 'Si konkret hva du lurer på.' },
        { re: '\\?', ok: 'Du stiller et spørsmål.', bad: 'Formuler det som et spørsmål: «Kan du vise meg …?»' },
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Avslutt med takk.' }
      ],
      criteria: ['Konkret spørsmål', 'Foreslår når', 'Vennlig tone'],
      model: 'Hei Sofie!\n\nJeg er litt usikker på hvordan jeg registrerer svinn på varer som er gått ut på dato.\nKan du vise meg det neste gang vi jobber sammen på lørdag?\n\nTakk!\nJonas'
    },

    // ---------- Nivå 4: arbeidsliv og søknadsdeler ----------
    {
      id: 'no-w-oppfolging', lvl: 4, title: 'E-post: Følg opp en søknad',
      task: 'Du søkte på en sommerjobb på et hotell for to uker siden, men har ikke hørt noe. Skriv en kort og høflig e-post til personalansvarlig, Hanne Dahl, der du følger opp søknaden.',
      skeleton: 'Hei [navn],\n\nFor [hvor lenge siden] søkte jeg på [stilling].\nJeg lurer på [hva du lurer på].\n[Gjenta kort at du er interessert.]\n\nMed vennlig hilsen\n[Navn]\n[Telefon]',
      min: 40, max: 110,
      checks: [
        startHei,
        { re: 'søkte|søknad', f: 'i', ok: 'Du minner om søknaden.', bad: 'Si hvilken stilling du søkte på og når.' },
        { re: '\\?|lurer på', f: 'i', ok: 'Du spør konkret.', bad: 'Spør konkret, for eksempel om søknaden er mottatt eller når de svarer.' },
        { re: 'interessert|gjerne|ønsker', f: 'i', ok: 'Du viser at du fortsatt er interessert.', bad: 'Si at du fortsatt er interessert i stillingen.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Hvilken stilling og når jeg søkte', 'Høflig spørsmål, ikke mas', 'Viser fortsatt interesse', 'Kort'],
      model: 'Hei Hanne,\n\nFor to uker siden søkte jeg på sommerjobb som renholder på Hotell Fjordgløtt.\nJeg lurer på om dere har fått søknaden min, og når dere regner med å gi svar.\nJeg er fortsatt veldig interessert i jobben og kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg\n412 34 567'
    },
    {
      id: 'no-w-oppsigelse', lvl: 4, title: 'E-post: Si opp deltidsjobben',
      task: 'Du har jobbet ett år i en kiosk, men skal slutte fordi du vil bruke mer tid på skolen. Skriv en oppsigelse til sjefen, Tor. Den skal være saklig, vennlig og si når siste arbeidsdag er.',
      skeleton: 'Hei [navn],\n\nJeg sier med dette opp stillingen min som [stilling].\nSiste arbeidsdag blir [dato], i tråd med oppsigelsestiden.\n[Kort grunn.]\n[Takk for tiden.]\n\nMed vennlig hilsen\n[Navn]',
      min: 40, max: 120,
      checks: [
        startHei,
        { re: 'si(er)? opp|oppsigelse', f: 'i', ok: 'Det er tydelig at du sier opp.', bad: 'Skriv tydelig at du sier opp stillingen.' },
        { re: 'siste arbeidsdag|siste dag', f: 'i', ok: 'Du oppgir siste arbeidsdag.', bad: 'Oppgi når siste arbeidsdag er.' },
        { re: 'takk', f: 'i', ok: 'Du takker for tiden.', bad: 'Takk for tiden – det er lurt å slutte på en god måte.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Tydelig oppsigelse', 'Siste arbeidsdag', 'Kort grunn uten å klage', 'Takk for tiden'],
      model: 'Hei Tor,\n\nJeg sier med dette opp stillingen min som kioskmedarbeider.\nSiste arbeidsdag blir 30. april, i tråd med oppsigelsestiden på én måned.\nJeg slutter fordi jeg vil bruke mer tid på skolen dette året.\nTusen takk for et fint år – jeg har lært mye om service og om å ta ansvar.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-w-attest', lvl: 4, title: 'E-post: Be om attest',
      task: 'Du jobbet som aktivitetsleder på en sommerleir i fjor. Skriv en e-post til lederen, Jørgen, og be om en attest du kan legge ved neste søknad.',
      skeleton: 'Hei [navn],\n\n[Minn om hvem du er og hva du gjorde.]\nJeg skal søke [hva], og jeg lurer på om du kan skrive en attest til meg.\n[Si hva den gjerne kan inneholde.]\n\nTakk på forhånd!\n\nMed vennlig hilsen\n[Navn]',
      min: 40, max: 120,
      checks: [
        startHei,
        { re: 'attest', f: 'i', ok: 'Du spør om attest.', bad: 'Bruk ordet «attest» så det er tydelig hva du ber om.' },
        { re: 'jobbet|var|sommer', f: 'i', ok: 'Du minner om hvem du er.', bad: 'Minn kort om når og hvor du jobbet.' },
        { re: 'takk', f: 'i', ok: 'Du takker.', bad: 'Takk på forhånd.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Minner om hvem jeg er', 'Tydelig forespørsel', 'Sier hva attesten skal brukes til', 'Høflig'],
      model: 'Hei Jørgen,\n\nJeg jobbet som aktivitetsleder på Sommerleiren på Sjøstrand i juli i fjor.\nJeg skal søke på en ny sommerjobb med barn, og jeg lurer på om du kan skrive en attest til meg.\nDen kan gjerne si noe om hvilke oppgaver jeg hadde, og hvordan jeg fungerte med barna.\n\nTakk på forhånd!\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-w-klage', lvl: 4, title: 'Svar på klage fra en kunde',
      task: 'Du jobber i kundeservice i en nettbutikk for sportsutstyr. Kunden Erik skriver at han fikk feil størrelse på et par fotballsko. Skriv et høflig svar: beklag, forklar hva som skjer nå, og avslutt vennlig.',
      skeleton: 'Hei [navn],\n\nTakk for at du tok kontakt, og beklager [hva].\n[Hva skjer nå: bytte, retur, frakt.]\n[Hva kunden må gjøre.]\n\nMed vennlig hilsen\n[Navn]\n[Bedrift] kundeservice',
      min: 50, max: 140,
      checks: [
        startHei,
        { re: 'beklager', f: 'i', ok: 'Du beklager.', bad: 'Start med å beklage feilen.' },
        { re: 'bytte|retur|sende|send', f: 'i', ok: 'Du forklarer løsningen.', bad: 'Forklar konkret hva som skjer nå, for eksempel bytte eller retur.' },
        { re: 'gratis|dekker|kostnadsfri|betaler', f: 'i', lvl: 'tips', ok: 'Du sier hvem som betaler frakten.', bad: 'Tips: Si at kunden ikke trenger å betale for returen når det er butikkens feil.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Takker og beklager', 'Konkret løsning', 'Tydelig hva kunden må gjøre', 'Vennlig tone, ingen bortforklaringer'],
      model: 'Hei Erik,\n\nTakk for at du tok kontakt, og beklager at du fikk feil størrelse.\nVi sender deg et par i størrelse 43 i dag. Du kan returnere de gale skoene med returlappen som ligger i esken. Returen er gratis.\nSi gjerne fra hvis det er noe mer vi kan hjelpe deg med.\n\nMed vennlig hilsen\nJonas\nSportsnett kundeservice'
    },
    {
      id: 'no-w-ny-kollega', lvl: 4, title: 'Presenter deg for nye kollegaer',
      task: 'Du har fått jobb på en bilvask, og sjefen ber deg presentere deg i gruppechatten for de ansatte. Skriv en kort og vennlig presentasjon.',
      skeleton: 'Hei alle sammen!\n\nJeg heter [navn] og begynner å jobbe her fra [dato].\n[Litt om deg: skole, interesser.]\n[Når du skal jobbe.]\n[Si at du gleder deg / ber om hjelp.]\n\n[Navn]',
      min: 30, max: 90,
      checks: [
        { re: 'jeg heter', f: 'i', ok: 'Du sier hva du heter.', bad: 'Si hva du heter.' },
        { re: 'begynner|starter|ny', f: 'i', ok: 'Du sier at du er ny.', bad: 'Si når du begynner.' },
        { re: 'gleder|ser fram|ser frem', f: 'i', ok: 'Du viser at du gleder deg.', bad: 'Avslutt positivt, for eksempel at du gleder deg til å bli kjent.' }
      ],
      criteria: ['Navn og når jeg begynner', 'Litt om meg selv', 'Positiv avslutning', 'Kort – folk leser på mobil'],
      model: 'Hei alle sammen!\n\nJeg heter Jonas og begynner å jobbe her fra lørdag. Jeg er 16 år og går første året på Nydalen videregående. På fritiden spiller jeg fotball.\nJeg skal for det meste jobbe lørdager. Jeg gleder meg til å bli kjent med dere, og jeg spør nok mye de første ukene!\n\nJonas'
    },
    {
      id: 'no-s-apen', lvl: 4, title: 'Åpen søknad: innledning',
      task: 'Du vil gjerne jobbe i en sykkelbutikk, men de har ikke lyst ut noen stilling. Skriv innledningen til en åpen søknad: hvorfor du skriver, hva slags jobb du ønsker, og hvorfor akkurat denne butikken.',
      skeleton: 'Jeg skriver til dere fordi [grunn].\nJeg ønsker [type jobb] og kan jobbe [når].\nJeg har lyst til å jobbe hos dere fordi [noe som passer denne butikken].',
      min: 40, max: 110,
      checks: [
        { re: 'åpen søknad|ikke (har )?lyst ut|ikke utlyst|skriver til dere', f: 'i', ok: 'Det er tydelig at dette er en åpen søknad.', bad: 'Gjør det tydelig at du skriver uten at stillingen er lyst ut.' },
        { re: 'deltid|helg|sommer|ettermiddag|ekstrahjelp', f: 'i', ok: 'Du sier hva slags jobb du ønsker.', bad: 'Si hva slags jobb du ønsker og når du kan jobbe.' },
        { re: 'fordi|ettersom|siden', f: 'i', ok: 'Du begrunner.', bad: 'Gi en grunn til at du vil jobbe akkurat der.' }
      ],
      criteria: ['Tydelig at det er en åpen søknad', 'Hva slags jobb og når', 'En grunn som passer akkurat denne butikken'],
      model: 'Jeg skriver til dere fordi jeg gjerne vil jobbe hos Sykkelverkstedet på Grünerløkka, selv om dere ikke har lyst ut noen stilling nå. Jeg ønsker en deltidsjobb i helgene eller som ekstrahjelp i vårsesongen. Jeg har skrudd på min egen sykkel i flere år og liker at dere både selger og reparerer.'
    },
    {
      id: 'no-s-hvorfor', lvl: 4, title: 'Søknadsdel: Hvorfor akkurat deg?',
      task: 'Du søker sommerjobb i en matbutikk. Skriv ett avsnitt som svarer på spørsmålet «Hvorfor skal vi ansette akkurat deg?». Bruk to konkrete eksempler, ikke bare fine ord.',
      skeleton: 'Jeg tror jeg vil passe godt i jobben fordi [egenskap].\nFor eksempel [konkret eksempel 1].\nI tillegg [egenskap 2], og [konkret eksempel 2].',
      min: 40, max: 120,
      checks: [
        { re: 'for eksempel|blant annet|da jeg|når jeg', f: 'i', ok: 'Du gir eksempler.', bad: 'Gi konkrete eksempler: «For eksempel …».' },
        { re: 'fordi|derfor|ettersom', f: 'i', ok: 'Du begrunner.', bad: 'Begrunn hvorfor egenskapene passer i jobben.' },
        { re: 'beste|perfekt|helt sikkert den', f: 'i', neg: true, ok: '', bad: 'Unngå store ord som «den beste» eller «perfekt». Konkrete eksempler overbeviser mer.' }
      ],
      criteria: ['To konkrete eksempler', 'Egenskapene passer til jobben', 'Ærlig og nøktern, ikke overselgende'],
      model: 'Jeg tror jeg vil passe godt i jobben fordi jeg er stabil og liker å ha noe å gjøre. For eksempel har jeg levert aviser hver lørdag morgen i to år uten å gå glipp av en eneste runde. I tillegg er jeg vant til å jobbe med folk, og som hjelpetrener har jeg lært å være tålmodig og tydelig.'
    },
    {
      id: 'no-w-lonn', lvl: 4, title: 'E-post: Spør om lønn og vakter',
      task: 'Du har fått tilbud om sommerjobb på et gartneri, men vet ikke hva lønnen er eller hvilke dager du skal jobbe. Skriv en e-post til lederen, Ingrid. Takk for tilbudet og still spørsmålene høflig.',
      skeleton: 'Hei [navn],\n\nTusen takk for tilbudet om [jobb]. [Si at du gjerne tar jobben.]\nFør jeg skriver under, lurer jeg på [spørsmål 1] og [spørsmål 2].\n\nMed vennlig hilsen\n[Navn]',
      min: 40, max: 110,
      checks: [
        startHei,
        { re: 'takk', f: 'i', ok: 'Du takker for tilbudet.', bad: 'Start med å takke for tilbudet.' },
        { re: 'lønn|timelønn|betalt', f: 'i', ok: 'Du spør om lønn.', bad: 'Spør om lønn – det er helt vanlig å gjøre.' },
        { re: 'vakt|dager|arbeidstid|timer', f: 'i', ok: 'Du spør om arbeidstid.', bad: 'Spør om hvilke dager eller vakter du skal jobbe.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Takk for tilbudet', 'Viser at jeg vil ha jobben', 'Konkrete spørsmål', 'Saklig tone'],
      model: 'Hei Ingrid,\n\nTusen takk for tilbudet om sommerjobb på gartneriet. Jeg tar gjerne jobben.\nFør jeg skriver under på kontrakten, lurer jeg på hva timelønnen er, og hvilke dager jeg skal jobbe i juli. Jeg gleder meg!\n\nMed vennlig hilsen\nJonas Berg'
    },

    // ---------- Nivå 4: hele søknader ----------
    {
      id: 'no-full-kino', lvl: 4, full: true, title: 'Hel søknad: Kinovert',
      task: 'Annonse: «Byens kino søker kinoverter (fra 16 år) til kvelds- og helgevakter. Du selger billetter og snacks, sjekker billetter og rydder salen. Vi ser etter deg som er blid, presis og tåler travle kvelder.» Skriv en hel søknad.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på stilling som kinovert\n\nHei,\n\n[Innledning: stilling, hvor du så den, hvorfor]\n\n[Om deg: egenskaper + eksempel]\n\n[Erfaring: service eller ansvar]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'kinovert', f: 'i', ok: 'Du nevner stillingen.', bad: 'Si hvilken stilling du søker på.' },
        { re: 'kveld|helg', f: 'i', ok: 'Du svarer på arbeidstiden.', bad: 'Annonsen nevner kvelds- og helgevakter. Si at du kan jobbe da.' },
        { re: 'presis|blid|travel|travle', f: 'i', ok: 'Du svarer på det de ser etter.', bad: 'Bruk det annonsen ser etter (blid, presis, tåler travle kvelder) og vis det med eksempler.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Hele skjelettet er med', 'Svarer på det annonsen ber om', 'Konkrete eksempler', 'Under én side'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 3. mars 2027\n\nSøknad på stilling som kinovert\n\nHei,\n\nJeg søker på stillingen som kinovert, som jeg så på nettsiden deres. Jeg går ofte på kino selv og synes det virker gøy å jobbe der folk kommer for å kose seg.\n\nJeg er 16 år og går første året på Nydalen videregående skole. Jeg er blid og presis, og jeg liker å ha det travelt. For eksempel har jeg ikke kommet for sent til en eneste kamp eller trening på to år.\n\nJeg har stått i kiosken på mange dugnader i fotballklubben. Der solgte jeg mat og tok imot betaling når det var lange køer.\n\nJeg kan jobbe kvelder i ukedagene og i helgene. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-full-svommehall', lvl: 4, full: true, title: 'Hel søknad: Billettluke i svømmehallen',
      task: 'Annonse: «Kommunen søker ungdom til billettluka og kiosken i svømmehallen i helgene. Du tar imot gjester, selger billetter og holder det ryddig. Vi ser etter deg som er serviceinnstilt og pålitelig.» Skriv en hel søknad.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på helgejobb i svømmehallen\n\nHei,\n\n[Innledning]\n\n[Om deg + eksempel på at du er pålitelig]\n\n[Erfaring med service, penger eller ansvar]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'svømmehall', f: 'i', ok: 'Du nevner arbeidsstedet.', bad: 'Si hvor du søker jobb.' },
        { re: 'helg', f: 'i', ok: 'Du nevner helgene.', bad: 'Si at du kan jobbe i helgene.' },
        { re: 'pålitelig|ansvar', f: 'i', ok: 'Du viser at du er pålitelig.', bad: 'Vis med et eksempel at du er pålitelig.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Hele skjelettet er med', 'Eksempel på pålitelighet', 'Service kommer fram', 'Positiv og ærlig'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 10. januar 2027\n\nSøknad på helgejobb i svømmehallen\n\nHei,\n\nJeg søker på helgejobben i billettluka og kiosken i svømmehallen, som jeg så på kommunens nettside. Jeg trener selv i hallen to ganger i uka og kjenner stedet godt.\n\nJeg er 16 år og går på studiespesialisering ved Nydalen videregående skole. Jeg er pålitelig og liker å møte folk. For eksempel har jeg hatt ansvar for nøklene til garderoben på fotballaget i et år.\n\nJeg har stått i kiosken på dugnader og vet hvordan man holder orden på penger og varer når det er travelt.\n\nJeg kan jobbe alle helger, også i ferier. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-full-lager', lvl: 4, full: true, title: 'Hel søknad: Sommerjobb på lager',
      task: 'Annonse: «Vi søker sommervikarer (fra 16 år) til lageret vårt i juli. Du plukker og pakker ordrer og holder lageret ryddig. Vi ser etter deg som er nøyaktig, i god form og liker å jobbe i team.» Skriv en hel søknad.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på sommerjobb på lager\n\nHei,\n\n[Innledning]\n\n[Om deg: nøyaktig, i god form, lagspiller + eksempler]\n\n[Erfaring]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'lager', f: 'i', ok: 'Du nevner lageret.', bad: 'Si hvilken jobb du søker på.' },
        { re: 'nøyaktig', f: 'i', ok: 'Du svarer på «nøyaktig».', bad: 'Annonsen ser etter noen som er nøyaktig. Vis det med et eksempel.' },
        { re: 'team|lag|sammen|samarbeid', f: 'i', ok: 'Du viser at du kan samarbeide.', bad: 'Vis at du liker å jobbe sammen med andre.' },
        { re: 'juli', f: 'i', ok: 'Du nevner juli.', bad: 'Si at du kan jobbe i juli (liten bokstav).' },
        hilsen, ikkeKomma
      ],
      criteria: ['Hele skjelettet er med', 'Svarer på alle tre egenskapene', 'Konkrete eksempler', 'Riktig måned med liten bokstav'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 20. mars 2027\n\nSøknad på sommerjobb på lager\n\nHei,\n\nJeg søker på jobben som sommervikar på lageret deres i juli, som jeg så på finn.no. Jeg liker praktisk arbeid og vil gjerne prøve meg i en ekte jobb i sommer.\n\nJeg er 16 år og går første året på videregående. Jeg er nøyaktig, for eksempel er det jeg som har ansvaret for å telle opp utstyret etter treningene på fotballaget. Jeg trener fire ganger i uka og er i god form.\n\nFotball har lært meg å jobbe i lag og å gjøre min del selv når det er slitsomt.\n\nJeg kan jobbe hele juli. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-full-leksehjelp', lvl: 4, full: true, title: 'Hel søknad: Leksehjelper',
      task: 'Annonse: «Barneskolen søker leksehjelpere til leksehjelpen for 5.–7. trinn, to ettermiddager i uka. Du hjelper elever med lekser i matte, norsk og engelsk. Vi ser etter deg som er tålmodig og flink til å forklare.» Skriv en hel søknad.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på stilling som leksehjelper\n\nHei,\n\n[Innledning]\n\n[Om deg: tålmodig, flink til å forklare + eksempel]\n\n[Erfaring med barn eller med å hjelpe andre]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'leksehjelp', f: 'i', ok: 'Du nevner stillingen.', bad: 'Si hvilken stilling du søker på.' },
        { re: 'tålmodig|forklare|forklarer', f: 'i', ok: 'Du svarer på det de ser etter.', bad: 'Vis at du er tålmodig og flink til å forklare.' },
        { re: 'matte|matematikk|norsk|engelsk', f: 'i', ok: 'Du nevner fagene.', bad: 'Nevn hvilke fag du kan hjelpe med (fag skrives med liten bokstav).' },
        hilsen, ikkeKomma
      ],
      criteria: ['Hele skjelettet er med', 'Eksempel på at jeg forklarer godt', 'Fagene er nevnt', 'Riktige ettermiddager'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 15. august 2027\n\nSøknad på stilling som leksehjelper\n\nHei,\n\nJeg søker på stillingen som leksehjelper for 5.–7. trinn, som jeg så på skolens nettside. Jeg gikk selv på skolen og husker hvor mye det hjalp å få litt ekstra forklaring.\n\nJeg er 16 år og går på studiespesialisering. Jeg er tålmodig og liker å forklare ting på flere måter. For eksempel hjelper jeg lillesøsteren min med matte nesten hver uke.\n\nSom hjelpetrener for et lag med tiåringer har jeg lært å gi korte og tydelige beskjeder og å passe på at alle henger med.\n\nJeg kan jobbe mandag og onsdag ettermiddag. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    },
    {
      id: 'no-full-fotballskole', lvl: 4, full: true, title: 'Hel søknad: Instruktør på fotballskole',
      task: 'Annonse: «Idrettslaget søker instruktører (15–19 år) til fotballskolen for barn 6–12 år i første uke av sommerferien. Du leder øvelser og aktiviteter sammen med en voksen trener. Vi ser etter deg som er positiv, ansvarlig og glad i fotball.» Skriv en hel søknad.',
      skeleton: '[Ditt navn]\n[Telefon], [e-post]\n\n[Sted], [dato]\n\nSøknad på stilling som instruktør på fotballskolen\n\nHei,\n\n[Innledning]\n\n[Om deg + eksempel]\n\n[Erfaring med fotball og barn]\n\n[Når du kan jobbe + intervju]\n\nMed vennlig hilsen\n[navn]',
      min: 120, max: 350,
      checks: [
        { re: 'instruktør', f: 'i', ok: 'Du nevner stillingen.', bad: 'Si hvilken stilling du søker på.' },
        { re: 'barn', f: 'i', ok: 'Du skriver om barna.', bad: 'Skriv om hvorfor du passer til å jobbe med barn.' },
        { re: 'ansvar', f: 'i', ok: 'Du viser ansvar.', bad: 'Vis med et eksempel at du er ansvarlig.' },
        { re: 'fotball skole', f: 'i', neg: true, ok: '', bad: '«fotballskolen» skrives i ett ord.' },
        hilsen, ikkeKomma
      ],
      criteria: ['Hele skjelettet er med', 'Erfaring med fotball og barn', 'Ansvar og positivitet vises med eksempler', 'Riktig uke'],
      model: 'Jonas Berg\n412 34 567, jonas.berg@epost.no\n\nOslo, 1. april 2027\n\nSøknad på stilling som instruktør på fotballskolen\n\nHei,\n\nJeg søker på stillingen som instruktør på fotballskolen i sommer, som jeg så på klubbens nettside. Jeg var selv på fotballskolen i mange år, liker å være sammen med barn og vil gjerne gi noe tilbake.\n\nJeg er 16 år og spiller på klubbens G17-lag. Jeg er positiv og tar ansvar. For eksempel har jeg ansvaret for å rigge til og rydde utstyr etter treningene på laget mitt.\n\nDet siste året har jeg vært hjelpetrener for et lag med åtteåringer. Der har jeg lært å lage morsomme øvelser og å passe på at alle får være med.\n\nJeg kan jobbe hele første uke av sommerferien. Jeg kommer gjerne på intervju.\n\nMed vennlig hilsen\nJonas Berg'
    }
  );

  // Flere ord til den automatiske sjekken av fritekst
  L.autocheck.split.push(['høst ferie', 'høstferie'], ['høst ferien', 'høstferien'], ['vinter ferie', 'vinterferie'], ['vinter ferien', 'vinterferien'],
    ['påske ferie', 'påskeferie'], ['påske ferien', 'påskeferien'], ['jule ferien', 'juleferien'], ['fotball kamp', 'fotballkamp'],
    ['fotball skole', 'fotballskole'], ['fotball skolen', 'fotballskolen'], ['kino vert', 'kinovert'], ['lager medarbeider', 'lagermedarbeider'],
    ['søknads frist', 'søknadsfrist'], ['deltids stilling', 'deltidsstilling'], ['helge vakt', 'helgevakt'], ['ekstra vakt', 'ekstravakt']);
  Object.assign(L.autocheck.misspell, {
    stilingen: 'stillingen', referranse: 'referanse', forige: 'forrige', utplasering: 'utplassering', kvalifikasjonar: 'kvalifikasjoner',
    pålitelg: 'pålitelig', ansvarlg: 'ansvarlig', spørt: 'spurt', gjore: 'gjorde', selgt: 'solgt', sedd: 'sett'
  });
})();
