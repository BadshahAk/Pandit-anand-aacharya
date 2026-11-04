import { ServiceItem, GalleryItem, Shloka } from '../types';

export const SITE_CONFIG = {
  brand: {
    ganeshMantra: "॥ ॐ श्री गणेशाय नमः ॥",
    greeting: "॥ जय श्री राम ॥",
    nameEn: "Pandit Anand Acharya",
    nameHi: "पण्डित आनन्द आचार्य",
    taglineHi: "सनातन परंपरा • वैदिक संस्कार • आध्यात्मिक मार्गदर्शन",
    taglineEn: "Sanatan Tradition • Vedic Rituals • Spiritual Guidance",
    heroIntroHi: "सनातन संस्कृति, पूजा-पाठ, वैदिक परंपराओं एवं धार्मिक संस्कारों के प्रति समर्पित।",
    heroIntroEn: "Dedicated to Sanatan culture, traditional pujas, Vedic heritage and sacred sacraments.",
  },

  // Verified Contact Details
  contact: {
    rawPhone: "9116050506",
    countryCode: "+91",
    whatsappNumber: "919116050506", // wa.me format
    displayPhone: "+91 9116050506",
    callUrl: "tel:+919116050506",
    whatsappUrl: "https://wa.me/919116050506",
    defaultWhatsAppMsg: "Namaste Pandit Anand Acharya Ji, I want to enquire about a puja or religious service. Please share the details.",
    
    // Configurable email placeholder until user provides official verified address
    email: "panditanandacharya@gmail.com",
    hasVerifiedEmail: false, // flag indicating email is pending custom verification

    address: {
      city: "Chirawa",
      district: "Jhunjhunu",
      state: "Rajasthan",
      country: "India",
      pincode: "333026",
      fullTextHi: "चिड़ावा, जिला झुंझुनूं, राजस्थान - 333026, भारत",
      fullTextEn: "Chirawa, Dist. Jhunjhunu, Rajasthan - 333026, India"
    },
    serviceAreaHi: "चिड़ावा, झुंझुनूं, शेखावाटी, जयपुर, दिल्ली NCR एवं आमंत्रण पर संपूर्ण भारत में यात्रा उपलब्धता",
    serviceAreaEn: "Chirawa, Jhunjhunu, Shekhawati, Jaipur, Delhi NCR, and all across India upon invitation",
    workingHoursHi: "प्रातः 06:00 बजे से सायं 09:00 बजे तक (सप्ताह के सातों दिन)",
    workingHoursEn: "06:00 AM to 09:00 PM (All 7 Days)",
    socialLinks: {
      youtube: "https://youtube.com/@panditanandacharya",
      instagram: "https://instagram.com/panditanandacharya",
      facebook: "https://facebook.com/panditanandacharya"
    }
  },

  // Personal Profile
  profile: {
    fullName: "Anand Sharma",
    professionalName: "Pandit Anand Acharya",
    nameHi: "आनन्द शर्मा (पण्डित आनन्द आचार्य)",
    dob: "14-09-2003 (14 सितम्बर 2003)",
    birthplace: "Chirawa, Rajasthan",
    nationality: "Indian (भारतीय)",
    languages: ["Hindi (हिन्दी)", "English (अंग्रेज़ी)"],
    education: "Bachelor of Arts (BA)",
    
    // Real verified uploaded photo path
    photoSrc: "/pandit_anand_acharya.png",

    // Spiritual Values
    valuesHi: [
      "सनातन धर्म के प्रति सम्मान",
      "भारतीय संस्कृति",
      "धार्मिक परंपराएं",
      "आध्यात्मिक चिंतन",
      "निरंतर ज्ञान अर्जन"
    ],
    valuesEn: [
      "Deep reverence for Sanatan Dharma",
      "Preservation of timeless Indian heritage",
      "Strict adherence to sacred religious rites",
      "Deep spiritual contemplation and sadhana",
      "Dedicated pursuit of continuous sacred learning"
    ],

    bioIntroHi: `सनातन धर्म केवल एक उपासना पद्धति नहीं, अपितु जीवन जीने की एक शाश्वत, पवित्र और कल्याणकारी कला है। राजस्थान की ऐतिहासिक व पावन धरा चिड़ावा (झुंझुनूं) में जन्मे आनन्द शर्मा (पण्डित आनन्द आचार्य) का जीवन सनातन संस्कृति, वैदिक संस्कारों एवं शुद्ध देव-पूजन के प्रति समर्पित है। प्रत्येक अनुष्ठान को पूर्ण शुचिता, निष्ठा एवं शास्त्रीय मर्यादा के साथ संपन्न कराना ही हमारा मुख्य ध्येय है।`,
    bioIntroEn: `Sanatan Dharma is not merely a mode of worship; it is an eternal, sacred, and benevolent art of living. Born in the culturally enriched land of Chirawa (Jhunjhunu, Rajasthan), Anand Sharma (Pandit Anand Acharya) is deeply devoted to preserving Sanatan culture, timeless Vedic rituals, and devotional ceremonies with genuine sincerity, humility, and sanctity.`
  },

  // Quotes
  quotes: {
    shantiShloka: {
      sanskrit: "॥ सर्वे भवन्तु सुखिनः ॥\n॥ सर्वे सन्तु निरामयाः ॥",
      meaningHi: "सभी सुखी हों, सभी रोगमुक्त व स्वस्थ रहें।",
      meaningEn: "May all beings be happy, may all beings be healthy and free from illness."
    },
    ganeshMantra: "॥ ॐ गं गणपतये नमः ॥",
    ramMantra: "॥ जय श्री राम ॥"
  },

  // All 10 Services
  services: [
    {
      id: "satyanarayan-katha",
      titleHi: "सत्यनारायण कथा",
      titleEn: "Satyanarayan Vrat Katha",
      shortDescHi: "भगवान सत्यनारायण की पावन कथा, पंचामृत एवं पंजीरी प्रसाद के साथ मनोकामना पूर्ति अनुष्ठान।",
      shortDescEn: "Auspicious recitation of Sri Satyanarayan Vrat Katha for wish fulfillment, family unity, and prosperity.",
      fullDescHi: "पूर्णिमा, संक्रांति, गृह उत्सव अथवा किसी भी शुभ अवसर पर श्री सत्यनारायण भगवान की पांच अध्यायों वाली पावन कथा का वाचन, नवग्रह पूजन, चरणामृत व प्रसाद अर्पण।",
      fullDescEn: "Holy recital of the 5 chapters of Satyanarayan Katha on Purnima, Sankranti, or family milestones with traditional prasad and aarti.",
      significanceHi: "सत्य के मार्ग पर चलने की प्रेरणा और पारिवारिक सौहार्द।",
      significanceEn: "Inspiration to walk the path of truth and boundless family harmony.",
      durationHi: "लगभग 2 से 2.5 घंटे",
      durationEn: "Approx. 2 to 2.5 hours",
      iconName: "BookOpen",
      highlightsHi: ["कलश स्थापना एवं नवग्रह पूजन", "पावन कथा के 5 अध्याय", "चरणामृत व पंजीरी भोग"],
      highlightsEn: ["Kalash Sthapana & Navagraha Pujan", "5 Chapters of Katha", "Charanamrit & Prasad Bhog"]
    },
    {
      id: "griha-pravesh",
      titleHi: "गृह प्रवेश पूजा",
      titleEn: "Griha Pravesh Puja",
      shortDescHi: "नवीन गृह में मंगल प्रवेश, वास्तु शांति, कलश प्रवेश एवं सुख-समृद्धि हेतु वैदिक अनुष्ठान।",
      shortDescEn: "Sacred housewarming ceremony with Vastu Shanti, threshold purification, and auspicious Kalash entry.",
      fullDescHi: "नए अथवा नवीनीकृत घर में सकारात्मक ऊर्जा, धन-धान्य और आरोग्य के वास हेतु वास्तु शांति, नवग्रह होम एवं गणेश पूजन सहित पूर्ण गृह प्रवेश।",
      fullDescEn: "Complete house-warming ritual including Vastu devata puja, threshold purification, boiling milk ceremony, and peace havan.",
      significanceHi: "वास्तु दोष शमन एवं नए घर में सुख-समृद्धि का स्थायी वास।",
      significanceEn: "Mitigation of Vastu imbalances and inviting divine blessings into the new dwelling.",
      durationHi: "लगभग 3 से 4 घंटे",
      durationEn: "Approx. 3 to 4 hours",
      iconName: "Home",
      highlightsHi: ["द्वार पूजन एवं गौ पूजन", "वास्तु पुरुष एवं कलश स्थापना", "गृह प्रवेश नवग्रह हवन"],
      highlightsEn: ["Dwar Pujan & Gau Pujan", "Vastu Purusha Sthapana", "Navagraha Havan"]
    },
    {
      id: "vivah-sanskar",
      titleHi: "विवाह संस्कार",
      titleEn: "Vivah Sanskar (Wedding Rites)",
      shortDescHi: "सनातन वैदिक मर्यादाओं के अनुरूप कन्यादान, सप्तपदी, सिन्दूर दान एवं पाणिग्रहण संस्कार।",
      shortDescEn: "Sacred Hindu wedding ceremony conducted strictly as per Vedic traditions with Kanyadaan and Saptapadi.",
      fullDescHi: "वर-वधू के सात जन्मों के पवित्र बंधन हेतु अग्नि साक्षी में मंत्रोच्चार, वरमाला, लाजाहोम, सप्तपदी और आशीर्वचन का विधिपूर्वक संपादन।",
      fullDescEn: "Solemnizing the holy union of bride and groom through Vedic hymns, Panigrahana, Laja Homa, Saptapadi, and elderly blessings.",
      significanceHi: "गृहस्थ आश्रम का आरंभ और दो आत्माओं का धर्मानुकूल मिलन।",
      significanceEn: "Commencement of the sacred Grihastha ashrama and spiritual harmony.",
      durationHi: "लगभग 3 से 5 घंटे",
      durationEn: "Approx. 3 to 5 hours",
      iconName: "HeartHandshake",
      highlightsHi: ["मंडप एवं वेदी पूजन", "सप्तपदी (सात फेरे)", "सिन्दूर दान व पाणिग्रहण"],
      highlightsEn: ["Mandap & Vedi Puja", "Saptapadi (Seven Vows)", "Sindoor Daan & Blessings"]
    },
    {
      id: "ganesh-puja",
      titleHi: "गणेश पूजा",
      titleEn: "Ganesh Puja & Sankat Nashan",
      shortDescHi: "किसी भी नए कार्य, व्यापार अथवा अनुष्ठान की निर्विघ्न सिद्धि हेतु प्रथम पूज्य श्री गणेश की आराधना।",
      shortDescEn: "Invoking Lord Ganesha, the remover of all obstacles, before launching businesses, events, or ceremonies.",
      fullDescHi: "श्री गणपति अथर्वशीर्ष पाठ, दूर्वा एवं मोदक अर्पण, तथा अष्टविनायक ध्यान के साथ समस्त विघ्नों का शमन।",
      fullDescEn: "Recitation of Ganapati Atharvashirsha, offering sacred durva grass and modak, ensuring successful undertakings.",
      significanceHi: "कार्यों में आने वाली बाधाओं का नाश और बुद्धि-विवेक की वृद्धि।",
      significanceEn: "Elimination of unforeseen obstacles and blessing of wisdom and intellect.",
      durationHi: "लगभग 1 से 1.5 घंटे",
      durationEn: "Approx. 1 to 1.5 hours",
      iconName: "Sparkles",
      highlightsHi: ["गणपति अथर्वशीर्ष पाठ", "दूर्वा एवं सिन्दूर अर्पण", "विघ्नहर्ता महाआरती"],
      highlightsEn: ["Atharvashirsha Chanting", "Durva & Sindoor Arpan", "Maha Aarti"]
    },
    {
      id: "rudrabhishek",
      titleHi: "रुद्राभिषेक",
      titleEn: "Rudrabhishek & Shiva Puja",
      shortDescHi: "भगवान आशुतोष शिव का दूध, दही, मधु, गन्ने के रस व गंगाजल से महाअभिषेक एवं नमकम-चमकम पाठ।",
      shortDescEn: "Sacred ablution of the Shiva Lingam with panchamrit, sacred water, and Vedic Rudri chants for health and peace.",
      fullDescHi: "सावन मास, प्रदोष, मासिक शिवरात्रि अथवा विशेष तिथियों पर परिवार के स्वास्थ्य, दीर्घायु एवं कालसर्प/ग्रह पीड़ा शांति हेतु रुद्राभिषेक।",
      fullDescEn: "Consecrated Panchamrit and holy Gangajal abhishek of Lord Shiva accompanied by Shukla Yajurvedic Rudrashtadhyayi recitations.",
      significanceHi: "असाध्य रोगों, भयों व मानसिक व्याधियों का शमन।",
      significanceEn: "Inner calmness, spiritual elevation, and relief from distress.",
      durationHi: "लगभग 2 से 3 घंटे",
      durationEn: "Approx. 2 to 3 hours",
      iconName: "Droplets",
      highlightsHi: ["पंचामृत व गंगाजल धारा", "रुद्राष्टाध्यायी पाठ", "बिल्वपत्र व भस्म अर्पण"],
      highlightsEn: ["Panchamrit Stream Abhishek", "Rudrashtadhyayi Chanting", "Bilva Leaves & Bhasma Offering"]
    },
    {
      id: "navagraha-shanti",
      titleHi: "नवग्रह शांति पूजा",
      titleEn: "Navagraha Shanti Puja",
      shortDescHi: "सूर्य से केतु पर्यंत नौ ग्रहों की अनुकूलता, ग्रह दोष निवारण एवं शांति हेतु विशिष्ट अर्चन।",
      shortDescEn: "Pacification rituals for the nine cosmic planetary energies to mitigate malefic planetary periods.",
      fullDescHi: "जन्मकुंडली में प्रतिकूल ग्रह दशा (जैसे शनि की साढ़ेसाती, राहु-केतु पीड़ा, मंगल दोष) के प्रभाव को शांत करने हेतु विधिवत नवग्रह मंडल पूजन व जप।",
      fullDescEn: "Specific Vedic mandala setup, planetary color grains, and specific beeja mantra recitations for planetary balance.",
      significanceHi: "भाग्य में आने वाली अड़चनों का निराकरण एवं मानसिक स्थिरता।",
      significanceEn: "Harmonizing life rhythms and clearing subtle planetary blockages.",
      durationHi: "लगभग 2 से 3 घंटे",
      durationEn: "Approx. 2 to 3 hours",
      iconName: "Sun",
      highlightsHi: ["नवग्रह मंडल निर्माण", "ग्रहवार समिधा व आहुति", "शांति पाठ एवं दान संकल्प"],
      highlightsEn: ["Navagraha Mandala Setup", "Planetary Wood Offerings", "Shanti Path & Charity Sankalpa"]
    },
    {
      id: "havan-yajna",
      titleHi: "हवन एवं यज्ञ",
      titleEn: "Havan & Vedic Yajna",
      shortDescHi: "गायत्री मंत्र, महामृत्युंजय मंत्र अथवा विशिष्ट देव मंत्रों से युक्त पवित्र अग्नि अनुष्ठान।",
      shortDescEn: "Sacred fire oblations chanting Gayatri, Maha Mrityunjaya, and divine mantras for environmental and spiritual purification.",
      fullDescHi: "हवन कुंड में शुद्ध गौघृत, औषधीय जड़ी-बूटियों (हवन सामग्री) एवं समिधा के माध्यम से आहुति समर्पित कर वातावरण को पवित्र बनाना।",
      fullDescEn: "Purifying the atmosphere and personal consciousness through consecrated fire, pure cow ghee, and sacred herbs.",
      significanceHi: "पर्यावरण शुद्धि, सकारात्मक ऊर्जा का संचार एवं मनोबल में वृद्धि।",
      significanceEn: "Atmospheric purification, mental clarity, and divine protective shield.",
      durationHi: "लगभग 2 से 3 घंटे",
      durationEn: "Approx. 2 to 3 hours",
      iconName: "FlameKindling",
      highlightsHi: ["अग्नि प्रज्वलन व आधान", "औषधीय आहुति अर्पण", "पूर्णाहुति एवं भस्म तिलक"],
      highlightsEn: ["Agni Prajwalana", "Medicinal Herb Offerings", "Purnahuti & Sacred Ash"]
    },
    {
      id: "puja-path",
      titleHi: "पूजा-पाठ",
      titleEn: "Puja-Path & Daily Rituals",
      shortDescHi: "परिवार में सुख-शांति एवं सकारात्मक ऊर्जा के संचरण हेतु शास्त्रीय पद्धति से देव पूजन।",
      shortDescEn: "Traditional devotional prayers and scriptural deity rituals for peace and positive vibrations at home.",
      fullDescHi: "घर, कार्यालय अथवा व्यावसायिक प्रतिष्ठान में पंचोपचार एवं षोडशोपचार विधि से नियमित अथवा विशेष पूजा-अर्चना संपन्न कराई जाती है।",
      fullDescEn: "Conducting auspicious devotional worship at home or workplace through Panchopachar and Shodashopachar traditional rites.",
      significanceHi: "नकारात्मक ऊर्जा का निवारण और मानसिक शांति।",
      significanceEn: "Removal of negative energies and restoration of mental peace.",
      durationHi: "लगभग 1 से 2 घंटे",
      durationEn: "Approx. 1 to 2 hours",
      iconName: "Flame",
      highlightsHi: ["दीप प्रज्वलन एवं स्वस्तिवाचन", "संकल्प एवं शुद्धि", "आरती व पुष्पांजलि"],
      highlightsEn: ["Diya lighting & Swastivachan", "Sankalpa & Purification", "Aarti & Pushpanjali"]
    },
    {
      id: "birthday-anushthan",
      titleHi: "जन्मदिन एवं विशेष धार्मिक अनुष्ठान",
      titleEn: "Birthday & Special Religious Anushthan",
      shortDescHi: "जन्म दिवस, वैवाहिक वर्षगांठ अथवा मांगलिक उत्सव पर आयु, आरोग्य एवं प्रगति हेतु आशीर्वाद पूजन।",
      shortDescEn: "Auspicious milestone prayers for birthdays, marriage anniversaries, and family celebrations.",
      fullDescHi: "जन्म नक्षत्र पूजा, दीर्घायु संकल्प, मार्कण्डेय ऋषि पूजन एवं परिवारजनों के साथ सुख-समृद्धि हेतु मंगल पाठ।",
      fullDescEn: "Ayushya Suktam, Markandeya Rishi Puja, and special prayers conducted on birthdays and anniversaries for long life and joy.",
      significanceHi: "नए वर्ष में नवचेतना, यश एवं स्वास्थ्य की प्राप्ति।",
      significanceEn: "Vitality, auspicious fortune, and health for the coming year.",
      durationHi: "लगभग 1.5 से 2 घंटे",
      durationEn: "Approx. 1.5 to 2 hours",
      iconName: "Award",
      highlightsHi: ["आयुष्य सूक्त पाठ", "मार्कण्डेय ऋषि व चिरंजीवी पूजन", "आरती व तिलक"],
      highlightsEn: ["Ayushya Sukta Recital", "Markandeya Rishi Pujan", "Aarti & Tilak"]
    },
    {
      id: "jyotish-kundali",
      titleHi: "ज्योतिष एवं कुंडली मार्गदर्शन",
      titleEn: "Jyotish & Kundali Guidance",
      shortDescHi: "वैदिक पंचांग एवं परंपरागत जन्मपत्री के आधार पर शुभ मुहूर्त चयन व व्यावहारिक मार्गदर्शन।",
      shortDescEn: "Traditional Vedic Panchang consultation for auspicious Muhurat, marriage matching, and spiritual remedies.",
      fullDescHi: "विवाह, गृह प्रवेश, व्यापार आरंभ हेतु शास्त्रसम्मत शुभ मुहूर्त का चयन तथा पारंपरिक पद्धति से जन्मपत्री का अध्ययन (मार्गदर्शन स्वरूप)।",
      fullDescEn: "Calculation of auspicious timings (Shubh Muhurat) for weddings, foundation ceremonies, and home warming, plus traditional Vedic guidance.",
      significanceHi: "शुभ समय में कार्य आरंभ कर सफलता की संभावना को प्रबल करना।",
      significanceEn: "Aligning ventures with auspicious celestial timings and peaceful living.",
      durationHi: "परामर्श अनुसार (30 से 45 मिनट)",
      durationEn: "Per consultation (30 to 45 mins)",
      iconName: "Compass",
      highlightsHi: ["शुभ मुहूर्त निर्णय", "पारंपरिक पंचांग विश्लेषण", "सात्त्विक उपाय एवं दान परामर्श"],
      highlightsEn: ["Shubh Muhurat Selection", "Traditional Panchang Analysis", "Sattvic Remedies & Dana Advice"]
    }
  ],

  // Gallery
  gallery: [
    {
      id: "gal-profile",
      titleHi: "पण्डित आनन्द आचार्य - आध्यात्मिक स्वरूप",
      titleEn: "Pandit Anand Acharya - Spiritual Portrait",
      category: "puja",
      categoryLabelHi: "व्यक्तिगत स्वरूप",
      categoryLabelEn: "Personal Portrait",
      imageSrc: "/pandit_anand_acharya.png",
      descriptionHi: "सनातन वैदिक परंपराओं के प्रति समर्पित युवा आचार्य।",
      descriptionEn: "Dedicated to preserving sacred Vedic rites with humility and reverence."
    },
    {
      id: "gal-temple",
      titleHi: "श्री राम लला मंदिर एवं दिव्य विग्रह दर्शन",
      titleEn: "Lord Shri Ram Sanctum & Divine Darshan",
      category: "temple",
      categoryLabelHi: "मंदिर दर्शन",
      categoryLabelEn: "Temple & Deities",
      imageSrc: "/src/assets/images/hero_ram_temple_1793804380537.jpg",
      descriptionHi: "प्रातःकालीन आरती और पुष्पों से सुसज्जित पावन गर्भगृह का विहंगम दृश्य।",
      descriptionEn: "Morning sanctum darshan adorned with fresh marigolds, golden lamps, and sacred resonance."
    },
    {
      id: "gal-havan",
      titleHi: "पवित्र वैदिक हवन एवं अग्निहोत्र",
      titleEn: "Sacred Vedic Havan & Agnihotra",
      category: "havan",
      categoryLabelHi: "हवन एवं यज्ञ",
      categoryLabelEn: "Havan & Yajna",
      imageSrc: "/src/assets/images/vedic_havan_fire_1793804383409.jpg",
      descriptionHi: "ताम्र कुंड में घृत आहुति एवं वैदिक मंत्रोच्चार के साथ संपन्न होता पावन यज्ञ।",
      descriptionEn: "Vedic hymns chanted during ghee offerings in a consecrated copper havan kund."
    },
    {
      id: "gal-puja",
      titleHi: "श्री सत्यनारायण पूजन मंडप सज्जा",
      titleEn: "Satyanarayan Puja Mandap Setup",
      category: "puja",
      categoryLabelHi: "पूजा एवं कथा",
      categoryLabelEn: "Puja & Katha",
      imageSrc: "/src/assets/images/satyanarayan_puja_1793804384191.jpg",
      descriptionHi: "कलश स्थापना, केले के स्तम्भ, पुष्प व पंचामृत से सुसज्जित गृह पूजन वेदी।",
      descriptionEn: "Auspicious home altar prepared with brass kalash, fresh fruits, and divine offerings."
    }
  ] as GalleryItem[],

  // Samagri Guide
  samagriGuideHi: [
    { category: "मूलभूत सामग्री", items: ["रोली, अक्षत (बिना टूटे चावल), चंदन, मौली (कलावा)", "शुद्ध देशी गाय का घी, रुई की बत्तियां, कपूर", "सुपारी (11 नग), लौंग, इलायची, पान के पत्ते (5 नग)"] },
    { category: "कलश एवं घट स्थापना", items: ["तांबे अथवा पीतल का कलश", "नारियल (जटा वाला लाल वस्त्र में लिपटा)", "आम अथवा अशोक के 5-7 पत्ते, गंगाजल"] },
    { category: "भोग एवं प्रसाद", items: ["पंचामृत (दूध, दही, घी, शहद, गंगाजल/शक्कर)", "ताजे ऋतु फल (विशेषकर केले व सेब)", "मिठाई (पेड़ा / लड्डू) अथवा पंजीरी प्रसाद"] }
  ],
  samagriGuideEn: [
    { category: "Essential Puja Items", items: ["Roli, Akshat (unbroken rice), Sandalwood paste, Mauli (sacred thread)", "Pure cow desi ghee, cotton wicks, camphor", "Betel nuts (Supari), Cloves, Cardamom, Betel leaves"] },
    { category: "Kalash Setup", items: ["Copper or brass holy pot (Kalash)", "Whole coconut wrapped in red sacred cloth", "5-7 Fresh mango or ashoka leaves, Holy Gangajal"] },
    { category: "Offerings & Prasad", items: ["Panchamrit (Milk, Curd, Ghee, Honey, Gangajal/Sugar)", "Seasonal fresh fruits (especially bananas and apples)", "Sweets (Laddu/Peda) or roasted flour Panjiri prasad"] }
  ]
};
