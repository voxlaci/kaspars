const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const languageButtons = document.querySelectorAll("[data-lang]");
const aiToggle = document.querySelector("[data-ai-toggle]");
const aiPanel = document.querySelector("[data-ai-toggle] + .ai-panel");
const aiClose = document.querySelector("[data-ai-close]");
const aiResponse = document.querySelector("[data-ai-response]");
const aiForm = document.querySelector("[data-ai-form]");
const shareButtons = document.querySelectorAll("[data-share]");
const shareMail = document.querySelector("[data-share-mail]");

const translations = {
  lv: {
    metaDescription: "Latviešu diriģenta Kaspara Putniņa mājaslapas koncepts: biogrāfija, mākslinieciskā darbība, ieraksti, preses materiāli un kontakti.",
    pageTitle: "Kaspars Putniņš | Diriģents",
    brandAria: "Kaspara Putniņa sākumlapa",
    languageAria: "Valodas izvēle",
    navBiography: "Biogrāfija",
    navPositions: "Amati",
    navRecordings: "Ieraksti",
    navPress: "Presei",
    navBooking: "Kontakti",
    heroEyebrow: "Diriģents | Mākslinieciskais vadītājs | Laikmetīgā kormūzika",
    heroLead: "Starptautiski novērtēts latviešu diriģents, kurš veido profesionālās kormūzikas skaņas, klusuma un izteiksmes nākotni.",
    heroPrimary: "Ieraksti",
    heroSecondary: "Uzaicināt Kasparu",
    portraitAlt: "Diriģenta Kaspara Putniņa portrets",
    keywordsAria: "Mākslinieciskie atslēgvārdi",
    noteSound: "Skaņa",
    noteSilence: "Klusums",
    noteSpace: "Telpa",
    noteTransformation: "Pārvērtība",
    introBand: "No Baltijas kordziedāšanas tradīcijas līdz jaunās mūzikas priekšplānam Putniņš veido priekšnesumus, kuros precizitāte, risks un atmosfēra kļūst par vienotu muzikālu valodu.",
    bioKicker: "Biogrāfija",
    bioTitle: "Balss dzīvam repertuāram.",
    bioP1: "Rīgā dzimušais Kaspars Putniņš studējis Latvijas Mūzikas akadēmijā un Gildholas Mūzikas un drāmas skolā Londonā. Viņa karjeru raksturo profesionālu koru vadība, cieša sadarbība ar komponistiem un konsekventa vēlme paplašināt priekšstatu par to, kas koris var būt.",
    bioP2: "Viņa darbs savieno renesanses skaidrību, pareizticīgo un Baltijas sakrālās tradīcijas, romantisma dziļumu un laikmetīgus skaņas meklējumus. Eiropā un ārpus tās Putniņš tiek aicināts veidot priekšnesumus, kuros koris kļūst par krāsas, elpas, arhitektūras un cilvēciskas klātbūtnes instrumentu.",
    positionsKicker: "Galvenie amati",
    positionsTitle: "Vadība profesionālās kormūzikas pasaulē.",
    since1994: "Kopš 1994",
    since2021: "Kopš 2021",
    latvianRadioChoir: "Latvijas Radio koris",
    epcc: "Igaunijas Filharmonijas kamerkoris",
    swedishRadioChoir: "Zviedrijas Radio koris",
    positionLRC: "Galvenais diriģents un kopš 2024. gada mākslinieciskais vadītājs. Viens no būtiskākajiem ansambļiem laikmetīgajā Baltijas kormūzikā.",
    positionEPCC: "Galvenais diriģents un mākslinieciskais vadītājs, tostarp godalgotu Arvo Pērta un Alfrēda Šnitkes ierakstu vadītājs.",
    positionSRC: "Galvenais diriģents vienam no Eiropas nozīmīgākajiem profesionālajiem koriem, turpinot Ērika Ēriksona un Tenu Kaljustes veidoto māksliniecisko līniju.",
    identityKicker: "Mākslinieciskā identitāte",
    identityTitle: "Repertuārs kā dzīva akustiska telpa.",
    repContemporaryTitle: "Laikmetīgā mūzika",
    repContemporaryText: "Arvo Pērts, Alfrēds Šnitke, Pēteris Vasks, Ēriks Ešenvalds, Baltijas komponisti un jaunas Eiropas balsis.",
    repSacredTitle: "Sakrālā skaņa",
    repSacredText: "Pareizticīgo repertuārs, Rahmaņinovs, Baltijas sakrālie darbi un mūsdienu garīgā mūzika.",
    repGuestTitle: "Viesdiriģēšana",
    repGuestText: "Sadarbība ar RIAS Kammerchor, SWR Vokalensemble, Collegium Vocale Gent, Nīderlandes Radio kori un citiem ansambļiem.",
    repEducationTitle: "Izglītība",
    repEducationText: "Meistarklases, darbnīcas un profesionāla apmācība diriģentiem, komponistiem un vokālajiem ansambļiem.",
    recordingsKicker: "Ieraksti",
    recordingsTitle: "Izcelti projekti un atzinība.",
    recordingPartTitle: "Arvo Pērts: Magnificat / Alfrēds Šnitke: Grēku nožēlas psalmi",
    recordingPartText: "Ierakstīts ar Igaunijas Filharmonijas kamerkori; guvis nozīmīgu starptautisku kritikas atzinību.",
    ongoing: "Pastāvīgi",
    catalog: "Katalogs",
    recordingNewTitle: "Jaunā kormūzika",
    recordingNewText: "Pirmatskaņojumi un ieraksti ar komponistiem Baltijas reģionā un plašākā laikmetīgās mūzikas laukā.",
    recordingCatalogText: "Plaša diskogrāfija ar eksperimentāliem darbiem, sakrālo repertuāru, Baltijas mūziku un starptautiskām sadarbībām.",
    pressKicker: "Presei",
    pressTitle: "Koncertorganizatoriem, festivāliem un medijiem.",
    pressBio: "Īsā biogrāfija",
    pressPhotos: "Augstas izšķirtspējas foto",
    pressRepertoire: "Izlases repertuārs",
    pressRider: "Tehniskā informācija",
    contactKicker: "Kontakti",
    contactTitle: "Viesdiriģēšana, meistarklases un mākslinieciski projekti.",
    formName: "Vārds",
    formEmail: "E-pasts",
    formProject: "Projekts",
    formMessage: "Ziņa",
    formButton: "Sagatavot pieprasījumu",
    projectGuest: "Viesdiriģēšana",
    projectMasterclass: "Meistarklase",
    projectFestival: "Festivāla uzstāšanās",
    projectRecording: "Ierakstu projekts",
    footerNote: "Personiskās mākslinieciskās pārstāvniecības mājaslapas koncepts. Biogrāfiskā informācija pārbaudīta pret 2026. gada publisku festivāla biogrāfiju.",
    shareAria: "Kopīgot šo lapu",
    shareLabel: "Kopīgot",
    shareNativeAria: "Kopīgot lapu",
    shareCopyAria: "Kopēt saiti",
    shareEmailAria: "Nosūtīt e-pastā",
    copiedMessage: "Saite nokopēta.",
    aiAria: "AI concierge",
    aiLauncher: "Jautāt",
    aiKicker: "AI concierge",
    aiTitle: "Jautājiet par Kasparu",
    aiCloseAria: "Aizvērt",
    aiSuggestionsAria: "Ieteiktie jautājumi",
    aiSuggestionBio: "Īsa biogrāfija",
    aiSuggestionBooking: "Kā uzaicināt?",
    aiSuggestionRecordings: "Ieraksti",
    aiWelcome: "Sveiki. Varu palīdzēt atrast biogrāfiju, ierakstus, preses materiālus vai kontaktu viesdiriģēšanai.",
    aiInputLabel: "Jautājums",
    aiPlaceholder: "Piemēram: kādi ir viņa galvenie amati?",
    aiButton: "Uzdot",
    aiFallback: "Šī informācija nav šajā mājaslapā. Atveru ārēju meklēšanas lapu ar jūsu jautājumu.",
    aiBioAnswer: "Kaspars Putniņš ir Rīgā dzimis latviešu diriģents, kura darbs saistīts ar profesionālu koru vadību, laikmetīgo kormūziku, sakrālajām tradīcijām un ciešu sadarbību ar komponistiem.",
    aiBookingAnswer: "Viesdiriģēšanai, meistarklasēm un mākslinieciskiem projektiem izmantojiet sadaļu Kontakti. Forma sagatavo e-pasta pieprasījumu ar izvēlēto projekta veidu.",
    aiRecordingsAnswer: "Ierakstu sadaļā izcelti projekti ar Igaunijas Filharmonijas kamerkori, tostarp Arvo Pērta un Alfrēda Šnitkes repertuārs, kā arī Latvijas Radio kora plašā diskogrāfija.",
    aiPositionsAnswer: "Mājaslapā minēti trīs galvenie amati: Latvijas Radio koris kopš 1994. gada, Igaunijas Filharmonijas kamerkoris 2014-2021 un Zviedrijas Radio koris kopš 2021. gada.",
    aiPressAnswer: "Preses sadaļa paredz īso biogrāfiju, augstas izšķirtspējas foto, izlases repertuāru un tehnisko informāciju koncertorganizatoriem, festivāliem un medijiem.",
    mailSubject: "Pieprasījums",
    mailName: "Vārds",
    mailEmail: "E-pasts",
    mailProject: "Projekts",
  },
  en: {
    metaDescription: "Official website concept for Latvian conductor Kaspars Putniņš: biography, artistic work, recordings, press resources and booking contacts.",
    pageTitle: "Kaspars Putniņš | Conductor",
    brandAria: "Kaspars Putniņš home",
    languageAria: "Language selection",
    navBiography: "Biography",
    navPositions: "Positions",
    navRecordings: "Recordings",
    navPress: "Press",
    navBooking: "Booking",
    heroEyebrow: "Conductor | Artistic Director | Contemporary Choral Music",
    heroLead: "An internationally respected Latvian conductor shaping the sound, silence and expressive future of professional choral performance.",
    heroPrimary: "Explore Recordings",
    heroSecondary: "Invite Kaspars",
    portraitAlt: "Portrait of conductor Kaspars Putniņš",
    keywordsAria: "Artistic keywords",
    noteSound: "Sound",
    noteSilence: "Silence",
    noteSpace: "Space",
    noteTransformation: "Transformation",
    introBand: "From the Baltic choral tradition to the front line of new music, Putniņš is known for building performances where precision, risk and atmosphere become one musical language.",
    bioKicker: "Biography",
    bioTitle: "A voice for living repertoire.",
    bioP1: "Born in Riga, Latvia, Kaspars Putniņš studied at the Latvian Academy of Music and the Guildhall School of Music and Drama in London. His career has been defined by professional choir leadership, close collaboration with composers and a sustained commitment to expanding what a choir can be.",
    bioP2: "His work connects Renaissance clarity, Orthodox and Baltic sacred traditions, Romantic depth and contemporary sonic experimentation. Across Europe and beyond, he is sought out for performances that treat the choir as an instrument of color, breath, architecture and human presence.",
    positionsKicker: "Major Positions",
    positionsTitle: "Leadership across the professional choral world.",
    since1994: "Since 1994",
    since2021: "Since 2021",
    latvianRadioChoir: "Latvian Radio Choir",
    epcc: "Estonian Philharmonic Chamber Choir",
    swedishRadioChoir: "Swedish Radio Choir",
    positionLRC: "Chief Conductor, and Artistic Director since 2024. A central ensemble in contemporary Baltic choral culture.",
    positionEPCC: "Chief Conductor and Artistic Director, including award-winning recordings of Arvo Pärt and Alfred Schnittke.",
    positionSRC: "Chief Conductor of one of Europe’s defining professional choirs, continuing a lineage shaped by Eric Ericson and Tõnu Kaljuste.",
    identityKicker: "Artistic Identity",
    identityTitle: "Repertoire as a living acoustic space.",
    repContemporaryTitle: "Contemporary Music",
    repContemporaryText: "Arvo Pärt, Alfred Schnittke, Pēteris Vasks, Ēriks Ešenvalds, Baltic composers and new European voices.",
    repSacredTitle: "Sacred Sound",
    repSacredText: "Orthodox repertoire, Rachmaninoff, Baltic sacred works and modern spiritual music.",
    repGuestTitle: "Guest Conducting",
    repGuestText: "Collaborations with RIAS Kammerchor, SWR Vokalensemble, Collegium Vocale Gent, Netherlands Radio Choir and more.",
    repEducationTitle: "Education",
    repEducationText: "Masterclasses, workshops and professional training for conductors, composers and vocal ensembles.",
    recordingsKicker: "Recordings",
    recordingsTitle: "Featured projects and recognition.",
    recordingPartTitle: "Arvo Pärt: Magnificat / Alfred Schnittke: Psalms of Repentance",
    recordingPartText: "Recorded with the Estonian Philharmonic Chamber Choir; recognized with major international critical acclaim.",
    ongoing: "Ongoing",
    catalog: "Catalog",
    recordingNewTitle: "New Choral Music",
    recordingNewText: "Premieres and recordings with composers across the Baltic region and wider contemporary music field.",
    recordingCatalogText: "A broad discography spanning experimental works, sacred repertoire, Baltic music and international collaborations.",
    pressKicker: "Press Kit",
    pressTitle: "For presenters, festivals and media.",
    pressBio: "Short Biography",
    pressPhotos: "High-Resolution Photos",
    pressRepertoire: "Selected Repertoire",
    pressRider: "Technical Rider",
    contactKicker: "Booking",
    contactTitle: "Guest conducting, masterclasses and artistic projects.",
    formName: "Name",
    formEmail: "Email",
    formProject: "Project",
    formMessage: "Message",
    formButton: "Prepare Inquiry",
    projectGuest: "Guest conducting",
    projectMasterclass: "Masterclass",
    projectFestival: "Festival appearance",
    projectRecording: "Recording project",
    footerNote: "Website concept for personal artistic representation. Biographical claims checked against 2026 public festival biography.",
    shareAria: "Share this page",
    shareLabel: "Share",
    shareNativeAria: "Share page",
    shareCopyAria: "Copy link",
    shareEmailAria: "Send by email",
    copiedMessage: "Link copied.",
    aiAria: "AI concierge",
    aiLauncher: "Ask AI",
    aiKicker: "AI concierge",
    aiTitle: "Ask about Kaspars",
    aiCloseAria: "Close",
    aiSuggestionsAria: "Suggested questions",
    aiSuggestionBio: "Short biography",
    aiSuggestionBooking: "How to invite?",
    aiSuggestionRecordings: "Recordings",
    aiWelcome: "Hello. I can help with biography, recordings, press resources, or guest-conducting contact details.",
    aiInputLabel: "Question",
    aiPlaceholder: "For example: what are his main positions?",
    aiButton: "Ask",
    aiFallback: "That information is not on this website. I am opening an external search page with your question.",
    aiBioAnswer: "Kaspars Putniņš is a Latvian conductor born in Riga, known for professional choir leadership, contemporary choral music, sacred traditions and close collaboration with composers.",
    aiBookingAnswer: "For guest conducting, masterclasses and artistic projects, use the Booking section. The form prepares an email inquiry with the selected project type.",
    aiRecordingsAnswer: "The recordings section highlights projects with the Estonian Philharmonic Chamber Choir, including Arvo Pärt and Alfred Schnittke repertoire, plus the Latvian Radio Choir’s broad discography.",
    aiPositionsAnswer: "The website lists three major positions: Latvian Radio Choir since 1994, Estonian Philharmonic Chamber Choir from 2014-2021 and Swedish Radio Choir since 2021.",
    aiPressAnswer: "The press section is designed for short biography, high-resolution photos, selected repertoire and technical information for presenters, festivals and media.",
    mailSubject: "Booking inquiry",
    mailName: "Name",
    mailEmail: "Email",
    mailProject: "Project",
  },
};

