import { Room, AmenityService, GalleryItem, Review } from '../types';

export const HOTEL_INFO = {
  name: "فندق ضواحي صنعاء",
  nameEn: "Sana'a Suburbs Hotel",
  tagline: "راحة وأناقة في قلب العاصمة",
  subTagline: "وجهتكم الأولى للإقامة الفندقية الراقية وضيافة يمنية أصيلة بأعلى معايير النظافة والراحة",
  phone: "+967774760824",
  phoneDisplay: "+967 774 760 824",
  phoneLocal: "774760824",
  whatsappNumber: "967774760824",
  email: "info@dawahisanaa-hotel.com",
  address: "اليمن - صنعاء - منطقة مذبح - أمام نادي الشعب (بجانب مدرسة الأمة الرائدة)",
  city: "صنعاء، الجمهورية اليمنية",
  rating: 3.6,
  totalReviews: 180,
  googleMapsUrl: "https://maps.google.com/?q=صنعاء+مذبح+نادي+الشعب",
  coordinates: {
    lat: 15.3725,
    lng: 44.1755
  },
  developer: {
    name: "مازن فارع",
    phone: "776591639",
    phoneFull: "+967776591639",
    whatsappUrl: "https://wa.me/967776591639"
  }
};

export const ROOMS_DATA: Room[] = [
  {
    id: "royal-suite",
    name: "جناح ملكي فاخر (غرفتين وصالة)",
    category: "suite",
    categoryLabel: "أجنحة ملكية",
    tag: "الأكثر فخامة وطلباً",
    tagColor: "bg-amber-600 text-white",
    pricePerNight: 45000,
    currency: "ريال يمني",
    size: "75 متر مربع",
    capacity: "4 - 5 أفراد",
    bedType: "1 سرير كينج ماستر + 2 سرير مفرد",
    view: "إطلالة بانورامية مميزة على شوارع صنعاء ونادي الشعب",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "جناح واسع ومجهز بأرقى درجات الفخامة والأناقة، يحتوي على غرفتي نوم مستقلتين، صالة استقبال ومعيشة فسيحة مع كنب ملكي، شاشة سمارت 55 بوصة، وحمامين حديثين مجهزين بأحدث التجهيزات.",
    features: [
      "غرفتين نوم مستقلتين مع صالة معيشة فاخرة",
      "حمام ماستر رخامي مع مستلزمات استحمام فاخرة",
      "شاشات تلفزيون ذكية Smart LED 4K",
      "إنترنت فائق السرعة Wi-Fi 6 مجاناً",
      "تكييف وتدفئة مع عزل صوتي كامل",
      "ميني بار وغلاية مع ضيافة مجانية شاي وقهوة"
    ],
    amenities: [
      { icon: "fa-wifi", label: "واي فاي سريع" },
      { icon: "fa-tv", label: "شاشة سمارت 55 بوصة" },
      { icon: "fa-snowflake", label: "تكييف ممتاز" },
      { icon: "fa-bell-concierge", label: "خدمة غرف 24/7" },
      { icon: "fa-couch", label: "مجلس وصالة ضيوف" },
      { icon: "fa-mug-hot", label: "ضيافة شاي وقهوة" }
    ]
  },
  {
    id: "family-suite",
    name: "جناح عائلي مميز (صالة وغرفة نوم)",
    category: "family",
    categoryLabel: "أجنحة عائلية",
    tag: "مثالي للعائلات",
    tagColor: "bg-blue-600 text-white",
    pricePerNight: 35000,
    currency: "ريال يمني",
    size: "55 متر مربع",
    capacity: "3 - 4 أفراد",
    bedType: "1 سرير كينج كبير + 1 سرير فردي + أريكة سرير",
    view: "إطلالة هادئة على المدينة",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "صُمم خصيصاً لتوفير أقصى درجات الراحة والخصوصية للعائلات. يتضمن غرفة نوم رئيسية مفروشة بأسرّة مريحة وصالة جلوس دافئة تجمع أفراد الأسرة في أجواء مريحة.",
    features: [
      "غرفة نوم رحبة وصالة عائلية مستقلة",
      "مطبخ تحضيري مصغر (ميني كيتشن)",
      "شاشة عرض ذكية بقنوات فضائية متنوعة",
      "إنترنت مستمر ومجاني طوال فترة الإقامة",
      "خدمة تنظيف يومية مع تغيير المفارش",
      "عوازل زجاجية مانعة للضوضاء"
    ],
    amenities: [
      { icon: "fa-wifi", label: "واي فاي سريع" },
      { icon: "fa-tv", label: "شاشة LED ذكية" },
      { icon: "fa-snowflake", label: "تكييف هواء" },
      { icon: "fa-bell-concierge", label: "خدمة غرف 24/7" },
      { icon: "fa-users", label: "مناسب للعائلات" },
      { icon: "fa-bath", label: "حمام خاص متكامل" }
    ]
  },
  {
    id: "deluxe-double",
    name: "غرفة دبل ممتازة (سرير مزدوج كبير)",
    category: "double",
    categoryLabel: "غرف مزدوجة",
    tag: "راحة واسترخاء",
    tagColor: "bg-emerald-600 text-white",
    pricePerNight: 24000,
    currency: "ريال يمني",
    size: "35 متر مربع",
    capacity: "شخصين (2 أفراد)",
    bedType: "1 سرير مزدوج كينج فندقي فاخر",
    view: "إطلالة خارجية مبهجة",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "غرفة أنيقة وعصرية مجهزة بسرير مزدوج فندقي بمراتب طبية مريحة جداً، ومكتب عمل مع إضاءة مدروسة، مناسبة جداً للأزواج والمسافرين الباحثين عن الراحة والهدوء.",
    features: [
      "سرير كينج فندقي فائق الراحة",
      "مكتب عمل مع مقبس شحن متعدد",
      "حمام خاص بنظام دش مطري ومياه ساخنة مستمرة",
      "شاشة تلفزيون مسطحة",
      "إنترنت واي فاي عالي السرعة",
      "خزانة ملابس مع خزنة رقمية"
    ],
    amenities: [
      { icon: "fa-wifi", label: "واي فاي سريع" },
      { icon: "fa-tv", label: "شاشة مسطحة" },
      { icon: "fa-snowflake", label: "تكييف هواء" },
      { icon: "fa-bell-concierge", label: "خدمة الغرف" },
      { icon: "fa-shower", label: "مياه ساخنة 24/7" },
      { icon: "fa-shield-halved", label: "أمان ونظافة فائقة" }
    ]
  },
  {
    id: "standard-single",
    name: "غرفة مفردة سنجل (سرير فردي)",
    category: "single",
    categoryLabel: "غرف مفردة",
    tag: "اقتصادية وعملية",
    tagColor: "bg-slate-700 text-white",
    pricePerNight: 16000,
    currency: "ريال يمني",
    size: "24 متر مربع",
    capacity: "شخص واحد (1 فرد)",
    bedType: "1 سرير مفرد مريح",
    view: "إطلالة داخلية هادئة",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "الخيار المثالي للمسافرين بمفردهم ورجال الأعمال، توفر بيئة نوم هادئة ونظافة فائقة مع كافة الاحتياجات الضرورية بأسعار تنافسية وموقع مميز.",
    features: [
      "سرير مفرد بمرتبة فندقية طبية ومفارش معقمة",
      "حمام خاص ونظيف بمياه ساخنة مستمرة",
      "تلفزيون مع باقة قنوات فضائية",
      "إنترنت واي فاي غير محدود",
      "خدمة تنظيف يومية",
      "هدوء تام يساعد على الراحة والاسترخاء"
    ],
    amenities: [
      { icon: "fa-wifi", label: "واي فاي مجاني" },
      { icon: "fa-tv", label: "تلفزيون" },
      { icon: "fa-snowflake", label: "مكيف هواء" },
      { icon: "fa-bell-concierge", label: "خدمة غرف" },
      { icon: "fa-bolt", label: "كهرباء مستمرة 24/7" },
      { icon: "fa-lock", label: "أمان وخصوصية" }
    ]
  }
];

