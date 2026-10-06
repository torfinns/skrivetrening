/* Engelsk utvidelse – oppgavebank del 2.
   Legges til ETTER oppgavene i ovelser-en.js, så gamle oppgaver beholder ID-en sin.
   Nye oppgaver legges til nederst her (eller i en ny fil som lastes etter denne). */
(() => {
  const L = window.OVELSER_EN;
  L.catOrder.push('confusables', 'job vocabulary');
  Object.assign(L.rules, {
    'confusables': 'Noen engelske ord ligner hverandre, men betyr noe helt annet: lose (miste) – loose (løs), accept (godta) – except (unntatt), advice (et råd, substantiv) – advise (å gi råd, verb), quiet (stille) – quite (ganske), whether (om) – weather (vær), where (hvor) – were (var) – wear (ha på seg), borrow (låne av) – lend (låne bort).',
    'job vocabulary': 'Ord som går igjen i søknader og jobb-e-poster: position, experience, available, reliable, opportunity, attached, employer, responsibilities, communication, interview. Legg merke til hvor de doble bokstavene er – og hvor de ikke er.'
  });

  L.words.push(
    // capital letters
    { t: 'c', c: 'capital letters', q: 'My best friend is ___.', o: ['Swedish', 'swedish'], a: 'Swedish' },
    { t: 'c', c: 'capital letters', q: 'The meeting is on ___.', o: ['Tuesday', 'tuesday'], a: 'Tuesday' },
    { t: 'c', c: 'capital letters', q: 'School starts in ___.', o: ['August', 'august'], a: 'August' },
    { t: 'c', c: 'capital letters', q: 'My sister and ___ went to the cinema.', o: ['I', 'i'], a: 'I' },
    { t: 'c', c: 'capital letters', q: 'She lives in ___.', o: ['London', 'london'], a: 'London' },
    { t: 'c', c: 'capital letters', q: 'We had a test in ___ today.', o: ['English', 'english'], a: 'English' },
    { t: 'c', c: 'capital letters', q: 'I was born in ___.', o: ['October', 'october'], a: 'October' },
    { t: 'c', c: 'capital letters', q: 'Can ___ ask you a question?', o: ['I', 'i'], a: 'I' },
    { t: 'c', c: 'capital letters', q: 'We have a holiday at ___.', o: ['Easter', 'easter'], a: 'Easter' },
    { t: 'c', c: 'capital letters', q: 'He speaks fluent ___.', o: ['Spanish', 'spanish'], a: 'Spanish' },
    { t: 'c', c: 'capital letters', q: 'The shop is closed on ___.', o: ['Sundays', 'sundays'], a: 'Sundays' },
    // your/you're
    { t: 'c', c: "your/you're", q: "___ going to love this film.", o: ["You're", 'Your'], a: "You're" },
    { t: 'c', c: "your/you're", q: 'Let me know if ___ available.', o: ["you're", 'your'], a: "you're" },
    { t: 'c', c: "your/you're", q: '___ very welcome to join us.', o: ["You're", 'Your'], a: "You're" },
    { t: 'c', c: "your/you're", q: 'Please send me ___ CV.', o: ['your', "you're"], a: 'your' },
    // to/too/two
    { t: 'c', c: 'to/too/two', q: 'It is ___ cold to swim.', o: ['too', 'to', 'two'], a: 'too' },
    { t: 'c', c: 'to/too/two', q: 'I want ___ apply for the job.', o: ['to', 'too', 'two'], a: 'to' },
    { t: 'c', c: 'to/too/two', q: 'We walked ___ the station.', o: ['to', 'too', 'two'], a: 'to' },
    { t: 'c', c: 'to/too/two', q: "The shift starts at ___ o'clock.", o: ['two', 'too', 'to'], a: 'two' },
    { t: 'c', c: 'to/too/two', q: 'That is ___ expensive for me.', o: ['too', 'to', 'two'], a: 'too' },
    { t: 'c', c: 'to/too/two', q: 'I am going ___ the interview tomorrow.', o: ['to', 'too', 'two'], a: 'to' },
    // their/there/they're
    { t: 'c', c: "their/there/they're", q: '___ is a bus at nine.', o: ['There', 'Their', "They're"], a: 'There' },
    { t: 'c', c: "their/there/they're", q: '___ coming to the party.', o: ["They're", 'Their', 'There'], a: "They're" },
    { t: 'c', c: "their/there/they're", q: 'Put the boxes over ___.', o: ['there', 'their', "they're"], a: 'there' },
    { t: 'c', c: "their/there/they're", q: 'I like ___ new shop.', o: ['their', 'there', "they're"], a: 'their' },
    { t: 'c', c: "their/there/they're", q: 'I think ___ hiring for the summer.', o: ["they're", 'their', 'there'], a: "they're" },
    { t: 'c', c: "their/there/they're", q: 'Are ___ any questions?', o: ['there', 'their', "they're"], a: 'there' },
    { t: 'c', c: "their/there/they're", q: '___ manager is very kind.', o: ['Their', 'There', "They're"], a: 'Their' },
    // its/it's
    { t: 'c', c: "its/it's", q: 'The cat licked ___ paw.', o: ['its', "it's"], a: 'its' },
    { t: 'c', c: "its/it's", q: 'The shop has ___ own café.', o: ['its', "it's"], a: 'its' },
    // then/than
    { t: 'c', c: 'then/than', q: 'She is taller ___ me.', o: ['than', 'then'], a: 'than' },
    { t: 'c', c: 'then/than', q: 'We finished school and ___ went home.', o: ['then', 'than'], a: 'then' },
    { t: 'c', c: 'then/than', q: 'If you are late, ___ call me.', o: ['then', 'than'], a: 'then' },
    // spelling
    { t: 't', c: 'spelling', q: 'I will ___ be there on time.', h: 'defin_tely', a: 'definitely' },
    { t: 't', c: 'spelling', q: 'It is not ___ to bring food.', h: 'nece_sary', a: 'necessary' },
    { t: 't', c: 'spelling', q: 'Please write your ___ here.', h: 'a_dress', a: 'address' },
    { t: 't', c: 'spelling', q: 'I ___ you can do it.', h: 'bel_eve', a: 'believe' },
    { t: 't', c: 'spelling', q: 'She is my best ___.', h: 'fr_end', a: 'friend' },
    { t: 't', c: 'spelling', q: "I will wait ___ five o'clock.", h: 'unt_l', a: 'until' },
    { t: 't', c: 'spelling', q: 'It was a ___ day.', h: 'beauti_ul', a: 'beautiful' },
    { t: 't', c: 'spelling', q: 'I have a ___ for you.', h: 'que_tion', a: 'question' },
    { t: 't', c: 'spelling', q: 'This is very ___ for me.', h: 'imp_rtant', a: 'important' },
    { t: 't', c: 'spelling', q: 'It was an ___ film.', h: 'intere_ting', a: 'interesting' },
    { t: 't', c: 'spelling', q: 'She is very ___.', h: 'respon_ible', a: 'responsible' },
    { t: 't', c: 'spelling', q: 'I ___ forget my keys.', h: 'some_imes', a: 'sometimes' },
    { t: 't', c: 'spelling', q: 'What is the ___ like today?', h: 'we_ther', a: 'weather' },
    { t: 't', c: 'spelling', q: 'I am well ___ for the interview.', h: 'pre_ared', a: 'prepared' },
    { t: 't', c: 'spelling', q: 'Thank you for your ___.', h: 'pat_ence', a: 'patience' },
    { t: 't', c: 'spelling', q: '___ we can meet on Friday.', h: 'Pro_ably', a: 'Probably' },
    { t: 't', c: 'spelling', q: 'I want to study ___.', h: 'bus_ness', a: 'business' },
    { t: 't', c: 'spelling', q: 'He works for a big ___.', h: 'comp_ny', a: 'company' },
    { t: 't', c: 'spelling', q: 'It was a ___ to meet you.', h: 'plea_ure', a: 'pleasure' },
    { t: 't', c: 'spelling', q: 'Please ___ the form.', h: 'com_lete', a: 'complete' },
    { t: 't', c: 'spelling', q: 'We need help ___.', h: 'immediate_y', a: 'immediately' },
    // confusables
    { t: 'c', c: 'confusables', q: "Don't ___ your keys.", o: ['lose', 'loose'], a: 'lose' },
    { t: 'c', c: 'confusables', q: 'My shoes are too ___.', o: ['loose', 'lose'], a: 'loose' },
    { t: 'c', c: 'confusables', q: 'I ___ your offer.', o: ['accept', 'except'], a: 'accept' },
    { t: 'c', c: 'confusables', q: 'Everyone came ___ Tom.', o: ['except', 'accept'], a: 'except' },
    { t: 'c', c: 'confusables', q: 'Can you give me some ___?', o: ['advice', 'advise'], a: 'advice' },
    { t: 'c', c: 'confusables', q: 'I would ___ you to apply early.', o: ['advise', 'advice'], a: 'advise' },
    { t: 'c', c: 'confusables', q: 'The rain can ___ our plans.', o: ['affect', 'effect'], a: 'affect' },
    { t: 'c', c: 'confusables', q: 'The new rule had a big ___.', o: ['effect', 'affect'], a: 'effect' },
    { t: 'c', c: 'confusables', q: 'The library is very ___.', o: ['quiet', 'quite'], a: 'quiet' },
    { t: 'c', c: 'confusables', q: 'The test was ___ easy.', o: ['quite', 'quiet'], a: 'quite' },
    { t: 'c', c: 'confusables', q: 'Can I ___ your pen?', o: ['borrow', 'lend'], a: 'borrow' },
    { t: 'c', c: 'confusables', q: 'Could you ___ me ten pounds?', o: ['lend', 'borrow'], a: 'lend' },
    { t: 'c', c: 'confusables', q: "I don't know ___ I can come.", o: ['whether', 'weather'], a: 'whether' },
    { t: 'c', c: 'confusables', q: '___ is the station?', o: ['Where', 'Were', 'Wear'], a: 'Where' },
    { t: 'c', c: 'confusables', q: 'We ___ at home all day.', o: ['were', 'where', 'wear'], a: 'were' },
    { t: 'c', c: 'confusables', q: 'What should I ___ to the interview?', o: ['wear', 'where', 'were'], a: 'wear' },
    { t: 'c', c: 'confusables', q: 'I ___ the answer.', o: ['know', 'no', 'now'], a: 'know' },
    { t: 'c', c: 'confusables', q: 'I ___ it was you.', o: ['knew', 'new'], a: 'knew' },
    // job vocabulary
    { t: 't', c: 'job vocabulary', q: 'I am applying for the ___ of sales assistant.', h: 'pos_tion', a: 'position' },
    { t: 't', c: 'job vocabulary', q: 'I have some ___ with customers.', h: 'exper_ence', a: 'experience' },
    { t: 't', c: 'job vocabulary', q: 'Please find my CV ___.', h: 'att_ched', a: 'attached' },
    { t: 't', c: 'job vocabulary', q: 'My ___ can give you a reference.', h: 'empl_yer', a: 'employer' },
    { t: 't', c: 'job vocabulary', q: 'I am ___ at weekends.', h: 'avail_ble', a: 'available' },
    { t: 't', c: 'job vocabulary', q: 'Thank you for the ___.', h: 'oppor_unity', a: 'opportunity' },
    { t: 't', c: 'job vocabulary', q: 'I look forward to the ___.', h: 'interv_ew', a: 'interview' },
    { t: 't', c: 'job vocabulary', q: 'I am a ___ person.', h: 'reli_ble', a: 'reliable' },
    { t: 't', c: 'job vocabulary', q: 'My ___ included working at the till.', h: 'respon_ibilities', a: 'responsibilities' },
    { t: 't', c: 'job vocabulary', q: 'I work well in a ___.', h: 't_am', a: 'team' },
    { t: 't', c: 'job vocabulary', q: 'I have good ___ skills.', h: 'commun_cation', a: 'communication' },
    { t: 't', c: 'job vocabulary', q: 'The ___ for applications is 1 March.', h: 'dead_ine', a: 'deadline' },
    { t: 't', c: 'job vocabulary', q: 'I have a lot of ___ for sport.', h: 'enth_siasm', a: 'enthusiasm' },
    { t: 't', c: 'job vocabulary', q: 'I would like to ___ for the job.', h: 'ap_ly', a: 'apply' },
    { t: 't', c: 'job vocabulary', q: 'I am writing to ___ my interest.', h: 'expr_ss', a: 'express' },
    { t: 't', c: 'job vocabulary', q: 'The hourly ___ is twelve pounds.', h: 'w_ge', a: 'wage' },
    // norwegianisms
    { t: 'c', c: 'norwegianisms', q: 'I am 16 ___.', o: ['years old', 'years'], a: 'years old' },
    { t: 'c', c: 'norwegianisms', q: 'I have lived here ___ two years.', o: ['for', 'since'], a: 'for' },
    { t: 'c', c: 'norwegianisms', q: 'I have worked here ___ June.', o: ['since', 'for'], a: 'since' },
    { t: 'c', c: 'norwegianisms', q: 'I am good ___ football.', o: ['at', 'in'], a: 'at' },
    { t: 'c', c: 'norwegianisms', q: 'I am interested ___ the job.', o: ['in', 'for', 'of'], a: 'in' },
    { t: 'c', c: 'norwegianisms', q: 'It depends ___ the weather.', o: ['on', 'of'], a: 'on' },
    { t: 'c', c: 'norwegianisms', q: 'I look forward to ___ from you.', o: ['hearing', 'hear'], a: 'hearing' },
    { t: 'c', c: 'norwegianisms', q: 'I ___ my homework yesterday.', o: ['did', 'made'], a: 'did' },
    { t: 'c', c: 'norwegianisms', q: 'I ___ a mistake.', o: ['made', 'did'], a: 'made' },
    { t: 'c', c: 'norwegianisms', q: 'Can you ___ me the way to the station?', o: ['tell', 'say'], a: 'tell' },
    { t: 'c', c: 'norwegianisms', q: 'The ___ at work are very nice.', o: ['people', 'peoples'], a: 'people' },
    { t: 'c', c: 'norwegianisms', q: 'Thank you for the ___.', o: ['information', 'informations'], a: 'information' },
    // grammar
    { t: 'c', c: 'grammar', q: 'She ___ a job at the café.', o: ['has', 'have'], a: 'has' },
    { t: 'c', c: 'grammar', q: 'They ___ very friendly.', o: ['are', 'is'], a: 'are' },
    { t: 'c', c: 'grammar', q: 'He ___ like coffee.', o: ["doesn't", "don't"], a: "doesn't" },
    { t: 'c', c: 'grammar', q: 'Yesterday I ___ to the cinema.', o: ['went', 'go', 'goed'], a: 'went' },
    { t: 'c', c: 'grammar', q: 'We ___ at home last night.', o: ['were', 'was'], a: 'were' },
    { t: 'c', c: 'grammar', q: 'Everyone ___ the answer.', o: ['knows', 'know'], a: 'knows' },
    { t: 'c', c: 'grammar', q: 'My parents ___ in Oslo.', o: ['live', 'lives'], a: 'live' },
    { t: 'c', c: 'grammar', q: 'The manager ___ to talk to you.', o: ['wants', 'want'], a: 'wants' },
    { t: 'c', c: 'grammar', q: 'I ___ never been to London.', o: ['have', 'has'], a: 'have' },
    { t: 'c', c: 'grammar', q: 'She ___ her phone at home yesterday.', o: ['left', 'leaved', 'leave'], a: 'left' }
  );

  L.fix.push(
    { c: 'capital letters', q: 'i am available on mondays and fridays.', a: 'I am available on Mondays and Fridays.' },
    { c: 'capital letters', q: 'We are going to spain in july.', a: 'We are going to Spain in July.' },
    { c: 'capital letters', q: 'I speak norwegian, english and some german.', a: 'I speak Norwegian, English and some German.' },
    { c: 'capital letters', q: 'My Mother works at the hospital.', a: 'My mother works at the hospital.' },
    { c: "your/you're", q: 'Your going to like this place.', a: "You're going to like this place." },
    { c: "your/you're", q: "Thank you for you're help.", a: 'Thank you for your help.' },
    { c: "your/you're", q: 'Let me know if your interested.', a: "Let me know if you're interested." },
    { c: 'to/too/two', q: 'I would like too apply for the job.', a: 'I would like to apply for the job.' },
    { c: 'to/too/two', q: 'It is to late to call now.', a: 'It is too late to call now.' },
    { c: 'to/too/two', q: 'I have worked there for to summers.', a: 'I have worked there for two summers.' },
    { c: "their/there/they're", q: 'There shop opens at nine.', a: 'Their shop opens at nine.' },
    { c: "their/there/they're", q: 'Their is a problem with my order.', a: 'There is a problem with my order.' },
    { c: "their/there/they're", q: 'I think there hiring new staff.', a: "I think they're hiring new staff." },
    { c: "its/it's", q: 'Its a great opportunity for me.', a: "It's a great opportunity for me." },
    { c: "its/it's", q: "The café is famous for it's cakes.", a: 'The café is famous for its cakes.' },
    { c: 'then/than', q: 'I am older then my brother.', a: 'I am older than my brother.' },
    { c: 'then/than', q: 'I would rather work then stay at home.', a: 'I would rather work than stay at home.' },
    { c: 'then/than', q: 'We ate dinner and than watched a film.', a: 'We ate dinner and then watched a film.' },
    { c: 'spelling', q: 'I will definately be there on time.', a: 'I will definitely be there on time.' },
    { c: 'spelling', q: 'I recieved your email yesterday.', a: 'I received your email yesterday.' },
    { c: 'spelling', q: 'It is not neccessary to bring anything.', a: 'It is not necessary to bring anything.' },
    { c: 'spelling', q: 'See you tommorow!', a: 'See you tomorrow!' },
    { c: 'spelling', q: 'I beleive I would be good at this job.', a: 'I believe I would be good at this job.' },
    { c: 'spelling', q: 'I am very intrested in the position.', a: 'I am very interested in the position.' },
    { c: 'spelling', q: 'I will wait untill you call.', a: 'I will wait until you call.' },
    { c: 'norwegianisms', q: 'I am 16 years and live in Oslo.', a: 'I am 16 years old and live in Oslo.' },
    { c: 'norwegianisms', q: 'I have played football since six years.', a: 'I have played football for six years.' },
    { c: 'norwegianisms', q: 'Can you borrow me your pen?', a: 'Can you lend me your pen?' },
    { c: 'norwegianisms', q: 'I am interested of the job.', a: 'I am interested in the job.' },
    { c: 'norwegianisms', q: 'I made my homework yesterday.', a: 'I did my homework yesterday.' },
    { c: 'norwegianisms', q: 'Thank you for all the informations.', a: 'Thank you for all the information.' },
    { c: 'norwegianisms', q: 'It depends of the weather.', a: 'It depends on the weather.' },
    { c: 'norwegianisms', q: 'I am good in maths.', a: ['I am good at maths.', 'I am good at math.'] },
    { c: 'grammar', q: 'She have worked there for two years.', a: 'She has worked there for two years.' },
    { c: 'grammar', q: "He don't know the answer.", a: "He doesn't know the answer." },
    { c: 'grammar', q: 'Yesterday I go to the interview.', a: 'Yesterday I went to the interview.' },
    { c: 'grammar', q: 'They was very friendly.', a: 'They were very friendly.' },
    { c: 'grammar', q: 'My parents lives in Bergen.', a: 'My parents live in Bergen.' },
    { c: 'grammar', q: 'Everyone know the rules.', a: 'Everyone knows the rules.' },
    { c: 'punctuation', q: 'I am friendly reliable and hard-working.', a: ['I am friendly, reliable and hard-working.', 'I am friendly, reliable, and hard-working.'] },
    { c: 'punctuation', q: 'Hi Emma how are you?', a: 'Hi Emma, how are you?' },
    { c: 'punctuation', q: 'I cant come on Friday.', a: "I can't come on Friday." },
    { c: 'punctuation', q: 'Im looking forward to the interview.', a: "I'm looking forward to the interview." },
    { c: 'punctuation', q: 'Thanks for your help Sarah.', a: 'Thanks for your help, Sarah.' },
    { c: 'confusables', q: "Don't loose your keys.", a: "Don't lose your keys." },
    { c: 'confusables', q: 'I would like to except your offer.', a: 'I would like to accept your offer.' },
    { c: 'confusables', q: 'Thank you for the good advise.', a: 'Thank you for the good advice.' },
    { c: 'confusables', q: 'The library was very quite.', a: 'The library was very quiet.' },
    { c: 'confusables', q: 'I am not sure weather I can come.', a: 'I am not sure whether I can come.' },
    { c: 'confusables', q: 'Were is the meeting room?', a: 'Where is the meeting room?' },
    { c: 'confusables', q: 'What should I where to the interview?', a: 'What should I wear to the interview?' },
    { c: 'confusables', q: 'I new it was a good idea.', a: 'I knew it was a good idea.' },
    { c: 'job vocabulary', q: 'I am applying for the posision of waiter.', a: 'I am applying for the position of waiter.' },
    { c: 'job vocabulary', q: 'I have some experiance with customers.', a: 'I have some experience with customers.' },
    { c: 'job vocabulary', q: 'Please find my CV attatched.', a: 'Please find my CV attached.' },
    { c: 'job vocabulary', q: 'I am availible at weekends.', a: 'I am available at weekends.' },
    { c: 'job vocabulary', q: 'Thank you for the oportunity.', a: 'Thank you for the opportunity.' },
    { c: 'job vocabulary', q: 'I am a very reliabel person.', a: 'I am a very reliable person.' },
    { c: 'job vocabulary', q: 'I work well in a teem.', a: 'I work well in a team.' }
  );

  L.phrases.push(
    { q: 'Formell åpning når du vet navnet (Ms Jones)', a: ['Dear Ms Jones,'] },
    { q: 'Si at du så annonsen på nettsiden deres', a: ['I saw the advertisement on your website.', 'I saw the advert on your website.', 'I saw the ad on your website.'] },
    { q: 'Spør om de har fått e-posten din', a: ['Have you received my email?', 'Did you receive my email?'] },
    { q: 'Si at du er syk og ikke kan komme på jobb i dag', a: ["I am ill and can't come to work today.", "I am sick and can't come to work today.", "I'm ill and can't come to work today.", "I'm sick and can't come to work today."] },
    { q: 'Spør om du kan få fri på fredag', a: ['Could I have Friday off?', 'Can I have Friday off?', 'Is it possible to have Friday off?'] },
    { q: 'Si at du kan jobbe i helgene', a: ['I am available at weekends.', 'I am available on weekends.'] },
    { q: 'Spør en kunde hva du kan hjelpe med', a: ['How can I help you?', 'Can I help you?'] },
    { q: 'Si til kunden at du skal sjekke lageret', a: ['Let me check the stockroom for you.', 'I will check the stockroom for you.'] },
    { q: 'Beklag ventetiden til en kunde', a: ['Sorry to keep you waiting.', 'Sorry for the wait.'] },
    { q: 'Si at du gleder deg til å begynne', a: ['I am looking forward to starting.', "I'm looking forward to starting."] },
    { q: 'Si at du lærer fort', a: ['I learn quickly.', 'I am a quick learner.'] },
    { q: 'Si at du jobber godt i team', a: ['I work well in a team.', 'I am a good team player.'] },
    { q: 'Takk arbeidsgiveren for intervjuet i dag', a: ['Thank you for the interview today.', 'Thank you for interviewing me today.'] },
    { q: 'Kort, uformell avslutning i e-post til en kollega (ett ord og komma)', a: ['Thanks,', 'Best,', 'Cheers,'] },
    { q: 'Si at du svarer så fort som mulig', a: ['I will get back to you as soon as possible.', "I'll get back to you as soon as possible."] },
    { q: 'Spør om du kan bruke noen som referanse', a: ['Could I use you as a reference?', 'Could I use you as a referee?', 'Can I use you as a reference?'] },
    { q: 'Si at du vil si opp stillingen din', a: ['I am writing to resign from my position.', 'I would like to resign from my position.'] },
    { q: 'Si at du er interessert i stillingen', a: ['I am interested in the position.', 'I am very interested in the position.'] },
    { q: 'Formell avslutning når du startet med navnet (Dear Ms Jones, – britisk)', a: ['Yours sincerely,'] },
    { q: 'Spør høflig om lønnen', a: ['Could you tell me what the hourly wage is?', 'Could you tell me what the salary is?'] },
    { q: 'Si at tidspunktet passer fint', a: ['That time suits me well.', 'That time works for me.', 'That works for me.'] },
    { q: 'Si at du har lagt ved en attest', a: ['I have attached a reference.', 'Please find a reference attached.'] },
    { q: 'Si at du har jobbet med kunder før', a: ['I have worked with customers before.'] },
    { q: 'Be om unnskyldning for misforståelsen', a: ['Sorry for the misunderstanding.', 'I apologise for the misunderstanding.', 'I apologize for the misunderstanding.'] }
  );

  const dear = { re: '^\\s*(Dear|Hi|Hello)\\b', ok: 'Du starter med en hilsen.', bad: 'Start med en hilsen, for eksempel «Dear Ms Jones,» eller «Hi Tom,».' };
  const greetComma = { re: '^[^\\n]+,\\s*\\n', ok: 'Komma etter hilsenen.', bad: 'Sett komma etter hilsenen: «Dear Ms Jones,».' };
  const signoff = { re: 'Kind regards,|Best regards,|Best wishes,|Yours sincerely,|Yours faithfully,', ok: 'Riktig avslutning med komma.', bad: 'Avslutt med for eksempel «Kind regards,» – med komma på engelsk.' };

  L.writing.push(
    // ---------- Level 3 ----------
    {
      id: 'en-w-sick', lvl: 3, title: 'Message: You are ill',
      task: 'Du har sommerjobb på en kafé i England. I dag er du syk og kan ikke komme på vakta kl. 12. Skriv en kort melding på engelsk til sjefen, Sarah.',
      skeleton: 'Hi [name],\n\nI am sorry, but I am ill and can\'t come to work today.\n[When you hope to be back.]\n[Offer something.]\n\n[Name]',
      min: 20, max: 70,
      checks: [
        dear,
        { re: 'sorry|apologi[sz]e', f: 'i', ok: 'Du beklager.', bad: 'Start med å beklage: «I am sorry, but …».' },
        { re: 'ill|sick|fever|unwell', f: 'i', ok: 'Du forklarer kort.', bad: 'Si kort at du er syk: «I am ill».' },
        { re: 'tomorrow|back|better|next', f: 'i', ok: 'Du sier noe om når du er tilbake.', bad: 'Si når du håper å være tilbake.' }
      ],
      criteria: ['Kort beklagelse', 'Når jeg er tilbake', 'Tilbyr noe', 'Navn'],
      model: 'Hi Sarah,\n\nI am sorry, but I am ill and can\'t come to work today. I have a fever, but I hope to be back on Thursday.\nI am happy to swap shifts later in the week if that helps.\n\nJonas'
    },
    {
      id: 'en-w-late', lvl: 3, title: 'Message: Running late',
      task: 'Toget er forsinket, og du kommer 15 minutter for sent på jobb. Skriv en kort melding på engelsk til vaktansvarlig Tom.',
      skeleton: 'Hi [name],\n\n[What happened.] I will be there at about [time].\n[Apologise.]\n\n[Name]',
      min: 15, max: 55,
      checks: [
        dear,
        { re: 'train|bus|delayed|late', f: 'i', ok: 'Du forklarer hva som har skjedd.', bad: 'Si hvorfor du blir forsinket: «My train is delayed».' },
        { re: '\\d', ok: 'Du sier når du kommer.', bad: 'Si omtrent når du er der: «at about 9.15».' },
        { re: 'sorry|apologi[sz]e', f: 'i', ok: 'Du beklager.', bad: 'Beklag kort: «Sorry!».' }
      ],
      criteria: ['Hva som har skjedd', 'Klokkeslett', 'Kort og høflig'],
      model: 'Hi Tom,\n\nMy train is delayed, so I will be about 15 minutes late. I should be there at around 9.15. Sorry about this!\n\nJonas'
    },
    {
      id: 'en-w-exchange', lvl: 3, title: 'Email: Your host family',
      task: 'Du skal på utveksling og bo hos familien Wilson i Manchester. Skriv en kort e-post på engelsk der du presenterer deg og spør om én praktisk ting (for eksempel om de trenger at du tar med noe).',
      skeleton: 'Dear Mr and Mrs Wilson,\n\nMy name is [name] and I am [age] years old. [About you.]\nI am looking forward to [what].\nCould you [question]?\n\nBest wishes,\n[Name]',
      min: 40, max: 110,
      checks: [
        dear, greetComma,
        { re: 'my name is', f: 'i', ok: 'Du presenterer deg.', bad: 'Presenter deg: «My name is …».' },
        { re: 'years old', f: 'i', ok: 'Riktig: «years old».', bad: 'Husk «years old» når du sier alderen.' },
        { re: '\\?', ok: 'Du stiller et spørsmål.', bad: 'Still ett konkret spørsmål.' },
        { re: 'looking forward to [a-z]+ing|looking forward to (it|the|my|our|meeting|staying|seeing)', f: 'i', lvl: 'tips', ok: '', bad: 'Tips: «I am looking forward to meeting you» – med -ing etter «to».' }
      ],
      criteria: ['Hilsen med komma', 'Kort om meg', 'Ett konkret spørsmål', 'Avslutning med komma'],
      model: 'Dear Mr and Mrs Wilson,\n\nMy name is Jonas and I am 16 years old. I live in Oslo with my parents and my little sister, and I love football.\nI am looking forward to staying with you in March.\nCould you tell me if I need to bring a towel and bed linen?\n\nBest wishes,\nJonas'
    },
    {
      id: 'en-w-dayoff', lvl: 3, title: 'Email: Asking for a day off',
      task: 'Du jobber deltid i en butikk i London. Du trenger fri neste fredag fordi du skal på en skoletur. Skriv en kort e-post på engelsk til sjefen, Mr Patel.',
      skeleton: 'Dear Mr Patel,\n\nI am writing to ask if I could have [day] off, because [reason].\n[Offer a solution.]\n\nKind regards,\n[Name]',
      min: 30, max: 90,
      checks: [
        dear, greetComma,
        { re: 'off', f: 'i', ok: 'Du spør om fri.', bad: 'Spør tydelig: «Could I have Friday off?».' },
        { re: 'because|as ', f: 'i', ok: 'Du begrunner.', bad: 'Gi en kort grunn med «because».' },
        { re: 'Friday', ok: 'Riktig: «Friday» med stor F.', bad: 'Ukedager har stor bokstav på engelsk: «Friday».' },
        signoff
      ],
      criteria: ['Høflig spørsmål', 'Grunn', 'Tilbyr en løsning', 'Avslutning med komma'],
      model: 'Dear Mr Patel,\n\nI am writing to ask if I could have next Friday off, because I am going on a school trip.\nI have asked Amy, and she can cover my shift. I am happy to work an extra day next week instead.\n\nKind regards,\nJonas'
    },
    {
      id: 'en-w-confirm', lvl: 3, title: 'Email: Confirming an interview',
      task: 'Emma fra et hotell i Edinburgh inviterer deg til intervju på video tirsdag kl. 10. Svar kort på engelsk: takk, bekreft tidspunktet og si at du gleder deg.',
      skeleton: 'Dear [name],\n\nThank you for [what].\n[Confirm the day and time.]\nI look forward to [what].\n\nKind regards,\n[Name]',
      min: 25, max: 80,
      checks: [
        dear, greetComma,
        { re: 'thank', f: 'i', ok: 'Du takker.', bad: 'Start med å takke: «Thank you for inviting me …».' },
        { re: 'Tuesday', ok: 'Du gjentar dagen med stor bokstav.', bad: 'Gjenta dagen – og husk stor bokstav: «Tuesday».' },
        { re: 'look(ing)? forward to (speaking|meeting|talking|it|the)', f: 'i', ok: 'Riktig bruk av «look forward to».', bad: 'Skriv «I look forward to speaking with you» – med -ing.' },
        signoff
      ],
      criteria: ['Takk', 'Dag og klokkeslett', '«look forward to» + -ing', 'Avslutning med komma'],
      model: 'Dear Emma,\n\nThank you for inviting me to an interview.\nTuesday at 10 am suits me well, and I will join the video call on time.\nI look forward to speaking with you.\n\nKind regards,\nJonas Berg'
    },
    {
      id: 'en-w-reference-ask', lvl: 3, title: 'Email: Asking for a reference',
      task: 'Du søker sommerjobb i Irland. Skriv en kort e-post på engelsk til engelsklæreren din, Ms Olsen, og spør om hun kan være referanse for deg.',
      skeleton: 'Dear Ms [name],\n\nI am applying for [job] at [place].\nWould you be willing to be a reference for me? [Why her.]\n\nThank you in advance.\n\nKind regards,\n[Name]',
      min: 30, max: 90,
      checks: [
        dear, greetComma,
        { re: 'reference|referee', f: 'i', ok: 'Det er tydelig hva du spør om.', bad: 'Bruk ordet «reference» eller «referee».' },
        { re: 'apply|applying', f: 'i', ok: 'Du sier hva du søker på.', bad: 'Si hva du søker på: «I am applying for …».' },
        { re: 'thank', f: 'i', ok: 'Du takker.', bad: 'Takk på forhånd: «Thank you in advance.»' },
        signoff
      ],
      criteria: ['Hva jeg søker på', 'Høflig spørsmål', 'Takk', 'Avslutning med komma'],
      model: 'Dear Ms Olsen,\n\nI am applying for a summer job at a hostel in Galway, Ireland.\nWould you be willing to be a reference for me? You have taught me for two years and know how I work.\n\nThank you in advance.\n\nKind regards,\nJonas Berg'
    },

    // ---------- Level 4 ----------
    {
      id: 'en-w-followup', lvl: 4, title: 'Email: Following up an application',
      task: 'Du søkte på en sommerjobb på en camping i Skottland for to uker siden og har ikke hørt noe. Skriv en kort og høflig oppfølgings-e-post på engelsk til Mr Reid.',
      skeleton: 'Dear Mr Reid,\n\nTwo weeks ago, I applied for [position].\nI am writing to ask whether [question].\n[Repeat that you are interested.]\n\nKind regards,\n[Name]',
      min: 40, max: 110,
      checks: [
        dear, greetComma,
        { re: 'applied|application', f: 'i', ok: 'Du minner om søknaden.', bad: 'Si hva du søkte på og når.' },
        { re: 'whether|if you|could you|\\?', f: 'i', ok: 'Du spør konkret.', bad: 'Spør konkret, for eksempel «whether you have received my application».' },
        { re: 'still (very )?interested|remain interested', f: 'i', ok: 'Du viser at du fortsatt er interessert.', bad: 'Si at du fortsatt er interessert: «I am still very interested in the position.»' },
        signoff
      ],
      criteria: ['Stilling og når jeg søkte', 'Høflig, ikke masete', 'Fortsatt interessert', 'Kort'],
      model: 'Dear Mr Reid,\n\nTwo weeks ago, I applied for the position of campsite assistant at Loch Lomond Holiday Park.\nI am writing to ask whether you have received my application, and when you expect to make a decision.\nI am still very interested in the position and would be happy to attend an interview.\n\nKind regards,\nJonas Berg'
    },
    {
      id: 'en-w-complaint', lvl: 4, title: 'Email: Replying to a complaint',
      task: 'Du jobber i kundeservice i en nettbutikk som selger klær. Kunden Ms Carter skriver at genseren hun bestilte, kom i feil farge. Skriv et høflig svar på engelsk: beklag, forklar løsningen og avslutt vennlig.',
      skeleton: 'Dear Ms Carter,\n\nThank you for contacting us, and I am sorry that [problem].\n[Solution: new item, return, cost.]\n[What she needs to do.]\n\nKind regards,\n[Name]\n[Company] Customer Service',
      min: 50, max: 140,
      checks: [
        dear, greetComma,
        { re: 'sorry|apologi[sz]e', f: 'i', ok: 'Du beklager.', bad: 'Start med en beklagelse.' },
        { re: 'send|replace|exchange|refund|return', f: 'i', ok: 'Du forklarer løsningen.', bad: 'Forklar konkret hva som skjer nå.' },
        { re: 'free|no cost|at no extra|we will pay|cover', f: 'i', lvl: 'tips', ok: 'Du sier at returen er gratis.', bad: 'Tips: Si at kunden ikke betaler for returen når det er butikkens feil.' },
        signoff
      ],
      criteria: ['Takker og beklager', 'Konkret løsning', 'Tydelig hva kunden gjør', 'Vennlig og profesjonell'],
      model: 'Dear Ms Carter,\n\nThank you for contacting us, and I am sorry that you received the wrong colour.\nWe will send you the jumper in navy blue today. Please return the grey one using the label in the parcel. The return is free of charge.\nPlease let me know if there is anything else I can help you with.\n\nKind regards,\nJonas\nNordwear Customer Service'
    },
    {
      id: 'en-w-resign', lvl: 4, title: 'Email: Resigning from a part-time job',
      task: 'Du har jobbet ett år i en kafé i London mens du var på utveksling, og nå skal du flytte hjem. Skriv en kort oppsigelse på engelsk til sjefen, Ms Green. Oppgi siste arbeidsdag og takk for tiden.',
      skeleton: 'Dear Ms Green,\n\nI am writing to resign from my position as [position].\nMy last day will be [date].\n[Short reason.]\n[Thank you.]\n\nKind regards,\n[Name]',
      min: 40, max: 120,
      checks: [
        dear, greetComma,
        { re: 'resign', f: 'i', ok: 'Det er tydelig at du sier opp.', bad: 'Skriv tydelig: «I am writing to resign from my position as …».' },
        { re: 'last (working )?day', f: 'i', ok: 'Du oppgir siste arbeidsdag.', bad: 'Oppgi siste arbeidsdag: «My last day will be …».' },
        { re: 'thank', f: 'i', ok: 'Du takker.', bad: 'Takk for tiden – det er lurt å slutte på en god måte.' },
        signoff
      ],
      criteria: ['Tydelig oppsigelse', 'Siste arbeidsdag', 'Kort grunn', 'Takk for tiden'],
      model: 'Dear Ms Green,\n\nI am writing to resign from my position as a waiter at Green\'s Café.\nMy last day will be 28 June, as I am moving back to Norway after my exchange year.\nThank you for a great year. I have learnt a lot, especially about working fast and staying friendly when it is busy.\n\nKind regards,\nJonas Berg'
    },
    {
      id: 'en-w-intro', lvl: 4, title: 'Message: Introducing yourself to the team',
      task: 'Du har fått sommerjobb på en fornøyelsespark i England. Lederen ber deg presentere deg i team-chatten. Skriv en kort, vennlig presentasjon på engelsk.',
      skeleton: 'Hi everyone!\n\nMy name is [name] and I am starting here on [day].\n[About you: where you are from, school, interests.]\n[Say you are looking forward to meeting them.]\n\n[Name]',
      min: 30, max: 90,
      checks: [
        { re: '[Mm]y name is|I am [A-Z]|I\'m [A-Z]', ok: 'Du sier hva du heter.', bad: 'Si hva du heter: «My name is …».' },
        { re: 'Norway|Norwegian', ok: 'Riktig stor bokstav på Norway/Norwegian.', bad: 'Si hvor du er fra – og husk stor bokstav: «Norway», «Norwegian».' },
        { re: 'looking forward to [a-z]+ing', f: 'i', ok: 'Riktig: «looking forward to» + -ing.', bad: 'Avslutt med «I am looking forward to meeting you all» – med -ing.' }
      ],
      criteria: ['Navn og startdato', 'Litt om meg', 'Positiv avslutning', 'Kort'],
      model: 'Hi everyone!\n\nMy name is Jonas and I am starting here on Monday. I am 16 years old and from Oslo in Norway. At home I play a lot of football, and I love roller coasters, so this is the perfect summer job for me.\nI am looking forward to meeting you all!\n\nJonas'
    },
    {
      id: 'en-s-whyme', lvl: 4, title: 'Application: Why should we hire you?',
      task: 'Du søker sommerjobb som «kitchen assistant» på en restaurant i Dublin. Skriv ett avsnitt på engelsk som svarer på «Why should we hire you?». Bruk to konkrete eksempler, ikke bare fine ord.',
      skeleton: 'I believe I would be a good fit for this job because [quality].\nFor example, [concrete example 1].\nI am also [quality 2], and [concrete example 2].',
      min: 40, max: 120,
      checks: [
        { re: 'for example|for instance|when I', f: 'i', ok: 'Du gir eksempler.', bad: 'Gi konkrete eksempler: «For example, …».' },
        { re: 'because', f: 'i', ok: 'Du begrunner.', bad: 'Begrunn med «because».' },
        { re: 'the best|perfect candidate|definitely the', f: 'i', neg: true, ok: '', bad: 'Unngå store ord som «the best» eller «the perfect candidate». Konkrete eksempler overbeviser mer.' }
      ],
      criteria: ['To konkrete eksempler', 'Passer til jobben', 'Nøkternt, ikke overselgende'],
      model: 'I believe I would be a good fit for this job because I work fast and keep things tidy. For example, I cook dinner for my family twice a week and always clean up afterwards. I am also used to working under pressure, and as a football coach for younger children, I have learnt to stay calm and follow a plan.'
    },
    {
      id: 'en-w-reference-letter', lvl: 4, title: 'Email: Asking a former employer for a reference',
      task: 'Du jobbet i en suvenirbutikk i York i fjor sommer. Nå skal du søke ny jobb. Skriv en e-post på engelsk til tidligere sjef, Mr Hughes, og be om et referansebrev.',
      skeleton: 'Dear Mr Hughes,\n\n[Remind him who you are and when you worked there.]\nI am now applying for [job], and I was wondering if you could write a reference for me.\n[What it could mention.]\n\nThank you in advance.\n\nKind regards,\n[Name]',
      min: 50, max: 130,
      checks: [
        dear, greetComma,
        { re: 'worked|last summer', f: 'i', ok: 'Du minner om hvem du er.', bad: 'Minn kort om når og hvor du jobbet.' },
        { re: 'reference', f: 'i', ok: 'Det er tydelig hva du ber om.', bad: 'Skriv tydelig at du ber om «a reference».' },
        { re: 'wondering|would you|could you', f: 'i', ok: 'Høflig formulert.', bad: 'Spør høflig: «I was wondering if you could …».' },
        signoff
      ],
      criteria: ['Minner om hvem jeg er', 'Høflig forespørsel', 'Hva referansen kan inneholde', 'Takk'],
      model: 'Dear Mr Hughes,\n\nI worked as a sales assistant in your shop on Stonegate last summer, from June to August.\nI am now applying for a job at a hotel in York, and I was wondering if you could write a reference for me.\nIt would be great if it could mention my work at the till and with tourists.\n\nThank you in advance.\n\nKind regards,\nJonas Berg'
    },

    // ---------- Full applications ----------
    {
      id: 'en-full-hostel', lvl: 4, full: true, title: 'Full application: Hostel assistant in Edinburgh',
      task: 'Annonse: «Busy youth hostel in Edinburgh is looking for summer assistants (16+). Tasks: reception, cleaning and helping guests. We are looking for friendly, reliable people who speak English and at least one other language.» Skriv en hel søknad på engelsk.',
      skeleton: '[Your name]\n[Address]\n[Email]\n\n[Date]\n\nDear Sir or Madam,\n\n[Opening: position, where you saw it, why]\n\n[About you: friendly, reliable + example]\n\n[Languages and experience]\n\n[When you can work + interview]\n\nYours faithfully,\n[Name]',
      min: 150, max: 380,
      checks: [
        { re: 'Dear Sir or Madam,', ok: 'Riktig formell åpning.', bad: 'Når du ikke vet navnet: «Dear Sir or Madam,».' },
        { re: 'Yours faithfully,', ok: 'Riktig avslutning til «Dear Sir or Madam».', bad: 'Etter «Dear Sir or Madam» avslutter du med «Yours faithfully,» (britisk).' },
        { re: 'Norwegian', ok: 'Du nevner språkene dine.', bad: 'Annonsen spør om språk – nevn at du snakker norsk («Norwegian», stor N).' },
        { re: 'reliable|responsible', f: 'i', ok: 'Du svarer på det de ser etter.', bad: 'Vis med et eksempel at du er pålitelig («reliable»).' },
        { re: 'for example|for instance', f: 'i', ok: 'Du gir eksempler.', bad: 'Gi minst ett konkret eksempel.' }
      ],
      criteria: ['Formell åpning og avslutning som passer sammen', 'Svarer på det annonsen ber om', 'Konkrete eksempler', 'Under én side'],
      model: 'Jonas Berg\nSolveien 12, 0587 Oslo, Norway\njonas.berg@epost.no\n\n12 February 2027\n\nDear Sir or Madam,\n\nI am writing to apply for the position of summer assistant at your hostel, which I saw advertised on your website. I have visited Edinburgh once and would love to spend a summer working there.\n\nI am 16 years old and a student at Nydalen Upper Secondary School in Oslo. I am friendly and reliable. For example, I have not missed a single football practice in two years, and my coach has made me responsible for the team equipment.\n\nI speak Norwegian and English, and I can also understand Swedish and Danish. I have worked in the kiosk at many football tournaments, where I served customers and handled money.\n\nI am available from 1 July to 10 August. I would be happy to attend an interview by video.\n\nYours faithfully,\nJonas Berg'
    },
    {
      id: 'en-full-cinema', lvl: 4, full: true, title: 'Full application: Cinema team member',
      task: 'Annonse: «Our cinema in Brighton is hiring weekend team members (16+). You will sell tickets and snacks, check tickets and clean screens. Contact: Ms Laura Hill.» Skriv en hel søknad på engelsk. Du vet navnet på mottakeren.',
      skeleton: '[Your name]\n[Email]\n\n[Date]\n\nDear Ms Hill,\n\n[Opening]\n\n[About you + example]\n\n[Experience]\n\n[When you can work + interview]\n\nYours sincerely,\n[Name]',
      min: 150, max: 380,
      checks: [
        { re: 'Dear Ms Hill,', ok: 'Riktig åpning med navn og komma.', bad: 'Start med «Dear Ms Hill,» – du vet navnet.' },
        { re: 'Yours sincerely,|Kind regards,', ok: 'Riktig avslutning når du vet navnet.', bad: 'Når du har brukt navnet, avslutter du med «Yours sincerely,» (eller «Kind regards,»).' },
        { re: 'weekend', f: 'i', ok: 'Du svarer på arbeidstiden.', bad: 'Annonsen nevner helger – si at du kan jobbe da.' },
        { re: 'for example|for instance', f: 'i', ok: 'Du gir eksempler.', bad: 'Gi minst ett konkret eksempel.' },
        { re: 'look forward to [a-z]+ing', f: 'i', lvl: 'tips', ok: '', bad: 'Tips: Avslutt med «I look forward to hearing from you.»' }
      ],
      criteria: ['Åpning og avslutning passer sammen', 'Service kommer fram', 'Konkrete eksempler', 'Når jeg kan jobbe'],
      model: 'Jonas Berg\njonas.berg@epost.no\n\n5 March 2027\n\nDear Ms Hill,\n\nI am writing to apply for the position of weekend team member at your cinema. I am spending a year in Brighton as an exchange student and would like a part-time job where I can meet people.\n\nI am 16 years old, friendly and quick, and I enjoy working with people. For example, I worked in the kiosk at my football club in Norway, where we often served long queues of hungry fans before matches. It taught me to stay calm and polite when things get busy.\n\nI am used to handling money and keeping things tidy, and I am happy to work late evenings. I also love films, so I would be able to give customers tips about what to watch.\n\nI am available every Saturday and Sunday. I look forward to hearing from you.\n\nYours sincerely,\nJonas Berg'
    },
    {
      id: 'en-full-sportscamp', lvl: 4, full: true, title: 'Full application: Junior leader at a sports camp',
      task: 'Annonse: «Sports camp in Cornwall is looking for junior leaders (16–18) for two weeks in July. You will help adult coaches run games and activities for children aged 7–12. We want energetic, patient people with sports experience. Contact: Mr Daniel Ross.» Skriv en hel søknad på engelsk.',
      skeleton: '[Your name]\n[Email]\n\n[Date]\n\nDear Mr Ross,\n\n[Opening]\n\n[About you: energetic, patient + example]\n\n[Sports and experience with children]\n\n[When you can work + interview]\n\nYours sincerely,\n[Name]',
      min: 150, max: 380,
      checks: [
        { re: 'Dear Mr Ross,', ok: 'Riktig åpning.', bad: 'Start med «Dear Mr Ross,».' },
        { re: 'Yours sincerely,|Kind regards,', ok: 'Riktig avslutning.', bad: 'Avslutt med «Yours sincerely,» når du har brukt navnet.' },
        { re: 'children|kids', f: 'i', ok: 'Du skriver om barna.', bad: 'Skriv om hvorfor du passer til å jobbe med barn.' },
        { re: 'patient', f: 'i', ok: 'Du svarer på «patient».', bad: 'Annonsen ser etter noen som er «patient» – vis det med et eksempel.' },
        { re: 'July', ok: 'Riktig: «July» med stor J.', bad: 'Månedsnavn har stor bokstav på engelsk: «July».' }
      ],
      criteria: ['Hele skjelettet er med', 'Erfaring med sport og barn', 'Eksempler på tålmodighet', 'Riktige datoer'],
      model: 'Jonas Berg\njonas.berg@epost.no\n\n20 March 2027\n\nDear Mr Ross,\n\nI am writing to apply for the position of junior leader at your sports camp in July. I saw the advertisement on your website, and it sounds like a great way to spend the summer.\n\nI am 16 years old and from Oslo, Norway. I am energetic and patient, and I enjoy spending time with children. For example, I help my eight-year-old cousin with his football skills every weekend, even when he gets frustrated.\n\nI have played football for ten years, and for the last year I have been an assistant coach for a team of eight-year-olds. I have learnt to give short, clear instructions and to make sure everyone is included.\n\nI am available for both weeks in July, and I have a valid passport. I would be happy to attend an interview by video.\n\nYours sincerely,\nJonas Berg'
    }
  );

  // More words for the automatic free-text check
  Object.assign(L.autocheck.misspell, {
    availible: 'available', avaliable: 'available', oportunity: 'opportunity', oppertunity: 'opportunity', experiance: 'experience',
    attatched: 'attached', reliabel: 'reliable', relyable: 'reliable', posision: 'position', intrested: 'interested', responsable: 'responsible',
    enviroment: 'environment', sincerly: 'sincerely', faithfuly: 'faithfully', apreciate: 'appreciate', comunication: 'communication'
  });
})();
