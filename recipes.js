// ============================================================
//  REEL RECIPES — Film Recipe Database
// ============================================================

const RECIPES = [

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
    image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Onigiri_1.jpg/640px-Onigiri_1.jpg",
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
      "Salted water for shaping"
    ],
    steps: [
      { step: 1, title: "Cook the Rice", detail: "Wash the rice 3–4 times until water runs almost clear. Combine rice and 3¼ cups water in a pot. Bring to a boil, reduce heat to the lowest setting, cover, and cook for 15 minutes. Remove from heat and let steam for 10 minutes — do not lift the lid." },
      { step: 2, title: "Make the Filling", detail: "Mix the drained tuna with Japanese mayo, a pinch of salt, and sesame seeds. In a small bowl, mix soy sauce and mirin for an optional glazed exterior." },
      { step: 3, title: "Shape the Onigiri", detail: "Wet your hands with salted water. Take roughly ½ cup of warm rice. Flatten it in your palm, add a spoonful of tuna filling in the center, then fold the rice around it. Press firmly into a triangle shape using three fingers, rotating as you press." },
      { step: 4, title: "Wrap with Nori", detail: "Wrap a strip of nori around the base of each triangle. Wrap just before eating so the seaweed stays crispy." },
      { step: 5, title: "Optional: Grill Them", detail: "For a smoky finish, brush with the soy-mirin mixture and grill each onigiri on medium heat for 2 minutes per side until a golden crust forms." }
    ],
    bonusTip: "Leftover rice can be used the next day for fried rice — just add soy sauce, a scrambled egg, frozen peas, and sesame oil.",
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
    image: "https://m.media-amazon.com/images/M/MV5BNzgwOTg0OGMtMWQ1Zi00MDMzLWEzZWUtMGZmNzk1MzA1ZWNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Weirdest_Full_English_Breakfast.jpg/640px-Weirdest_Full_English_Breakfast.jpg",
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
      "½ cup baked beans (optional)"
    ],
    steps: [
      { step: 1, title: "Start the Bacon & Sausage", detail: "Heat a large cast-iron skillet over medium heat. Lay the bacon strips in and cook 3–4 minutes per side until crispy. Remove and set aside. Add sausages to the same pan and cook 8–10 minutes, turning occasionally until browned and cooked through." },
      { step: 2, title: "Grill the Tomato", detail: "Cut tomato in half, season cut side with salt and pepper. Place cut-side down in the pan. Let it char slightly — about 3 minutes per side." },
      { step: 3, title: "Fry the Eggs", detail: "Add butter and olive oil to the pan. Once the butter foams, crack eggs in gently. Cook over medium-low heat and spoon the hot butter over the yolks for about 2 minutes. Crispy edges, runny center." },
      { step: 4, title: "Toast the Bread", detail: "Toast sourdough in a toaster or in the same pan pressed down with a spatula. Butter generously while hot." },
      { step: 5, title: "Plate It Up", detail: "Arrange everything on a warm plate: eggs in the center, bacon and sausages on the side, grilled tomato, beans warmed separately, toast on the edge. Season with cracked black pepper." }
    ],
    bonusTip: "Bacon fat is liquid gold — pour it into a small jar, keep in the fridge, and use it to roast vegetables or fry potatoes. Keeps for a month.",
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
    image: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ratatouille_%28food%29.jpg/640px-Ratatouille_%28food%29.jpg",
    filmConnection: "When food critic Anton Ego takes his first bite of Remy's ratatouille near the film's climax, he is transported back to his mother's kitchen — a child again, all cynicism dissolved. The dish is actually 'confit byaldi,' an elegant Provençal preparation designed by chef Thomas Keller specifically for the film. Pixar filmed Keller making it as a direct animation reference. It represents the film's central message: that great food can come from unexpected places.",
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
      "1 tsp fresh thyme"
    ],
    steps: [
      { step: 1, title: "Make the Piperade Sauce", detail: "Heat olive oil in a wide oven-safe pan over medium heat. Sauté onion until soft, about 8 minutes. Add garlic and cook 1 minute. Add diced bell peppers and cook another 8 minutes. Add crushed tomatoes, thyme, rosemary, salt and pepper. Simmer 15 minutes until thick. Spread across the bottom of a round baking dish." },
      { step: 2, title: "Slice the Vegetables Paper-Thin", detail: "Use a mandoline slicer — aim for slices about 1/8 inch thick. The thinner the slices, the more elegant the final dish. Slice all vegetables: zucchini, yellow squash, tomatoes, and eggplant." },
      { step: 3, title: "Arrange in Overlapping Circles", detail: "Starting at the outside edge of the pan, layer the vegetable slices in an overlapping pattern — alternating: eggplant, zucchini, tomato, yellow squash. Work inward in a spiral. Each slice should overlap the previous by about half." },
      { step: 4, title: "Season and Bake", detail: "Mix together the vinaigrette ingredients and drizzle over the top. Add extra thyme sprigs. Season with salt and pepper. Cover loosely with parchment paper pressed directly onto the vegetables. Bake at 275°F for 1 hour 45 minutes to 2 hours." },
      { step: 5, title: "Serve with Sauce", detail: "To serve restaurant-style, use a round cookie cutter as a mold, stack several overlapping slices upright, and spoon warm piperade sauce around them. Garnish with a tiny sprig of thyme." }
    ],
    bonusTip: "The vegetable trimmings are perfect for making a summer vegetable stock. Simmer with water, a bay leaf, and peppercorns for 30 minutes, strain, and freeze in ice cube trays.",
    tags: ["french", "vegetarian", "elegant", "provençal"],
    likes: 512,
    comments: [
      { user: "PepperoniDreams", text: "The piperade sauce alone is worth making. I put it on everything now.", time: "1 day ago" },
      { user: "HomeChefMarcel", text: "Took me 3 tries to get the mandoline slicing right but WOW the result.", time: "4 days ago" },
      { user: "TinyChef", text: "Made this for my dinner party and everyone thought I was a professional chef 😂", time: "1 week ago" }
    ]
  },

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
    image: "https://m.media-amazon.com/images/M/MV5BMjAzMzM5OTYzOV5BMl5BanBnXkFtZTcwNjc5MjYyMg@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Beignets_from_Cafe_Du_Monde%2C_New_Orleans%2C_LA.jpg/640px-Beignets_from_Cafe_Du_Monde%2C_New_Orleans%2C_LA.jpg",
    filmConnection: "Beignets are the beating heart of Tiana's dreams throughout the film. In the opening scenes, a young Tiana serves them to Charlotte's family, and Charlotte later hires her to bake 500 of them for her masquerade ball — the down payment Tiana needs to open her restaurant. These beignets are deeply rooted in real New Orleans tradition — Café Du Monde has served them since 1862.",
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
      { step: 1, title: "Bloom the Yeast", detail: "Dissolve yeast in warm water with a pinch of the sugar. Let sit 5 minutes until foamy — if it doesn't foam, your yeast is dead and you'll need a fresh packet." },
      { step: 2, title: "Mix the Dough", detail: "Combine the yeast mixture with remaining sugar, salt, beaten egg, and evaporated milk. Work in flour gradually, then add shortening. Knead on a floured surface for 5 minutes until smooth and elastic." },
      { step: 3, title: "Rest", detail: "Cover dough with plastic wrap and refrigerate for at least 1 hour — overnight is even better." },
      { step: 4, title: "Roll and Cut", detail: "On a floured surface, roll dough to ¼-inch thickness. Cut into 2-inch squares with a sharp knife or pizza cutter." },
      { step: 5, title: "Fry", detail: "Heat 3 inches of vegetable oil to 360°F in a heavy pot. Fry beignets in small batches, 2–3 minutes per side, until deep golden. Drain on paper towels." },
      { step: 6, title: "Finish Like Tiana", detail: "Pile on a plate and immediately bury them under a mountain of powdered sugar. Drizzle with warm honey. Serve hot." }
    ],
    bonusTip: "The dough can be made up to 2 days ahead and kept refrigerated. Beignets are best eaten within minutes of frying.",
    tags: ["new-orleans", "fried", "sweet", "breakfast", "disney"],
    likes: 421,
    comments: [
      { user: "TianaFan", text: "Made these for Mardi Gras and my whole family lost their minds.", time: "1 day ago" },
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
    image: "https://m.media-amazon.com/images/M/MV5BMjAzMzM5OTYzOV5BMl5BanBnXkFtZTcwNjc5MjYyMg@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Gumbo_-_stew.jpg/640px-Gumbo_-_stew.jpg",
    filmConnection: "Tiana's gumbo is the dish that grounds the entire emotional arc of the film. She learned to cook it with her father, who told her: 'You know the thing about good food? It brings folks together from all walks of life.' The gumbo reappears when Tiana teaches Prince Naveen to cook. The dish blends African, Native American, Caribbean, and French influences — a perfect symbol of New Orleans itself.",
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
      "1 tsp filé powder",
      "Cajun seasoning to taste",
      "Cooked white rice, to serve",
      "Sliced scallions and hot sauce, to garnish"
    ],
    steps: [
      { step: 1, title: "Make the Dark Roux", detail: "Heat oil in a large heavy Dutch oven over medium heat. Whisk in flour. Stir constantly for 20–25 minutes until the color of dark chocolate. Do not walk away. If it burns, start over." },
      { step: 2, title: "Add the Holy Trinity", detail: "Immediately add onion, celery, and bell pepper. Stir and cook 5 minutes until softened. Add garlic and cook 1 more minute." },
      { step: 3, title: "Build the Base", detail: "Add sliced andouille sausage and cook 3 minutes. Pour in chicken stock gradually, whisking to prevent lumps. Add bay leaves and Cajun seasoning. Bring to a boil then reduce to a low simmer." },
      { step: 4, title: "Simmer", detail: "Simmer uncovered for 45 minutes, skimming off any fat. Taste and adjust seasoning." },
      { step: 5, title: "Add Shrimp and Finish", detail: "Add shrimp in the last 5 minutes. Remove from heat the moment they curl and turn pink. Stir in filé powder off the heat. Discard bay leaves." },
      { step: 6, title: "Serve", detail: "Ladle into deep bowls over a mound of white rice. Garnish with scallions and hot sauce." }
    ],
    bonusTip: "Gumbo gets better overnight. Make it a day ahead and refrigerate — reheat gently and add the shrimp fresh when serving.",
    tags: ["new-orleans", "cajun", "seafood", "stew", "disney"],
    likes: 356,
    comments: [
      { user: "CajunCook", text: "The roux took me 25 minutes of pure stress but the result was perfect.", time: "2 days ago" },
      { user: "DisneyEats", text: "Made this for my family on a Sunday. Everyone wanted seconds.", time: "5 days ago" }
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
    image: "https://m.media-amazon.com/images/M/MV5BNzI4NjE2NTAtYjc4Mi00MzIxLThjNDMtOGJlZGJhOTQ4ZGZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Baozi.jpg/640px-Baozi.jpg",
    filmConnection: "Director Domee Shi drew directly from her Chinese-Canadian upbringing for Turning Red — her mother served as a cultural consultant. The steamed bao buns at Meilin's family table reflect real meals from Domee's childhood in Toronto's Chinese community. 'Bao' in Mandarin can mean 'treasure,' and in the film these pillowy dumplings represent the warmth and intensity of family love.",
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
      { step: 1, title: "Make the Dough", detail: "Combine flour, yeast, sugar, and baking powder. Add oil and warm milk. Mix then knead for 8–10 minutes until smooth and springy. Cover and proof in a warm spot for 1 hour until doubled in size." },
      { step: 2, title: "Mix the Filling", detail: "Combine all pork filling ingredients and mix thoroughly. Refrigerate for 20 minutes. Cold filling is easier to handle when pleating." },
      { step: 3, title: "Shape the Buns", detail: "Punch down dough and divide into 12 equal pieces. Roll each into a circle about 4 inches across, thicker in the center than the edges. Place 1 tablespoon of filling in the center." },
      { step: 4, title: "Pleat and Seal", detail: "Fold the dough up around the filling and pleat the edges together, twisting to seal — aim for at least 8 pleats. Place each bun seam-side up on a square of parchment. Cover and proof 20–30 more minutes." },
      { step: 5, title: "Steam", detail: "Steam over boiling water with 2 inches of space between buns for 15 minutes. Do not lift the lid. After 15 minutes, turn off heat and rest covered for 5 more minutes before opening." }
    ],
    bonusTip: "Leftover bao freeze beautifully — re-steam frozen buns for 8 minutes straight from the freezer and they'll taste freshly made.",
    tags: ["chinese", "dim-sum", "steamed", "pork", "pixar"],
    likes: 287,
    comments: [
      { user: "Mei_Cooks", text: "My mom taught me to make these the same way. Seeing them in Turning Red made me emotional.", time: "1 day ago" },
      { user: "BaoLover", text: "The pleating took practice but even ugly ones taste incredible.", time: "4 days ago" }
    ]
  },

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
    image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Spaghetti_al_pomodoro.jpg/640px-Spaghetti_al_pomodoro.jpg",
    filmConnection: "Peter Clemenza's immortal instruction — 'you start out with a little bit of oil, then you fry some garlic...' — is one of cinema's most famous food monologues, delivered casually while orchestrating a murder in the next room. The Sunday Gravy in Italian-American culture is a sacred tradition passed down through generations. Cooking this sauce represents belonging, family loyalty, and the warm domestic life that masks the violence beneath.",
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
      { step: 1, title: "Brown the Meats", detail: "Heat olive oil in a large Dutch oven over medium-high heat. Brown the sausages on all sides, about 8 minutes. Remove. Brown the beef pieces in the same pot — don't move them for 3 minutes per side. Remove." },
      { step: 2, title: "Fry the Garlic — Clemenza Style", detail: "Reduce heat to medium. Add sliced garlic. Cook slowly until lightly golden, about 3–4 minutes. Watch carefully — burnt garlic will ruin everything." },
      { step: 3, title: "Add Tomato Paste and Wine", detail: "Add tomato paste and cook in the hot oil for 2 minutes. Add the red wine and scrape up all the browned bits. Let the wine reduce by half, about 5 minutes." },
      { step: 4, title: "Simmer Long and Slow", detail: "Add both cans of crushed tomatoes, oregano, chili flakes, salt, and pepper. Return the browned meats to the pot. Bring to a boil, then reduce to the lowest possible simmer. Cover partially. Cook for 2½ to 3 hours, stirring every 20–30 minutes." },
      { step: 5, title: "Finish and Serve", detail: "Remove the beef and shred it back into the sauce. Add fresh basil. Toss with cooked pasta, top with grated Parmesan. The leftover sauce gets better every day." }
    ],
    bonusTip: "The beef short rib bones can be simmered with water, a carrot, celery, and bay leaf for 2 more hours to make a rich bone broth. Strain and freeze.",
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
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Boeuf_bourguignon_2.jpg/640px-Boeuf_bourguignon_2.jpg",
    filmConnection: "Boeuf Bourguignon is the dish at the absolute center of both Julie Powell's and Julia Child's culinary journeys. In the film, Meryl Streep as Julia Child prepares it with hilarious and infectious confidence. For Julia, it was the first dish she truly perfected in Paris in the 1950s. This deeply wine-soaked braised beef taught a generation of Americans that French cooking was achievable at home.",
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
      "1 bouquet garni (thyme, bay leaf, parsley)",
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
      { step: 1, title: "Marinate the Beef", detail: "The night before: combine beef cubes with wine, carrots, onion, garlic, and bouquet garni. Cover and refrigerate overnight. If short on time, skip and add the wine in step 4." },
      { step: 2, title: "Brown the Bacon and Beef", detail: "Pat beef completely dry with paper towels. In a large Dutch oven, render bacon until crispy. Remove. In the bacon fat, brown beef cubes in batches — 3–4 minutes per side until deeply golden." },
      { step: 3, title: "Build the Braise", detail: "In the same pot, sauté onion and carrots until softened. Add garlic, cook 1 minute. Sprinkle flour over and stir. Cook 2 minutes. Add tomato paste and stir." },
      { step: 4, title: "Braise Low and Slow", detail: "Return beef and bacon to the pot. Pour in the entire bottle of wine and enough stock to almost cover. Add bouquet garni. Bring to a simmer then transfer to a 325°F oven for 2½ to 3 hours." },
      { step: 5, title: "Prepare the Garnishes", detail: "Cook pearl onions in butter and sugar with ½ cup water until glazed and golden, about 20 minutes. Sauté mushrooms in butter over high heat until golden." },
      { step: 6, title: "Finish the Dish", detail: "Remove the beef and strain the braising liquid. Boil the liquid until it reduces and coats a spoon. Return beef to the pot, add glazed onions and mushrooms, pour the reduced sauce over everything. Serve with egg noodles or mashed potatoes." }
    ],
    bonusTip: "The braising liquid, refrigerated overnight, will have a solid fat cap you can lift off cleanly — leaving behind pure, glossy jus. Use it on anything.",
    tags: ["french", "beef", "wine", "classic", "dinner-party"],
    likes: 298,
    comments: [
      { user: "JuliaForever", text: "I cried making this. In a good way. Julia would be proud.", time: "1 day ago" },
      { user: "WineNerd", text: "Used a cheap Côtes du Rhône and it was still incredible.", time: "6 days ago" }
    ]
  },

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
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_shortbread_biscuits.jpg/640px-Fresh_made_shortbread_biscuits.jpg",
    filmConnection: "Lembas, the Elvish waybread of Lothlórien, is given to the Fellowship by Galadriel before they set out across Middle-earth. Samwise and Frodo survive their entire journey to Mount Doom primarily on lembas. Tolkien based it partly on ancient Celtic travel breads. Galadriel's gift of lembas marks the last moment of safety before the Fellowship fractures.",
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
      { step: 1, title: "Mix the Dry Ingredients", detail: "Preheat oven to 375°F. Whisk together flour, baking powder, salt, brown sugar, cinnamon, and nutmeg." },
      { step: 2, title: "Cut in the Cold Butter", detail: "Add cold cubed butter to the flour mixture. Press the butter into the flour with your fingertips until it resembles coarse breadcrumbs with pea-sized lumps. Do not overwork." },
      { step: 3, title: "Add the Wet Ingredients", detail: "Whisk together cream, vanilla extract, and honey. Pour into the flour-butter mixture. Stir gently with a fork until a soft dough just comes together." },
      { step: 4, title: "Shape and Score", detail: "Pat gently to ¾ inch thickness. Cut into 3-inch squares. Score a cross pattern on each piece. Place on a parchment-lined baking sheet." },
      { step: 5, title: "Brush and Bake", detail: "Brush each piece with egg yolk. Bake for 18–22 minutes until golden brown at the edges. Cool on a rack. Wrap each piece in parchment." }
    ],
    bonusTip: "Leftover lembas crumbles beautifully over vanilla ice cream or yogurt, or as a topping for baked fruit.",
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
    studio: "Walt Disney Pictures",
    year: 2005,
    category: "fantasy-epic",
    type: "live-action",
    difficulty: "medium",
    emoji: "🍬",
    image: "https://m.media-amazon.com/images/M/MV5BMTUwNTUyMTE5NF5BMl5BanBnXkFtZTcwNDUzNDMzMw@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turkish_delight_-_rosewater.jpg/640px-Turkish_delight_-_rosewater.jpg",
    filmConnection: "The White Witch uses enchanted Turkish Delight to seduce Edmund Pevensie into betraying his siblings. Turkish Delight is a centuries-old confection from the Ottoman Empire, and its use as a symbol of temptation is central to C.S. Lewis's novel. The scene is one of cinema's most perfect metaphors for how something beautiful and sweet can mask something deeply sinister.",
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
      "1 cup powdered sugar for coating"
    ],
    steps: [
      { step: 1, title: "Prepare the Cornstarch Slurry", detail: "Whisk together ½ cup cold water and ¾ cup of the cornstarch until completely smooth. Add cream of tartar and stir. Set aside." },
      { step: 2, title: "Make the Sugar Syrup", detail: "Combine sugar and 1¼ cups water over medium-high heat. Stir until the sugar dissolves, then stop stirring. Cook until the syrup reaches 240°F. Remove from heat immediately." },
      { step: 3, title: "Combine and Cook", detail: "Place the cornstarch saucepan over medium heat and cook, stirring constantly, until thickened to a pale paste. Slowly pour the hot sugar syrup into the paste, whisking the entire time. Reduce heat to low." },
      { step: 4, title: "Low and Slow Simmer", detail: "Continue cooking over low heat, stirring frequently, for approximately 35–40 minutes until pale golden and pulling away from the sides of the pan." },
      { step: 5, title: "Flavour and Set", detail: "Remove from heat. Stir in rose water, vanilla, food colouring, and pistachios. Pour into a greased and dusted 9×9 pan. Smooth the top and dust with more powdered sugar. Cool at least 4 hours." },
      { step: 6, title: "Cut and Coat", detail: "Turn out onto a clean surface. Cut into 1-inch squares with a greased knife. Toss each piece in the powdered sugar coating." }
    ],
    bonusTip: "Store in an airtight container with extra coating sugar. Keeps at room temperature for two weeks and deepens in flavour after the first day.",
    tags: ["british", "ottoman", "confection", "rose water", "candy", "fantasy"],
    likes: 198,
    comments: [
      { user: "NarniaKitchen", text: "Worth every step. So much better than shop-bought.", time: "3 days ago" },
      { user: "EdmundApproves", text: "I now understand why Edmund betrayed his whole family.", time: "1 week ago" }
    ]
  },

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
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Fried_liver_with_onions.jpg/640px-Fried_liver_with_onions.jpg",
    filmConnection: "Hannibal Lecter's chilling description — 'I ate his liver with some fava beans and a nice Chianti' — is one of the most iconic lines in cinema history. The line works because it actually describes a perfectly classical Italian preparation. Liver with fava beans is an ancient Roman dish, and Chianti is the natural Tuscan pairing.",
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
      { step: 1, title: "Prepare the Liver", detail: "Pat liver slices completely dry. Season generously with salt and pepper. If using beef liver, soak in milk for 30 minutes beforehand and rinse — this draws out bitterness." },
      { step: 2, title: "Cook the Fava Beans", detail: "Blanch shelled fresh beans in boiling water 2 minutes, then transfer to ice water. Pop each bean out of its pale skin. For frozen beans, just thaw." },
      { step: 3, title: "Caramelize the Onions", detail: "Heat butter and olive oil in a wide skillet over medium heat. Add onion and cook slowly for 10–12 minutes until deeply golden. Add garlic and sage, cook 2 more minutes. Remove from pan." },
      { step: 4, title: "Sear the Liver", detail: "Increase heat to medium-high. Add a little more butter. When the butter foams, add liver slices. Cook 2 minutes per side — the inside should still be slightly pink." },
      { step: 5, title: "Deglaze and Finish", detail: "Return the onion mixture to the pan. Pour in the Chianti. Let it reduce for 2 minutes. Add fava beans and rosemary. Squeeze lemon juice over everything. Serve over crusty bread." }
    ],
    bonusTip: "The cooking juices from this dish, reduced slightly, make a phenomenal sauce for pasta or crostini.",
    tags: ["offal", "italian", "classic", "film-iconic", "wine"],
    likes: 203,
    comments: [
      { user: "CulinaryLecter", text: "I was nervous but this is genuinely one of the best things I have ever cooked.", time: "2 days ago" },
      { user: "FavaFanatic", text: "Peeling the fava beans is tedious but absolutely worth it.", time: "5 days ago" }
    ]
  },

  {
    id: 15,
    title: "The Royale with Cheese",
    film: "Pulp Fiction",
    studio: "Miramax Films",
    year: 1994,
    category: "thriller",
    type: "live-action",
    difficulty: "easy",
    emoji: "🍔",
    image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Grilled_Cheese_On_Burger.jpg/640px-Grilled_Cheese_On_Burger.jpg",
    filmConnection: "Vincent Vega and Jules Winnfield's debate about the 'Royale with Cheese' — a Quarter Pounder renamed in France due to the metric system — is one of Tarantino's most celebrated pieces of dialogue. Tarantino used something as mundane as a fast-food burger to reveal character and build dread before the violence begins.",
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
      "4 brioche burger buns, toasted",
      "2 tbsp unsalted butter",
      "4 tbsp mayonnaise",
      "2 tbsp yellow mustard",
      "2 tbsp ketchup",
      "4 leaves iceberg lettuce",
      "2 medium tomatoes, sliced",
      "1 small white onion, thinly sliced",
      "8 slices dill pickle"
    ],
    steps: [
      { step: 1, title: "Form the Patties", detail: "Combine beef, salt, pepper, garlic powder, and Worcestershire. Mix gently — do not overwork. Divide into 4 patties about ½ inch thick. Press a thumbprint into the center of each." },
      { step: 2, title: "Toast the Buns", detail: "Melt butter in a cast-iron skillet over medium heat. Place the buns cut-side down and toast for 1–2 minutes until golden." },
      { step: 3, title: "Sear the Patties", detail: "Increase heat to medium-high. Cook the patties for 3–4 minutes without pressing down. Flip once, immediately place a slice of cheese on each. Cook 2–3 more minutes. Cover loosely for the last 30 seconds to melt the cheese." },
      { step: 4, title: "Build the Burger", detail: "Spread mayo on the top bun and mustard-ketchup on the bottom. Layer with pickles, onion, lettuce, and tomato. Add the cheesy patty. Crown with the top bun. Optionally call it a Royale with Cheese." }
    ],
    bonusTip: "Leftover cooked patties crumble beautifully into eggs and cheddar the next morning for a serious breakfast scramble.",
    tags: ["burger", "american", "beef", "classic", "comfort-food"],
    likes: 312,
    comments: [
      { user: "TarantinoKitchen", text: "Made these for movie night. The dialogue hits different when you're eating a burger.", time: "2 days ago" },
      { user: "RoyaleWithCheese", text: "The cast iron sear is non-negotiable. Don't use a non-stick.", time: "4 days ago" }
    ]
  },

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
    image: "https://m.media-amazon.com/images/M/MV5BMjM2NTMxMzUxMl5BMl5BanBnXkFtZTgwOTcyNjU0MjE@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Seville_orange_marmalade.jpg/640px-Seville_orange_marmalade.jpg",
    filmConnection: "Paddington Bear carries marmalade sandwiches in his hat for emergencies — a practice taught to him by his Aunt Lucy in darkest Peru. In the 2014 film, when Paddington first unpacks his emergency sandwich after his journey, it is a quietly moving moment of comfort from home in a frightening new world.",
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
      "8 slices thick white bread",
      "4 tbsp good quality unsalted butter, softened"
    ],
    steps: [
      { step: 1, title: "Make the Marmalade", detail: "Wash oranges and lemon. Peel in wide strips and cut the peel into thin strips. Remove pith from fruit and roughly chop the flesh, catching all juice. Simmer peel, chopped fruit, juice, and water for 30 minutes until peel is very soft." },
      { step: 2, title: "Add Sugar and Set", detail: "Add sugar and stir until dissolved. Bring to a rolling boil and cook without stirring for 10–15 minutes. Test on a cold plate — if it wrinkles when pushed, it's ready. Pour into clean glass jars." },
      { step: 3, title: "Assemble the Sandwich", detail: "Spread softened butter generously on both slices of bread. Spread a thick layer of cooled marmalade on one slice. Press together. Cut diagonally. For the full experience: wrap one in foil and store under your hat." }
    ],
    bonusTip: "Orange marmalade is extraordinary stirred into a pan sauce for roasted duck, spread on warm scones with clotted cream, or mixed into salad dressing with Dijon mustard.",
    tags: ["british", "jam", "sandwich", "baking", "easy"],
    likes: 276,
    comments: [
      { user: "BrownFamily", text: "My kids made this themselves! The marmalade is so much better than store-bought.", time: "2 days ago" },
      { user: "PeruToPaddington", text: "I put the sandwich in my hat to see what it was like. 10/10 experience.", time: "4 days ago" }
    ]
  }

