/* Engelsk øvelsesbank. Oppgavetekster og forklaringer er på norsk, svarene på engelsk.
   Legg til nye oppgaver NEDERST i hver liste. Se ovelser-no.js for forklaring av feltene. */
window.OVELSER_EN = {
  lang: 'en',
  label: 'English',
  catOrder: ['capital letters', 'your/you\'re', 'to/too/two', 'their/there/they\'re', 'its/it\'s', 'then/than',
    'spelling', 'norwegianisms', 'grammar', 'punctuation'],
  rules: {
    'capital letters': 'På engelsk får I (jeg) alltid stor bokstav. Dager, måneder, høytider, språk og nasjonaliteter får også stor bokstav: Monday, May, Christmas, Norwegian, English.',
    'your/you\'re': 'Your = din/ditt/dine (your phone). You\'re = you are (you\'re right). Tips: Kan du si «you are», skal det være you\'re.',
    'to/too/two': 'To = til / å (go to school, to play). Too = også eller for mye (me too, too late). Two = tallet 2.',
    'their/there/they\'re': 'Their = deres (their car). There = der / det finnes (over there, there is). They\'re = they are.',
    'its/it\'s': 'It\'s = it is / it has. Its = dens/dets (the dog wagged its tail). Tips: Kan du si «it is», skal det være apostrof.',
    'then/than': 'Than brukes i sammenligninger: older than me. Then betyr da/deretter: first we eat, then we go.',
    'spelling': 'Disse ordene skrives ofte feil. Legg merke til doble bokstaver (necessary, tomorrow, address) og ie/ei (believe, receive – «i before e, except after c»).',
    'norwegianisms': 'Direkte oversettelse fra norsk blir ofte feil: «16 years» → «16 years old», «since two years» → «for two years», «lend» (låne bort) vs «borrow» (låne av noen).',
    'grammar': 'Husk samsvar mellom subjekt og verb: he/she/it has, does, is – I/we/they have, do, are. I fortid: went, was/were.',
    'punctuation': 'På engelsk settes ofte komma etter hilsen i e-post (Dear Ms Smith,) og etter avslutningshilsen (Kind regards,).'
  },

  words: [
    // capital letters
    { t: 'c', c: 'capital letters', q: 'We have a test on ___.', o: ['monday', 'Monday'], a: 'Monday' },
    { t: 'c', c: 'capital letters', q: 'My birthday is in ___.', o: ['may', 'May'], a: 'May' },
    { t: 'c', c: 'capital letters', q: 'I speak ___ and English.', o: ['norwegian', 'Norwegian'], a: 'Norwegian' },
    { t: 'c', c: 'capital letters', q: 'Yesterday ___ played football.', o: ['i', 'I'], a: 'I' },
    { t: 'c', c: 'capital letters', q: 'She is ___.', o: ['swedish', 'Swedish'], a: 'Swedish' },
    { t: 'c', c: 'capital letters', q: 'We celebrate ___ in December.', o: ['christmas', 'Christmas'], a: 'Christmas' },
    { t: 'c', c: 'capital letters', q: 'Can we meet on ___?', o: ['friday', 'Friday'], a: 'Friday' },
    { t: 'c', c: 'capital letters', q: 'My best friend and ___ went to Bergen.', o: ['i', 'I'], a: 'I' },
    { t: 'c', c: 'capital letters', q: 'The summer holiday starts in ___.', o: ['june', 'June'], a: 'June' },

    // your/you're
    { t: 'c', c: 'your/you\'re', q: '___ welcome!', o: ['Your', 'You\'re'], a: 'You\'re' },
    { t: 'c', c: 'your/you\'re', q: 'Is this ___ jacket?', o: ['your', 'you\'re'], a: 'your' },
    { t: 'c', c: 'your/you\'re', q: 'I think ___ right.', o: ['your', 'you\'re'], a: 'you\'re' },
    { t: 'c', c: 'your/you\'re', q: 'Thank you for ___ email.', o: ['your', 'you\'re'], a: 'your' },
    { t: 'c', c: 'your/you\'re', q: 'Let me know if ___ interested.', o: ['your', 'you\'re'], a: 'you\'re' },
    { t: 'c', c: 'your/you\'re', q: 'What is ___ phone number?', o: ['your', 'you\'re'], a: 'your' },
    { t: 'c', c: 'your/you\'re', q: 'I look forward to ___ reply.', o: ['your', 'you\'re'], a: 'your' },

    // to/too/two
    { t: 'c', c: 'to/too/two', q: 'I want ___ go home.', o: ['to', 'too', 'two'], a: 'to' },
    { t: 'c', c: 'to/too/two', q: 'This is ___ expensive.', o: ['to', 'too', 'two'], a: 'too' },
    { t: 'c', c: 'to/too/two', q: 'I have ___ brothers.', o: ['to', 'too', 'two'], a: 'two' },
    { t: 'c', c: 'to/too/two', q: 'Can I come ___?', o: ['to', 'too', 'two'], a: 'too' },
    { t: 'c', c: 'to/too/two', q: 'We walked ___ school.', o: ['to', 'too', 'two'], a: 'to' },
    { t: 'c', c: 'to/too/two', q: 'It is ___ late to start now.', o: ['to', 'too', 'two'], a: 'too' },
    { t: 'c', c: 'to/too/two', q: 'I would like ___ apply for the job.', o: ['to', 'too', 'two'], a: 'to' },

    // their/there/they're
    { t: 'c', c: 'their/there/they\'re', q: '___ going to the cinema tonight.', o: ['Their', 'There', 'They\'re'], a: 'They\'re' },
    { t: 'c', c: 'their/there/they\'re', q: 'Put the bag over ___.', o: ['their', 'there', 'they\'re'], a: 'there' },
    { t: 'c', c: 'their/there/they\'re', q: 'The students forgot ___ books.', o: ['their', 'there', 'they\'re'], a: 'their' },
    { t: 'c', c: 'their/there/they\'re', q: '___ is a problem with my phone.', o: ['Their', 'There', 'They\'re'], a: 'There' },
    { t: 'c', c: 'their/there/they\'re', q: 'I think ___ late again.', o: ['their', 'there', 'they\'re'], a: 'they\'re' },
    { t: 'c', c: 'their/there/they\'re', q: 'My neighbours sold ___ car.', o: ['their', 'there', 'they\'re'], a: 'their' },
    { t: 'c', c: 'their/there/they\'re', q: 'Is ___ a bus stop near here?', o: ['their', 'there', 'they\'re'], a: 'there' },

    // its/it's
    { t: 'c', c: 'its/it\'s', q: '___ raining again.', o: ['Its', 'It\'s'], a: 'It\'s' },
    { t: 'c', c: 'its/it\'s', q: 'The dog wagged ___ tail.', o: ['its', 'it\'s'], a: 'its' },
    { t: 'c', c: 'its/it\'s', q: '___ been a long day.', o: ['Its', 'It\'s'], a: 'It\'s' },
    { t: 'c', c: 'its/it\'s', q: 'The company changed ___ logo.', o: ['its', 'it\'s'], a: 'its' },
    { t: 'c', c: 'its/it\'s', q: 'I think ___ a good idea.', o: ['its', 'it\'s'], a: 'it\'s' },

    // then/than
    { t: 'c', c: 'then/than', q: 'She is older ___ me.', o: ['then', 'than'], a: 'than' },
    { t: 'c', c: 'then/than', q: 'First we eat, ___ we go.', o: ['then', 'than'], a: 'then' },
    { t: 'c', c: 'then/than', q: 'I would rather walk ___ take the bus.', o: ['then', 'than'], a: 'than' },
    { t: 'c', c: 'then/than', q: 'We met at six and ___ went to the match.', o: ['then', 'than'], a: 'then' },
    { t: 'c', c: 'then/than', q: 'This job pays more ___ my old one.', o: ['then', 'than'], a: 'than' },

    // spelling
    { t: 't', c: 'spelling', q: 'I will ___ be there.', h: 'defin_tely', a: 'definitely' },
    { t: 't', c: 'spelling', q: 'Did you ___ my email?', h: 'rec__ve', a: 'receive' },
    { t: 't', c: 'spelling', q: 'Please keep them ___.', h: 'sep_rate', a: 'separate' },
    { t: 't', c: 'spelling', q: 'Is it ___ to bring ID?', h: 'nece_ary', a: 'necessary' },
    { t: 't', c: 'spelling', q: 'At the ___ of the year we moved.', h: 'begi_ing', a: 'beginning' },
    { t: 't', c: 'spelling', q: 'I will wait ___ you come.', h: 'unti_', a: 'until' },
    { t: 't', c: 'spelling', q: '___ one do you want?', h: 'Wh_ch', a: 'Which' },
    { t: 't', c: 'spelling', q: 'He is my best ___.', h: 'fr__nd', a: 'friend' },
    { t: 't', c: 'spelling', q: 'See you ___!', h: 'tomo_ow', a: 'tomorrow' },
    { t: 't', c: 'spelling', q: 'I have some work ___.', h: 'exper_ence', a: 'experience' },
    { t: 't', c: 'spelling', q: 'I am very ___ in this job.', h: 'intere_ted', a: 'interested' },
    { t: 't', c: 'spelling', q: 'Thank you for this ___.', h: 'o_ortunity', a: 'opportunity' },
    { t: 't', c: 'spelling', q: 'What is your email ___?', h: 'a_ress', a: 'address' },
    { t: 't', c: 'spelling', q: 'Are you ___ on Saturday?', h: 'avail_ble', a: 'available' },
    { t: 't', c: 'spelling', q: 'Yours ___,', h: 'sincere_y', a: 'sincerely' },
    { t: 't', c: 'spelling', q: 'I am ___ for your help.', h: 'gratef_l', a: 'grateful' },
    { t: 't', c: 'spelling', q: 'I ___ you are right.', h: 'bel__ve', a: 'believe' },
    { t: 't', c: 'spelling', q: 'She is my new ___.', h: 'co_eague', a: 'colleague' },
    { t: 't', c: 'spelling', q: 'Please see the ___ CV.', h: 'a_ached', a: 'attached' },
    { t: 't', c: 'spelling', q: 'I can ___ this book.', h: 'reco_end', a: 'recommend' },
    { t: 't', c: 'spelling', q: 'I want to be ___.', h: 'succe_ful', a: 'successful' },
    { t: 't', c: 'spelling', q: '___, I passed the test!', h: 'Final_y', a: 'Finally' },
    { t: 't', c: 'spelling', q: 'I am ___ sorry.', h: 'rea_y', a: 'really' },
    { t: 't', c: 'spelling', q: 'Thank you for ___ me.', h: 'wri_ing to', a: 'writing to' }
  ],

  fix: [
    { c: 'capital letters', q: 'i like to play football on saturdays.', a: 'I like to play football on Saturdays.' },
    { c: 'their/there/they\'re', q: 'Their is a new shop in town.', a: 'There is a new shop in town.' },
    { c: 'your/you\'re', q: 'Your welcome!', a: 'You\'re welcome!' },
    { c: 'then/than', q: 'She is taller then her brother.', a: 'She is taller than her brother.' },
    { c: 'norwegianisms', q: 'I am 16 years.', a: 'I am 16 years old.' },
    { c: 'grammar', q: 'I look forward to hear from you.', a: 'I look forward to hearing from you.' },
    { c: 'its/it\'s', q: 'Its to cold to go outside.', a: 'It\'s too cold to go outside.' },
    { c: 'spelling', q: 'I have alot of homework.', a: 'I have a lot of homework.' },
    { c: 'capital letters', q: 'We speak norwegian at home.', a: 'We speak Norwegian at home.' },
    { c: 'spelling', q: 'I definately want to come.', a: 'I definitely want to come.' },
    { c: 'their/there/they\'re', q: 'They forgot there tickets.', a: 'They forgot their tickets.' },
    { c: 'grammar', q: 'I should of called you.', a: 'I should have called you.' },
    { c: 'norwegianisms', q: 'Can you give me some informations?', a: 'Can you give me some information?' },
    { c: 'spelling', q: 'I am very intrested in the job.', a: 'I am very interested in the job.' },
    { c: 'norwegianisms', q: 'Thank you for your advices.', a: 'Thank you for your advice.' },
    { c: 'grammar', q: 'He dont like football.', a: 'He doesn\'t like football.' },
    { c: 'grammar', q: 'My friend and me went to the cinema.', a: 'My friend and I went to the cinema.' },
    { c: 'norwegianisms', q: 'I have worked here since two years.', a: 'I have worked here for two years.' },
    { c: 'grammar', q: 'I am looking forward to meet you.', a: 'I am looking forward to meeting you.' },
    { c: 'grammar', q: 'Yesterday I go to school by bus.', a: 'Yesterday I went to school by bus.' },
    { c: 'grammar', q: 'She have a new phone.', a: 'She has a new phone.' },
    { c: 'its/it\'s', q: 'The company changed it\'s name.', a: 'The company changed its name.' },
    { c: 'spelling', q: 'I will recieve the package tomorow.', a: 'I will receive the package tomorrow.' },
    { c: 'grammar', q: 'We was late for the meeting.', a: 'We were late for the meeting.' },
    { c: 'spelling', q: 'Please find attatched my CV.', a: 'Please find attached my CV.' },
    { c: 'grammar', q: 'He is more older than me.', a: 'He is older than me.' },
    { c: 'norwegianisms', q: 'I have been in London last summer.', a: 'I was in London last summer.' },
    { c: 'norwegianisms', q: 'Can I lend your pen?', a: 'Can I borrow your pen?' },
    { c: 'norwegianisms', q: 'I am good in math.', a: ['I am good at math.', 'I am good at maths.'] },
    { c: 'to/too/two', q: 'I want to come to.', a: 'I want to come too.' },
    { c: 'punctuation', q: 'Dear Mr Brown I am writing to ask about a summer job.', a: 'Dear Mr Brown, I am writing to ask about a summer job.' }
  ],

  phrases: [
    { q: 'Vanlig, høflig avslutning i jobb-e-post (2 ord, med komma)', a: ['Kind regards,', 'Best regards,'] },
    { q: 'Formell åpning når du ikke vet navnet på mottakeren', a: ['Dear Sir or Madam,'] },
    { q: 'Svar når noen sier «Thank you»', a: ['You\'re welcome!', 'You\'re welcome.'] },
    { q: 'Avslutt en søknad med at du venter på svar', a: ['I look forward to hearing from you.'] },
    { q: 'Si at CV-en din ligger ved e-posten', a: ['Please find my CV attached.', 'Please find attached my CV.'] },
    { q: 'Si at du søker stillingen som sales assistant', a: ['I am writing to apply for the position of sales assistant.'] },
    { q: 'Takk mottakeren for at de tok seg tid', a: ['Thank you for your time.'] },
    { q: 'Si at du gjerne kommer på intervju', a: ['I would be happy to attend an interview.'] },
    { q: 'Be høflig om mer informasjon', a: ['Could you please send me more information?'] },
    { q: 'Beklag at du svarer sent', a: ['Sorry for the late reply.'] },
    { q: 'Følg opp en e-post du ikke har fått svar på', a: ['I am following up on my previous email.'] },
    { q: 'Uformell avslutning før helgen', a: ['Have a nice weekend!', 'Have a great weekend!'] },
    { q: 'Si at du kan begynne med en gang', a: ['I can start immediately.'] },
    { q: 'Inviter mottakeren til å spørre om noe', a: ['Please let me know if you have any questions.'] },
    { q: 'Formell avslutning når du startet med «Dear Sir or Madam» (britisk)', a: ['Yours faithfully,'] },
    { q: 'Si at du er pålitelig og jobber hardt', a: ['I am reliable and hard-working.'] }
  ],

  writing: [
    {
      id: 'en-w-summerjob-start', lvl: 3, title: 'Email: asking about a summer job',
      task: 'Du skriver til Mr Brown, som er sjef på et hotell i Brighton, og spør om sommerjobb. Skriv hilsen og 2–3 setninger der du presenterer deg og sier hvorfor du skriver.',
      skeleton: 'Dear Mr Brown,\n\nMy name is [name] and I am [age] years old. I am a student at [school] in Norway.\nI am writing to ask whether [reason].',
      min: 25, max: 90,
      checks: [
        { re: '^\\s*Dear\\b', ok: 'Riktig formell hilsen.', bad: 'Start med «Dear Mr Brown,» – stor D.' },
        { re: '^[^\\n]+,\\s*\\n', ok: 'Komma etter hilsenen.', bad: 'Sett komma etter hilsenen: «Dear Mr Brown,».' },
        { re: 'my name is|I am [A-Z]', f: 'i', ok: 'Du presenterer deg.', bad: 'Presenter deg: «My name is …».' },
        { re: 'writing to|would like to', f: 'i', ok: 'Du forklarer hvorfor du skriver.', bad: 'Forklar hvorfor: «I am writing to ask …».' }
      ],
      criteria: ['Formell hilsen med komma', 'Kort presentasjon', 'Tydelig hvorfor jeg skriver', 'Høflig tone'],
      model: 'Dear Mr Brown,\n\nMy name is Jonas and I am 16 years old. I am a student at Nydalen Upper Secondary School in Oslo, Norway.\nI am writing to ask whether you need any extra staff at your hotel this summer.'
    },
    {
      id: 'en-w-summerjob-end', lvl: 3, title: 'Email: closing',
      task: 'Skriv avslutningen på e-posten til Mr Brown: takk for at han leser, si at CV-en ligger ved, at du gleder deg til svar, og avslutt med hilsen og navn.',
      skeleton: 'Thank you for [what].\nPlease find my CV attached.\nI look forward to hearing from you.\n\nKind regards,\n[Name]',
      min: 20, max: 70,
      checks: [
        { re: 'thank you', f: 'i', ok: 'Du takker.', bad: 'Takk for at han leser: «Thank you for your time.»' },
        { re: 'look forward to (hearing|meeting)', f: 'i', ok: 'Riktig: «look forward to hearing».', bad: 'Bruk «I look forward to hearing from you.» (hearing med -ing).' },
        { re: 'Kind regards|Best regards|Yours sincerely', ok: 'Riktig avslutningshilsen.', bad: 'Avslutt med «Kind regards,» eller «Yours sincerely,».' }
      ],
      criteria: ['Takk', 'Vedlegg nevnt', 'Riktig avslutning med komma', 'Navn under'],
      model: 'Thank you for taking the time to read my email. Please find my CV attached.\nI look forward to hearing from you.\n\nKind regards,\nJonas Berg'
    },
    {
      id: 'en-w-extension', lvl: 3, title: 'Email to your English teacher',
      task: 'Du har vært syk og trenger to dager ekstra på en innlevering i engelsk. Skriv en høflig e-post på engelsk til læreren din, Ms Larsen.',
      skeleton: 'Dear Ms Larsen,\n\n[Explain what happened.]\n[Ask politely: Would it be possible to …?]\n[Thank her.]\n\nKind regards,\n[Name]',
      min: 30, max: 100,
      checks: [
        { re: '^\\s*(Dear|Hi|Hello)\\b', ok: 'Du har en hilsen.', bad: 'Start med «Dear Ms Larsen,».' },
        { re: 'ill|sick', f: 'i', ok: 'Du forklarer hva som skjedde.', bad: 'Forklar at du har vært syk (ill/sick).' },
        { re: 'would it be possible|could I|may I', f: 'i', ok: 'Høflig forespørsel.', bad: 'Spør høflig: «Would it be possible to …?»' },
        { re: '\\?', ok: 'Du stiller et spørsmål.', bad: 'Formuler forespørselen som et spørsmål.' }
      ],
      criteria: ['Kort forklaring', 'Høflig spørsmål med would/could', 'Takk', 'Riktig hilsen og avslutning'],
      model: 'Dear Ms Larsen,\n\nI have been ill since Monday, so I have not been able to finish my English essay. Would it be possible to have two extra days and hand it in on Friday?\nThank you for understanding.\n\nKind regards,\nJonas Berg'
    },
    {
      id: 'en-w-thanks-interview', lvl: 3, title: 'Thank you after an interview',
      task: 'Du var på jobbintervju (på engelsk) hos en sportsbutikk i dag. Skriv en kort e-post til lederen, Ms Taylor, der du takker og sier at du fortsatt er interessert.',
      skeleton: 'Dear Ms Taylor,\n\nThank you for [what].\n[Something you liked.]\n[Say you are still interested.]\n\nKind regards,\n[Name]',
      min: 30, max: 90,
      checks: [
        { re: 'thank you', f: 'i', ok: 'Du takker.', bad: 'Takk for intervjuet.' },
        { re: 'interested', f: 'i', ok: 'Du sier at du er interessert.', bad: 'Si at du fortsatt er interessert: «I am still very interested in …».' },
        { re: 'regards|sincerely', f: 'i', ok: 'Riktig avslutning.', bad: 'Avslutt med «Kind regards,».' }
      ],
      criteria: ['Takk for samtalen', 'Én konkret ting', 'Fortsatt interessert', 'Kort'],
      model: 'Dear Ms Taylor,\n\nThank you for the interview today. I enjoyed hearing more about how your team helps customers find the right equipment.\nI am still very interested in the position and hope to hear from you soon.\n\nKind regards,\nJonas Berg'
    },
    {
      id: 'en-w-customer', lvl: 3, title: 'Reply to a customer',
      task: 'Du jobber i en sportsbutikk. En turist spør på e-post om åpningstidene på lørdag og om dere selger fotballsko. Svar høflig på engelsk.',
      skeleton: 'Dear [name],\n\nThank you for your email.\nOn Saturdays we are open from [time] to [time].\n[Answer about football boots.]\n\nBest regards,\n[Name]\n[Shop]',
      min: 30, max: 90,
      checks: [
        { re: 'thank you for your (email|message)', f: 'i', ok: 'Du takker for henvendelsen.', bad: 'Start svaret med «Thank you for your email.»' },
        { re: 'Saturday', ok: 'Saturday med stor S.', bad: 'Svar på åpningstidene på Saturday (stor S).' },
        { re: 'boots|shoes', f: 'i', ok: 'Du svarer på spørsmålet om sko.', bad: 'Husk å svare på spørsmålet om fotballsko (football boots).' }
      ],
      criteria: ['Svarer på begge spørsmålene', 'Høflig og serviceinnstilt', 'Tydelige tider', 'Navn og butikk under'],
      model: 'Dear Mr Jones,\n\nThank you for your email. On Saturdays we are open from 10 am to 6 pm.\nYes, we sell football boots for both children and adults, and we are happy to help you find the right size.\n\nBest regards,\nJonas\nSportshuset Storo'
    },

    {
      id: 'en-s-opening', lvl: 4, title: 'Cover letter 1: Opening',
      task: 'Du søker på en sommerjobb som «sales assistant» i en sportsbutikk i London. Skriv innledningen på engelsk: stilling, hvor du så den, og hvorfor du søker.',
      skeleton: 'I am writing to apply for the position of [job] at [company], which I saw advertised on [where].\nI am interested in this position because [reason].',
      min: 30, max: 90,
      checks: [
        { re: 'apply for the position|apply for the job|applying for', f: 'i', ok: 'Du sier hva du søker på.', bad: 'Start med «I am writing to apply for the position of …».' },
        { re: 'advertised|saw|website|online', f: 'i', ok: 'Du sier hvor du så stillingen.', bad: 'Si hvor du så stillingen: «which I saw advertised on …».' },
        { re: 'because|as I|since', f: 'i', ok: 'Du begrunner.', bad: 'Gi en grunn: «I am interested in this position because …».' }
      ],
      criteria: ['Stilling og bedrift', 'Hvor jeg så annonsen', 'Grunn som passer bedriften'],
      model: 'I am writing to apply for the position of sales assistant at City Sports in London, which I saw advertised on your website. I am interested in this position because I have played football for ten years and enjoy helping people find the right equipment.'
    },
    {
      id: 'en-s-aboutme', lvl: 4, title: 'Cover letter 2: About me',
      task: 'Skriv et avsnitt om deg selv på engelsk: skole, tre egenskaper og et konkret eksempel.',
      skeleton: 'I am [age] years old and a student at [school] in Norway.\nI would describe myself as [quality], [quality] and [quality]. For example, [example].',
      min: 35, max: 110,
      checks: [
        { re: 'years old', f: 'i', ok: '«years old» – riktig.', bad: 'Skriv alderen som «16 years old».' },
        { re: 'reliable|responsible|friendly|hard-working|hardworking|punctual|positive|helpful|organised|organized', f: 'i', ok: 'Du nevner relevante egenskaper.', bad: 'Nevn egenskaper som reliable, friendly, hard-working.' },
        { re: 'for example|for instance', f: 'i', ok: 'Du gir et eksempel.', bad: 'Gi et konkret eksempel: «For example, …».' }
      ],
      criteria: ['Alder og skole', 'Tre egenskaper', 'Konkret eksempel'],
      model: 'I am 16 years old and a student at Nydalen Upper Secondary School in Oslo. I would describe myself as reliable, friendly and hard-working. For example, I have not missed a single football practice in two years, and my coach trusts me to look after the equipment.'
    },
    {
      id: 'en-s-experience', lvl: 4, title: 'Cover letter 3: Experience',
      task: 'Skriv om relevant erfaring på engelsk: hva du gjorde, hva du lærte, og hvorfor det er nyttig i jobben.',
      skeleton: 'I have experience from [what], where I [what you did].\nThis taught me [what you learned].\nI believe this will be useful in this job because [link].',
      min: 35, max: 110,
      checks: [
        { re: 'experience|worked|volunteer|coach', f: 'i', ok: 'Du beskriver erfaring.', bad: 'Beskriv hva du har gjort før.' },
        { re: 'learn|taught', f: 'i', ok: 'Du sier hva du lærte.', bad: 'Si hva du lærte: «This taught me …» eller «I learned …».' },
        { re: 'useful|helpful|in this (job|role|position)', f: 'i', ok: 'Du kobler det til jobben.', bad: 'Koble erfaringen til jobben.' },
        { re: 'since \\d+ years|since (two|three|four|five) years', f: 'i', neg: true, ok: '', bad: '«since two years» er norsk-engelsk. Skriv «for two years».' }
      ],
      criteria: ['Konkret erfaring', 'Hva jeg lærte', 'Koblet til jobben'],
      model: 'I have experience from working in the kiosk at my football club, where I served customers and handled payments. This taught me to stay calm and friendly when it is busy. I believe this will be useful in a shop with many customers.'
    },
    {
      id: 'en-s-closing', lvl: 4, title: 'Cover letter 4: Closing',
      task: 'Skriv avslutningen på søknaden på engelsk: når du kan jobbe, at du gjerne kommer på intervju, og en høflig avslutning.',
      skeleton: 'I am available [when].\nI would be happy to attend an interview, and I look forward to hearing from you.\n\nYours sincerely,\n[Name]',
      min: 20, max: 70,
      checks: [
        { re: 'available|can start|can work', f: 'i', ok: 'Du sier når du kan jobbe.', bad: 'Si når du kan jobbe: «I am available from …».' },
        { re: 'interview', f: 'i', ok: 'Du nevner intervju.', bad: 'Si at du gjerne kommer på intervju.' },
        { re: 'look forward to hearing', f: 'i', ok: 'Riktig vending.', bad: 'Bruk «I look forward to hearing from you.»' },
        { re: 'Yours sincerely|Kind regards|Best regards', ok: 'Riktig avslutning.', bad: 'Avslutt med «Yours sincerely,» når du kjenner navnet.' }
      ],
      criteria: ['Når jeg kan jobbe', 'Intervju', 'Riktig avslutning'],
      model: 'I am available from 20 June to 15 August and can work weekends. I would be happy to attend an interview, and I look forward to hearing from you.\n\nYours sincerely,\nJonas Berg'
    },
    {
      id: 'en-full-shop', lvl: 4, full: true, title: 'Full cover letter: Sales assistant',
      task: 'Skriv en hel søknad (cover letter) på engelsk på sommerjobben som sales assistant i London. Bruk skjelettet.',
      skeleton: 'Dear [name],\n\n[Opening: position, where you saw it, why you apply.]\n\n[About you: school, qualities, example.]\n\n[Experience: what you did and learned.]\n\n[Closing: availability, interview.]\n\nYours sincerely,\n[Name]',
      min: 120, max: 350,
      checks: [
        { re: '^\\s*Dear\\b', ok: 'Riktig hilsen.', bad: 'Start med «Dear …,».' },
        { re: 'apply', f: 'i', ok: 'Du sier at du søker.', bad: 'Si tydelig hva du søker på.' },
        { re: 'for example|for instance', f: 'i', ok: 'Du gir eksempler.', bad: 'Gi minst ett konkret eksempel.' },
        { re: 'interview', f: 'i', ok: 'Du nevner intervju.', bad: 'Nevn intervju i avslutningen.' },
        { re: 'Yours sincerely|Kind regards|Best regards', ok: 'Riktig avslutning.', bad: 'Avslutt med «Yours sincerely,».' }
      ],
      criteria: ['Hele skjelettet er med', 'Én tanke per avsnitt', 'Konkrete eksempler', 'Ingen norsk-engelsk'],
      model: 'Dear Ms Taylor,\n\nI am writing to apply for the position of sales assistant at City Sports, which I saw advertised on your website. I am interested in this position because I have played football for ten years and enjoy helping people choose the right equipment.\n\nI am 16 years old and a student at Nydalen Upper Secondary School in Oslo, Norway. I would describe myself as reliable, friendly and hard-working. For example, my coach trusts me to look after the team\'s equipment.\n\nI have experience from working in the kiosk at my football club, where I served customers and handled payments. This taught me to stay calm and polite when it is busy.\n\nI am available from 20 June to 15 August. I would be happy to attend an interview, and I look forward to hearing from you.\n\nYours sincerely,\nJonas Berg'
    },
    {
      id: 'en-full-camp', lvl: 4, full: true, title: 'Full cover letter: Sports camp assistant',
      task: 'En engelsk sommerleir for barn søker «camp assistants» fra hele Europa. Skriv en hel søknad på engelsk. Vis at du er ansvarlig og liker å jobbe med barn.',
      skeleton: 'Dear Sir or Madam,\n\n[Opening]\n\n[Why you are good with children + example]\n\n[Experience]\n\n[Availability + interview]\n\nYours faithfully,\n[Name]',
      min: 120, max: 350,
      checks: [
        { re: 'children|kids', f: 'i', ok: 'Du skriver om barn.', bad: 'Skriv om hvorfor du passer med barn.' },
        { re: 'responsib|reliable|patient|safe', f: 'i', ok: 'Du viser at du er ansvarlig.', bad: 'Vis at du er ansvarlig og tålmodig (responsible, patient).' },
        { re: 'Dear Sir or Madam', neg: false, lvl: 'tips', ok: 'Du kjenner ikke navnet – da passer «Dear Sir or Madam,».', bad: 'Tips: Når du ikke vet navnet, kan du starte med «Dear Sir or Madam,».' },
        { re: 'Yours faithfully|Yours sincerely|Kind regards', ok: 'Riktig avslutning.', bad: 'Avslutt med «Yours faithfully,» når du startet med «Dear Sir or Madam».' }
      ],
      criteria: ['Hele skjelettet er med', 'Erfaring med barn eller ansvar', 'Ærlig og positiv', 'Riktig formell åpning og avslutning'],
      model: 'Dear Sir or Madam,\n\nI am writing to apply for the position of camp assistant at Summer Sports Camp, which I saw advertised online. I would love to spend my summer helping children be active and have fun.\n\nI am 16 years old and live in Oslo, Norway. I am patient, positive and responsible. For example, I often organise games for my younger cousins when the family is together.\n\nFor the past year I have been an assistant coach for a football team of eight-year-olds. I have learned to give clear instructions and to make sure that everyone feels included.\n\nI am available for the whole of July. I would be happy to attend an online interview.\n\nYours faithfully,\nJonas Berg'
    }
  ],

  autocheck: {
    misspell: {
      definately: 'definitely', definatly: 'definitely', definetly: 'definitely', recieve: 'receive', recieved: 'received', seperate: 'separate',
      neccessary: 'necessary', necesary: 'necessary', neccesary: 'necessary', begining: 'beginning', untill: 'until', wich: 'which',
      beleive: 'believe', belive: 'believe', freind: 'friend', freinds: 'friends', alot: 'a lot', tommorow: 'tomorrow', tomorow: 'tomorrow',
      tommorrow: 'tomorrow', responsability: 'responsibility', experiance: 'experience', intrested: 'interested', intresting: 'interesting',
      enviroment: 'environment', sincerly: 'sincerely', oppurtunity: 'opportunity', oportunity: 'opportunity', adress: 'address',
      comming: 'coming', writting: 'writing', realy: 'really', finaly: 'finally', wierd: 'weird', acheive: 'achieve', buisness: 'business',
      goverment: 'government', knowlege: 'knowledge', succesful: 'successful', sucessful: 'successful', truely: 'truly', thankyou: 'thank you',
      im: "I'm", dont: "don't", didnt: "didn't", doesnt: "doesn't", isnt: "isn't", ive: "I've", wasnt: "wasn't", couldnt: "couldn't",
      collegue: 'colleague', colleage: 'colleague', calender: 'calendar', availible: 'available', avaliable: 'available', recomend: 'recommend',
      reccomend: 'recommend', comittee: 'committee', occured: 'occurred', prefered: 'preferred', gratefull: 'grateful', usefull: 'useful',
      carefull: 'careful', hopefuly: 'hopefully', regads: 'regards', attatched: 'attached', atached: 'attached', posibility: 'possibility',
      teh: 'the', informations: 'information', advices: 'advice', furnitures: 'furniture', homeworks: 'homework',
      cant: ["can't", 'sjekk'], wont: ["won't", 'sjekk']
    },
    split: [['some one', 'someone'], ['any one', 'anyone'], ['my self', 'myself'], ['week end', 'weekend'],
      ['foot ball', 'football'], ['class mate', 'classmate'], ['every body', 'everybody'], ['some thing', 'something']],
    capitalize: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'january', 'february', 'april', 'june',
      'july', 'august', 'september', 'october', 'november', 'december', 'english', 'norwegian', 'swedish', 'danish', 'german', 'french',
      'spanish', 'norway', 'sweden', 'denmark', 'germany', 'france', 'spain', 'christmas', 'easter', 'london', 'oslo', 'europe'],
    patterns: [
      { re: '\\b\\d+ years\\b(?! old)', f: 'i', msg: '«16 years» → «16 years old» når du sier alderen din.', lvl: 'sjekk' },
      { re: '\\blook(ing|s)? forward to (hear|see|meet|work|start)\\b', f: 'i', msg: 'Etter «look forward to» kommer -ing: «hearing», «meeting».', lvl: 'feil' },
      { re: '\\b(should|could|would|must) of\\b', f: 'i', msg: '«should of» → «should have».', lvl: 'feil' },
      { re: '\\byour welcome\\b', f: 'i', msg: '«your welcome» → «you\'re welcome».', lvl: 'feil' },
      { re: '\\b(more|better|less|rather|bigger|smaller|older|younger|faster|higher|longer) then\\b', f: 'i', msg: 'I sammenligninger: «than», ikke «then».', lvl: 'feil' },
      { re: '\\bto (late|much|many|early|big|small|hard|expensive)\\b', f: 'i', msg: 'Mente du «too» (for mye)? «too late», «too much».', lvl: 'sjekk' },
      { re: '\\bsince (\\d+|one|two|three|four|five|six|ten) (years|months|weeks)\\b', f: 'i', msg: '«since two years» → «for two years».', lvl: 'feil' },
      { re: '\\bits (a|the|very|not|so|been)\\b', f: 'i', msg: 'Mente du «it\'s» (it is)?', lvl: 'sjekk' },
      { re: '\\b(he|she|it) (have|dont|do not|are|were)\\b', f: 'i', msg: 'Etter he/she/it: has, doesn\'t, is, was.', lvl: 'sjekk' },
      { re: '\\bme and my\\b', f: 'i', msg: 'Skriv heller «my … and I» når det er subjekt: «My friend and I …».', lvl: 'tips' }
    ]
  }
};