let currentLanguage = localStorage.getItem("kaspars-language") || "lv";
const fallbackSearchBase = "https://www.google.com/search?q=";

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

const setAttributes = (element, dictionary) => {
  const attributeMap = element.dataset.i18nAttr.split(",");

  attributeMap.forEach((pair) => {
    const [attribute, key] = pair.split(":").map((part) => part.trim());
    if (dictionary[key]) {
      element.setAttribute(attribute, dictionary[key]);
    }
  });
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.lv;
  currentLanguage = language;
  localStorage.setItem("kaspars-language", language);

  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    setAttributes(element, dictionary);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateShareLinks();
};

const getDictionary = () => translations[currentLanguage] || translations.lv;

const updateShareLinks = () => {
  if (!shareMail) return;

  const url = window.location.href;
  const subject = encodeURIComponent("Kaspars Putniņš");
  const body = encodeURIComponent(url);
  shareMail.href = `mailto:?subject=${subject}&body=${body}`;
};

const setAiOpen = (isOpen) => {
  aiPanel.hidden = !isOpen;
  aiToggle.setAttribute("aria-expanded", String(isOpen));
};

const writeAiResponse = (message) => {
  aiResponse.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  aiResponse.appendChild(paragraph);
};

const openExternalQuestion = (question) => {
  const query = encodeURIComponent(`Kaspars Putniņš ${question}`);
  window.open(`${fallbackSearchBase}${query}`, "_blank", "noopener,noreferrer");
};

