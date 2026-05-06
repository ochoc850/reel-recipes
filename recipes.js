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
    // Finished dish image — real onigiri
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Onigiri_1.jpg/640px-Onigiri_1.jpg",
    // Process images shown inside the recipe modal
    processImages: [
      { src: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80", caption: "Season the warm sushi rice" },
      { src: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80", caption: "Shape with wet, salted hands" },
      { src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80", caption: "Wrap in crispy nori to finish" }
    ],
    filmConnection: "Early in the film, Chihiro's parents greedily devour mysterious food left for the spirits — a pivotal moment that transforms them into pigs. These humble rice balls are what Chihiro herself eats, gifted to her by Haku, representing the only kindness she receives as she begins her terrifying journey. Miyazaki insisted every food in the film be based on real Japanese cuisine. In Japanese culture, onigiri carry deep emotional weight — they are comfort food, often made by a loved one's hands.",
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
    // Finished dish image — full fry-up
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Weirdest_Full_English_Breakfast.jpg/640px-Weirdest_Full_English_Breakfast.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80", caption: "Sizzle bacon in the cast-iron pan" },
      { src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80", caption: "Butter-baste the eggs" },
      { src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80", caption: "Plate everything golden and hot" }
    ],
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
    // Finished dish image — real ratatouille
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ratatouille_%28food%29.jpg/640px-Ratatouille_%28food%29.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80", caption: "Slice all vegetables paper-thin" },
      { src: "https://images.unsplash.com/photo-1545562083-5d1a0c58d83f?w=600&q=80", caption: "Layer in tight overlapping spirals" },
      { src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80", caption: "Slow-roast under parchment cartouche" }
    ],
    filmConnection: "When food critic Anton Ego takes his first bite of Remy's ratatouille near the film's climax, he is transported back to his mother's kitchen — a child again, all cynicism dissolved. The dish shown is actually 'confit byaldi,' an elegant Provençal preparation designed by chef Thomas Keller specifically for the film's production team. Pixar filmed Keller making it as a direct animation reference. It represents the film's central message: that great food can come from unexpected places, and that anyone — even a rat — can cook.",
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
      { step: 3, title: "Arrange in Overlapping Circles", detail: "Starting at the outside edge of the pan, begin layering the vegetable slices in an overlapping pattern — like roof tiles — alternating: eggplant, zucchini, tomato, yellow squash. Work inward in a spiral until the entire sauce surface is covered. Each slice should overlap the previous by about half." },
      { step: 4, title: "Season and Bake", detail: "Mix together the vinaigrette ingredients and drizzle over the top. Add a few extra thyme sprigs. Season with salt and pepper. Cover loosely with parchment paper pressed directly onto the vegetables (a cartouche). Bake at 275°F (135°C) for 1 hour 45 minutes to 2 hours. The vegetables should be completely tender and slightly caramelized at the edges." },
      { step: 5, title: "Serve with Sauce", detail: "To serve restaurant-style like in the film, use a round cookie cutter as a mold, stack several overlapping slices upright, and spoon warm piperade sauce around them. Garnish with a tiny sprig of thyme." }
    ],
    bonusTip: "The vegetable trimmings and tomato cores from this recipe are perfect for making a summer vegetable stock. Simmer them with water, a bay leaf, and peppercorns for 30 minutes, strain, and freeze in ice cube trays.",
    tags: ["french", "vegetarian", "elegant", "provençal"],
    likes: 512,
    comments: [
      { user: "PepperoniDreams", text: "The piperade sauce alone is worth making. I put it on everything now.", time: "1 day ago" },
      { user: "HomeChefMarcel", text: "Took me 3 tries to get the mandoline slicing right but WOW the result.", time: "4 days ago" },
      { user: "TinyChef", text: "Made this for my dinner party and everyone thought I was a professional chef 😂", time: "1 week ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  DISNEY / PIXAR
  // ──────────────────────────────────────────────────────────
  {
    id: 18,
    title: "Tiana's New Orleans Beignets",
    film: "The Princess and the Frog",
    studio: "Walt Disney Animation",
    year: 2009,
    category: "disney-pixar",
    type: "animated",
    difficulty: "medium",
    emoji: "🍩",
    // Finished dish image — real beignets
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Beignets_from_Cafe_Du_Monde%2C_New_Orleans%2C_LA.jpg/640px-Beignets_from_Cafe_Du_Monde%2C_New_Orleans%2C_LA.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=600&q=80", caption: "Bloom yeast in warm water" },
      { src: "https://images.unsplash.com/photo-1571167366136-b57e23d4a6d5?w=600&q=80", caption: "Fry until deep golden" },
      { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80", caption: "Blizzard of powdered sugar" }
    ],
    filmConnection: "Beignets are the beating heart of Tiana's dreams throughout the film. In the opening scenes, a young Tiana serves them to Charlotte's family, and Charlotte later hires her to bake 500 of them for her masquerade ball — the down payment Tiana needs to open her own restaurant. The screen fills with bubbling oil, sugar clouds drifting through the air, and smiling neighbors, showing how Tiana's food brings her entire community together. These beignets are deeply rooted in real New Orleans tradition — Café Du Monde has served them since 1862.",
    servings: 24,
    prepTime: "20 mins",
    cookTime: "20 mins",
    totalTime: "40 mins (plus 1 hr rest)",
    ingredients: [
      "2¼ tsp active dry yeast",
      "¾ cup warm water (110°F)",
      "¼ cup granulated sugar",
      "½ tsp salt",
      "1 egg, beaten",
      "½ cup evaporated milk",
      "3½ cups all-purpose flour",
      "2 tbsp vegetable shortening",
      "Vegetable oil, for frying",
      "Powdered (icing) sugar, very generous — to serve",
      "Honey, to drizzle"
    ],
    steps: [
      { step: 1, title: "Bloom the Yeast", detail: "Dissolve yeast in warm water with a pinch of the sugar. Let sit 5 minutes until foamy and fragrant — if it doesn't foam, your yeast is dead and you'll need a fresh packet." },
      { step: 2, title: "Mix the Dough", detail: "In a large bowl, combine the yeast mixture with remaining sugar, salt, beaten egg, and evaporated milk. Work in flour gradually, then add shortening. Knead on a floured surface for 5 minutes until smooth and elastic." },
      { step: 3, title: "Rest", detail: "Cover dough with plastic wrap and refrigerate for at least 1 hour — overnight is even better. Tiana would have prepped hers the night before." },
      { step: 4, title: "Roll and Cut", detail: "On a floured surface, roll dough to ¼-inch thickness. Cut into 2-inch squares with a sharp knife or pizza cutter. They don't need to be perfect — beignets are rustic." },
      { step: 5, title: "Fry", detail: "Heat 3 inches of vegetable oil to 360°F in a heavy pot. Fry beignets in small batches, 2–3 minutes per side, until deep golden all over. Don't crowd the pot or the temperature will drop. Drain on paper towels." },
      { step: 6, title: "Finish Like Tiana", detail: "Pile on a plate and immediately bury them under a mountain of powdered sugar — do not hold back. Drizzle with warm honey. Serve hot. The sugar cloud is half the experience." }
    ],
    bonusTip: "The dough can be made up to 2 days ahead and kept refrigerated. Cold dough is actually easier to roll and cut. Beignets are best eaten within minutes of frying — they lose their magic quickly, just like in the film.",
    tags: ["new-orleans", "fried", "sweet", "breakfast", "disney"],
    likes: 421,
    comments: [
      { user: "TianaFan", text: "Made these for Mardi Gras and my whole family lost their minds. So good.", time: "1 day ago" },
      { user: "NolaKitchen", text: "As a New Orleans native — this is the real deal. Tiana would approve.", time: "3 days ago" }
    ]
  },

  {
    id: 19,
    title: "Tiana's Louisiana Gumbo",
    film: "The Princess and the Frog",
    studio: "Walt Disney Animation",
    year: 2009,
    category: "disney-pixar",
    type: "animated",
    difficulty: "medium",
    emoji: "🍲",
    // Finished dish image — real gumbo
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Gumbo_-_stew.jpg/640px-Gumbo_-_stew.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1603046891744-1f9e7d042478?w=600&q=80", caption: "Stir the dark roux — don't stop" },
      { src: "https://images.unsplash.com/photo-1582234377793-afbe84c74bd3?w=600&q=80", caption: "Add the Cajun holy trinity" },
      { src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", caption: "Simmer with shrimp and sausage" }
    ],
    filmConnection: "Tiana's gumbo is the dish that grounds the entire emotional arc of the film. She learned to cook it with her father, who told her: 'You know the thing about good food? It brings folks together from all walks of life. It warms them right up and puts little smiles on their faces.' The gumbo reappears when Tiana teaches Prince Naveen to cook — a tender scene where they open up about their dreams. When she finally opens Tiana's Palace, a steaming pot of gumbo is its centerpiece. The dish blends African, Native American, Caribbean, and French influences — a perfect symbol of New Orleans itself.",
    servings: 6,
    prepTime: "20 mins",
    cookTime: "75 mins",
    totalTime: "1 hr 35 mins",
    ingredients: [
      "½ cup vegetable oil",
      "½ cup all-purpose flour",
      "1 large onion, diced",
      "3 celery stalks, diced",
      "1 green bell pepper, diced",
      "4 cloves garlic, minced",
      "12 oz andouille sausage, sliced into rounds",
      "1 lb medium shrimp, peeled and deveined",
      "6 cups chicken stock",
      "2 bay leaves",
      "1 tsp filé powder (optional, traditional thickener)",
      "Cajun seasoning to taste",
      "Salt and black pepper",
      "Cooked white long-grain rice, to serve",
      "Sliced scallions and hot sauce, to garnish"
    ],
    steps: [
      { step: 1, title: "Make the Dark Roux", detail: "Heat oil in a large heavy Dutch oven over medium heat. Whisk in flour. Stir constantly with a wooden spoon for 20–25 minutes — the roux should turn the color of dark chocolate or peanut butter. Do not walk away. If it burns, start over. This roux is the foundation and soul of the gumbo." },
      { step: 2, title: "Add the Holy Trinity", detail: "Immediately add onion, celery, and bell pepper to the hot roux. The vegetables will sizzle dramatically and stop the roux from darkening further. Stir and cook 5 minutes until softened. Add garlic and cook 1 more minute." },
      { step: 3, title: "Build the Base", detail: "Add sliced andouille sausage and cook 3 minutes, stirring. Pour in chicken stock gradually, whisking to prevent lumps. Add bay leaves and Cajun seasoning. Bring to a boil, then reduce to a low, steady simmer." },
      { step: 4, title: "Simmer", detail: "Simmer uncovered for 45 minutes, skimming off any fat that rises to the surface. The gumbo should reduce slightly and deepen in color. Taste and adjust seasoning — it should be boldly flavored." },
      { step: 5, title: "Add Shrimp and Finish", detail: "Add shrimp in the last 5 minutes of cooking. They cook fast — remove from heat the moment they curl and turn pink. Stir in filé powder off the heat. Discard bay leaves." },
      { step: 6, title: "Serve", detail: "Ladle into deep bowls over a mound of white rice. Garnish with sliced scallions and a few drops of hot sauce. Share with as many neighbors as possible." }
    ],
    bonusTip: "Gumbo gets better overnight as the flavors deepen. Make it a day ahead and refrigerate — reheat gently and add the shrimp fresh when serving. The roux is the hardest part: if you master the dark roux, you can cook anything.",
    tags: ["new-orleans", "cajun", "seafood", "stew", "disney"],
    likes: 356,
    comments: [
      { user: "CajunCook", text: "The roux took me 25 minutes of pure stress but the result was perfect.", time: "2 days ago" },
      { user: "DisneyEats", text: "Made this for my family on a Sunday. Everyone wanted seconds. Tiana's dad was right.", time: "5 days ago" }
    ]
  },

  {
    id: 20,
    title: "Steamed Pork Bao Buns",
    film: "Turning Red",
    studio: "Pixar Animation Studios",
    year: 2022,
    category: "disney-pixar",
    type: "animated",
    difficulty: "medium",
    emoji: "🥟",
    // Finished dish image — real bao buns
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Baozi.jpg/640px-Baozi.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", caption: "Proof the soft dough" },
      { src: "https://images.unsplash.com/photo-1609561122649-d8eda1c1c3e9?w=600&q=80", caption: "Fill and pleat each bun" },
      { src: "https://images.unsplash.com/photo-1563559292a24a4de26b9a?w=600&q=80", caption: "Steam until pillowy white" }
    ],
    filmConnection: "Director Domee Shi drew directly from her Chinese-Canadian upbringing for Turning Red — her mother served as a cultural consultant on the film, just as she did on Domee's Oscar-winning short Bao. The steamed bao buns at Meilin's family table reflect real meals from Domee's childhood in Toronto's Chinese community. 'Bao' in Mandarin can mean 'treasure,' and in the film these pillowy dumplings represent the warmth and — at times — the smothering intensity of family love. Pixar's food has never been just food.",
    servings: 12,
    prepTime: "30 mins",
    cookTime: "20 mins",
    totalTime: "50 mins (plus 1.5 hrs proofing)",
    ingredients: [
      "FOR THE DOUGH:",
      "3 cups all-purpose flour",
      "2 tsp instant yeast",
      "2 tbsp sugar",
      "½ tsp baking powder",
      "1 tbsp vegetable oil",
      "¾ cup warm whole milk",
      "FOR THE PORK FILLING:",
      "½ lb ground pork",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sesame oil",
      "2 tsp fresh ginger, grated",
      "2 scallions, finely minced",
      "1 tsp sugar",
      "White pepper to taste"
    ],
    steps: [
      { step: 1, title: "Make the Dough", detail: "Combine flour, yeast, sugar, and baking powder in a large bowl. Add oil and warm milk. Mix then knead for 8–10 minutes until smooth and springy. Cover with plastic wrap and proof in a warm spot for 1 hour until doubled in size." },
      { step: 2, title: "Mix the Filling", detail: "Combine all pork filling ingredients and mix thoroughly in one direction — this develops a smooth, bouncy texture. Refrigerate for 20 minutes. Cold filling is easier to handle when pleating." },
      { step: 3, title: "Shape the Buns", detail: "Punch down dough and divide into 12 equal pieces. Roll each into a circle about 4 inches across, slightly thicker in the center than the edges. Place 1 generous tablespoon of filling in the center." },
      { step: 4, title: "Pleat and Seal", detail: "Fold the dough up around the filling and pleat the edges together, twisting to seal — aim for at least 8 pleats. Place each bun seam-side up on a square of parchment. Cover and proof a further 20–30 minutes until puffed." },
      { step: 5, title: "Steam", detail: "Set up a steamer over boiling water. Leave 2 inches of space between buns. Steam for 15 minutes over medium-high heat. Do not lift the lid while steaming. After 15 minutes, turn off the heat and let sit covered for 5 more minutes before opening." }
    ],
    bonusTip: "Leftover bao freeze beautifully — just re-steam frozen buns for 8 minutes straight from the freezer and they'll taste freshly made. A batch of 24 means you always have a good meal in reserve.",
    tags: ["chinese", "dim-sum", "steamed", "pork", "pixar"],
    likes: 287,
    comments: [
      { user: "Mei_Cooks", text: "My mom taught me to make these the same way. Seeing them in Turning Red made me cry a little.", time: "1 day ago" },
      { user: "BaoLover", text: "The pleating took practice but even ugly ones taste incredible.", time: "4 days ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  LIVE ACTION — ITALIAN CLASSICS
  // ──────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Clemenza's Sunday Gravy",
    film: "The Godfather",
    studio: "Paramount Pictures",
    year: 1972,
    category: "italian-classic",
    type: "live-action",
    difficulty: "medium",
    emoji: "🍝",
    // Finished dish image — real Italian pasta with meat sauce
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Spaghetti_al_pomodoro.jpg/640px-Spaghetti_al_pomodoro.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&q=80", caption: "Brown meats to build deep flavor" },
      { src: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&q=80", caption: "San Marzano tomatoes — no substitutes" },
      { src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80", caption: "Low and slow — 3 hours minimum" }
    ],
    filmConnection: "Peter Clemenza's immortal instruction — 'you start out with a little bit of oil, then you fry some garlic...' — is one of cinema's most famous food monologues, delivered casually while orchestrating a murder in the next room. The Sunday Gravy in Italian-American culture is a sacred tradition passed down through generations. In the film, cooking this sauce represents belonging, family loyalty, and the warm domestic life that masks the violence beneath. Francis Ford Coppola reportedly drew on his own family's recipe for the scene.",
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
      { step: 2, title: "Fry the Garlic — Clemenza Style", detail: "Reduce heat to medium. Add sliced garlic. Cook slowly until lightly golden, about 3–4 minutes. Watch carefully — burnt garlic will ruin everything. As Clemenza says: this is the beginning." },
      { step: 3, title: "Add Tomato Paste and Wine", detail: "Push the garlic aside and add tomato paste. Cook the paste in the hot oil for 2 minutes, stirring — this removes its raw, metallic taste and deepens the flavor. Add the red wine and scrape up all the browned bits. Let the wine reduce by half, about 5 minutes." },
      { step: 4, title: "Add Tomatoes and Simmer Long and Slow", detail: "Add both cans of crushed tomatoes, oregano, chili flakes, salt, and pepper. Return the browned meats to the pot, submerging them. Bring to a boil, then immediately reduce to the lowest possible simmer. Cover partially. Cook for 2½ to 3 hours, stirring every 20–30 minutes." },
      { step: 5, title: "Finish and Serve", detail: "Remove the beef and shred it back into the sauce with two forks. Add fresh basil. Taste for salt. Toss with cooked pasta, top with grated Parmesan. The leftover sauce gets better every day it sits in the fridge." }
    ],
    bonusTip: "The beef short rib bones left after shredding can be simmered with water, a carrot, celery, and bay leaf for 2 more hours to make a rich bone broth. Strain and freeze — use it as the base for risotto, soups, or to deglaze pans.",
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
    // Finished dish image — real boeuf bourguignon
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Boeuf_bourguignon_2.jpg/640px-Boeuf_bourguignon_2.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80", caption: "Pat dry — brown in small batches" },
      { src: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80", caption: "Deglaze with a whole bottle of Burgundy" },
      { src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80", caption: "Braise slow and low in the oven" }
    ],
    filmConnection: "Boeuf Bourguignon is the dish at the absolute center of both Julie Powell's and Julia Child's culinary journeys. In the film, Meryl Streep as Julia Child prepares it with hilarious and infectious confidence. For Julia, it was the first dish she truly perfected in Paris in the 1950s; for Julie, it was the 'pinnacle' — the recipe that proved she could master French cooking. This deeply wine-soaked braised beef carries the cultural weight of an entire cuisine and taught a generation of Americans that French cooking was achievable at home.",
    servings: 6,
    prepTime: "45 mins",
    cookTime: "3 hrs",
    totalTime: "3 hrs 45 mins",
    ingredients: [
      "3 lbs beef chuck, cut into 2-inch cubes",
      "6 oz thick-cut bacon, cut into lardons",
      "1 bottle (750ml) dry red Burgundy wine",
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
      { step: 1, title: "Marinate the Beef (Optional but Ideal)", detail: "The night before: combine beef cubes with wine, carrots, onion, garlic, and bouquet garni. Cover and refrigerate overnight. This is how Julia Child did it. If short on time, skip and add the wine in step 4." },
      { step: 2, title: "Brown the Bacon and Beef", detail: "Pat beef completely dry with paper towels — wet beef will steam, not brown. In a large Dutch oven, render bacon over medium heat until crispy. Remove. Increase heat to medium-high. In the bacon fat, brown beef cubes in batches — never crowding the pan. 3–4 minutes per side until deeply golden. This takes patience but is the most important step." },
      { step: 3, title: "Build the Braise", detail: "Remove the beef. In the same pot, sauté onion and carrots until softened, about 5 minutes. Add garlic and cook 1 minute. Sprinkle flour over the vegetables and stir to coat. Cook 2 minutes. Add tomato paste and stir." },
      { step: 4, title: "Braise Low and Slow", detail: "Return the beef and bacon to the pot. Pour in the entire bottle of wine and enough beef stock to almost cover the meat. Add bouquet garni. Bring to a gentle simmer on the stovetop, then transfer to a 325°F (160°C) oven. Braise for 2½ to 3 hours — the beef should be completely fork-tender." },
      { step: 5, title: "Prepare the Garnishes", detail: "While the beef braises: in a small pan, cook pearl onions in butter and sugar with ½ cup water over medium heat until the water evaporates and onions are glazed and golden, about 20 minutes. In a separate pan, sauté mushrooms in butter over high heat until golden." },
      { step: 6, title: "Finish the Dish", detail: "Remove the beef and strain the braising liquid into a saucepan. Boil the liquid until it reduces and coats a spoon — about 10 minutes. Taste for seasoning. Return beef to the pot, add glazed onions and mushrooms, pour the reduced sauce over everything. Serve with buttered egg noodles, crusty bread, or mashed potatoes." }
    ],
    bonusTip: "The braising liquid, refrigerated overnight, will have a solid fat cap you can lift off cleanly — leaving behind pure, glossy jus. Reheat it and use it on roasted chicken, vegetables, or as a soup base.",
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
    // Finished dish image — shortbread-style baked squares
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=640&q=80",
    processImages: [
      { src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80", caption: "Cut cold butter into flour" },
      { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", caption: "Pat dough and cut into squares" },
      { src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80", caption: "Golden from the oven, wrap in parchment" }
    ],
    filmConnection: "Lembas, the Elvish waybread of Lothlórien, is given to the Fellowship by Galadriel before they set out across Middle-earth. Samwise and Frodo survive their entire journey to Mount Doom primarily on lembas — making it perhaps the most important food in all of fantasy literature. Tolkien based it partly on ancient Celtic travel breads. Galadriel's gift of lembas marks the last moment of safety before the Fellowship fractures, making it one of the quietly emotional food moments in the trilogy.",
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
      { step: 1, title: "Mix the Dry Ingredients", detail: "Preheat oven to 375°F (190°C). In a large bowl, whisk together flour, baking powder, salt, brown sugar, cinnamon, and nutmeg. These spices are key — lembas should smell warm and slightly exotic." },
      { step: 2, title: "Cut in the Cold Butter", detail: "Add cold cubed butter to the flour mixture. Using your fingertips, press the butter into the flour until the mixture resembles coarse breadcrumbs with some pea-sized lumps remaining. Cold butter = flaky, crumbly texture. Do not overwork." },
      { step: 3, title: "Add the Wet Ingredients", detail: "Whisk together cream, vanilla extract, and honey. Pour into the flour-butter mixture. Stir gently with a fork until a soft dough just comes together. Do not overmix." },
      { step: 4, title: "Shape and Score", detail: "Turn out onto a lightly floured surface. Pat gently to ¾ inch thickness. Cut into 3-inch squares with a sharp knife. Score a cross pattern on each piece. Place on a parchment-lined baking sheet." },
      { step: 5, title: "Brush and Bake", detail: "Brush each piece lightly with egg yolk for a golden color. Bake for 18–22 minutes until golden brown at the edges and just firm in the center. Cool on a rack. Wrap each piece in parchment for the full Elvish experience." }
    ],
    bonusTip: "Leftover lembas crumbles beautifully over vanilla ice cream or yogurt. Older, drier pieces make a crunchy topping for baked fruit — just crumble over sliced apples with butter and bake.",
    tags: ["bread", "baking", "fantasy", "sweet", "snack"],
    likes: 441,
    comments: [
      { user: "TolkienKitchen", text: "Wrapped these in leaves from my garden. Perfect for a LOTR marathon.", time: "4 days ago" },
      { user: "Hobbit_Eats", text: "One small piece really does fill you up! Probably the butter though lol", time: "1 week ago" }
    ]
  },

  {
    id: 16,
    title: "Turkish Delight",
    film: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    studio: "Walt Disney Pictures / Walden Media",
    year: 2005,
    category: "fantasy-epic",
    type: "live-action",
    difficulty: "medium",
    emoji: "🍬",
    // Finished dish image — real Turkish delight
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turkish_delight_-_rosewater.jpg/640px-Turkish_delight_-_rosewater.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80", caption: "Cook sugar syrup to soft-ball stage" },
      { src: "https://images.unsplash.com/photo-1626082896492-78543ceb8e79?w=600&q=80", caption: "Stir in rosewater and colour" },
      { src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80", caption: "Set overnight, cut and coat in sugar" }
    ],
    filmConnection: "The White Witch uses enchanted Turkish Delight to seduce Edmund Pevensie into betraying his siblings, offering him as much as he could ever want. Turkish Delight is a centuries-old confection from the Ottoman Empire, and its use as a symbol of temptation and corruption is central to C.S. Lewis's 1950 novel. The scene is one of cinema's most perfect metaphors for how something beautiful and sweet can mask something deeply sinister.",
    servings: 36,
    prepTime: "20 mins",
    cookTime: "45 mins",
    totalTime: "1 hr 5 mins (plus 4 hrs setting)",
    ingredients: [
      "3 cups granulated sugar",
      "1 cup cold water, divided",
      "1 cup cornstarch, divided",
      "1 tsp cream of tartar",
      "1¼ cups water for syrup",
      "2 tbsp rose water",
      "1 tsp vanilla extract",
      "6 drops pink food colouring",
      "½ cup chopped pistachios (optional)",
      "1 cup powdered (icing) sugar for coating",
      "Extra cornstarch for dusting"
    ],
    steps: [
      { step: 1, title: "Prepare the Cornstarch Slurry", detail: "In a medium saucepan, whisk together ½ cup cold water and ¾ cup of the cornstarch until completely smooth with no lumps. Add the cream of tartar and stir to combine. Set aside." },
      { step: 2, title: "Make the Sugar Syrup", detail: "In a separate heavy-bottomed saucepan, combine sugar and 1¼ cups water over medium-high heat. Stir until the sugar dissolves, then stop stirring and cook until the syrup reaches 240°F (115°C) — soft-ball stage. Remove from heat immediately." },
      { step: 3, title: "Combine and Cook", detail: "Place the cornstarch saucepan over medium heat and cook, stirring constantly, until the slurry thickens to a pale paste, about 3–4 minutes. Slowly pour the hot sugar syrup into the paste in a thin stream, whisking the entire time. Reduce heat to low." },
      { step: 4, title: "Low and Slow Simmer", detail: "Continue cooking over low heat, stirring frequently, for approximately 35–40 minutes until the mixture turns pale golden, pulls away from the sides of the pan cleanly, and holds its shape on a cold plate. Do not rush this step." },
      { step: 5, title: "Flavour and Colour", detail: "Remove from heat. Stir in rose water, vanilla extract, food colouring, and chopped pistachios if using. Mix thoroughly until the colour is evenly distributed." },
      { step: 6, title: "Set, Cut and Coat", detail: "Grease and dust a 9×9 inch pan with powdered sugar and cornstarch. Pour in the mixture, smooth the top, dust with more sugar-cornstarch. Cool at room temperature at least 4 hours. Turn out, cut into 1-inch squares with a greased knife. Toss each piece in the powdered sugar coating." }
    ],
    bonusTip: "Store in an airtight container layered with parchment and extra coating sugar. Keeps at room temperature for two weeks and the flavour deepens beautifully after the first day.",
    tags: ["british", "ottoman", "confection", "rose water", "candy", "fantasy"],
    likes: 198,
    comments: [
      { user: "NarniaKitchen", text: "Worth every step. The rose water version is so much better than shop-bought.", time: "3 days ago" },
      { user: "EdmundApproves", text: "I now understand why Edmund betrayed his whole family.", time: "1 week ago" }
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
    // Finished dish image — pan-fried liver and beans
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Fried_liver_with_onions.jpg/640px-Fried_liver_with_onions.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80", caption: "Soak liver in milk to remove bitterness" },
      { src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80", caption: "Caramelize onions low and slow" },
      { src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80", caption: "Sear hot — keep the center pink" }
    ],
    filmConnection: "Hannibal Lecter's chilling description — 'I ate his liver with some fava beans and a nice Chianti' — is one of the most iconic lines in cinema history. Delivered with terrifying calm, the line works because it actually describes a perfectly classical Italian preparation. Liver with fava beans is an ancient Roman dish, and Chianti is the natural Tuscan pairing. The recipe is deeply traditional — we are making the dish, not the context.",
    servings: 2,
    prepTime: "20 mins",
    cookTime: "20 mins",
    totalTime: "40 mins",
    ingredients: [
      "12 oz chicken or beef liver, cleaned and sliced",
      "1 cup fresh or frozen fava beans",
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
      { step: 1, title: "Prepare the Liver", detail: "Pat liver slices completely dry with paper towels. Season generously with salt and pepper. If using beef liver, soak in milk for 30 minutes beforehand and rinse — this draws out bitterness and dramatically improves the flavor." },
      { step: 2, title: "Cook the Fava Beans", detail: "If using fresh favas: blanch shelled beans in boiling water 2 minutes, then transfer to ice water. Pop each bean out of its pale skin — this reveals the vibrant green interior. For frozen beans, just thaw and skip the peeling." },
      { step: 3, title: "Caramelize the Onions and Garlic", detail: "Heat butter and olive oil in a wide skillet over medium heat. Add onion and cook slowly for 10–12 minutes until deeply golden and sweet. Add garlic and sage leaves, cook 2 more minutes. Remove everything from the pan and set aside." },
      { step: 4, title: "Sear the Liver", detail: "Increase heat to medium-high. Add a little more butter. When the butter foams, add liver slices in a single layer. Cook 2 minutes per side — the inside should still be slightly pink. Overcooked liver becomes grainy and dry." },
      { step: 5, title: "Deglaze and Finish", detail: "Return the onion mixture to the pan. Pour in the Chianti. Let it sizzle and reduce for 2 minutes, scraping up any browned bits. Add fava beans and rosemary. Squeeze lemon juice over everything. Serve immediately over crusty bread or polenta." }
    ],
    bonusTip: "The cooking juices from this dish, reduced slightly, make a phenomenal sauce for pasta or crostini. The fava bean pods themselves can be eaten when very young — sauté them whole in olive oil and garlic.",
    tags: ["offal", "italian", "classic", "film-iconic", "wine"],
    likes: 203,
    comments: [
      { user: "CulinaryLecter", text: "I was nervous but this is genuinely one of the best things I have ever cooked. Liver converts WELCOME.", time: "2 days ago" },
      { user: "FavaFanatic", text: "Peeling the fava beans is tedious but absolutely worth it for the texture.", time: "5 days ago" }
    ]
  },

  {
    id: 15,
    title: "The Royale with Cheese (Juicy Cheeseburger)",
    film: "Pulp Fiction",
    studio: "Miramax Films",
    year: 1994,
    category: "thriller",
    type: "live-action",
    difficulty: "easy",
    emoji: "🍔",
    // Finished dish image — real cheeseburger
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/240px-PNG_transparency_demonstration_1.png",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Grilled_Cheese_On_Burger.jpg/640px-Grilled_Cheese_On_Burger.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", caption: "Form loose patties — don't overwork" },
      { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", caption: "Sear in screaming hot cast iron" },
      { src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80", caption: "Melt the cheese, stack the build" }
    ],
    filmConnection: "Vincent Vega and Jules Winnfield's debate about the 'Royale with Cheese' — a Quarter Pounder as it's known in America, renamed due to the metric system in France — is one of Tarantino's most celebrated pieces of dialogue. Tarantino's genius was using something as mundane as a fast-food burger to reveal character, establish tone, and build dread before the violence begins. The scene cemented the humble cheeseburger as a cultural artifact of 1990s cool.",
    servings: 4,
    prepTime: "15 mins",
    cookTime: "15 mins",
    totalTime: "30 mins",
    ingredients: [
      "600g (1.3 lb) 80/20 ground beef chuck",
      "1 tsp fine sea salt",
      "1 tsp freshly cracked black pepper",
      "1 tsp garlic powder",
      "1 tsp Worcestershire sauce",
      "4 slices American cheese",
      "4 brioche burger buns, lightly toasted",
      "2 tbsp unsalted butter (for toasting buns)",
      "4 tbsp mayonnaise",
      "2 tbsp yellow mustard",
      "2 tbsp ketchup",
      "4 leaves iceberg lettuce",
      "2 medium tomatoes, sliced thick",
      "1 small white onion, thinly sliced",
      "8 slices dill pickle"
    ],
    steps: [
      { step: 1, title: "Form the Patties", detail: "Combine beef, salt, pepper, garlic powder, and Worcestershire sauce. Mix gently — do not overwork the meat. Divide into 4 equal portions and press into patties about ½ inch thick. Press a shallow thumbprint into the center of each to prevent puffing." },
      { step: 2, title: "Toast the Buns", detail: "Melt butter in a large cast-iron skillet over medium heat. Place the buns cut-side down and toast for 1–2 minutes until golden. Remove and set aside." },
      { step: 3, title: "Sear the Patties", detail: "Increase heat to medium-high and let the skillet get very hot. Cook the patties for 3–4 minutes on the first side without pressing down. Flip once, immediately place a slice of cheese on each. Cook 2–3 more minutes for medium. Cover loosely for the last 30 seconds to melt the cheese." },
      { step: 4, title: "Build the Burger", detail: "Spread mayo on the top bun and mustard-ketchup on the bottom. Layer with pickles, onion, lettuce, and tomato. Add the cheesy patty. Crown with the top bun. Serve immediately. Optionally call it a Royale with Cheese." }
    ],
    bonusTip: "Leftover cooked patties crumble beautifully into a pan with eggs and cheddar the next morning for a serious breakfast scramble.",
    tags: ["burger", "american", "beef", "classic", "tarantino", "comfort-food", "quick"],
    likes: 312,
    comments: [
      { user: "TarantinoKitchen", text: "Made these for movie night. The dialogue hits different when you're actually eating a burger.", time: "2 days ago" },
      { user: "RoyaleWithCheese", text: "The cast iron sear is non-negotiable. Don't use a non-stick.", time: "4 days ago" }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  OTHER ANIMATED
  // ──────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Paddington's Perfect Marmalade Sandwich",
    film: "Paddington",
    studio: "StudioCanal",
    year: 2014,
    category: "other-animated",
    type: "animated",
    difficulty: "easy",
    emoji: "🫐",
    // Finished dish image — real orange marmalade
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Seville_orange_marmalade.jpg/640px-Seville_orange_marmalade.jpg",
    processImages: [
      { src: "https://images.unsplash.com/photo-1562819862-3b7ae2b30d74?w=600&q=80", caption: "Simmer Seville orange peel until soft" },
      { src: "https://images.unsplash.com/photo-1583448695823-a81f9fe44bf2?w=600&q=80", caption: "Wrinkle test on a frozen plate" },
      { src: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&q=80", caption: "Spread generously — no moderation allowed" }
    ],
    filmConnection: "Paddington Bear carries marmalade sandwiches in his hat for emergencies — a practice taught to him by his Aunt Lucy in darkest Peru, inspired by the marmalade brought to their remote village by a visiting English explorer. In the 2014 film, when Paddington first unpacks his emergency sandwich after his journey, it is a perfect, quietly moving moment of comfort from home in a frightening new world. This recipe makes the real thing — because Paddington deserves no less.",
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
      { step: 1, title: "Make the Marmalade", detail: "Wash oranges and lemon well. Peel in wide strips and cut the peel into thin strips. Remove white pith from the fruit and roughly chop the flesh, catching all juice. Place peel strips, chopped fruit, juice, and water in a pan. Bring to boil, reduce heat, simmer 30 minutes until peel is very soft." },
      { step: 2, title: "Add Sugar and Set", detail: "Add sugar, stir until dissolved. Bring to a rolling boil and cook without stirring for 10–15 minutes. Test on a cold plate from the freezer — push with your finger and if it wrinkles, it's ready. Pour into clean glass jars. It will firm up as it cools." },
      { step: 3, title: "Assemble the Sandwich", detail: "Spread softened butter generously on both slices of bread. Spread a thick, unapologetic layer of cooled marmalade on one slice. Press together. Cut diagonally. For the authentic Paddington experience: wrap one in foil and store under your hat." }
    ],
    bonusTip: "Orange marmalade is extraordinary in other applications: stir it into a pan sauce for roasted duck or chicken, spread it on warm scones with clotted cream, or mix into a salad dressing with Dijon mustard.",
    tags: ["british", "jam", "sandwich", "baking", "easy"],
    likes: 276,
    comments: [
      { user: "BrownFamily", text: "My kids made this themselves! The marmalade is so much better than store-bought.", time: "2 days ago" },
      { user: "PeruToPaddington", text: "I put the sandwich in my hat to see what it was like. 10/10 experience.", time: "4 days ago" }
    ]
  }

];

// Daily recipe rotation — cycles through recipes based on day of year
function getTodaysRecipe() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return RECIPES[dayOfYear % RECIPES.length];
}