,{
  id: 21,
  title: "Juicy Cheeseburger",
  film: "Pulp Fiction",
  studio: "Miramax Films",
  year: 1994,
  category: "thriller",
  type: "live-action",
  difficulty: "easy",
  emoji: "🍔",
  image: "https://placehold.co/600x400/1a0a08/c93a3a?text=Pulp+Fiction",
  filmConnection: "In one of cinema's most iconic cold opens, hitmen Vincent Vega and Jules Winnfield debate the finer points of European fast food culture before a job, with Jules famously stealing a bite of Brett's 'Tasty Burger.' The scene — built entirely around a hamburger — became a masterclass in Tarantino's ability to build unbearable tension through mundane conversation. The burger itself is never fully seen, yet it remains one of the most talked-about props in film history.",
  servings: 4,
  prepTime: "15 mins",
  cookTime: "15 mins",
  totalTime: "30 mins",
  ingredients: [
    "1½ lbs (680g) ground beef, 80/20 blend",
    "1 tsp kosher salt",
    "1 tsp freshly ground black pepper",
    "1 tsp garlic powder",
    "1 tsp Worcestershire sauce",
    "4 slices sharp American or cheddar cheese",
    "4 brioche burger buns, toasted",
    "4 leaves crisp iceberg lettuce",
    "4 thick slices ripe tomato",
    "4 tbsp mayonnaise",
    "2 tbsp yellow mustard",
    "8 dill pickle chips",
    "½ white onion, thinly sliced",
    "1 tbsp unsalted butter, for toasting buns"
  ],
  steps: [
    { step: 1, title: "Season the Patties", detail: "Divide the ground beef into 4 equal portions of about 6oz each. Handle the meat as little as possible — overworking it makes for a tough burger. Gently form each portion into a loose ball, then press flat into a patty roughly ¾-inch thick. Use your thumb to press a shallow dimple into the centre of each patty to prevent it from doming during cooking. Season generously on both sides with salt, pepper, and garlic powder. Drizzle a few drops of Worcestershire sauce over each patty and press lightly so it adheres." },
    { step: 2, title: "Toast the Buns", detail: "Melt the butter in a large cast-iron skillet or griddle over medium heat. Place the buns cut-side down and toast for 1–2 minutes until golden brown and slightly crisp at the edges. Remove and set aside. A properly toasted bun is the unsung hero of a great burger — it creates a barrier that stops the bun from going soggy under the juices." },
    { step: 3, title: "Cook the Patties", detail: "Increase the heat to medium-high and allow the skillet to get properly hot — a drop of water should evaporate immediately on contact. Place the patties in the skillet and do not press them down. Cook for 3–4 minutes on the first side until a deep brown crust forms and the edges begin to grey about halfway up. Flip once, then immediately lay a slice of cheese over each patty. Cook for a further 2–3 minutes for medium doneness. For a classic diner-style melt, place a small lid or dome over the patties for the last 60 seconds to trap steam and melt the cheese perfectly." },
    { step: 4, title: "Build Your Tasty Burger", detail: "Spread mayonnaise on both the top and bottom bun. Add a thin stripe of yellow mustard to the bottom bun. Layer the bottom bun with lettuce, then the tomato slice, then the sliced raw onion, followed by the hot cheesy patty. Crown with two dill pickle chips and the top bun. Serve immediately — ideally from a paper bag for full authenticity." }
  ],
  bonusTip: "Leftover cooked patties can be crumbled into a pan with diced onions and scrambled eggs the next morning for a hearty breakfast hash.",
  tags: ["american", "burger", "comfort food", "classic", "quick", "tarantino"],
  likes: 0,
  comments: []
}