export const SERVICES_DATA: AmenityService[] = [
  {
    id: "reception",
    title: "استقبال وخدمة عملاء 24/7",
    description: "فريق استقبال مهني وبشوش في خدمتكم على مدار الساعة لتسهيل الدخول والمغادرة وتلبية كافة احتياجاتكم.",
    icon: "fa-clock",
    badge: "متاح طوال اليوم"
  },
  {
    id: "wifi",
    title: "إنترنت مجاني عالي السرعة",
    description: "شبكة واي فاي فايبر سريعة تغطي كافة الغرف والأجنحة والممرات مجاناً لتبقوا على اتصال دائم بأعمالكم وأحبائكم.",
    icon: "fa-wifi",
    badge: "تغطية كاملة"
  },
  {
    id: "power",
    title: "كهرباء وطاقة شمسية مستمرة",
    description: "نظام طاقة كهربائية متكامل ومولدات احتياطية مع منظومة طاقة شمسية تضمن استمرار التيار والإنترنت 24/7 دون انقطاع.",
    icon: "fa-bolt",
    badge: "بدون انقطاع"
  },
  {
    id: "parking",
    title: "مواقف سيارات خاصة ومؤمنة",
    description: "مواقف سيارات مجانية وفسيحة مخصصة للنزلاء مع حراسة أمنية وكاميرات مراقبة متطورة لحماية مركباتكم.",
    icon: "fa-square-parking",
    badge: "مؤمنة 100%"
  },
  {
    id: "cleaning",
    title: "نظافة وتعقيم مستمر",
    description: "اهتمام فائق بأدق معايير النظافة والتعقيم اليومي للغرف وتغيير المفارش واستخدام أرقى المعطرات والمطهرات.",
    icon: "fa-pump-soap",
    badge: "أعلى المعايير"
  },
  {
    id: "room-service",
    title: "خدمة غرف ومشروبات سريعة",
    description: "توصيل المشروبات الساخنة والباردة والمأكولات الخفيفة إلى غرفتكم بكل سرعة واحترافية في أي وقت ترغبون.",
    icon: "fa-bell-concierge",
    badge: "خدمة سريعة"
  },
  {
    id: "laundry",
    title: "خدمات الغسيل والكي",
    description: "خدمة غسيل وكي ملابس النزلاء بأسرع وقت وبأسعار مناسبة لتبقوا دائماً بأبهى إطلالة.",
    icon: "fa-shirt",
    badge: "خدمة إضافية"
  },
  {
    id: "location-security",
    title: "موقع استراتيجي وأمان تام",
    description: "موقع حيوي في مذبح أمام نادي الشعب وبجانب المرافق الحيوية مع أنظمة مراقبة وأمان وخصوصية تامة.",
    icon: "fa-shield-halved",
    badge: "موقع مميز"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "الجناح الملكي - الصالة الرئيسية",
    category: "suites",
    categoryLabel: "الأجنحة الفاخرة",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    description: "صالة استقبال راقية وأثاث فندقي حديث"
  },
  {
    id: "g2",
    title: "غرفة النوم الماستر - الجناح الملكي",
    category: "suites",
    categoryLabel: "الأجنحة الفاخرة",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    description: "سرير كينج فاخر وإضاءة دافئة مريحة"
  },
  {
    id: "g3",
    title: "الجناح العائلي المميز",
    category: "suites",
    categoryLabel: "الأجنحة الفاخرة",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
    description: "مساحات واسعة تناسب تجمع العائلة براحة تامة"
  },
  {
    id: "g4",
    title: "الغرفة المزدوجة الدبل",
    category: "rooms",
    categoryLabel: "الغرف",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    description: "تصميم عصري ونظافة فائقة على أعلى طراز"
  },
  {
    id: "g5",
    title: "الغرفة المفردة السنجل",
    category: "rooms",
    categoryLabel: "الغرف",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    description: "هدوء تام ومكتب عمل مريح للنزلاء الأفراد"
  },
  {
    id: "g6",
    title: "بهو الفندق وقسم الاستقبال",
    category: "lobby",
    categoryLabel: "الاستقبال والبهو",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
    description: "استقبال دافئ وضيافة يمنية كريمة"
  },
  {
    id: "g7",
    title: "جلسة الاستراحة واللوبي",
    category: "lobby",
    categoryLabel: "الاستقبال والبهو",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    description: "مكان مخصص لراحة النزلاء وتناول القهوة"
  },
  {
    id: "g8",
    title: "الحمامات والتجهيزات الفندقية",
    category: "rooms",
    categoryLabel: "الغرف",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    description: "نظافة مستمرة ودش مياه ساخنة على مدار الساعة"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "r1",
    author: "أبو محمد اليافعي",
    origin: "مسافر من عدن",
    rating: 5,
    date: "قبل أسبوعين",
    comment: "فندق ممتاز جداً وهادئ، تعامل موظفي الاستقبال قمة في الذوق والأخلاق. الكهرباء والإنترنت شغالين 24 ساعة بدون انقطاع، ونظافة الغرف تشرح الصدر. أنصح به بشدة لكل من يزور صنعاء.",
    stayType: "إقامة في جناح عائلي"
  },
  {
    id: "r2",
    author: "م. طارق الحكيمي",
    origin: "تعز / صنعاء",
    rating: 4,
    date: "قبل شهر",
    comment: "موقع الفندق رائع في مذبح أمام نادي الشعب وكل الخدمات قريبة ومواقف السيارات آمنة. الغرفة الدبل كانت واسعة ومريحة والسعر مناسب جداً مقارنة بمستوى النظافة.",
    stayType: "إقامة عمل - غرفة دبل"
  },
  {
    id: "r3",
    author: "خالد السعدي",
    origin: "حضرموت",
    rating: 5,
    date: "قبل شهرين",
    comment: "الجناح الملكي كان واسعاً ومناسباً جداً لعائلتي. الراحة والهدوء والخدمة السريعة جعلت إقامتنا ممتعة. شكراً لإدارة فندق ضواحي صنعاء على كرم الضيافة.",
    stayType: "إقامة عائلية - جناح ملكي"
  },
  {
    id: "r4",
    author: "أحمد بن شملان",
    origin: "مأرب",
    rating: 4,
    date: "قبل 3 أشهر",
    comment: "قضيت 3 ليالي في الغرفة المفردة، تجربة ممتازة وسرير طبي مريح جداً. التقييم العام للفندق يستحق أكثر وموظف الاستقبال الليلي متعاون جداً.",
    stayType: "إقامة فردية - غرفة سنجل"
  }
];

