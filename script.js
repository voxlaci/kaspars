const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const languageButtons = document.querySelectorAll("[data-lang]");

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
    photoCredit: "Foto avots: Tenso Europe Chamber Choir",
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
    photoCredit: "Photo source: Tenso Europe Chamber Choir",
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
    mailSubject: "Booking inquiry",
    mailName: "Name",
    mailEmail: "Email",
    mailProject: "Project",
  },
};

let currentLanguage = localStorage.getItem("kaspars-language") || "lv";

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