,{
  id: 22,
  title: "Osso Buco alla Milanese",
  film: "The Godfather",
  studio: "Paramount Pictures",
  year: 1972,
  category: "drama",
  type: "live-action",
  difficulty: "hard",
  emoji: "🍖",
  image: "https://placehold.co/600x400/1a0a08/c93a3a?text=The+Godfather",
  filmConnection: "In The Godfather, Clemenza famously instructs Michael Corleone to 'leave the gun, take the cannoli,' but it is the kitchen scenes that reveal how deeply food is woven into Corleone family life as a symbol of loyalty, warmth, and Sicilian-Italian tradition. Braised veal shanks like Osso Buco represent the northern Italian Sunday table — slow-cooked, generous, and deeply communal — mirroring the family's dual nature of domesticity and power. Food in this film is never incidental; it signals trust, belonging, and the culture the Corleones fiercely protect.",
  servings: 4,
  prepTime: "25 mins",
  cookTime: "2 hrs 15 mins",
  totalTime: "2 hrs 40 mins",
  ingredients: [
    "4 thick-cut veal shanks (osso buco cut, about 1.5 inches thick)",
    "1 cup all-purpose flour, for dredging",
    "Salt and freshly ground black pepper, to taste",
    "4 tbsp unsalted butter",
    "3 tbsp extra virgin olive oil",
    "1 medium yellow onion, finely diced",
    "2 medium carrots, finely diced",
    "2 celery stalks, finely diced",
    "5 garlic cloves, minced",
    "2 tbsp tomato paste",
    "1 cup dry white wine (such as Pinot Grigio)",
    "1.5 cups chicken or veal stock, warm",
    "1 cup canned whole San Marzano tomatoes, crushed by hand",
    "2 sprigs fresh thyme",
    "2 sprigs fresh rosemary",
    "2 bay leaves",
    "Zest of 1 lemon (for gremolata)",
    "Zest of 1 orange (for gremolata)",
    "3 tbsp fresh flat-leaf parsley, finely chopped (for gremolata)",
    "1 small garlic clove, minced (for gremolata)",
    "Saffron risotto alla Milanese, to serve"
  ],
  steps: [
    { step: 1, title: "Prepare the Veal Shanks", detail: "Pat the veal shanks completely dry with paper towels — this is essential for a good sear. Using kitchen twine, tie a piece around the circumference of each shank to hold the meat to the bone during the long braise. Season generously on all sides with salt and freshly ground black pepper, then dredge lightly in flour, shaking off any excess." },
    { step: 2, title: "Sear the Shanks", detail: "In a large Dutch oven or heavy-bottomed braising pot, heat 2 tbsp of olive oil and 2 tbsp of butter over medium-high heat until the butter foams and begins to subside. Working in batches to avoid crowding, sear each veal shank for 3–4 minutes per side until deeply golden brown. Transfer to a plate and set aside. Do not rush this step — the crust is the foundation of the braise's flavor." },
    { step: 3, title: "Build the Soffritto", detail: "Reduce the heat to medium and add the remaining olive oil and butter to the same pot. Add the diced onion, carrot, and celery — the classic Italian soffritto — and cook gently for 8–10 minutes, stirring frequently, until completely softened and beginning to turn golden. Add the minced garlic and cook for another 2 minutes until fragrant. Stir in the tomato paste and cook for 2 minutes more, allowing it to caramelize slightly against the bottom of the pot." },
    { step: 4, title: "Deglaze and Build the Braise", detail: "Pour in the dry white wine and scrape up all the browned bits from the bottom of the pot with a wooden spoon — these are pure flavor. Allow the wine to reduce by half, about 4–5 minutes. Add the warm stock and the crushed San Marzano tomatoes, stirring to combine. Nestle the seared veal shanks back into the pot in a single layer, standing upright so the marrow stays in the bone. Tuck in the thyme, rosemary, and bay leaves around the meat. The liquid should come about two-thirds of the way up the shanks." },
    { step: 5, title: "Braise Low and Slow", detail: "Cover the pot with a tight-fitting lid and transfer to an oven preheated to 325°F (163°C). Braise for 1 hour 45 minutes to 2 hours, turning the shanks gently halfway through, until the meat is completely tender and pulling away from the bone. The marrow should be soft and yielding. If the sauce looks thin after removing the lid, place the pot on the stovetop and reduce over medium heat for 5–10 minutes until it thickens to a rich, glossy consistency." },
    { step: 6, title: "Make the Gremolata", detail: "While the shanks finish braising, combine the lemon zest, orange zest, finely chopped flat-leaf parsley, and the small minced garlic clove in a small bowl. Mix well and set aside. This bright, aromatic condiment is the traditional and non-negotiable Milanese finishing touch — it cuts through the richness of the braise and lifts the entire dish. Do not add it until the moment of serving." },
    { step: 7, title: "Plate and Serve", detail: "Remove the kitchen twine from each veal shank. Place each shank atop a generous spoonful of saffron risotto alla Milanese in a wide, shallow bowl. Ladle the braising sauce and vegetables over and around the meat. Finish with a pinch of gremolata scattered directly over the top. Serve immediately, encouraging diners to scoop out the marrow from the bone with a small spoon — it is considered the finest part of the dish." }
  ],
  bonusTip: "Any leftover braising liquid is a deeply flavored sauce — refrigerate it overnight, skim the fat, and reheat it to toss with fresh pappardelle for a restaurant-quality second meal.",
  tags: ["italian", "braised", "veal", "slow-cook", "winter", "sunday-dinner", "milanese", "classic"],
  likes: 0,
  comments: []
}

];

// Daily recipe rotation
function getTodaysRecipe() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return RECIPES[dayOfYear % RECIPES.length];
}