const answerQuestion = (rawQuestion) => {
  const dictionary = getDictionary();
  const question = rawQuestion.toLowerCase();

  if (/(bio|biogr|dzim|born|riga|rīga|who|kas ir|quem)/i.test(question)) {
    return dictionary.aiBioAnswer;
  }

  if (/(book|booking|invite|contact|kontak|uzaicin|masterclass|meistarklas|festival|convid|contrat)/i.test(question)) {
    return dictionary.aiBookingAnswer;
  }

  if (/(record|recording|ierak|album|disc|gramophone|pärt|part|schnittke|šnitke)/i.test(question)) {
    return dictionary.aiRecordingsAnswer;
  }

  if (/(position|amati|choir|koris|radio|swedish|estonian|latvian|zviedrij|igaun|latvijas)/i.test(question)) {
    return dictionary.aiPositionsAnswer;
  }

  if (/(press|presei|photo|foto|repertoire|rider|media|festival)/i.test(question)) {
    return dictionary.aiPressAnswer;
  }

  return "";
};

const handleAiQuestion = (question) => {
  const trimmedQuestion = question.trim();
  if (!trimmedQuestion) return;

  const dictionary = getDictionary();
  const localAnswer = answerQuestion(trimmedQuestion);

  if (localAnswer) {
    writeAiResponse(localAnswer);
    return;
  }

  writeAiResponse(dictionary.aiFallback);
  openExternalQuestion(trimmedQuestion);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
setLanguage(currentLanguage);

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

aiToggle.addEventListener("click", () => {
  setAiOpen(aiPanel.hidden);
});

aiClose.addEventListener("click", () => {
  setAiOpen(false);
});

document.querySelectorAll("[data-ai-question]").forEach((button) => {
  button.addEventListener("click", () => {
    const questionType = button.dataset.aiQuestion;
    const dictionary = getDictionary();
    const answers = {
      bio: dictionary.aiBioAnswer,
      booking: dictionary.aiBookingAnswer,
      recordings: dictionary.aiRecordingsAnswer,
    };

    writeAiResponse(answers[questionType] || dictionary.aiFallback);
  });
});

aiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  handleAiQuestion(String(data.get("question") || ""));
});

shareButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const dictionary = getDictionary();
    const url = window.location.href;

    try {
      if (button.dataset.share === "native" && navigator.share) {
        await navigator.share({
          title: document.title,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      writeAiResponse(dictionary.copiedMessage);
      setAiOpen(true);
    } catch {
      window.location.href = `mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(url)}`;
    }
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const dictionary = translations[currentLanguage] || translations.lv;
  const subject = encodeURIComponent(`${dictionary.mailSubject}: ${data.get("project")}`);
  const body = encodeURIComponent(
    `${dictionary.mailName}: ${data.get("name") || ""}\n${dictionary.mailEmail}: ${data.get("email") || ""}\n${dictionary.mailProject}: ${data.get("project") || ""}\n\n${data.get("message") || ""}`
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