export const FAQ_DATA = [
  {
    q: "أين يقع فندق ضواحي صنعاء بالضبط؟",
    a: "يقع الفندق في موقع متميز واستراتيجي في العاصمة صنعاء - منطقة مذبح - مباشرة أمام نادي الشعب الرياضي وبجانب مدرسة الأمة الرائدة، بموقع يسهل الوصول منه إلى وسط العاصمة والمستشفيات والجامعات."
  },
  {
    q: "هل الكهرباء والإنترنت متوفران على مدار 24 ساعة؟",
    a: "نعم، يتميز الفندق بمنظومة كهرباء وطاقة شمسية ومولدات احتياطية تعمل على مدار 24 ساعة متواصلة بالإضافة لشبكة إنترنت واي فاي مجانية وسريعة في كل الغرف."
  },
  {
    q: "كيف يمكنني حجز غرفة أو جناح بأسرع طريقة؟",
    a: "يمكنك الحجز الفوري والمباشر بالضغط على زر الواتساب أو الاتصال على الرقم: 967774760824+ وسيتم تأكيد حجزك فوراً مع موظف الاستقبال."
  },
  {
    q: "ما هي مواعيد تسجيل الدخول وتسجيل المغادرة؟",
    a: "تسجيل الدخول يبدأ من الساعة 12:00 ظهراً، وتسجيل المغادرة حتى الساعة 12:00 ظهراً من اليوم التالي، مع إمكانية التنسيق المسبق مع الاستقبال عند الحاجة لمواعيد مرنة."
  },
  {
    q: "هل تتوفر مواقف خاصة لسيارات النزلاء؟",
    a: "نعم، تتوفر مواقف سيارات فسيحة ومجانية لنزلاء الفندق مع حراسة وكاميرات مراقبة مستمرة."
  }
];
