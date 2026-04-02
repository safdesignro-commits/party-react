import { getPayload } from 'payload'
import config from './src/payload.config'

async function seed() {
  const payload = await getPayload({ config })

  // ============================================================
  // 1. SERVICES
  // ============================================================
  console.log('Seeding services...')

  // Delete existing services
  await payload.delete({ collection: 'services', where: { id: { exists: true } } })

  const services = [
    // ──────────────────────────────────────────────
    // 1. Cabina Foto București (Showcase)
    // ──────────────────────────────────────────────
    {
      title: 'Cabina Foto București — Photo Booth Premium',
      slug: 'cabina-foto-bucuresti',
      layoutType: 'showcase' as const,
      isActive: true,
      hero: {
        badge: 'Nr. 1 în București',
        badgeColor: 'magenta' as const,
        title: 'Cabina Foto București — Photo Booth Premium',
        highlight: 'Premium',
        description:
          'Transformă orice eveniment într-o experiență de neuitat cu cabina foto PartyPixel. Printuri nelimitate, GIF-uri amuzante, magneți personalizați și partajare digitală instantanee. Peste 2000 de evenimente organizate cu succes în București și împrejurimi.',
        image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
      },
      seo: {
        metaTitle: 'Cabina Foto București — Închiriere Photo Booth Premium 2026',
        metaDescription:
          'Închiriază cabina foto în București de la 250 lei/oră. Printuri nelimitate, GIF-uri, magneți, share digital. Transport gratuit în București și Ilfov. 2000+ evenimente.',
      },
      stats: [
        { value: '2000+', label: 'Evenimente' },
        { value: '10+', label: 'Ani' },
        { value: '100+', label: 'Template-uri' },
        { value: '∞', label: 'Printuri Nelimitate' },
      ],
      steps: [
        {
          title: 'Alegem Designul',
          description: 'Alegem împreună designul și fundalul potrivit pentru evenimentul tău.',
        },
        {
          title: 'Setup Complet',
          description: 'Setup complet cu 1h înainte de eveniment, fără nicio grijă din partea ta.',
        },
        {
          title: 'Distracție Toată Seara',
          description: 'Fotografii și printuri nelimitate toată seara pentru toți invitații.',
        },
      ],
      features: [
        {
          icon: 'printer',
          title: 'Printuri Nelimitate',
          description:
            'Fotografii printate pe loc, nelimitat, pe toată durata evenimentului. Format personalizat.',
        },
        {
          icon: 'palette',
          title: 'Grafică Personalizată',
          description:
            'Design unic pentru fiecare eveniment — overlay-uri, rame și template-uri adaptate temei tale.',
        },
        {
          icon: 'video',
          title: 'GIF-uri & Boomerang',
          description:
            'Creează GIF-uri animate și boomerang-uri amuzante, partajabile instant pe social media.',
        },
        {
          icon: 'magnet',
          title: 'Magneți Personalizați',
          description:
            'Fotografii pe magneți de frigider — un suvenir practic și memorabil pentru invitați.',
        },
        {
          icon: 'phone-share',
          title: 'Share Digital Instant',
          description:
            'Partajare instantanee prin QR code sau e-mail. Galerie online privată pentru eveniment.',
        },
        {
          icon: 'mask',
          title: 'Props & Accesorii',
          description:
            'Colecție de 50+ accesorii tematice incluse: ochelari, pălării, mesaje personalizate.',
        },
      ],
      gallery: [
        {
          src: '/media/edited/cabina-foto-photo-booth/04-cabina-foto-print-instantaneu-nunta.jpeg',
          alt: 'Print instantaneu la nuntă',
        },
        {
          src: '/media/edited/cabina-foto-photo-booth/13-cabina-foto-eveniment-cu-invitati-lateral.jpeg',
          alt: 'Cabina foto cu invitați',
        },
        {
          src: '/media/edited/cabina-foto-photo-booth/24-setup-cabina-foto-sala-eleganta-props.jpeg',
          alt: 'Setup cabina foto sala elegantă',
        },
      ],
      faq: [
        {
          question: 'Cât costă închirierea unei cabine foto în București?',
          answer:
            'Prețurile pornesc de la 250 lei/oră. Pachetele includ printuri nelimitate, grafică personalizată, props și transport gratuit în București și Ilfov.',
        },
        {
          question: 'Ce este inclus în pachetul standard?',
          answer:
            'Pachetul standard include cabina foto, operator dedicat, printuri nelimitate, galerie online, props tematice și transport gratuit în București.',
        },
        {
          question: 'Cu cât timp înainte trebuie să rezerv?',
          answer:
            'Recomandăm rezervarea cu minim 2-4 săptămâni înainte, în special pentru weekend-uri. Pentru evenimente în sezonul nunților (mai-octombrie), rezervă cu 2-3 luni înainte.',
        },
        {
          question: 'Puteți veni și în afara Bucureștiului?',
          answer:
            'Da, acoperim toată România. Transportul este gratuit în București și Ilfov. Pentru alte locații se aplică o taxă de deplasare accesibilă.',
        },
      ],
      formDefaults: { serviceName: 'Cabina Foto Clasică' },
    },

    // ──────────────────────────────────────────────
    // 2. Cabina Foto AI București (Showcase)
    // ──────────────────────────────────────────────
    {
      title: 'AI Photo Booth București',
      slug: 'cabina-foto-ai-bucuresti',
      layoutType: 'showcase' as const,
      isActive: true,
      hero: {
        badge: 'NOU 2026',
        badgeColor: 'teal' as const,
        title: 'AI Photo Booth București',
        highlight: 'AI Photo Booth',
        description:
          'Cea mai inovatoare experiență foto din România! AI Photo Booth-ul nostru folosește inteligența artificială pentru a transforma fotografiile invitaților în opere de artă. Peste 100 de filtre AI — de la portrete renascentiste la supereroi, anime și stiluri futuriste. Procesare în doar 20-25 secunde!',
        image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
      },
      seo: {
        metaTitle: 'Cabina Foto AI București — AI Photo Booth 2026',
        metaDescription:
          'AI Photo Booth în București — 100+ filtre AI, transformări artistice în 20-25 secunde. Tehnologie NOU 2026. Cea mai nouă atracție la evenimente.',
      },
      stats: [
        { value: '100+', label: 'Filtre AI' },
        { value: '20-25s', label: 'Procesare' },
        { value: '2in1', label: 'Print AI + Original' },
        { value: 'QR', label: 'Share Instant' },
      ],
      steps: [
        {
          title: 'Alege Filtrul AI',
          description:
            'Invitații aleg dintr-o gamă de peste 100 de filtre AI — supereroi, anime, portrete clasice, futuristic și multe altele.',
        },
        {
          title: 'Transformare în 20s',
          description:
            'Inteligența artificială procesează fotografia în doar 20-25 secunde, creând o transformare unică.',
        },
        {
          title: 'Print & Share',
          description:
            'Primești atât fotografia originală cât și versiunea AI — pe print și digital prin QR code.',
        },
      ],
      features: [
        {
          icon: 'sparkle-ai',
          title: '100+ Filtre AI',
          description:
            'Supereroi, anime, portrete clasice, stil cartoon, futuristic, fantasy — fiecare filtru creează o transformare unică și surprinzătoare.',
        },
        {
          icon: 'clock-fast',
          title: '20-25 Secunde Procesare',
          description:
            'Inteligența artificială procesează fiecare fotografie în doar 20-25 secunde. Rezultatul este printat și trimis digital instant.',
        },
        {
          icon: 'printer',
          title: 'Print AI + Original',
          description:
            'Primești atât fotografia originală cât și versiunea transformată de AI — pe print sau digital.',
        },
        {
          icon: 'phone-share',
          title: 'Share Digital Instant',
          description:
            'QR code pentru descărcare instantanee pe telefon. Perfect pentru distribuire pe social media.',
        },
        {
          icon: 'target',
          title: 'Personalizare Completă',
          description:
            'Alege filtrele potrivite pentru evenimentul tău sau lasă invitații să exploreze toate opțiunile.',
        },
        {
          icon: 'sparkles',
          title: 'Efect WOW Garantat',
          description:
            'Invitații vor fi fascinați de transformările AI. Cea mai comentată atracție de la orice eveniment.',
        },
      ],
      gallery: [
        {
          src: '/media/edited/cabina-foto-ai/26-cabina-foto-closeup-ecran-fundal-craciun.jpeg',
          alt: 'AI Photo Booth ecran closeup',
        },
        {
          src: '/media/edited/cabina-foto-ai/30-cabina-foto-alba-led-closeup-galerie.jpeg',
          alt: 'Cabina foto AI LED galerie',
        },
        {
          src: '/media/edited/cabina-foto-photo-booth/09-cabina-foto-ecran-touchscreen-closeup.jpeg',
          alt: 'Ecran touchscreen cabina foto AI',
        },
      ],
      faq: [
        {
          question: 'Cât durează procesarea AI a unei fotografii?',
          answer:
            'Fiecare transformare AI durează între 20-25 secunde. Invitatul primește poza printată și/sau pe telefon imediat după.',
        },
        {
          question: 'Câte filtre AI sunt disponibile?',
          answer:
            'Peste 100 de filtre AI, organizate pe categorii: supereroi, anime, stil clasic, futuristic, fantasy, cartoon și multe altele. Poți alege filtrele potrivite pentru evenimentul tău.',
        },
        {
          question: 'Funcționează bine cu grupuri mari?',
          answer:
            'Da! AI-ul poate procesa fotografii cu grupuri de până la 4-5 persoane. Transformările sunt spectaculoase și la nivel de grup.',
        },
        {
          question: 'Necesită conexiune la internet?',
          answer:
            'Da, AI Photo Booth-ul necesită conexiune la internet pentru procesarea imaginilor. Venim echipați cu router 4G/5G propriu pentru orice locație.',
        },
      ],
      formDefaults: { serviceName: 'AI Photo Booth' },
    },

    // ──────────────────────────────────────────────
    // 3. Selfie 360° Video Booth (Showcase)
    // ──────────────────────────────────────────────
    {
      title: 'Selfie 360° Video Booth București',
      slug: 'video-booth-selfie-360-bucuresti',
      layoutType: 'showcase' as const,
      isActive: true,
      hero: {
        badge: 'Video 360°',
        badgeColor: 'magenta' as const,
        title: 'Selfie 360° Video Booth București',
        highlight: '360°',
        description:
          'Platforma rotativă de 1 metru care filmează 360° în slow motion sau fast motion. Confetti inclus, iluminare profesională și partajare instant prin QR code. Videoclipurile devin virale pe TikTok și Instagram — garantat cel mai comentat moment al serii!',
        image: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg',
      },
      seo: {
        metaTitle: 'Selfie 360° București — Video Booth Slow Motion & Fast Motion',
        metaDescription:
          'Selfie 360° în București. Platformă rotativă 1m, slow/fast motion, confetti inclus, partajare QR instant. Cel mai viral serviciu la petreceri!',
      },
      stats: [
        { value: '360°', label: 'Filmare Completă' },
        { value: '1m', label: 'Platformă' },
        { value: 'QR', label: 'Share Instant' },
        { value: '∞', label: 'Videoclipuri' },
      ],
      steps: [
        {
          title: 'Urci pe Platformă',
          description:
            'Invitații urcă pe platforma rotativă de 1 metru — încap confortabil 2-3 persoane.',
        },
        {
          title: 'Filmare 360°',
          description:
            'Camera se rotește în jurul tău, filmând în slow motion sau fast motion cu confetti inclus.',
        },
        {
          title: 'Share Instant',
          description:
            'Scanează QR-ul și primești videoclipul pe telefon în 10 secunde. Postează direct pe social media.',
        },
      ],
      features: [
        {
          icon: 'video',
          title: 'Slow & Fast Motion',
          description:
            'Alege între slow motion dramatic sau fast motion amuzant. Ambele moduri creează videoclipuri spectaculoase.',
        },
        {
          icon: 'target',
          title: 'Platformă Rotativă 1m',
          description:
            'Platformă de 1 metru diametru cu lumini LED integrate. Încap confortabil 2-3 persoane simultan.',
        },
        {
          icon: 'sparkles',
          title: 'Confetti Inclus',
          description:
            'Confetti colorate lansate automat pentru efect dramatic. Fiecare videoclip devine spectacular.',
        },
        {
          icon: 'phone-share',
          title: 'QR Sharing Instant',
          description:
            'Scanează QR-ul și primești videoclipul pe telefon în 10 secunde. Postează-l direct pe social media.',
        },
        {
          icon: 'sparkle-ai',
          title: 'Iluminare LED Ring',
          description:
            'Lumină profesională LED ring light pentru un look perfect în orice condiții de iluminare.',
        },
        {
          icon: 'dance',
          title: 'Muzică de Fundal',
          description:
            'Fiecare videoclip vine cu muzică de fundal sincronizată. Alege din playlist-ul nostru sau adaugă melodia ta.',
        },
      ],
      gallery: [
        {
          src: '/media/edited/video-360/01-platforma-video360-exterior-gradina-nunta.jpeg',
          alt: 'Video 360 exterior grădină nuntă',
        },
        {
          src: '/media/edited/video-360/05-platforma-video360-eveniment-corporate-hotel.jpeg',
          alt: 'Video 360 eveniment corporate',
        },
        {
          src: '/media/edited/video-360/02-video360-cu-litere-volumetrice-nunta-exterior.jpeg',
          alt: 'Video 360 cu litere volumetrice',
        },
      ],
      faq: [
        {
          question: 'Câte persoane încap pe platformă?',
          answer:
            'Platforma de 1 metru poate acomoda confortabil 2-3 persoane simultan. Pentru grupuri mai mari, recomandăm runde succesive.',
        },
        {
          question: 'Cum primesc invitații videoclipul?',
          answer:
            'Prin QR code — scanează și primești videoclipul pe telefon în 10 secunde. Poate fi distribuit direct pe TikTok, Instagram sau WhatsApp.',
        },
        {
          question: 'Este inclus confetti?',
          answer:
            'Da, confetti colorat este inclus în pachetul standard. Putem personaliza culorile confetti-ului în funcție de tema evenimentului.',
        },
      ],
      formDefaults: { serviceName: 'Selfie 360' },
    },

    // ──────────────────────────────────────────────
    // 4. Oglinda Magică București (Showcase)
    // ──────────────────────────────────────────────
    {
      title: 'Oglinda Magică București',
      slug: 'oglinda-magica-bucuresti',
      layoutType: 'showcase' as const,
      isActive: true,
      hero: {
        badge: 'Experiență Unică',
        badgeColor: 'gold' as const,
        title: 'Oglinda Magică București',
        highlight: 'Magică',
        description:
          'Oglinda Magică aduce un plus de eleganță și rafinament oricărui eveniment. Cu un design retro sofisticat, ecran touch interactiv și mod portret full-body, este alegerea perfectă pentru nunți, recepții elegante și gale. Invitații interacționează cu animații pe ecran și primesc fotografii de înaltă calitate.',
        image: '/media/edited/oglinda-magica-magic-mirror/03-oglinda-magica-led-neon-interior-noapte.jpeg',
      },
      seo: {
        metaTitle: 'Oglinda Magică București — Magic Mirror Photo Booth Elegant',
        metaDescription:
          'Oglinda Magică în București. Design retro elegant, ecran touch, mod portret, animații interactive. Perfectă pentru nunți și evenimente elegante.',
      },
      stats: [
        { value: 'Full-Body', label: 'Mod Portret' },
        { value: 'Touch', label: 'Ecran Interactiv' },
        { value: 'Premium', label: 'Printuri' },
        { value: '∞', label: 'Fotografii' },
      ],
      steps: [
        {
          title: 'Interacțiune pe Ecran',
          description:
            'Invitații sunt ghidați de animații interactive pe ecranul tactil — mesaje personalizate și efecte vizuale.',
        },
        {
          title: 'Fotografiere Full-Body',
          description:
            'Oglinda Magică surprinde invitații din cap până în picioare, în mod portret elegant.',
        },
        {
          title: 'Print & Semnătură',
          description:
            'Invitații pot semna pe ecran, iar fotografia se printează pe loc cu grafică personalizată.',
        },
      ],
      features: [
        {
          icon: 'sparkles',
          title: 'Design Retro Elegant',
          description:
            'Cadru elegant cu finisaje premium care se integrează perfect la evenimente rafinate. Un element decorativ în sine.',
        },
        {
          icon: 'mirror',
          title: 'Ecran Touch Interactiv',
          description:
            'Animații interactive pe ecran care ghidează invitații prin experiență. Mesaje personalizate și efecte vizuale.',
        },
        {
          icon: 'camera',
          title: 'Mod Portret Full-Body',
          description:
            'Spre deosebire de cabina foto clasică, Oglinda Magică surprinde invitații din cap până în picioare.',
        },
        {
          icon: 'printer',
          title: 'Printuri Premium',
          description:
            'Fotografii de înaltă calitate printate pe loc cu grafică personalizată pentru evenimentul tău.',
        },
        {
          icon: 'mail',
          title: 'Semnături pe Ecran',
          description:
            'Invitații pot semna și scrie mesaje direct pe ecranul tactil, adăugând un touch personal fiecărei fotografii.',
        },
        {
          icon: 'mask',
          title: 'Animații Elegante',
          description:
            'Efecte vizuale sofisticate — confetti digital, rame animate și tranziții fluide între fotografii.',
        },
      ],
      gallery: [
        {
          src: '/media/edited/oglinda-magica-magic-mirror/01-oglinda-magica-setup-exterior-gradina.jpeg',
          alt: 'Oglinda magică exterior grădină',
        },
        {
          src: '/media/edited/oglinda-magica-magic-mirror/02-oglinda-magica-ecran-mare-exterior-terasa.jpeg',
          alt: 'Oglinda magică terasă',
        },
        {
          src: '/media/edited/oglinda-magica-magic-mirror/08-oglinda-magica-ecran-mare-eveniment-noapte.jpeg',
          alt: 'Oglinda magică eveniment noapte',
        },
      ],
      faq: [
        {
          question: 'Care este diferența dintre Oglinda Magică și cabina foto clasică?',
          answer:
            'Oglinda Magică oferă fotografii full-body (portret), ecran tactil interactiv cu animații și un design mai elegant. Cabina foto clasică este mai compactă și oferă fotografii bust.',
        },
        {
          question: 'Cât spațiu necesită Oglinda Magică?',
          answer:
            'Oglinda Magică necesită aproximativ 2x2.5 metri. Este mai subțire decât o cabină foto tradițională și se integrează elegant în orice locație.',
        },
        {
          question: 'Pot invitații să scrie mesaje pe ecran?',
          answer:
            'Da! Invitații pot semna, scrie mesaje sau desena direct pe ecranul tactil. Mesajele apar pe fotografia printată — un guestbook interactiv.',
        },
      ],
      formDefaults: { serviceName: 'Oglinda Magică' },
    },

    // ──────────────────────────────────────────────
    // 5. Fum Greu Gheață Carbonică (Atmosphere)
    // ──────────────────────────────────────────────
    {
      title: 'Fum Greu Gheață Carbonică București',
      slug: 'fum-greu-gheata-carbonica',
      layoutType: 'atmosphere' as const,
      isActive: true,
      hero: {
        badge: 'Efect Premium',
        badgeColor: 'teal' as const,
        title: 'Fum Greu Gheață Carbonică București',
        highlight: 'Gheață Carbonică',
        description:
          'Creează un moment magic la dansul mirilor cu fum greu din gheață carbonică sau sistem CO2. Fumul rămâne la nivelul solului, creând iluzia că dansați pe nori. Complet sigur, fără miros și fără a declanșa alarma de incendiu. Un efect vizual de vis pentru fotografii spectaculoase.',
        image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
      },
      seo: {
        metaTitle: 'Fum Greu Gheață Carbonică București — Efect Dans Mirilor',
        metaDescription:
          'Fum greu cu gheață carbonică și sistem CO2 în București. Efect spectaculos pentru dansul mirilor. Fără miros, sigur 100%. De la 350 lei.',
      },
      steps: [
        {
          title: 'Alegi momentul',
          description:
            'Stabilim împreună momentul perfect — dansul mirilor, intrarea în sală sau deschiderea tortului.',
        },
        {
          title: 'Instalăm echipamentul',
          description:
            'Tehnicianul nostru pregătește sistemul de gheață carbonică sau CO2 discret, fără a deranja evenimentul.',
        },
        {
          title: 'Magia începe',
          description:
            'La semnalul dat, fumul greu inundă ringul de dans — senzația că dansați pe nori.',
        },
      ],
      features: [],
      gallery: [],
      faq: [
        {
          question: 'Fumul greu declanșează alarma de incendiu?',
          answer:
            'Nu. Fumul din gheață carbonică sau CO2 nu declanșează senzorii de fum. Este sigur pentru orice locație interior sau exterior.',
        },
        {
          question: 'Cât durează efectul de fum greu?',
          answer:
            'O sesiune de fum greu durează 3-5 minute, perfect pentru dansul mirilor. Putem repeta efectul de mai multe ori pe parcursul serii.',
        },
        {
          question: 'Este sigur pentru copii și persoane cu astm?',
          answer:
            'Da, fumul este complet netoxic, fără miros și fără substanțe chimice. Se disipează rapid și nu irită căile respiratorii.',
        },
      ],
      formDefaults: { serviceName: 'Fum Greu' },
      experienceImage: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg',
      experienceFacts: [
        { icon: 'clock', label: 'Durată: 3-5 min' },
        { icon: 'shield', label: '100% Sigur' },
        { icon: 'wind', label: 'Fără miros' },
      ],
      comboUpsell: {
        title: 'Combină cu Artificii Spark',
        description:
          'Fum greu + artificii spark = cel mai spectaculos efect vizual pentru dansul mirilor. Scântei strălucitoare deasupra unui covor de fum.',
        services: [
          {
            name: 'Fum Greu',
            href: '/fum-greu-gheata-carbonica/',
            image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
          },
          {
            name: 'Artificii Spark',
            href: '/artificii-spark-nunta-bucuresti/',
            image: '/media/services/artificii-nunta-1.jpeg',
          },
        ],
      },
    },

    // ──────────────────────────────────────────────
    // 6. Artificii Spark Nuntă (Atmosphere)
    // ──────────────────────────────────────────────
    {
      title: 'Artificii Spark Nuntă București',
      slug: 'artificii-spark-nunta-bucuresti',
      layoutType: 'atmosphere' as const,
      isActive: true,
      hero: {
        badge: 'Spectacol de Lumini',
        badgeColor: 'gold' as const,
        title: 'Artificii Spark Nuntă București',
        highlight: 'Artificii Spark',
        description:
          'Artificii reci (cold sparks) care creează un spectacol vizual uimitor fără riscuri. Temperatura maximă de doar 60°C le face sigure pentru interior — fără pericol de incendiu, fără fum și fără miros. Folosite la intrarea mirilor, dansul mirilor sau tăierea tortului.',
        image: '/media/services/artificii-nunta-1.jpeg',
        video: '/media/videos/artificii-da.mp4',
      },
      seo: {
        metaTitle: 'Artificii Spark Nuntă București — Artificii Reci Interior',
        metaDescription:
          'Artificii spark reci pentru nunți în București. Sigure în interior, max 60°C, fără fum. Perfecte pentru intrare, dans, tort. De la 300 lei.',
      },
      steps: [
        {
          title: 'Alegem poziția',
          description:
            'Stabilim unde amplasăm cascadele de scântei — de-a lungul culoarului, lângă ringul de dans sau în jurul tortului.',
        },
        {
          title: 'Setăm înălțimea',
          description:
            'Tehnicianul reglează înălțimea scânteilor între 1 și 4 metri, în funcție de locație și efectul dorit.',
        },
        {
          title: 'Spectacolul începe',
          description:
            'La momentul potrivit, cascadele de scântei luminează sala — sincronizate perfect cu muzica.',
        },
      ],
      features: [],
      gallery: [],
      faq: [
        {
          question: 'Artificiile spark sunt sigure pentru interior?',
          answer:
            'Da, 100%. Scânteile ating maxim 60°C și se sting înainte de a atinge solul. Nu produc fum, nu lasă reziduuri și nu declanșează alarme.',
        },
        {
          question: 'Cât de înalte sunt scânteile?',
          answer:
            'Înălțimea poate fi reglată între 1 și 4 metri. Tehnicianul nostru ajustează înălțimea în funcție de locație și momentul evenimentului.',
        },
        {
          question: 'Pot fi combinate cu fumul greu?',
          answer:
            'Da! Combinația artificii spark + fum greu creează un efect vizual spectaculos — scântei strălucitoare deasupra unui covor de fum. Cea mai populară combinație pentru dansul mirilor.',
        },
      ],
      formDefaults: { serviceName: 'Artificii Spark' },
      experienceImage: '/media/edited/Evenimente-events/11-eveniment-nunta-fum-artificii.jpeg',
      experienceFacts: [
        { icon: 'fire', label: 'Indoor Safe' },
        { icon: 'clock', label: '10-15 sec/cascadă' },
        { icon: 'shield', label: 'Fără fum' },
      ],
      comboUpsell: {
        title: 'Combină cu Fum Greu',
        description:
          'Artificii spark + fum greu = cel mai spectaculos efect vizual pentru dansul mirilor. Scântei strălucitoare deasupra unui covor de fum.',
        services: [
          {
            name: 'Artificii Spark',
            href: '/artificii-spark-nunta-bucuresti/',
            image: '/media/services/artificii-nunta-1.jpeg',
          },
          {
            name: 'Fum Greu',
            href: '/fum-greu-gheata-carbonica/',
            image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
          },
        ],
      },
    },

    // ──────────────────────────────────────────────
    // 7. Baloane cu Fum (Atmosphere)
    // ──────────────────────────────────────────────
    {
      title: 'Baloane cu Fum București',
      slug: 'baloane-cu-fum-bucuresti',
      layoutType: 'atmosphere' as const,
      isActive: true,
      hero: {
        badge: 'Efect WOW',
        badgeColor: 'magenta' as const,
        title: 'Baloane cu Fum București',
        highlight: 'Baloane cu Fum',
        description:
          'Baloanele cu fum sunt efectul vizual care uimește pe toată lumea. Când balonul se sparge, eliberează un nor de fum colorat și spectaculos. Sigure în interior, perfecte pentru surprize la miezul nopții, intrarea mirilor sau momente speciale din seara evenimentului.',
        image: '/media/edited/Evenimente-events/40-eveniment-terasa-noapte-fundal-colorat.jpeg',
      },
      seo: {
        metaTitle: 'Baloane cu Fum București — Efect Vizual Spectaculos',
        metaDescription:
          'Baloane cu fum în București. Efect vizual surprinzător pentru nunți, botezuri și petreceri. Sigure în interior, perfecte pentru surprize la miezul nopții.',
      },
      steps: [
        {
          title: 'Alegi culorile',
          description:
            'Selectezi culorile fumului din gama disponibilă — alb, auriu, roz, albastru — în funcție de tema evenimentului.',
        },
        {
          title: 'Pregătim baloanele',
          description:
            'Echipa noastră umple baloanele cu fum colorat și le poziționează strategic în locație.',
        },
        {
          title: 'Surpriza perfectă',
          description:
            'La momentul ales, baloanele se sparg și eliberează nori de fum colorat — un spectacol de neuitat.',
        },
      ],
      features: [],
      gallery: [],
      faq: [
        {
          question: 'Sunt baloanele cu fum sigure în interior?',
          answer:
            'Da, fumul este netoxic, fără miros puternic și se disipează în câteva secunde. Nu declanșează alarme de incendiu și nu pătează hainele.',
        },
        {
          question: 'Câte baloane sunt incluse?',
          answer:
            'Pachetele variază între 5 și 20 de baloane cu fum, în funcție de efectul dorit și dimensiunea locației. Recomandăm minim 10 pentru un efect impresionant.',
        },
        {
          question: 'Pot alege culorile fumului?',
          answer:
            'Da! Avem disponibile mai multe culori: alb, auriu, roz, albastru, verde. Putem crea combinații personalizate în funcție de tema evenimentului.',
        },
      ],
      formDefaults: { serviceName: 'Baloane cu Fum' },
      experienceImage: '/media/edited/Evenimente-events/41-eveniment-noapte-invitati-oglinda.jpeg',
      experienceFacts: [
        { icon: 'sparkles', label: 'Efect vizual unic' },
        { icon: 'wind', label: 'Fum dens în baloane' },
        { icon: 'target', label: 'Perfect pt dans' },
      ],
    },

    // ──────────────────────────────────────────────
    // 8. Cabina Foto Nuntă (EventFocus)
    // ──────────────────────────────────────────────
    {
      title: 'Cabina Foto Nuntă București',
      slug: 'cabina-foto-nunta-photobooth-bucuresti',
      layoutType: 'eventfocus' as const,
      isActive: true,
      hero: {
        badge: 'Nr. 1 pentru Nunți',
        badgeColor: 'magenta' as const,
        title: 'Cabina Foto Nuntă București',
        highlight: 'Nuntă',
        description:
          'Oferă invitaților tăi amintiri unice din cea mai specială zi. Cabina foto PartyPixel vine cu grafică personalizată pe tema nunții, printuri nelimitate și magneți de frigider — cadoul perfect pentru fiecare invitat. Mireasa, mirele și nașii se vor distra regește!',
        image: '/media/edited/Evenimente-events/01-eveniment-nunta-dans-miri-fum-verde.jpeg',
      },
      seo: {
        metaTitle: 'Cabina Foto Nuntă București — Photo Booth pentru Nunți',
        metaDescription:
          'Cabina foto pentru nuntă în București. Amintiri de neuitat pentru miri și invitați. Printuri nelimitate, grafică personalizată, magneți. De la 250 lei/oră.',
      },
      eventType: 'Nuntă',
      heroTestimonial: {
        text: 'Cabina foto a fost atracția serii! Toți invitații au fost încântați.',
        author: 'Alexandra M.',
        event: 'Nuntă București',
      },
      features: [
        { icon: 'palette', title: 'Grafică de Nuntă Personalizată', label: 'Grafică de Nuntă Personalizată' },
        { icon: 'printer', title: 'Printuri Nelimitate', label: 'Printuri Nelimitate' },
        { icon: 'magnet', title: 'Magneți — Cadoul Perfect', label: 'Magneți — Cadoul Perfect' },
        { icon: 'video', title: 'GIF-uri & Boomerang', label: 'GIF-uri & Boomerang' },
        { icon: 'cloud-save', title: 'Galerie Online Privată', label: 'Galerie Online Privată' },
        { icon: 'mask', title: 'Props Tematice de Nuntă', label: 'Props Tematice de Nuntă' },
        { icon: 'user', title: 'Operator Dedicat', label: 'Operator Dedicat' },
        { icon: 'truck', title: 'Transport Gratuit București', label: 'Transport Gratuit București' },
      ],
      gallery: [
        { src: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg', alt: 'Nuntă - dans miri cu artificii' },
        { src: '/media/edited/Evenimente-events/11-eveniment-nunta-fum-artificii.jpeg', alt: 'Nuntă - fum și artificii' },
        { src: '/media/edited/cabina-foto-photo-booth/04-cabina-foto-print-instantaneu-nunta.jpeg', alt: 'Cabina foto print instant la nuntă' },
        { src: '/media/edited/cabina-foto-photo-booth/02-setup-cabina-foto-sala-nunta-fundal-alb.jpeg', alt: 'Setup cabina foto sală nuntă' },
        { src: '/media/edited/Evenimente-events/22-eveniment-invitati-petrecere-props.jpeg', alt: 'Invitați nuntă cu props' },
      ],
      testimonialHighlight: {
        text: 'Echipa PartyPixel a fost extraordinară! De la setup până la final, totul a fost impecabil.',
        author: 'Mihai D.',
        event: 'Nuntă',
      },
      relatedServices: [
        {
          title: 'Cabina Foto Clasică',
          href: '/cabina-foto-bucuresti/',
          image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
        },
        {
          title: 'Selfie 360°',
          href: '/video-booth-selfie-360-bucuresti/',
          image: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg',
        },
        {
          title: 'Fum Greu',
          href: '/fum-greu-gheata-carbonica/',
          image: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg',
        },
      ],
      faq: [
        {
          question: 'Câte fotografii pot face invitații la nuntă?',
          answer:
            'Nelimitat! Pe toată durata evenimentului, invitații pot face câte fotografii doresc. Fiecare poză este printată pe loc.',
        },
        {
          question: 'Puteți personaliza design-ul pentru nunta noastră?',
          answer:
            'Absolut. Creăm grafică personalizată cu numele mirilor, data nunții, paleta de culori și tema evenimentului. Totul este inclus în pachet.',
        },
        {
          question: 'Cât spațiu este necesar pentru cabina foto?',
          answer:
            'Cabina foto ocupă aproximativ 2x3 metri. Ne asigurăm că se integrează perfect în spațiul restaurantului sau locației.',
        },
        {
          question: 'Oferiți și magneți ca marturii de nuntă?',
          answer:
            'Da, magneții de frigider personalizați sunt una dintre cele mai populare opțiuni. Fiecare invitat primește un suvenir unic din ziua nunții.',
        },
      ],
      formDefaults: { eventType: 'Nuntă', serviceName: 'Cabina Foto Nuntă' },
    },

    // ──────────────────────────────────────────────
    // 9. Cabina Foto Botez (EventFocus)
    // ──────────────────────────────────────────────
    {
      title: 'Cabina Foto Botez București',
      slug: 'cabina-foto-botez-photobooth-bucuresti',
      layoutType: 'eventfocus' as const,
      isActive: true,
      hero: {
        badge: 'Perfect pentru Botez',
        badgeColor: 'teal' as const,
        title: 'Cabina Foto Botez București',
        highlight: 'Botez',
        description:
          'Surprinde cele mai frumoase momente din ziua botezului cu o cabină foto specială. Magneții personalizați cu numele bebelușului sunt cadoul perfect pentru nași și invitați — o mărturie modernă pe care toată lumea o va păstra cu drag.',
        image: '/media/edited/cabina-foto-photo-booth/16-cabina-foto-cu-perete-floral-si-banner.jpeg',
      },
      seo: {
        metaTitle: 'Cabina Foto Botez București — Photo Booth pentru Botezuri',
        metaDescription:
          'Cabina foto pentru botez în București. Magneți personalizați ca mărturii, grafică tematică cu bebeluș, printuri nelimitate. De la 250 lei/oră.',
      },
      eventType: 'Botez',
      heroTestimonial: {
        text: 'Magneții au fost marturiile perfecte! Toți invitații au fost încântați de idee.',
        author: 'Ioana P.',
        event: 'Botez București',
      },
      features: [
        { icon: 'magnet', title: 'Magneți — Mărturii Moderne', label: 'Magneți — Mărturii Moderne' },
        { icon: 'palette', title: 'Grafică Tematică de Botez', label: 'Grafică Tematică de Botez' },
        { icon: 'printer', title: 'Printuri Nelimitate', label: 'Printuri Nelimitate' },
        { icon: 'cloud-save', title: 'Galerie Online Privată', label: 'Galerie Online Privată' },
        { icon: 'mask', title: 'Props Adorabile', label: 'Props Adorabile' },
        { icon: 'user', title: 'Operator Atent', label: 'Operator Atent' },
        { icon: 'shield', title: 'Lumină LED Blândă', label: 'Lumină LED Blândă' },
        { icon: 'truck', title: 'Transport Gratuit București', label: 'Transport Gratuit București' },
      ],
      gallery: [
        { src: '/media/edited/cabina-foto-photo-booth/38-cabina-foto-alba-eveniment-craciun-elegant.jpeg', alt: 'Cabina foto la botez' },
        { src: '/media/edited/altele-diverse/12-guestbook-botez-cu-poze-printate-si-props.jpeg', alt: 'Guestbook botez cu poze printate' },
        { src: '/media/edited/cabina-foto-photo-booth/23-setup-cabina-foto-fundal-frunze-interior.jpeg', alt: 'Setup cabina foto botez' },
        { src: '/media/edited/guest-book/01-guestbook-coperta-ursulet-botez-cu-props.jpeg', alt: 'Guestbook botez cu ursuleț' },
        { src: '/media/edited/cabina-foto-photo-booth/24-setup-cabina-foto-sala-eleganta-props.jpeg', alt: 'Setup cabina foto sală elegantă' },
      ],
      testimonialHighlight: {
        text: 'Cabina foto a fost surpriza serii! Nașii și bunicii s-au distrat de minune, iar magneții au fost cel mai apreciat cadou.',
        author: 'Cristina R.',
        event: 'Botez',
      },
      relatedServices: [
        {
          title: 'Cabina Foto Clasică',
          href: '/cabina-foto-bucuresti/',
          image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
        },
        {
          title: 'Guest Book Foto',
          href: '/guest-book-foto/',
          image: '/media/edited/guest-book/03-guestbook-pagina-mesaj-cu-poza-botez.jpeg',
        },
        {
          title: 'Cabina Foto AI',
          href: '/cabina-foto-ai-bucuresti/',
          image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
        },
      ],
      faq: [
        {
          question: 'Magneții pot fi personalizați cu numele bebelușului?',
          answer:
            'Da, fiecare magnet conține fotografia invitaților plus un design personalizat cu numele bebelușului, data botezului și grafică tematică.',
        },
        {
          question: 'Câți magneți primesc invitații?',
          answer:
            'Fiecare invitat poate face câte poze dorește și primește un magnet pentru fiecare fotografie. Pachetele includ un număr generos de magneți.',
        },
        {
          question: 'Este potrivit pentru bebeluși mici?',
          answer:
            'Absolut! Cabina noastră folosește lumină LED blândă, fără flash puternic. Este complet sigură pentru bebeluși de orice vârstă.',
        },
      ],
      formDefaults: { eventType: 'Botez', serviceName: 'Cabina Foto Botez' },
    },

    // ──────────────────────────────────────────────
    // 10. Cabina Foto Majorat (EventFocus)
    // ──────────────────────────────────────────────
    {
      title: 'Cabina Foto Majorat București',
      slug: 'cabina-foto-majorat',
      layoutType: 'eventfocus' as const,
      isActive: true,
      hero: {
        badge: 'Petrecerea de 18 Ani',
        badgeColor: 'gold' as const,
        title: 'Cabina Foto Majorat București',
        highlight: 'Majorat',
        description:
          'Majoratul merită o petrecere epică! Surprinde cele mai nebune momente cu cabina foto, Selfie 360° și GIF-uri virale. Prietenii tăi vor adora — iar amintirile vor rămâne pentru totdeauna. Recomandăm combo-ul cabină foto + Selfie 360° pentru maximul de distracție!',
        image: '/media/edited/Evenimente-events/22-eveniment-invitati-petrecere-props.jpeg',
      },
      seo: {
        metaTitle: 'Cabina Foto Majorat București — Photo Booth Petrecere 18 Ani',
        metaDescription:
          'Cabina foto pentru majorat și aniversări în București. Selfie 360°, GIF-uri, printuri instant. Energie de petrecere! De la 250 lei/oră.',
      },
      eventType: 'Majorat',
      heroTestimonial: {
        text: 'A fost cel mai tare majorat! Toți prietenii mei au înnebunit după cabina foto și 360.',
        author: 'Daria S.',
        event: 'Majorat București',
      },
      features: [
        { icon: 'video', title: 'GIF-uri & Boomerang Virale', label: 'GIF-uri & Boomerang Virale' },
        { icon: 'camera', title: 'Selfie 360° Recomandat', label: 'Selfie 360° Recomandat' },
        { icon: 'printer', title: 'Printuri Instant', label: 'Printuri Instant' },
        { icon: 'palette', title: 'Grafică Youth-Oriented', label: 'Grafică Youth-Oriented' },
        { icon: 'phone-share', title: 'QR Share Instant', label: 'QR Share Instant' },
        { icon: 'mask', title: 'Props de Party', label: 'Props de Party' },
        { icon: 'clock-fast', title: 'Poze în 10 Secunde', label: 'Poze în 10 Secunde' },
        { icon: 'truck', title: 'Transport Gratuit București', label: 'Transport Gratuit București' },
      ],
      gallery: [
        { src: '/media/edited/Evenimente-events/40-eveniment-terasa-noapte-fundal-colorat.jpeg', alt: 'Petrecere majorat terasă' },
        { src: '/media/edited/Evenimente-events/41-eveniment-noapte-invitati-oglinda.jpeg', alt: 'Invitați la majorat' },
        { src: '/media/edited/cabina-foto-photo-booth/34-setup-cabina-foto-neagra-hotel-props.jpeg', alt: 'Setup cabina foto majorat' },
        { src: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg', alt: 'Platforma Selfie 360' },
        { src: '/media/edited/Evenimente-events/21-eveniment-invitati-oglinda-magica.jpeg', alt: 'Invitați la oglinda magică' },
      ],
      testimonialHighlight: {
        text: 'Combo-ul cabină foto + Selfie 360° a fost alegerea perfectă. Toți prietenii mei încă vorbesc despre petrecere!',
        author: 'Andrei T.',
        event: 'Majorat',
      },
      relatedServices: [
        {
          title: 'Cabina Foto Clasică',
          href: '/cabina-foto-bucuresti/',
          image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
        },
        {
          title: 'Selfie 360°',
          href: '/video-booth-selfie-360-bucuresti/',
          image: '/media/edited/video-360/04-platforma-video360-sala-nunta-elegant.jpeg',
        },
        {
          title: 'Artificii Spark',
          href: '/artificii-spark-nunta-bucuresti/',
          image: '/media/edited/Evenimente-events/02-eveniment-nunta-dans-miri-artificii.jpeg',
        },
      ],
      faq: [
        {
          question: 'Ce recomanzi pentru un majorat epic?',
          answer:
            'Combo-ul cabină foto + Selfie 360° este cel mai popular. Cabina foto pentru amintiri printate și Selfie 360° pentru videoclipuri slow motion virale pe TikTok.',
        },
        {
          question: 'Puteți veni într-un club sau restaurant?',
          answer:
            'Da, ne adaptăm oricărei locații. Am fost în cluburi, restaurante, vile și chiar în aer liber. Avem propriul sistem de iluminare.',
        },
        {
          question: 'Cât durează un pachet pentru majorat?',
          answer:
            'Recomandăm minim 3 ore pentru un majorat. Pachetele sunt flexibile și pot fi extinse pe loc dacă petrecerea continuă.',
        },
      ],
      formDefaults: { eventType: 'Majorat', serviceName: 'Cabina Foto Majorat' },
    },

    // ──────────────────────────────────────────────
    // 11. Photo Booth Petreceri Corporate (EventFocus)
    // ──────────────────────────────────────────────
    {
      title: 'Photo Booth Petreceri Corporate',
      slug: 'photobooth-petreceri-corporate',
      layoutType: 'eventfocus' as const,
      isActive: true,
      hero: {
        badge: 'Business Events',
        badgeColor: 'teal' as const,
        title: 'Photo Booth Petreceri Corporate',
        highlight: 'Corporate',
        description:
          'Adaugă un element memorabil la evenimentul tău corporate. Cabina foto cu branding complet personalizat — logo, culori corporate, mesaje cheie. Perfectă pentru team building, petreceri de Crăciun, lansări de produs și activări de brand. Peste 500 de evenimente corporate organizate cu succes.',
        image: '/media/edited/cabina-foto-photo-booth/34-setup-cabina-foto-neagra-hotel-props.jpeg',
      },
      seo: {
        metaTitle: 'Photo Booth Petreceri Corporate București — Evenimente Business',
        metaDescription:
          'Photo Booth pentru petreceri corporate în București. Branding personalizat, team building, activări de brand. 500+ evenimente corporate organizate.',
      },
      eventType: 'Corporate',
      heroTestimonial: {
        text: 'Branding-ul pe printuri a fost impecabil. Colegii au fost super încântați de experiență!',
        author: 'Elena V.',
        event: 'Corporate Event București',
      },
      features: [
        { icon: 'target', title: 'Branding Complet', label: 'Branding Complet' },
        { icon: 'user', title: 'Team Building', label: 'Team Building' },
        { icon: 'sparkle-ai', title: 'Lansări de Produs', label: 'Lansări de Produs' },
        { icon: 'globe', title: 'Activări de Brand', label: 'Activări de Brand' },
        { icon: 'phone-share', title: 'Social Media Integration', label: 'Social Media Integration' },
        { icon: 'shield', title: 'Factură & Contract', label: 'Factură & Contract' },
        { icon: 'printer', title: 'Printuri Brandate', label: 'Printuri Brandate' },
        { icon: 'cloud-save', title: 'Galerie Online Brandată', label: 'Galerie Online Brandată' },
      ],
      gallery: [
        { src: '/media/edited/video-360/05-platforma-video360-eveniment-corporate-hotel.jpeg', alt: 'Video 360 corporate hotel' },
        { src: '/media/edited/cabina-foto-photo-booth/10-setup-cabina-foto-fundal-bokeh-craciun.jpeg', alt: 'Setup cabina foto corporate Crăciun' },
        { src: '/media/edited/cabina-foto-photo-booth/37-setup-cabina-foto-neagra-exterior-fundal-roz.jpeg', alt: 'Cabina foto corporate exterior' },
        { src: '/media/edited/cabina-foto-photo-booth/39-cabina-foto-neagra-concert-fundal-alb.jpeg', alt: 'Cabina foto concert corporate' },
        { src: '/media/edited/oglinda-magica-magic-mirror/08-oglinda-magica-ecran-mare-eveniment-noapte.jpeg', alt: 'Oglindă magică eveniment corporate' },
      ],
      testimonialHighlight: {
        text: 'Am lucrat cu PartyPixel la 3 evenimente corporate anul acesta. Profesionalism, punctualitate și calitate de fiecare dată. Recomand cu încredere!',
        author: 'Radu M.',
        event: 'Corporate',
      },
      relatedServices: [
        {
          title: 'Cabina Foto Clasică',
          href: '/cabina-foto-bucuresti/',
          image: '/media/edited/cabina-foto-photo-booth/06-cabina-foto-setup-complet-din-lateral.jpeg',
        },
        {
          title: 'Cabina Foto AI',
          href: '/cabina-foto-ai-bucuresti/',
          image: '/media/edited/cabina-foto-ai/29-cabina-foto-alba-led-galerie-foto-ecran.jpeg',
        },
        {
          title: 'Oglinda Magică',
          href: '/oglinda-magica-bucuresti/',
          image: '/media/edited/oglinda-magica-magic-mirror/03-oglinda-magica-led-neon-interior-noapte.jpeg',
        },
      ],
      faq: [
        {
          question: 'Puteți integra logo-ul companiei pe toate materialele?',
          answer:
            'Da, logo-ul și identitatea vizuală a companiei sunt integrate pe printurile foto, overlay-ul digital, backdrop și ecranul cabinei. Oferim preview înainte de eveniment.',
        },
        {
          question: 'Emiteți factură fiscală?',
          answer:
            'Da, emitem factură fiscală, contract de servicii și deviz. Acceptăm plata prin transfer bancar, card sau numerar.',
        },
        {
          question: 'Câte persoane pot deservi pe oră?',
          answer:
            'Cabina foto poate deservi 60-80 de persoane pe oră. Pentru evenimente cu peste 200 de participanți, recomandăm 2 cabine sau combinația cabină + Selfie 360°.',
        },
      ],
      formDefaults: { eventType: 'Corporate', serviceName: 'Photo Booth Corporate' },
    },
  ]

  for (const service of services) {
    await payload.create({ collection: 'services', data: service })
    console.log(`  Created service: ${service.title}`)
  }

  // ============================================================
  // 2. PRICING PACKAGES
  // ============================================================
  console.log('\nSeeding pricing packages...')

  await payload.delete({ collection: 'pricing', where: { id: { exists: true } } })

  const pricingPackages = [
    {
      packageName: 'Essential',
      price: 250,
      currency: 'lei',
      unit: '/oră',
      isFeatured: false,
      order: 1,
      includes: [
        { item: 'Cabina foto clasică', isHighlighted: false },
        { item: 'Printuri nelimitate', isHighlighted: false },
        { item: 'Grafică personalizată', isHighlighted: false },
        { item: 'Props & accesorii', isHighlighted: false },
        { item: 'Operator dedicat', isHighlighted: false },
        { item: 'Transport București + Ilfov', isHighlighted: false },
        { item: 'Galerie online', isHighlighted: false },
      ],
    },
    {
      packageName: 'Popular',
      price: 350,
      currency: 'lei',
      unit: '/oră',
      isFeatured: true,
      order: 2,
      includes: [
        { item: 'Tot din Essential +', isHighlighted: true },
        { item: 'GIF-uri & Boomerang', isHighlighted: false },
        { item: 'Magneți foto (50 buc)', isHighlighted: false },
        { item: 'QR share instant', isHighlighted: false },
        { item: 'Backdrop premium', isHighlighted: false },
        { item: 'Props tematice extinse', isHighlighted: false },
        { item: 'USB cu toate pozele', isHighlighted: false },
      ],
    },
    {
      packageName: 'Premium',
      price: 500,
      currency: 'lei',
      unit: '/oră',
      isFeatured: false,
      order: 3,
      includes: [
        { item: 'Tot din Popular +', isHighlighted: true },
        { item: 'Selfie 360° inclus', isHighlighted: false },
        { item: 'Confetti colorate', isHighlighted: false },
        { item: 'Green screen', isHighlighted: false },
        { item: 'Slow & fast motion', isHighlighted: false },
        { item: 'Social media integration', isHighlighted: false },
        { item: 'Film highlight 1 min', isHighlighted: false },
      ],
    },
    {
      packageName: 'Ultimate',
      price: 750,
      currency: 'lei',
      unit: '/oră',
      isFeatured: false,
      order: 4,
      includes: [
        { item: 'Tot din Premium +', isHighlighted: true },
        { item: 'AI Photo Booth inclus', isHighlighted: false },
        { item: 'Guest Book Clasic inclus', isHighlighted: false },
        { item: 'Fum greu inclus', isHighlighted: false },
        { item: 'Artificii spark incluse', isHighlighted: false },
        { item: '2 operatori', isHighlighted: false },
        { item: 'Setup VIP decorat', isHighlighted: false },
      ],
    },
  ]

  for (const pkg of pricingPackages) {
    await payload.create({ collection: 'pricing', data: pkg })
    console.log(`  Created pricing: ${pkg.packageName} — ${pkg.price} ${pkg.currency}${pkg.unit}`)
  }

  // ============================================================
  // 3. TESTIMONIALS
  // ============================================================
  console.log('\nSeeding testimonials...')

  await payload.delete({ collection: 'testimonials', where: { id: { exists: true } } })

  const testimonials = [
    {
      authorName: 'Alexandra M.',
      authorRole: 'Nuntă București',
      content:
        'Cabina foto a fost atracția serii! Toți invitații au fost încântați de calitatea pozelor.',
      rating: 5,
      avatarColor: '#FF3D9A',
      isActive: true,
      order: 1,
    },
    {
      authorName: 'Mihai D.',
      authorRole: 'Botez',
      content:
        'Echipa PartyPixel a fost extraordinară! Totul a fost impecabil de la setup până la final.',
      rating: 5,
      avatarColor: '#1DE8DC',
      isActive: true,
      order: 2,
    },
    {
      authorName: 'Cristina P.',
      authorRole: 'Nuntă Snagov',
      content:
        'Am ales pachetul cu fum greu și artificii spark. Efectul a fost absolut spectaculos!',
      rating: 5,
      avatarColor: '#F5C842',
      isActive: true,
      order: 3,
    },
  ]

  for (const testimonial of testimonials) {
    await payload.create({ collection: 'testimonials', data: testimonial })
    console.log(`  Created testimonial: ${testimonial.authorName}`)
  }

  // ============================================================
  // 4. FAQs (from prețuri + contact pages)
  // ============================================================
  console.log('\nSeeding FAQs...')

  await payload.delete({ collection: 'faqs', where: { id: { exists: true } } })

  const faqs = [
    // --- Prețuri page FAQs ---
    {
      question: 'Care este durata minimă de închiriere?',
      answer:
        'Durata minimă este de 2 ore. Recomandăm minim 3 ore pentru nunți și 2 ore pentru botezuri sau petreceri private.',
      page: 'preturi' as const,
      order: 1,
    },
    {
      question: 'Prețurile includ TVA?',
      answer:
        'Prețurile afișate nu includ TVA. Emitem factură fiscală completă pentru companii și persoane fizice.',
      page: 'preturi' as const,
      order: 2,
    },
    {
      question: 'Se poate personaliza un pachet?',
      answer:
        'Absolut! Putem crea pachete personalizate combinând orice servicii. Contactează-ne pentru o ofertă adaptată nevoilor tale.',
      page: 'preturi' as const,
      order: 3,
    },
    {
      question: 'Există costuri suplimentare pentru transport?',
      answer:
        'Transportul este gratuit în București și Ilfov. Pentru alte județe, se aplică o taxă de deplasare accesibilă — te informăm transparent înainte.',
      page: 'preturi' as const,
      order: 4,
    },
    // --- Contact page FAQs ---
    {
      question: 'Cum pot rezerva o cabină foto?',
      answer:
        'Completează formularul de mai sus, sună-ne la 0745 800 810 sau scrie-ne pe WhatsApp. Vom confirma disponibilitatea și îți vom trimite o ofertă personalizată.',
      page: 'general' as const,
      order: 5,
    },
    {
      question: 'Este necesară o plată în avans?',
      answer:
        'Da, pentru confirmarea rezervării solicităm un avans de 30%. Restul se achită în ziua evenimentului sau cu 3 zile înainte prin transfer bancar.',
      page: 'general' as const,
      order: 6,
    },
    {
      question: 'Ce se întâmplă dacă trebuie să anulez?',
      answer:
        'Anularea cu minim 30 de zile înainte este gratuită. Pentru anulări mai tardive, avansul se reține parțial. Te rugăm să ne anunți cât mai devreme.',
      page: 'general' as const,
      order: 7,
    },
  ]

  for (const faq of faqs) {
    await payload.create({ collection: 'faqs', data: faq })
    console.log(`  Created FAQ: ${faq.question.substring(0, 50)}...`)
  }

  // ============================================================
  // DONE
  // ============================================================
  console.log('\n✅ Seed complete!')
  console.log(`   Services: ${services.length}`)
  console.log(`   Pricing:  ${pricingPackages.length}`)
  console.log(`   Testimonials: ${testimonials.length}`)
  console.log(`   FAQs: ${faqs.length}`)

  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
