// Exact recreation of the jumbled masonry cards from the Defo Figma reference
// Features extreme height variations (from 160px compact banners up to 500px extra-tall hero portraits)
export const HERO_COLUMNS_DATA = [
  // Column 1 (Leftmost): Medium -> Short Banner -> Tall -> Medium
  [
    {
      id: "c1-yoga",
      title: "Yoga",
      fontStyle: "font-serif italic text-emerald-300 text-2xl tracking-wide",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      height: 290,
    },
    {
      id: "c1-cooking",
      title: "Cooking",
      fontStyle: "font-serif italic text-red-400 font-black text-xl tracking-wider",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      height: 170, // Short banner like in Figma
    },
    {
      id: "c1-business",
      title: "Business Management",
      fontStyle: "font-sans font-black text-teal-300 text-lg leading-tight uppercase tracking-tight",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      height: 340, // Tall corporate skyscraper
    },
    {
      id: "c1-magic",
      title: "Magic",
      fontStyle: "font-serif italic text-purple-300 text-2xl tracking-widest",
      imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
      height: 240,
    }
  ],

  // Column 2: Short Coding -> Very Tall Hairstyle -> Medium Dance
  [
    {
      id: "c2-coding",
      title: "Coding",
      fontStyle: "font-mono font-bold text-sky-400 text-xl uppercase tracking-widest",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      height: 190, // Wide landscape coding banner
    },
    {
      id: "c2-hairstyle",
      title: "Hairstyle",
      fontStyle: "font-serif italic text-pink-300 text-2xl drop-shadow-md",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      height: 380, // Very tall portrait
    },
    {
      id: "c2-dance",
      title: "Dance",
      fontStyle: "font-sans font-black text-amber-300 italic text-2xl",
      imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
      height: 260,
    },
    {
      id: "c2-photo",
      title: "Photography Tips",
      fontStyle: "font-serif text-cyan-200 text-base uppercase tracking-widest",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
      height: 220,
    }
  ],

  // Column 3 (Center-Left): Medium -> MASSIVE BURNING MAGIC CARD -> Short Hands
  [
    {
      id: "c3-photo",
      title: "Photography",
      fontStyle: "font-serif text-slate-200 text-lg uppercase tracking-wider",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80",
      height: 230,
    },
    {
      id: "c3-magic-giant",
      title: "Magic",
      fontStyle: "font-serif text-white font-black text-3xl tracking-widest drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      height: 480, // Massive portrait burning cards matching Figma!
    },
    {
      id: "c3-coding-sub",
      title: "Coding",
      fontStyle: "font-mono text-emerald-400 text-lg uppercase font-bold",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      height: 210,
    },
    {
      id: "c3-yoga-sub",
      title: "Yoga",
      fontStyle: "font-serif italic text-teal-300 text-xl",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      height: 270,
    }
  ],

  // Column 4 (Center-Right): MASSIVE PAINTING WATERCOLOR -> Tall Yoga Studio -> Medium
  [
    {
      id: "c4-painting-giant",
      title: "Painting",
      fontStyle: "font-serif text-white font-bold text-3xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      height: 500, // Massive artist painting watercolor matching Figma!
    },
    {
      id: "c4-yoga-tall",
      title: "Yoga",
      fontStyle: "font-serif italic text-emerald-300 text-2xl",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      height: 350, // Tall portrait pose
    },
    {
      id: "c4-photo-tips",
      title: "Photography Tips",
      fontStyle: "font-serif text-sky-200 text-base uppercase tracking-widest",
      imageUrl: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=600&q=80",
      height: 220,
    },
    {
      id: "c4-business-sub",
      title: "Business Management",
      fontStyle: "font-sans font-black text-amber-300 text-lg uppercase",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      height: 260,
    }
  ],

  // Column 5 (Rightmost): Compact Cooking -> Medium Dance -> Tall Skyscraper
  [
    {
      id: "c5-cooking-spices",
      title: "Cooking",
      fontStyle: "font-serif italic font-black text-red-400 text-xl drop-shadow-md",
      imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
      height: 175, // Compact landscape spice spoons matching Figma!
    },
    {
      id: "c5-dance-tango",
      title: "Dance",
      fontStyle: "font-sans font-black text-amber-400 italic text-2xl tracking-wider",
      imageUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80",
      height: 310, // Dance couple on wooden floor
    },
    {
      id: "c5-coding-screen",
      title: "Coding",
      fontStyle: "font-mono font-bold text-teal-300 text-lg",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
      height: 250,
    },
    {
      id: "c5-magic-cards",
      title: "Magic",
      fontStyle: "font-serif text-purple-300 text-xl font-bold",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      height: 280,
    }
  ]
];
