// ============================================================
//  REEL RECIPES — Film Recipe Database
//  Add new recipes here. The site auto-displays them.
// ============================================================

const RECIPES = [

  // ──────────────────────────────────────────────────────────
  //  STUDIO GHIBLI
  // ──────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Chihiro's Onigiri (Rice Balls)",
    film: "Spirited Away",
    studio: "Studio Ghibli",
    year: 2001,
    category: "studio-ghibli",
    type: "animated",
    difficulty: "easy",
    emoji: "🍙",
    image: "https://www.ghibli.jp/gallery/chihiro019.jpg",
    filmConnection: "Early in the film, Chihiro's parents greedily devour mysterious food left for the spirits — a pivotal moment that transforms them into pigs. These humble rice balls are what Chihiro herself eats, gifted to her by Haku, representing the only kindness she receives as she begins her terrifying journey. In Japanese culture, onigiri carry deep emotional weight — they are comfort food, often made by a loved one's hands.",
    servings: 4,
    prepTime: "10 mins",
    cookTime: "30 mins",
    totalTime: "40 mins",
    ingredients: [
      "3 cups Japanese short-grain rice",
      "3¼ cups water",
      "1 tsp salt",
      "4 sheets nori (dried seaweed), cut into strips",
      "2 tbsp soy sauce",
      "1 tbsp mirin",
      "½ cup canned tuna, drained",
      "2 tbsp Japanese mayonnaise",
      "1 tsp toasted sesame seeds",
      "Salted water for shaping (1 tsp salt per 1 cup water)"
    ],
    steps: [
      { step: 1, title: "Cook the Rice", detail: "Wash the rice 3–4 times until water runs almost clear. Combine rice and 3¼ cups water in a pot. Bring to a boil, reduce heat to the lowest setting, cover, and cook for 15 minutes. Remove from heat and let steam for 10 minutes — do not lift the lid." },
      { step: 2, title: "Make the Filling", detail: "Mix the drained tuna with Japanese mayo, a pinch of salt, and sesame seeds. Set aside. In a small bowl, mix soy sauce and mirin — this is for an optional glazed exterior." },
      { step: 3, title: "Shape the Onigiri", detail: "Wet your hands with salted water (this prevents sticking and adds flavor). Take roughly ½ cup of warm rice. Flatten it in your palm, add a spoonful of tuna filling in the center, then fold the rice around it. Press firmly into a triangle shape using three fingers, rotating as you press. It should feel like a firm but not crushed ball." },
      { step: 4, title: "Wrap with Nori", detail: "Wrap a strip of nori around the base of each triangle. For a traditional style, wrap just before eating so the seaweed stays crispy." },
      { step: 5, title: "Optional: Grill Them", detail: "For a smoky, Ghibli-inspired finish, brush with the soy-mirin mixture and grill or pan-fry each onigiri on medium heat for 2 minutes per side until a golden crust forms." }
    ],
    bonusTip: "Leftover rice can be used the next day for fried rice — just add soy sauce, a scrambled egg, frozen peas, and sesame oil for a quick weeknight meal.",
    tags: ["japanese", "rice", "vegetarian-option", "quick"],
    likes: 247,
    comments: [
      { user: "GhibliChef", text: "Made these for my daughter's birthday! She cried happy tears 😭", time: "2 days ago" },
      { user: "RiceQueen99", text: "The grilled version is INCREDIBLE. That soy-mirin glaze is everything.", time: "1 week ago" }
    ]
  },

  {
    id: 2,
    title: "Howl's Moving Castle Breakfast Fry-Up",
    film: "Howl's Moving Castle",
    studio: "Studio Ghibli",
    year: 2004,
    category: "studio-ghibli",
    type: "animated",
    difficulty: "easy",
    emoji: "🍳",
    image: "https://www.ghibli.jp/gallery/howl012.jpg",
    filmConnection: "The breakfast scene in Howl's Moving Castle — where Howl conjures a magical fire spirit named Calcifer to fry eggs and crispy bacon — is one of the most beloved food moments in all of animation. The sizzling warmth of that cast-iron skillet over a living flame has inspired thousands of real-world cooks. This recipe recreates that golden-yolked, perfectly crisped morning ritual exactly.",
    servings: 2,
    prepTime: "5 mins",
    cookTime: "15 mins",
    totalTime: "20 mins",
    ingredients: [
      "4 large eggs",
      "6 strips thick-cut bacon",
      "4 sausages (pork or chicken)",
      "2 thick slices sourdough bread",
      "1 tbsp butter",
      "1 tbsp olive oil",
      "Salt and black pepper",
      "Fresh thyme (optional)",
      "1 tomato, halved",
      "½ cup baked beans (optional but traditional)"
    ],
    steps: [
      { step: 1, title: "Start the Bacon & Sausage", detail: "Heat a large cast-iron skillet (or heavy pan) over medium heat. No need to add oil — lay the bacon strips in and cook 3–4 minutes per side until crispy at the edges. Remove bacon and set aside. Add sausages to the same pan with the bacon fat and cook 8–10 minutes, turning occasionally until browned all the way round and cooked through." },
      { step: 2, title: "Grill the Tomato", detail: "Cut tomato in half, season cut side with salt and pepper. Place cut-side down in the pan alongside the sausages. Let it char slightly — about 3 minutes per side." },
      { step: 3, title: "Fry the Eggs", detail: "Add butter and olive oil to the pan. Once the butter foams, crack eggs in gently. For a Calcifer-approved result: cook over medium-low heat and spoon the hot butter over the yolks for about 2 minutes. This gives you crispy edges and a runny, golden center." },
      { step: 4, title: "Toast the Bread", detail: "Toast sourdough in a toaster or in the same pan pressed down with a spatula. Butter generously while hot." },
      { step: 5, title: "Plate It Up", detail: "Arrange everything on a warm plate: eggs in the center, bacon and sausages on the side, grilled tomato, beans warmed separately, and toast on the edge. Season with cracked black pepper and a few thyme leaves." }
    ],
    bonusTip: "Bacon fat is liquid gold — pour it off into a small jar and keep in the fridge. Use it to roast vegetables, fry potatoes, or season cast iron. It keeps for up to a month.",
    tags: ["breakfast", "british-inspired", "hearty", "quick"],
    likes: 389,
    comments: [
      { user: "Calcifer_Fan", text: "I literally made this while watching the movie. Perfect combo.", time: "3 days ago" },
      { user: "MorningMagic", text: "The butter basting trick for the eggs changed my life.", time: "5 days ago" }
    ]
  },

  {
    id: 3,
    title: "Remy's Ratatouille (Confit Byaldi)",
    film: "Ratatouille",
    studio: "Disney / Pixar",
    year: 2007,
    category: "disney-pixar",
    type: "animated",
    difficulty: "medium",
    emoji: "🍅",
    image: "https://lumiere-a.akamaihd.net/v1/images/ratatouille-dish_4cf5a66d.jpeg",
    filmConnection: "When food critic Anton Ego takes his first bite of Remy's ratatouille near the film's climax, he is transported back to his mother's kitchen — a child again, all cynicism dissolved. The dish shown is actually 'confit byaldi,' an elegant Provençal preparation designed by chef Thomas Keller specifically for the film's production team. It represents the film's central message: that great food can come from unexpected places, and that anyone — even a rat — can cook.",
    servings: 6,
    prepTime: "30 mins",
    cookTime: "2 hrs",
    totalTime: "2 hrs 30 mins",
    ingredients: [
      "2 medium zucchini, very thinly sliced",
      "2 medium yellow squash, very thinly sliced",
      "4 Roma tomatoes, very thinly sliced",
      "1 large eggplant, very thinly sliced",
      "FOR PIPERADE SAUCE:",
      "3 tbsp olive oil",
      "1 medium onion, finely diced",
      "4 garlic cloves, minced",
      "3 bell peppers (mixed colors), diced",
      "4 ripe tomatoes, crushed",
      "1 tsp fresh thyme",
      "1 tsp fresh rosemary",
      "Salt and pepper to taste",
      "FOR VINAIGRETTE:",
      "2 tbsp balsamic vinegar",
      "4 tbsp olive oil",
      "1 tsp fresh thyme",
      "Salt and pepper"
    ],
    steps: [
      { step: 1, title: "Make the Piperade Sauce", detail: "Heat olive oil in a wide oven-safe pan over medium heat. Sauté onion until soft and translucent, about 8 minutes. Add garlic and cook 1 minute. Add diced bell peppers and cook another 8 minutes. Add crushed tomatoes, thyme, rosemary, salt and pepper. Simmer 15 minutes until thick and fragrant. Spread this sauce evenly across the bottom of a round baking dish or cast iron pan." },
      { step: 2, title: "Slice the Vegetables Paper-Thin", detail: "Use a mandoline slicer if you have one — aim for slices about 1/8 inch thick. If using a knife, work carefully and slowly. The thinner the slices, the more elegant and tender the final dish. Slice all vegetables: zucchini, yellow squash, tomatoes, and eggplant." },
      { step: 3, title: "Arrange in Overlapping Circles", detail: "Starting at the outside edge of the pan, begin layering the vegetable slices in an overlapping pattern — like roof tiles or fish scales — alternating: eggplant, zucchini, tomato, yellow squash. Work inward in a spiral until the entire sauce surface is covered. Each slice should overlap the previous by about half." },
      { step: 4, title: "Season and Bake", detail: "Mix together the vinaigrette ingredients and drizzle over the top of the arranged vegetables. Add a few extra thyme sprigs on top. Season with salt and pepper. Cover loosely with parchment paper pressed directly onto the vegetables (called a cartouche). Bake at 275°F (135°C) for 1 hour 45 minutes to 2 hours. The vegetables should be completely tender and slightly caramelized at the edges." },
      { step: 5, title: "Serve with Sauce", detail: "To serve restaurant-style like in the film, use a round cookie cutter as a mold, stack several overlapping slices of the cooked vegetables upright, and spoon warm piperade sauce around them. Garnish with a tiny sprig of thyme." }
    ],
    bonusTip: "The vegetable trimmings and tomato cores from this recipe are perfect for making a summer vegetable stock. Simmer them with water, a bay leaf, and peppercorns for 30 minutes, strain, and freeze in ice cube trays for easy cooking.",
    tags: ["french", "vegetarian", "elegant", "provençal"],
    likes: 512,
    comments: [
      { user: "PepperoniDreams", text: "The piperade sauce alone is worth making. I put it on everything now.", time: "1 day ago" },
      { user: "HomeChefMarcel", text: "Took me 3 tries to get the mandoline slicing right but WOW the result.", time: "4 days ago" },
      { user: "TinyChef", text: "Made this for my dinner party and everyone thought I was a professional chef 😂", time: "1 week ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  LIVE ACTION — ITALIAN CLASSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Clemenza's Sunday Gravy (The Godfather Sauce)",
    film: "The Godfather",
    studio: "Paramount Pictures",
    year: 1972,
    category: "italian-classic",
    type: "live-action",
    difficulty: "medium",
    emoji: "🍝",
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    filmConnection: "Peter Clemenza's immortal instruction — 'you start out with a little bit of oil, then you fry some garlic...' — is one of cinema's most famous food monologues. He teaches Michael Corleone the recipe while also, casually, orchestrating a mob murder in the next room. The Sunday Gravy recipe in Italian-American culture is a sacred tradition, often passed down through generations. In the film, cooking this sauce represents belonging, family loyalty, and the warm domestic life that masks the violence beneath.",
    servings: 8,
    prepTime: "20 mins",
    cookTime: "3 hrs",
    totalTime: "3 hrs 20 mins",
    ingredients: [
      "¼ cup olive oil",
      "6 garlic cloves, sliced thin",
      "1 lb Italian pork sausages (sweet and/or hot)",
      "1 lb beef short rib or braising beef",
      "6 oz tomato paste",
      "Two 28-oz cans San Marzano crushed tomatoes",
      "1 cup dry red wine",
      "1 tsp dried oregano",
      "1 tsp fresh basil (add at end)",
      "½ tsp chili flakes",
      "Salt and black pepper",
      "1 lb rigatoni or spaghetti, cooked al dente",
      "Parmesan for serving"
    ],
    steps: [
      { step: 1, title: "Brown the Meats", detail: "Heat olive oil in a large heavy pot (Dutch oven) over medium-high heat. Brown the sausages on all sides, about 8 minutes. Remove. Brown the beef pieces in the same pot — don't move them for 3 minutes per side to develop a dark crust. Remove. This step builds the entire foundation of the sauce's flavor." },
      { step: 2, title: "Fry the Garlic — Clemenza Style", detail: "Reduce heat to medium. Add a little more oil if needed. Add sliced garlic. Cook slowly until lightly golden, about 3–4 minutes. Watch it carefully — burnt garlic will ruin everything. As Clemenza says: this is the beginning." },
      { step: 3, title: "Add Tomato Paste and Wine", detail: "Push the garlic to the side and add tomato paste. Cook the paste in the hot oil for 2 minutes, stirring — this removes its raw, metallic taste and deepens the flavor to something almost chocolatey. Add the red wine and scrape up all the browned bits stuck to the bottom. Let the wine reduce by half, about 5 minutes." },
      { step: 4, title: "Add Tomatoes and Simmer Long and Slow", detail: "Add both cans of crushed tomatoes, oregano, chili flakes, salt, and pepper. Stir everything together. Return the browned meats to the pot, submerging them. Bring to a boil, then immediately reduce to the lowest possible simmer. Cover partially. Cook for 2½ to 3 hours, stirring every 20–30 minutes. The sauce should gently bubble — barely a bubble per second." },
      { step: 5, title: "Finish and Serve", detail: "Remove the beef and shred it back into the sauce with two forks. Add fresh basil. Taste for salt. Toss with cooked pasta, top with grated Parmesan. The leftover sauce gets better every day it sits in the fridge." }
    ],
    bonusTip: "The beef short rib bones left after shredding the meat can be simmered with water, a carrot, celery, and bay leaf for 2 more hours to make a rich beef bone broth. Strain and freeze it — use it as the base for risotto, soups, or to deglaze pans.",
    tags: ["italian", "pasta", "slow-cook", "hearty", "family"],
    likes: 634,
    comments: [
      { user: "SicilianSunday", text: "This is my nonna's recipe almost exactly. Clemenza knew what he was doing.", time: "2 days ago" },
      { user: "MobsterMike", text: "I now make this every single Sunday. It is the law in my house.", time: "3 days ago" },
      { user: "PastaLover", text: "3 hour cook time seemed scary but it's almost all hands-off. Worth every second.", time: "1 week ago" }
    ]
  },

  {
    id: 5,
    title: "Julie's Boeuf Bourguignon",
    film: "Julie & Julia",
    studio: "Columbia Pictures",
    year: 2009,
    category: "drama",
    type: "live-action",
    difficulty: "hard",
    emoji: "🥩",
    image: "https://m.media-amazon.com/images/M/MV5BMjA4MzYyMjkxNF5BMl5BanBnXkFtZTcwNzM0NTIyMw@@._V1_FMjpg_UX1000_.jpg",
    filmConnection: "Boeuf Bourguignon is the dish that both Julia Child and Julie Powell place at the absolute center of their culinary journeys. In the film, Julie declares it the 'pinnacle' — the recipe that proves she can master French cooking. For Julia Child, it was the first recipe she ever perfected in Paris in the 1950s. This deeply French, wine-soaked beef stew carries the cultural weight of an entire cuisine — it is the dish that taught America that French cooking was achievable at home.",
    servings: 6,
    prepTime: "45 mins",
    cookTime: "3 hrs",
    totalTime: "3 hrs 45 mins",
    ingredients: [
      "3 lbs beef chuck, cut into 2-inch cubes",
      "6 oz thick-cut bacon, cut into lardons",
      "1 bottle (750ml) dry red Burgundy wine (or any full-bodied red)",
      "2 cups beef stock",
      "2 tbsp tomato paste",
      "4 garlic cloves, minced",
      "1 large onion, chopped",
      "2 medium carrots, chopped",
      "1 bouquet garni (thyme, bay leaf, parsley tied together)",
      "2 tbsp flour",
      "3 tbsp olive oil",
      "FOR PEARL ONIONS:",
      "1 lb pearl onions, peeled",
      "2 tbsp butter, 1 tsp sugar",
      "FOR MUSHROOMS:",
      "1 lb button mushrooms, quartered",
      "2 tbsp butter"
    ],
    steps: [
      { step: 1, title: "Marinate the Beef (Optional but Ideal)", detail: "The night before: combine beef cubes with wine, carrots, onion, garlic, and bouquet garni. Cover and refrigerate overnight. This is how Julia Child did it. If short on time, skip to step 2 and add the wine in step 4." },
      { step: 2, title: "Brown the Bacon and Beef", detail: "Pat beef completely dry with paper towels (wet beef will steam, not brown). In a large Dutch oven, render bacon over medium heat until crispy. Remove. Increase heat to medium-high. In the bacon fat, brown beef cubes in batches — never crowding the pan. 3–4 minutes per side until deeply golden. This takes patience but is the most important step." },
      { step: 3, title: "Build the Braise", detail: "Remove the beef. In the same pot, sauté onion and carrots until softened, about 5 minutes. Add garlic and cook 1 minute. Sprinkle flour over the vegetables and stir to coat. Cook 2 minutes. Add tomato paste and stir." },
      { step: 4, title: "Braise Low and Slow", detail: "Return the beef and bacon to the pot. Pour in the entire bottle of wine and enough beef stock to almost cover the meat. Add bouquet garni. Bring to a gentle simmer on the stovetop, then transfer to a 325°F (160°C) oven. Braise for 2½ to 3 hours — the beef should be completely fork-tender and beginning to fall apart." },
      { step: 5, title: "Prepare the Garnishes", detail: "While the beef braises: in a small pan, cook pearl onions in butter and sugar with ½ cup water over medium heat until the water evaporates and onions are glazed and golden, about 20 minutes. In a separate pan, sauté mushrooms in butter over high heat until golden — don't stir too much, let them brown." },
      { step: 6, title: "Finish the Dish", detail: "Remove the beef and strain the braising liquid into a saucepan. Boil the liquid until it reduces and coats a spoon — about 10 minutes. Taste for seasoning. Return beef to the pot, add glazed onions and mushrooms, pour the reduced sauce over everything. Serve with buttered egg noodles, crusty bread, or mashed potatoes." }
    ],
    bonusTip: "The braising bones and any remaining braising liquid make an extraordinary sauce. Refrigerate overnight — the fat will solidify on top and can be skimmed off, leaving behind pure, clean-tasting cooking jus. Reheat it and use it on anything: roasted chicken, vegetables, or even as a soup base.",
    tags: ["french", "beef", "wine", "classic", "dinner-party"],
    likes: 298,
    comments: [
      { user: "JuliaForever", text: "I cried making this. In a good way. Julia would be proud.", time: "1 day ago" },
      { user: "WineNerd", text: "Used a cheap Côtes du Rhône and it was still incredible. Don't overthink the wine.", time: "6 days ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  FANTASY & EPIC
  // ──────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Lembas Bread (Elvish Waybread)",
    film: "The Lord of the Rings: The Two Towers",
    studio: "New Line Cinema",
    year: 2002,
    category: "fantasy-epic",
    type: "live-action",
    difficulty: "easy",
    emoji: "🍞",
    image: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    filmConnection: "Lembas, the Elvish waybread of Lothlórien, is given to the Fellowship by Galadriel before they set out across Middle-earth. In Tolkien's lore and in the films, lembas is described as so nutritious that a single small piece can fill the stomach of a full-grown man. Samwise and Frodo survive their entire journey to Mount Doom primarily on lembas — making it perhaps the most important food in all of fantasy literature. Tolkien based it partly on ancient Celtic travel breads and religious Eucharistic traditions.",
    servings: 12,
    prepTime: "15 mins",
    cookTime: "20 mins",
    totalTime: "35 mins",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tbsp baking powder",
      "¼ tsp salt",
      "¼ cup light brown sugar, packed",
      "½ cup cold butter, cubed",
      "⅓ cup heavy cream",
      "1 tsp vanilla extract",
      "½ tsp cinnamon",
      "¼ tsp nutmeg",
      "1 tbsp honey",
      "1 egg yolk (for brushing)"
    ],
    steps: [
      { step: 1, title: "Mix the Dry Ingredients", detail: "Preheat oven to 375°F (190°C). In a large bowl, whisk together flour, baking powder, salt, brown sugar, cinnamon, and nutmeg. These spices are key — lembas should smell warm and slightly exotic, as if made in an Elvish kitchen with herbs from Lórien." },
      { step: 2, title: "Cut in the Cold Butter", detail: "Add cold cubed butter to the flour mixture. Using your fingertips (or a pastry cutter), press the butter into the flour until the mixture resembles coarse breadcrumbs with some pea-sized lumps remaining. Cold butter = flaky, crumbly texture. Do not overwork." },
      { step: 3, title: "Add the Wet Ingredients", detail: "Whisk together cream, vanilla extract, and honey. Pour into the flour-butter mixture. Stir gently with a fork until a soft dough just comes together. Do not overmix — a few dry bits are fine." },
      { step: 4, title: "Shape and Score", detail: "Turn out onto a lightly floured surface. Pat gently to ¾ inch thickness. Cut into 3-inch squares with a sharp knife. Score a cross pattern on each piece (this is the traditional lembas mark). Place on a parchment-lined baking sheet." },
      { step: 5, title: "Brush and Bake", detail: "Brush each piece lightly with egg yolk for a golden color. Bake for 18–22 minutes until golden brown at the edges and just firm in the center. Cool on a rack. Wrap each piece in a folded piece of parchment for the full Elvish experience." }
    ],
    bonusTip: "Leftover lembas crumbles beautifully over vanilla ice cream or yogurt. You can also repurpose older (drier) pieces as a crunchy topping for baked fruit — just crumble over sliced apples with butter and bake for a quick crisp.",
    tags: ["bread", "baking", "fantasy", "sweet", "snack"],
    likes: 441,
    comments: [
      { user: "TolkienKitchen", text: "Wrapped these in leaves from my garden. Perfect for a LOTR marathon.", time: "4 days ago" },
      { user: "Hobbit_Eats", text: "One small piece really does fill you up! Probably the butter though lol", time: "1 week ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  THRILLER / DRAMA
  // ──────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Hannibal's Liver with Fava Beans",
    film: "The Silence of the Lambs",
    studio: "Orion Pictures",
    year: 1991,
    category: "thriller",
    type: "live-action",
    difficulty: "medium",
    emoji: "🫘",
    image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    filmConnection: "Hannibal Lecter's chilling description — 'I ate his liver with some fava beans and a nice Chianti' — is one of the most iconic lines in cinema history. The recipe, while delivered with monstrous implication, actually describes a perfectly classical Italian preparation. Liver with fava beans is an ancient Roman dish, and Chianti is the natural pairing from Tuscany. This version uses chicken or beef liver — a beautifully rich, iron-forward ingredient that many home cooks overlook. We are making the dish, not the context.",
    servings: 2,
    prepTime: "20 mins",
    cookTime: "20 mins",
    totalTime: "40 mins",
    ingredients: [
      "12 oz chicken or beef liver, cleaned and sliced",
      "1 cup fresh or frozen fava beans (or broad beans)",
      "4 garlic cloves, minced",
      "1 medium onion, thinly sliced",
      "2 tbsp butter",
      "2 tbsp olive oil",
      "½ cup Chianti or dry red wine",
      "2 tbsp fresh sage leaves",
      "1 tbsp fresh rosemary, chopped",
      "Juice of ½ lemon",
      "Salt and black pepper",
      "Crusty bread to serve"
    ],
    steps: [
      { step: 1, title: "Prepare the Liver", detail: "Pat liver slices completely dry with paper towels. Season generously with salt and pepper. If using beef liver, soak in milk for 30 minutes beforehand and rinse — this draws out bitterness and dramatically improves the flavor. This step is what separates good liver from great liver." },
      { step: 2, title: "Cook the Fava Beans", detail: "If using fresh favas: blanch shelled beans in boiling water 2 minutes, then transfer to ice water. Pop each bean out of its pale skin — this reveals the vibrant green interior. For frozen beans, just thaw and skip the peeling. Season with salt." },
      { step: 3, title: "Caramelize the Onions and Garlic", detail: "Heat butter and olive oil in a wide skillet over medium heat. Add onion and cook slowly for 10–12 minutes until deeply golden and sweet. Add garlic and sage leaves, cook 2 more minutes. Remove everything from the pan and set aside." },
      { step: 4, title: "Sear the Liver", detail: "Increase heat to medium-high. Add a little more butter. When the butter foams, add liver slices in a single layer. Cook 2 minutes per side — the inside should still be slightly pink. Overcooked liver becomes grainy and dry; the center should be blushing pink." },
      { step: 5, title: "Deglaze and Finish", detail: "Return the onion mixture to the pan. Pour in the Chianti. Let it sizzle and reduce for 2 minutes, scraping up any browned bits. Add fava beans and rosemary. Squeeze lemon juice over everything. Taste for salt. Serve immediately over crusty bread or with polenta." }
    ],
    bonusTip: "The fava bean pods themselves can be eaten when very young and tender — sauté them whole in olive oil and garlic. The cooking juices from this dish, reduced slightly, make a phenomenal sauce for pasta or crostini.",
    tags: ["offal", "italian", "classic", "film-iconic", "wine"],
    likes: 203,
    comments: [
      { user: "CulinaryLecter", text: "I was nervous but this is genuinely one of the best things I have ever cooked. Liver converts WELCOME.", time: "2 days ago" },
      { user: "FavaFanatic", text: "Peeling the fava beans is tedious but absolutely worth it for the texture.", time: "5 days ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  DREAMWORKS
  // ──────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Shrek's Swamp Weed Soup",
    film: "Shrek",
    studio: "DreamWorks Animation",
    year: 2001,
    category: "dreamworks",
    type: "animated",
    difficulty: "easy",
    emoji: "🧅",
    image: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    filmConnection: "Shrek's swamp home is filled with onions — they appear in his earwax candles, his garden, and his larder. His famous speech to Donkey uses an onion as a metaphor for ogres having layers. When Shrek cooks for himself in his swamp, the cuisine would be rustic, earthy, and deeply satisfying. This recipe is a rich French onion-style soup inspired by what a self-sufficient, surprisingly skilled ogre chef might prepare on a cold swamp evening.",
    servings: 4,
    prepTime: "10 mins",
    cookTime: "50 mins",
    totalTime: "60 mins",
    ingredients: [
      "5 large yellow onions, thinly sliced",
      "4 tbsp butter",
      "1 tbsp olive oil",
      "3 garlic cloves, minced",
      "1 tsp fresh thyme",
      "1 tsp sugar",
      "½ cup dry white wine or dry sherry",
      "4 cups vegetable or beef broth",
      "1 bay leaf",
      "Salt and pepper",
      "FOR TOPPING:",
      "4 thick slices crusty bread",
      "1½ cups Gruyère or Swiss cheese, grated"
    ],
    steps: [
      { step: 1, title: "The Long Caramelization (This is Where the Magic Is)", detail: "Melt butter and oil in a large heavy pot over medium heat. Add all the sliced onions and the sugar. Stir to coat. Cook, stirring every 5 minutes, for 35–40 minutes. They will reduce dramatically. Be patient — this is the heart of the soup. You want them deeply golden-brown and jammy, not just soft and pale." },
      { step: 2, title: "Add the Aromatics", detail: "Add garlic, thyme, and bay leaf. Cook 2 minutes. Pour in the wine — it will sizzle dramatically. Scrape up all the browned bits from the bottom. Let the wine reduce mostly away, about 3 minutes." },
      { step: 3, title: "Simmer the Soup", detail: "Add broth, bring to a simmer. Season with salt and pepper. Cook 15 more minutes. Taste — it should be deep, sweet, savory, and slightly tangy." },
      { step: 4, title: "Broil with Cheese", detail: "Ladle soup into oven-safe bowls. Float a slice of crusty bread on top of each. Cover generously with grated cheese. Place under the broiler for 3–4 minutes until the cheese is bubbling, golden, and has little charred spots. Serve immediately." }
    ],
    bonusTip: "This onion base, before adding broth, can be refrigerated for up to a week and used as a sauce for burgers, a pizza topping, a pasta sauce, or stirred into scrambled eggs. It's essentially a magic ingredient.",
    tags: ["soup", "vegetarian", "onion", "french-style", "comfort"],
    likes: 317,
    comments: [
      { user: "OgreKitchen", text: "Made this and felt POWERFUL. Shrek understood flavour.", time: "3 days ago" },
      { user: "DonkeyApproved", text: "I used to think I hated onions. This soup changed my entire worldview.", time: "1 week ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  OTHER ANIMATED
  // ──────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Paddington's Perfect Marmalade Sandwich",
    film: "Paddington (2014)",
    studio: "StudioCanal",
    year: 2014,
    category: "other-animated",
    type: "animated",
    difficulty: "easy",
    emoji: "🫐",
    image: "https://m.media-amazon.com/images/M/MV5BMjM2NTMxMzUxMl5BMl5BanBnXkFtZTgwOTcyNjU0MjE@._V1_FMjpg_UX1000_.jpg",
    filmConnection: "Paddington Bear carries marmalade sandwiches in his hat for emergencies — a practice taught to him by his Aunt Lucy in the jungles of Peru, inspired by the marmalade brought to their remote village by a visiting English explorer. The marmalade sandwich in the films is Paddington's connection to his home, his identity, and his optimistic approach to a frightening new world. This recipe includes homemade orange marmalade — the real thing — because Paddington deserves no less.",
    servings: 4,
    prepTime: "20 mins",
    cookTime: "45 mins",
    totalTime: "65 mins",
    ingredients: [
      "FOR THE MARMALADE:",
      "3 large navel oranges",
      "1 lemon",
      "3 cups water",
      "2½ cups granulated sugar",
      "FOR THE SANDWICHES:",
      "8 slices thick white bread (brioche or white sandwich loaf)",
      "4 tbsp good quality unsalted butter, softened",
      "The marmalade above"
    ],
    steps: [
      { step: 1, title: "Make the Marmalade", detail: "Wash oranges and lemon well. Peel in wide strips and cut the peel into thin strips (julienne). Remove white pith from the fruit and roughly chop the flesh, catching all juice. Place peel strips, chopped fruit, juice, and water in a pan. Bring to boil, reduce heat, simmer 30 minutes until peel is very soft." },
      { step: 2, title: "Add Sugar and Set", detail: "Add sugar, stir until dissolved. Bring to a rolling boil and cook without stirring for 10–15 minutes. Test if it has set: place a teaspoon of jam on a cold plate from the freezer. Push it with your finger — if it wrinkles, it's ready. If not, boil 5 more minutes and test again. Pour into clean glass jars. It will firm up as it cools." },
      { step: 3, title: "Assemble the Sandwich", detail: "Spread softened butter generously on all 4 slices of bread — both sides of each slice. Spread a thick, unapologetic layer of cooled marmalade on two slices. Press together gently. Cut diagonally. For the authentic Paddington experience: wrap one in foil and store under your hat." }
    ],
    bonusTip: "Orange marmalade is extraordinary in other applications: stir it into a pan sauce for roasted duck or chicken, spread it on warm scones with clotted cream, or mix it into a salad dressing with Dijon mustard.",
    tags: ["british", "jam", "sandwich", "baking", "easy"],
    likes: 276,
    comments: [
      { user: "BrownFamily", text: "My kids made this themselves! The marmalade is so much better than store-bought.", time: "2 days ago" },
      { user: "PeruToPaddington", text: "I put the sandwich in my hat to see what it was like. 10/10 experience.", time: "4 days ago" }
    ]
  }

,{
  id: 10,
  title: "Ratatouille (Confit Byaldi)",
  film: "Ratatouille",
  studio: "Pixar Animation Studios",
  year: 2007,
  category: "disney-pixar",
  type: "animated",
  difficulty: "medium",
  emoji: "🫑",
  image: "https://placehold.co/600x400/1a1208/c9943a?text=Ratatouille",
  filmConnection: "In the film's climax, Remy prepares this elegant thinly-sliced vegetable tian for the fearsome food critic Anton Ego, instantly transporting him back to his childhood and his mother's humble Provençal kitchen. The dish is actually based on confit byaldi, a refined interpretation of the rustic French classic created by chef Thomas Keller as a culinary consultant for the film. The moment beautifully captures how food carries memory and emotion, ultimately redeeming both Remy and the restaurant Gusteau's.",
  servings: 4,
  prepTime: "30 mins",
  cookTime: "1 hr 30 mins",
  totalTime: "2 hrs",
  ingredients: [
    "2 medium zucchini, very thinly sliced into rounds",
    "2 medium yellow squash, very thinly sliced into rounds",
    "4 medium Roma tomatoes, very thinly sliced into rounds",
    "2 medium red bell peppers, very thinly sliced into rounds",
    "1 medium eggplant, very thinly sliced into rounds",
    "3 tbsp extra virgin olive oil, divided",
    "4 cloves garlic, minced",
    "1 medium yellow onion, finely diced",
    "400g (14 oz) canned crushed tomatoes",
    "1 tsp fresh thyme leaves",
    "1 tsp fresh rosemary, finely chopped",
    "1 tsp fresh oregano leaves",
    "Salt and freshly ground black pepper to taste",
    "1 tbsp fresh basil, chiffonade, for garnish",
    "1 tsp balsamic vinegar"
  ],
  steps: [
    { step: 1, title: "Prepare the Piperade Sauce", detail: "Heat 2 tablespoons of olive oil in an oven-safe skillet or shallow casserole dish over medium heat. Add the diced onion and cook for 8–10 minutes until softened and translucent. Add the minced garlic and cook for a further 1 minute until fragrant. Pour in the crushed tomatoes, add the thyme, rosemary, and oregano, and season generously with salt and pepper. Stir to combine and simmer on low heat for 10–15 minutes until the sauce thickens slightly. Remove from heat and stir in the balsamic vinegar. Spread the sauce evenly across the base of the dish." },
    { step: 2, title: "Arrange the Vegetables", detail: "Preheat your oven to 275°F (135°C). Using a mandoline or a very sharp knife, slice all the vegetables — zucchini, yellow squash, Roma tomatoes, red bell pepper, and eggplant — into uniformly thin rounds, approximately 1/8 inch thick. This uniformity is essential for even cooking and the signature overlapping presentation. Beginning at the outer edge of the dish, arrange the vegetable slices in an alternating, overlapping pattern (zucchini, tomato, yellow squash, eggplant, bell pepper) standing slightly upright, working in concentric circles inward until the entire surface of the sauce is covered." },
    { step: 3, title: "Season and Cover", detail: "Drizzle the remaining tablespoon of olive oil evenly over the arranged vegetables. Season the top lightly with flaky salt, freshly cracked black pepper, and a pinch of fresh thyme. Cut a circle of parchment paper (cartouche) to fit directly over the vegetables and press it gently down to cover them. This traps steam and ensures the vegetables cook through without drying out or burning on top." },
    { step: 4, title: "Slow Roast", detail: "Place the dish in the preheated oven and slow roast for 1 hour to 1 hour 15 minutes, until all the vegetable slices are completely tender when pierced with the tip of a sharp knife and the edges are just beginning to caramelise. Remove the parchment for the final 10 minutes to allow the top to develop a slight golden colour. The low and slow temperature is key to the traditional Provençal style — it coaxes out the natural sweetness of each vegetable." },
    { step: 5, title: "Rest and Serve", detail: "Remove the dish from the oven and allow it to rest for at least 10 minutes before serving. This helps the layers settle and the flavours meld. To plate in the style of the film, use a thin spatula or offset palette knife to carefully lift a neat portion of the layered vegetables and place them fanned out on a warm plate beside a spoonful of the piperade sauce from the base. Finish with a garnish of fresh basil chiffonade and a light drizzle of your best extra virgin olive oil." }
  ],
  bonusTip: "Any leftover ratatouille is incredible the next day — roughly chop the vegetables into the remaining piperade sauce, warm through, and toss with pappardelle pasta and a grating of Parmesan for a completely different and equally delicious meal.",
  tags: ["french", "vegetarian", "vegan", "provençal", "slow-roast", "elegant", "pixar", "comfort-food"],
  likes: 0,
  comments: []
}

,{
  id: 11,
  title: "Ratatouille (Confit Byaldi)",
  film: "Ratatouille",
  studio: "Pixar Animation Studios",
  year: 2007,
  category: "disney-pixar",
  type: "animated",
  difficulty: "medium",
  emoji: "🍅",
  image: "https://placehold.co/600x400/1a1208/c9943a?text=Ratatouille",
  filmConnection: "In the film's climactic scene, Remy prepares this elegant dish for the feared food critic Anton Ego, transporting him back to his childhood with a single bite. The dish is based on Confit Byaldi, a refined French interpretation of the rustic Provençal ratatouille, famously developed by chef Thomas Keller as a consultant for the film. This moment beautifully captures the film's central theme — that great cooking can come from anywhere, and food holds the power to unlock memory and emotion.",
  servings: 4,
  prepTime: "25 mins",
  cookTime: "1 hr 30 mins",
  totalTime: "1 hr 55 mins",
  ingredients: [
    "2 medium zucchini, very thinly sliced into rounds",
    "2 medium yellow squash, very thinly sliced into rounds",
    "4 Roma tomatoes, very thinly sliced into rounds",
    "2 large red bell peppers, very thinly sliced into rounds",
    "1 small eggplant, very thinly sliced into rounds",
    "3 tbsp olive oil, divided",
    "4 cloves garlic, minced",
    "1 medium yellow onion, finely diced",
    "1 can (400g) crushed tomatoes",
    "1 tsp fresh thyme leaves",
    "1 tsp fresh rosemary, finely chopped",
    "1 tsp fresh oregano leaves",
    "1 tsp balsamic vinegar",
    "Salt and black pepper to taste",
    "Fresh basil leaves, to garnish"
  ],
  steps: [
    { step: 1, title: "Make the Piperade Sauce", detail: "Preheat your oven to 275°F (135°C). In a medium oven-safe skillet or cast iron pan, heat 2 tbsp of olive oil over medium heat. Add the diced onion and cook for 6–8 minutes until softened and translucent. Add the minced garlic and cook for another 1–2 minutes until fragrant. Pour in the crushed tomatoes and balsamic vinegar, stir to combine, and season generously with salt and black pepper. Simmer on low heat for 10 minutes until the sauce thickens slightly, then remove from heat." },
    { step: 2, title: "Arrange the Vegetables", detail: "Using a mandoline slicer or a very sharp knife, ensure all your vegetable rounds are sliced as thinly and uniformly as possible — approximately 1/8 inch thick. Starting from the outer edge of the pan over the piperade sauce, layer the vegetable slices in an overlapping, alternating pattern (tomato, zucchini, yellow squash, eggplant, red bell pepper), working your way into the centre in a spiral. Each slice should overlap the previous by about half, creating a decorative concentric pattern." },
    { step: 3, title: "Season and Cover", detail: "Drizzle the remaining 1 tbsp of olive oil evenly over the top of the arranged vegetables. Scatter the fresh thyme, rosemary, and oregano across the surface and season with a pinch of salt and black pepper. Cut a circle of parchment paper (cartouche) to fit just inside the diameter of the pan and press it gently down over the vegetables. This traps steam and keeps the vegetables from drying out while baking." },
    { step: 4, title: "Slow Bake", detail: "Transfer the pan to the preheated oven and bake at 275°F (135°C) for 1 hour to 1 hour 15 minutes, until the vegetables are completely tender, slightly caramelised at the edges, and the sauce is bubbling gently around the sides. Remove the parchment for the last 15 minutes of cooking to allow the tops to take on a little colour. The low and slow bake is essential — it allows the flavours to meld together deeply in the authentic Provençal tradition." },
    { step: 5, title: "Rest and Serve", detail: "Remove from the oven and allow to rest for 5–10 minutes before serving. Using a wide spatula, carefully lift portions of the layered vegetables onto warmed plates, taking care to keep the layers intact for presentation. Spoon a little of the piperade sauce from the bottom of the pan alongside. Garnish with fresh basil leaves and a final drizzle of good-quality olive oil. Serve as an elegant side dish or a light vegetarian main course in the true spirit of French Provençal cuisine." }
  ],
  bonusTip: "Any leftover piperade sauce from the base makes a wonderful pasta sauce the next day — simply toss with spaghetti and a handful of fresh basil.",
  tags: ["french", "provençal", "vegetarian", "vegan", "baked", "classic", "pixar"],
  likes: 0,
  comments: []
}

];

// Daily recipe rotation — cycles through recipes based on day of year
function getTodaysRecipe() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return RECIPES[dayOfYear % RECIPES.length];
}
