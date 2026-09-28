// Comprehensive data for Defo Topics & Subtopics Exploration

export const TOPICS_CATEGORIES = [
  { id: "all", label: "All Topics", icon: "✨" },
  { id: "creative", label: "Creative & Editing", icon: "🎬" },
  { id: "culinary", label: "Culinary Arts", icon: "🍳" },
  { id: "design", label: "Design & UI/UX", icon: "🎨" },
  { id: "crafts", label: "DIY & Crafts", icon: "✂️" },
  { id: "lifestyle", label: "Lifestyle & Style", icon: "🌟" },
  { id: "learning", label: "Learning & Sports", icon: "📚" },
];

export const TOPICS_DATA = [
  {
    id: "cooking",
    name: "Cooking",
    category: "culinary",
    icon: "🍳",
    tagline: "Master mouth-watering recipes, chef knife skills & culinary secrets",
    videoCount: "5,600+ Videos",
    rating: "4.96",
    color: "from-amber-500 to-orange-500",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    accent: "#f97316",
    subtopics: [
      {
        name: "Crispy & Juicy Chicken",
        desc: "Buttermilk fried chicken, skillet searing, garlic herb marinades & tender roasts.",
        videos: "42 Videos",
        level: "Beginner Friendly",
        badge: "Most Popular",
        tag: "Dinner Ideas"
      },
      {
        name: "Rich Homemade Gravies",
        desc: "Velvety butter masala, caramelized onion reductions & aromatic herb broths.",
        videos: "38 Videos",
        level: "Intermediate",
        badge: "Chef Secrets",
        tag: "Classic Sauces"
      },
      {
        name: "Perfect Steamed & Flavored Rice",
        desc: "Fluffy basmati, coconut jasmine rice, saffron pilaf & sushi rice techniques.",
        videos: "29 Videos",
        level: "All Levels",
        badge: "Foundations",
        tag: "Essential"
      },
      {
        name: "Handcrafted Italian Pasta",
        desc: "Silky carbonara, fresh egg pasta dough, slow-simmered bolognese & pesto.",
        videos: "45 Videos",
        level: "Intermediate",
        badge: "Editor Pick",
        tag: "Artisan"
      },
      {
        name: "Stir-Fried Noodles & Ramen",
        desc: "Crispy wok-tossed noodles, 12-hour tonkotsu broth & spicy sesame ramen.",
        videos: "34 Videos",
        level: "Intermediate",
        badge: "Trending",
        tag: "Street Food"
      },
      {
        name: "Traditional Sweets & Desserts",
        desc: "Milk fudge, gulab jamun, molten lava cakes & delicate French macarons.",
        videos: "31 Videos",
        level: "Masterclass",
        badge: "Sweet Treats",
        tag: "Desserts"
      },
      {
        name: "Street Style Shawarma",
        desc: "Garlic toum sauce, spiced grilled chicken thighs & freshly rolled pita wraps.",
        videos: "24 Videos",
        level: "Beginner",
        badge: "Street Hit",
        tag: "Quick Meals"
      },
      {
        name: "Aromatic Spice Pulao",
        desc: "Whole spice infusing, golden caramelized onions, vegetable and paneer pulaos.",
        videos: "27 Videos",
        level: "All Levels",
        badge: "Crowd Favorite",
        tag: "Rice Specials"
      }
    ]
  },
  {
    id: "editing",
    name: "Editing",
    category: "creative",
    icon: "🎬",
    tagline: "Transform raw footage into viral cinematic masterpieces with pro workflows",
    videoCount: "3,800+ Videos",
    rating: "4.94",
    color: "from-purple-500 to-indigo-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    accent: "#a855f7",
    subtopics: [
      {
        name: "Cinematic Color Grading",
        desc: "Teal & orange color palettes, skin tone protection, curve controls & custom LUTs.",
        videos: "52 Videos",
        level: "Intermediate",
        badge: "Pro Look",
        tag: "Color Science"
      },
      {
        name: "Seamless Whip & Mask Transitions",
        desc: "Speed-ramped whip pans, seamless object match cuts & frame blending tricks.",
        videos: "41 Videos",
        level: "All Levels",
        badge: "Trending",
        tag: "Transitions"
      },
      {
        name: "Audio Mixing & Foley Soundscapes",
        desc: "Multi-track dialogue cleanup, EQ sweet spots, cinematic bass drops & ambient foley.",
        videos: "33 Videos",
        level: "Intermediate",
        badge: "Essential",
        tag: "Audio Craft"
      },
      {
        name: "Dynamic Kinetic Typography",
        desc: "Pop-up text titles, 3D tracking captions, bouncing text & YouTube style subtitles.",
        videos: "48 Videos",
        level: "Beginner",
        badge: "Viral Shorts",
        tag: "Motion Graphics"
      },
      {
        name: "Green Screen & Compositing",
        desc: "Clean chroma keying, shadow matching, background perspective warping & light wraps.",
        videos: "28 Videos",
        level: "Advanced",
        badge: "VFX",
        tag: "Visual FX"
      }
    ]
  },
  {
    id: "uiux-design",
    name: "UI/UX Design Tools",
    category: "design",
    icon: "🎨",
    tagline: "Design intuitive interfaces, interactive prototypes & scalable design systems",
    videoCount: "2,900+ Videos",
    rating: "4.95",
    color: "from-cyan-400 to-blue-500",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    accent: "#06b6d4",
    subtopics: [
      {
        name: "Figma Auto-Layout Mastery",
        desc: "Responsive constraints, nested stacks, dynamic card containers & gap tokens.",
        videos: "60 Videos",
        level: "All Levels",
        badge: "Essential",
        tag: "Figma Pro"
      },
      {
        name: "Design Tokens & System Architecture",
        desc: "Color variables, typography ramps, component variant states & Figma variables.",
        videos: "38 Videos",
        level: "Advanced",
        badge: "Enterprise",
        tag: "Design Systems"
      },
      {
        name: "Mobile UX Heuristics & Micro-Interactions",
        desc: "Thumb zone navigation, haptic feedback design, bottom sheets & smooth modals.",
        videos: "44 Videos",
        level: "Intermediate",
        badge: "Top Rated",
        tag: "User Experience"
      },
      {
        name: "Interactive Wireframes to Prototypes",
        desc: "Smart animate transitions, interactive component states & user testing workflows.",
        videos: "35 Videos",
        level: "Beginner",
        badge: "Foundations",
        tag: "Prototyping"
      }
    ]
  },
  {
    id: "adobe-tools",
    name: "Adobe Tools",
    category: "design",
    icon: "🖌️",
    tagline: "Harness the industry standard creative suite from Photoshop to Premiere Pro",
    videoCount: "3,450+ Videos",
    rating: "4.91",
    color: "from-rose-500 to-red-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    accent: "#f43f5e",
    subtopics: [
      {
        name: "Photoshop AI Generative Fill & Retouching",
        desc: "Frequency separation skin retouching, neural filters, object removal & lighting fixes.",
        videos: "55 Videos",
        level: "All Levels",
        badge: "AI Powered",
        tag: "Photoshop"
      },
      {
        name: "Illustrator Precision Vector Paths",
        desc: "Pen tool mastery, geometric logo construction, typography warping & 3D vector extrusions.",
        videos: "42 Videos",
        level: "Intermediate",
        badge: "Logo Design",
        tag: "Vector Art"
      },
      {
        name: "Premiere Pro High-Speed Workflows",
        desc: "Shortcut timeline navigation, proxy editing for 4K footage & multi-camera sync.",
        videos: "49 Videos",
        level: "Beginner to Pro",
        badge: "Video Editing",
        tag: "Premiere"
      },
      {
        name: "After Effects Motion Particles & 3D",
        desc: "Null controllers, expression scripts, camera parallax & particle explosions.",
        videos: "39 Videos",
        level: "Advanced",
        badge: "Visual Magic",
        tag: "Motion FX"
      }
    ]
  },
  {
    id: "photography",
    name: "Photography",
    category: "creative",
    icon: "📷",
    tagline: "Capture breathtaking visual stories through light, composition & framing",
    videoCount: "3,120+ Videos",
    rating: "4.88",
    color: "from-emerald-400 to-teal-500",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accent: "#10b981",
    subtopics: [
      {
        name: "Golden Hour Portrait Lighting",
        desc: "Natural backlighting, specular rim lights, reflector diffusion & bokeh falloff.",
        videos: "46 Videos",
        level: "Beginner",
        badge: "Popular",
        tag: "Portraits"
      },
      {
        name: "Composition: Beyond Rule of Thirds",
        desc: "Leading lines, negative space, framing within a frame & golden ratio guides.",
        videos: "35 Videos",
        level: "All Levels",
        badge: "Artistic",
        tag: "Composition"
      },
      {
        name: "Smartphone Pro Mode Photography",
        desc: "Manual shutter speed, RAW capture, ISO balancing & night mode astrophotography.",
        videos: "51 Videos",
        level: "Beginner Friendly",
        badge: "Mobile Hero",
        tag: "Mobile Shots"
      },
      {
        name: "Studio Strobe & Modifier Setups",
        desc: "Softboxes, beauty dishes, rim hair lights & high-key studio commercial photography.",
        videos: "29 Videos",
        level: "Advanced",
        badge: "Commercial",
        tag: "Studio Gear"
      }
    ]
  },
  {
    id: "hairstyle",
    name: "Hairstyle",
    category: "lifestyle",
    icon: "✂️",
    tagline: "Trending cuts, daily styling hacks, braids & hair wellness routines",
    videoCount: "2,200+ Videos",
    rating: "4.89",
    color: "from-pink-500 to-rose-400",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    accent: "#ec4899",
    subtopics: [
      {
        name: "Heatless Beach Waves & Curls",
        desc: "Robe tie curling hacks, silk heatless rods & sea salt spray texturing routines.",
        videos: "37 Videos",
        level: "Beginner",
        badge: "Hair Health",
        tag: "No Heat"
      },
      {
        name: "Quick 5-Minute Everyday Braids",
        desc: "French braids, Dutch halo braids, fishtail accents & effortless messy buns.",
        videos: "42 Videos",
        level: "All Levels",
        badge: "Quick Prep",
        tag: "Daily Looks"
      },
      {
        name: "Men's Modern Textured Crop & Fades",
        desc: "Low taper fade, textured fringe styling, matte clay control & beard blending.",
        videos: "36 Videos",
        level: "Intermediate",
        badge: "Barber Secrets",
        tag: "Men's Cuts"
      },
      {
        name: "Volume Boosting & Scalp Care",
        desc: "Root blow-dry clipping, scalp oil massages, clarifying rinses & density hacks.",
        videos: "28 Videos",
        level: "All Levels",
        badge: "Care Routine",
        tag: "Hair Wellness"
      }
    ]
  },
  {
    id: "crafts",
    name: "Crafts",
    category: "crafts",
    icon: "🧶",
    tagline: "Handcrafted DIY projects, tactile hobbies & creative home accents",
    videoCount: "2,600+ Videos",
    rating: "4.92",
    color: "from-teal-400 to-cyan-500",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    accent: "#14b8a6",
    subtopics: [
      {
        name: "Epoxy Resin Coasters & Trays",
        desc: "Bubble-free resin pouring, gold leaf inlays, ocean wave alcohol ink effects.",
        videos: "40 Videos",
        level: "Beginner",
        badge: "Trending DIY",
        tag: "Resin Art"
      },
      {
        name: "Macrame Modern Wall Hangings",
        desc: "Lark's head knots, square knots, botanical plant hangers & bohemian fringes.",
        videos: "33 Videos",
        level: "All Levels",
        badge: "Home Decor",
        tag: "Macrame"
      },
      {
        name: "Clay Pottery & Pinch Pots",
        desc: "Air dry clay sculpting, miniature ceramic dishes & glazed pastel painted textures.",
        videos: "29 Videos",
        level: "Beginner",
        badge: "Therapeutic",
        tag: "Ceramics"
      },
      {
        name: "Handmade Scented Soy Candles",
        desc: "Essential oil blending, wooden wicks, jar pouring & aesthetic marble swirls.",
        videos: "31 Videos",
        level: "Beginner",
        badge: "Gift Ideas",
        tag: "Candles"
      }
    ]
  },
  {
    id: "paper-craft",
    name: "Paper Craft",
    category: "crafts",
    icon: "📄",
    tagline: "Intricate origami, paper quilling, cards & sculptural paper engineering",
    videoCount: "1,640+ Videos",
    rating: "4.85",
    color: "from-pink-400 to-rose-500",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    accent: "#f43f5e",
    subtopics: [
      {
        name: "Geometric 3D Origami",
        desc: "Modular sonobe units, origami dragons, kusudama flowers & moving flexagons.",
        videos: "38 Videos",
        level: "Intermediate",
        badge: "Japanese Art",
        tag: "Origami"
      },
      {
        name: "Paper Quilling Masterpieces",
        desc: "Tight coils, teardrop petals, typographic monogram art & colorful paper mandalas.",
        videos: "26 Videos",
        level: "All Levels",
        badge: "Precision",
        tag: "Quilling"
      },
      {
        name: "3D Pop-Up Architecture Cards",
        desc: "Precision scoring, kinematic paper hinges & architectural skyline cards.",
        videos: "22 Videos",
        level: "Intermediate",
        badge: "Keepsakes",
        tag: "Pop-Up Art"
      }
    ]
  },
  {
    id: "cardboard-craft",
    name: "Cardboard Craft",
    category: "crafts",
    icon: "📦",
    tagline: "Eco-friendly engineering, desk organizers, automata & DIY miniatures",
    videoCount: "980+ Videos",
    rating: "4.78",
    color: "from-amber-600 to-amber-700",
    badgeColor: "bg-amber-600/10 text-amber-500 border-amber-600/30",
    accent: "#d97706",
    subtopics: [
      {
        name: "Modular Desk Organizers",
        desc: "Sliding drawers, cable tidies, pen caddies & minimalist geometric storage boxes.",
        videos: "25 Videos",
        level: "Beginner",
        badge: "Eco Craft",
        tag: "Desk Setup"
      },
      {
        name: "Cardboard Mechanical Automata",
        desc: "Camshaft mechanisms, gear linkages, moving flapping birds & hand-cranked kinetic toys.",
        videos: "20 Videos",
        level: "Intermediate",
        badge: "STEM",
        tag: "Kinetic Art"
      },
      {
        name: "Miniature Cardboard Architecture",
        desc: "Dollhouse scaling, realistic brick texturing, scaled furniture & LED lighting fixtures.",
        videos: "24 Videos",
        level: "Masterclass",
        badge: "Hyper Detailed",
        tag: "Miniatures"
      }
    ]
  },
  {
    id: "travel",
    name: "Travel",
    category: "lifestyle",
    icon: "✈️",
    tagline: "Global adventure guides, hidden destinations, budget packing & cultural stories",
    videoCount: "2,700+ Videos",
    rating: "4.93",
    color: "from-sky-400 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    accent: "#0ea5e9",
    subtopics: [
      {
        name: "Ultra-Light One-Bag Packing",
        desc: "Compression cubes, capsule wardrobe travel kits, airline carry-on size optimization.",
        videos: "36 Videos",
        level: "Beginner",
        badge: "Travel Hack",
        tag: "Packing"
      },
      {
        name: "Hidden Gems in Southeast Asia",
        desc: "Secret waterfalls in Bali, Vietnam mountain loop, authentic street food alleys.",
        videos: "44 Videos",
        level: "All Levels",
        badge: "Wanderlust",
        tag: "Destinations"
      },
      {
        name: "Budget Flight & Hotel Tactics",
        desc: "Matrix ITA searches, point redemption secrets, shoulder season booking hacks.",
        videos: "30 Videos",
        level: "All Levels",
        badge: "Save Money",
        tag: "Travel Smart"
      }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    category: "learning",
    icon: "⚡",
    tagline: "Athletic performance, Calisthenics, football skills & fitness breakthroughs",
    videoCount: "4,200+ Videos",
    rating: "4.88",
    color: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accent: "#10b981",
    subtopics: [
      {
        name: "Calisthenics Bodyweight Progression",
        desc: "Pushup variations, pullup strength curves, muscle-up kinematics & core holds.",
        videos: "48 Videos",
        level: "All Levels",
        badge: "Strength",
        tag: "Bodyweight"
      },
      {
        name: "Football Ball Control & Dribbling",
        desc: "La Croqueta footwork, first touch control, fast pivoting & 1v1 skill moves.",
        videos: "52 Videos",
        level: "Intermediate",
        badge: "Soccer Pro",
        tag: "Skills"
      },
      {
        name: "Basketball Shooting Mechanics",
        desc: "Arc release consistency, balance foot placement, catch-and-shoot rhythm & floaters.",
        videos: "39 Videos",
        level: "Intermediate",
        badge: "Hoops",
        tag: "Basketball"
      }
    ]
  },
  {
    id: "languages",
    name: "Languages",
    category: "learning",
    icon: "🗣️",
    tagline: "Fluent conversational shortcuts, native pronunciation & cognitive learning",
    videoCount: "1,950+ Videos",
    rating: "4.92",
    color: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    accent: "#3b82f6",
    subtopics: [
      {
        name: "Conversational Spanish Shortcuts",
        desc: "100 high-frequency verbs, roll your R's pronunciation drill & practical travel slang.",
        videos: "40 Videos",
        level: "Beginner",
        badge: "Top Choice",
        tag: "Spanish"
      },
      {
        name: "Japanese Hiragana & Kanji Mnemonics",
        desc: "Visual memory mnemonics, stroke orders, anime dialogue listening practice.",
        videos: "38 Videos",
        level: "Beginner",
        badge: "Fun Learning",
        tag: "Japanese"
      },
      {
        name: "French Intonation & Accents",
        desc: "Nasal vowels, liaison connections, conversational rhythm & Parisian phrases.",
        videos: "31 Videos",
        level: "Intermediate",
        badge: "Pronunciation",
        tag: "French"
      }
    ]
  },
  {
    id: "decorations",
    name: "Decorations",
    category: "crafts",
    icon: "✨",
    tagline: "Event styling, aesthetic room transformations, lighting & floral art",
    videoCount: "2,100+ Videos",
    rating: "4.90",
    color: "from-amber-400 to-rose-400",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    accent: "#f59e0b",
    subtopics: [
      {
        name: "Organic Balloon Garland Arches",
        desc: "Double-stuffed matte color mixing, glue dot cluster styling, backdrop framing.",
        videos: "35 Videos",
        level: "Beginner",
        badge: "Event Pro",
        tag: "Party Decor"
      },
      {
        name: "Cozy Warm Room Lighting Hacks",
        desc: "Ambient fairy light curtains, indirect LED diffusion channels, warm bulb layering.",
        videos: "28 Videos",
        level: "All Levels",
        badge: "Cozy Living",
        tag: "Lighting"
      },
      {
        name: "Fresh Flower Table Centerpieces",
        desc: "Spiral stem grid placing, floral foam hydration, color palette pairing.",
        videos: "26 Videos",
        level: "Intermediate",
        badge: "Floral Art",
        tag: "Centerpieces"
      }
    ]
  },
  {
    id: "kids",
    name: "Kids",
    category: "learning",
    icon: "🎈",
    tagline: "Inspire young curious minds with playful learning, STEM & creative games",
    videoCount: "3,400+ Videos",
    rating: "4.98",
    color: "from-yellow-400 to-amber-500",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    accent: "#eab308",
    subtopics: [
      {
        name: "Fun Kitchen Science Experiments",
        desc: "Baking soda volcanoes, rainbow milk density test, static electricity butterflies.",
        videos: "45 Videos",
        level: "Ages 4-10",
        badge: "Hands-On STEM",
        tag: "Science"
      },
      {
        name: "Montessori Sensory & Motor Skills",
        desc: "Bead threading, paper weaving, tactile matching games & balance challenges.",
        videos: "33 Videos",
        level: "Early Years",
        badge: "Development",
        tag: "Montessori"
      },
      {
        name: "Step-by-Step Cartoon Drawing",
        desc: "Simple geometric animals, cartoon faces, coloring shading basics.",
        videos: "40 Videos",
        level: "All Kids",
        badge: "Creative",
        tag: "Drawing"
      }
    ]
  },
  {
    id: "womens-style",
    name: "Women's Style",
    category: "lifestyle",
    icon: "👗",
    tagline: "Effortless styling, capsule wardrobes, accessory pairing & fashion guides",
    videoCount: "2,300+ Videos",
    rating: "4.91",
    color: "from-rose-400 to-pink-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    accent: "#fb7185",
    subtopics: [
      {
        name: "Minimalist Capsule Wardrobe",
        desc: "15 core pieces creating 45 timeless looks, neutral tone pairing, smart layering.",
        videos: "42 Videos",
        level: "All Levels",
        badge: "Timeless",
        tag: "Wardrobe"
      },
      {
        name: "Jewelry & Scarf Accent Styling",
        desc: "Chain layering proportions, silk scarf knot variations, ear stack styling.",
        videos: "31 Videos",
        level: "Beginner",
        badge: "Accents",
        tag: "Accessories"
      },
      {
        name: "Dressing for Body Proportions",
        desc: "Waistline cinching, silhouette balancing, neckline styling and drape flow.",
        videos: "37 Videos",
        level: "All Levels",
        badge: "Confidence",
        tag: "Fit & Style"
      }
    ]
  }
];
