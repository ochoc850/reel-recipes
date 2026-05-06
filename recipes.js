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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Onigiri_1.jpg/640px-Onigiri_1.jpg",
    dietary: ["dairy-free", "nut-free"],
    filmConnection: "Early in the film, Chihiro's parents devour mysterious food left for the spirits — transforming them into pigs. These humble rice balls are gifted to Chihiro by Haku, representing the only kindness she receives in the spirit world. Miyazaki insisted every food in the film be based on real Japanese cuisine.",
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
      { step: 1, title: "Cook the Rice", detail: "Wash the rice 3–4 times until water runs clear. Combine with 3¼ cups water, bring to a boil, reduce to lowest heat, cover, cook 15 minutes. Let steam 10 minutes without lifting the lid." },
      { step: 2, title: "Make the Filling", detail: "Mix drained tuna with Japanese mayo, a pinch of salt, and sesame seeds. Mix soy sauce and mirin in a separate bowl for optional glazing." },
      { step: 3, title: "Shape the Onigiri", detail: "Wet hands with salted water. Take ½ cup warm rice, flatten in palm, add filling, fold rice around it. Press firmly into a triangle, rotating as you press." },
      { step: 4, title: "Wrap with Nori", detail: "Wrap a strip of nori around the base. Wrap just before eating so the seaweed stays crispy." },
      { step: 5, title: "Optional: Grill Them", detail: "Brush with soy-mirin mixture and grill on medium heat 2 minutes per side until a golden crust forms." }
    ],
    bonusTip: "Leftover rice makes great fried rice the next day — add soy sauce, a scrambled egg, frozen peas, and sesame oil.",
    tags: ["japanese", "rice", "quick"],
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BNzgwOTg0OGMtMWQ1Zi00MDMzLWEzZWUtMGZmNzk1MzA1ZWNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Weirdest_Full_English_Breakfast.jpg/640px-Weirdest_Full_English_Breakfast.jpg",
    dietary: ["gluten-free-option", "dairy-free-option"],
    filmConnection: "The breakfast scene in Howl's Moving Castle — where Howl conjures the fire spirit Calcifer to fry eggs and crispy bacon in a cast-iron skillet — is one of the most beloved food moments in animation. This recipe recreates that golden-yolked, perfectly crisped morning ritual.",
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
      "1 tomato, halved",
      "½ cup baked beans (optional)"
    ],
    steps: [
      { step: 1, title: "Start the Bacon & Sausage", detail: "Heat a cast-iron skillet over medium heat. Cook bacon 3–4 minutes per side until crispy. Remove. Add sausages and cook 8–10 minutes, turning until browned and cooked through." },
      { step: 2, title: "Grill the Tomato", detail: "Season tomato halves and place cut-side down in the pan. Let char 3 minutes per side." },
      { step: 3, title: "Fry the Eggs", detail: "Add butter and olive oil. Once butter foams, crack in eggs. Spoon hot butter over the yolks for 2 minutes — crispy edges, runny center." },
      { step: 4, title: "Toast the Bread", detail: "Toast sourdough in the same pan. Butter generously while hot." },
      { step: 5, title: "Plate It Up", detail: "Arrange everything on a warm plate. Season with cracked black pepper." }
    ],
    bonusTip: "Save bacon fat in a jar in the fridge — use it to roast vegetables or fry potatoes. Keeps for a month.",
    tags: ["breakfast", "british", "hearty", "quick"],
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ratatouille_%28food%29.jpg/640px-Ratatouille_%28food%29.jpg",
    dietary: ["vegan", "vegetarian", "gluten-free", "dairy-free", "nut-free"],
    filmConnection: "When critic Anton Ego takes his first bite of Remy's ratatouille, he is transported back to his mother's kitchen as a child. The dish is 'confit byaldi,' designed by chef Thomas Keller specifically for the film. Pixar filmed Keller making it as a direct animation reference.",
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
      "Salt and pepper to taste"
    ],
    steps: [
      { step: 1, title: "Make the Piperade Sauce", detail: "Heat olive oil. Sauté onion 8 minutes. Add garlic 1 minute. Add bell peppers 8 minutes. Add crushed tomatoes, thyme, rosemary, salt and pepper. Simmer 15 minutes until thick. Spread across the bottom of the dish." },
      { step: 2, title: "Slice Vegetables Paper-Thin", detail: "Use a mandoline — aim for 1/8 inch thick. The thinner the slices, the more elegant the final dish." },
      { step: 3, title: "Arrange in Overlapping Circles", detail: "Layer vegetable slices in an overlapping pattern — alternating eggplant, zucchini, tomato, yellow squash — spiraling inward." },
      { step: 4, title: "Season and Bake", detail: "Drizzle olive oil and balsamic vinegar over top. Cover with parchment pressed onto vegetables. Bake at 275°F for 1 hr 45 mins to 2 hrs." },
      { step: 5, title: "Serve", detail: "Use a round cutter as a mold, stack overlapping slices upright with warm piperade sauce around them." }
    ],
    bonusTip: "Leftover vegetable trimmings make a perfect summer stock — simmer with water, bay leaf, and peppercorns 30 minutes, strain, freeze.",
    tags: ["french", "vegetarian", "vegan", "provençal"],
    likes: 512,
    comments: [
      { user: "PepperoniDreams", text: "The piperade sauce alone is worth making. I put it on everything now.", time: "1 day ago" },
      { user: "HomeChefMarcel", text: "Took me 3 tries to get the mandoline slicing right but WOW the result.", time: "4 days ago" }
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMjAzMzM5OTYzOV5BMl5BanBnXkFtZTcwNjc5MjYyMg@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Beignets_from_Cafe_Du_Monde%2C_New_Orleans%2C_LA.jpg/640px-Beignets_from_Cafe_Du_Monde%2C_New_Orleans%2C_LA.jpg",
    dietary: ["vegetarian", "nut-free"],
    filmConnection: "Beignets are the beating heart of Tiana's dreams. Charlotte hires her to bake 500 of them for a masquerade ball — the down payment Tiana needs to open her restaurant. Rooted in real New Orleans tradition; Café Du Monde has served them since 1862.",
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
      "Powdered sugar — very generous, to serve",
      "Honey, to drizzle"
    ],
    steps: [
      { step: 1, title: "Bloom the Yeast", detail: "Dissolve yeast in warm water with a pinch of sugar. Let sit 5 minutes until foamy." },
      { step: 2, title: "Mix the Dough", detail: "Combine with remaining sugar, salt, egg, and evaporated milk. Work in flour, then shortening. Knead 5 minutes until smooth." },
      { step: 3, title: "Rest", detail: "Cover and refrigerate at least 1 hour. Overnight is even better." },
      { step: 4, title: "Roll and Cut", detail: "Roll dough to ¼-inch thickness. Cut into 2-inch squares." },
      { step: 5, title: "Fry", detail: "Heat 3 inches of oil to 360°F. Fry in batches 2–3 minutes per side until deep golden. Drain on paper towels." },
      { step: 6, title: "Finish Like Tiana", detail: "Bury in a mountain of powdered sugar. Drizzle with warm honey. Serve immediately." }
    ],
    bonusTip: "Dough keeps refrigerated for 2 days. Beignets are best eaten within minutes of frying.",
    tags: ["new-orleans", "fried", "sweet", "breakfast"],
    likes: 421,
    comments: [
      { user: "TianaFan", text: "Made these for Mardi Gras and my whole family lost their minds.", time: "1 day ago" },
      { user: "NolaKitchen", text: "As a New Orleans native — this is the real deal.", time: "3 days ago" }
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMjAzMzM5OTYzOV5BMl5BanBnXkFtZTcwNjc5MjYyMg@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Gumbo_-_stew.jpg/640px-Gumbo_-_stew.jpg",
    dietary: ["gluten-free", "dairy-free", "nut-free"],
    filmConnection: "Tiana's gumbo grounds the entire emotional arc of the film. She learned to cook it with her father, who said: 'You know the thing about good food? It brings folks together from all walks of life.' The dish blends African, Native American, Caribbean, and French influences.",
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
      "12 oz andouille sausage, sliced",
      "1 lb medium shrimp, peeled and deveined",
      "6 cups chicken stock",
      "2 bay leaves",
      "1 tsp filé powder",
      "Cajun seasoning to taste",
      "Cooked white rice, to serve",
      "Sliced scallions and hot sauce, to garnish"
    ],
    steps: [
      { step: 1, title: "Make the Dark Roux", detail: "Heat oil in a large Dutch oven over medium heat. Whisk in flour. Stir constantly 20–25 minutes until dark chocolate colored. Do not walk away." },
      { step: 2, title: "Add the Holy Trinity", detail: "Add onion, celery, and bell pepper. Stir and cook 5 minutes. Add garlic and cook 1 more minute." },
      { step: 3, title: "Build the Base", detail: "Add andouille sausage and cook 3 minutes. Pour in chicken stock gradually, whisking. Add bay leaves and Cajun seasoning. Bring to a boil then reduce to a simmer." },
      { step: 4, title: "Simmer", detail: "Simmer uncovered 45 minutes, skimming fat. Taste and adjust seasoning." },
      { step: 5, title: "Add Shrimp and Finish", detail: "Add shrimp in the last 5 minutes. Remove from heat when they curl and turn pink. Stir in filé powder. Discard bay leaves." },
      { step: 6, title: "Serve", detail: "Ladle over white rice. Garnish with scallions and hot sauce." }
    ],
    bonusTip: "Gumbo gets better overnight. Make ahead and add shrimp fresh when reheating.",
    tags: ["new-orleans", "cajun", "seafood", "stew"],
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BNzI4NjE2NTAtYjc4Mi00MzIxLThjNDMtOGJlZGJhOTQ4ZGZhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Baozi.jpg/640px-Baozi.jpg",
    dietary: ["dairy-free", "nut-free"],
    filmConnection: "Director Domee Shi drew directly from her Chinese-Canadian upbringing for Turning Red — her mother served as a cultural consultant. The steamed bao buns at Meilin's family table reflect real meals from Domee's childhood in Toronto's Chinese community.",
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
      { step: 1, title: "Make the Dough", detail: "Combine flour, yeast, sugar, and baking powder. Add oil and warm milk. Knead 8–10 minutes until smooth. Cover and proof 1 hour until doubled." },
      { step: 2, title: "Mix the Filling", detail: "Combine all pork filling ingredients. Mix thoroughly. Refrigerate 20 minutes." },
      { step: 3, title: "Shape the Buns", detail: "Divide dough into 12 pieces. Roll each into a 4-inch circle. Place 1 tablespoon filling in center." },
      { step: 4, title: "Pleat and Seal", detail: "Fold dough up around filling and pleat edges, twisting to seal. Place on parchment squares. Proof 20–30 more minutes." },
      { step: 5, title: "Steam", detail: "Steam over boiling water for 15 minutes. Do not lift the lid. Rest covered 5 minutes before opening." }
    ],
    bonusTip: "Bao freeze beautifully — re-steam frozen buns for 8 minutes straight from frozen.",
    tags: ["chinese", "steamed", "pork"],
    likes: 287,
    comments: [
      { user: "Mei_Cooks", text: "My mom taught me to make these the same way. Seeing them in Turning Red made me emotional.", time: "1 day ago" },
      { user: "BaoLover", text: "Even ugly ones taste incredible.", time: "4 days ago" }
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Spaghetti_al_pomodoro.jpg/640px-Spaghetti_al_pomodoro.jpg",
    dietary: ["dairy-free", "nut-free"],
    filmConnection: "Peter Clemenza's immortal instruction — 'you start out with a little bit of oil, then you fry some garlic...' — is one of cinema's most famous food monologues, delivered casually while orchestrating a murder. The Sunday Gravy is a sacred Italian-American tradition passed down through generations.",
    servings: 8,
    prepTime: "20 mins",
    cookTime: "3 hrs",
    totalTime: "3 hrs 20 mins",
    ingredients: [
      "¼ cup olive oil",
      "6 garlic cloves, sliced thin",
      "1 lb Italian pork sausages",
      "1 lb beef short rib",
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
      { step: 1, title: "Brown the Meats", detail: "Heat olive oil in a large Dutch oven. Brown sausages all over, about 8 minutes. Remove. Brown beef pieces 3 minutes per side until dark and crusted. Remove." },
      { step: 2, title: "Fry the Garlic — Clemenza Style", detail: "Reduce heat to medium. Add sliced garlic. Cook slowly until lightly golden, 3–4 minutes. Watch carefully — burnt garlic ruins everything." },
      { step: 3, title: "Add Tomato Paste and Wine", detail: "Add tomato paste, cook 2 minutes. Add wine and scrape up all browned bits. Let reduce by half, about 5 minutes." },
      { step: 4, title: "Simmer Long and Slow", detail: "Add tomatoes, oregano, chili flakes, salt, pepper. Return meats to pot. Bring to a boil then reduce to the lowest simmer. Cover partially. Cook 2½ to 3 hours, stirring every 20–30 minutes." },
      { step: 5, title: "Finish and Serve", detail: "Shred beef back into the sauce. Add fresh basil. Toss with pasta, top with Parmesan." }
    ],
    bonusTip: "The short rib bones can be simmered another 2 hours for a rich bone broth. Strain and freeze.",
    tags: ["italian", "pasta", "slow-cook", "hearty"],
    likes: 634,
    comments: [
      { user: "SicilianSunday", text: "This is my nonna's recipe almost exactly. Clemenza knew what he was doing.", time: "2 days ago" },
      { user: "MobsterMike", text: "I now make this every single Sunday. It is the law in my house.", time: "3 days ago" }
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMjA4MzYyMjkxNF5BMl5BanBnXkFtZTcwNzM0NTIyMw@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Boeuf_bourguignon_2.jpg/640px-Boeuf_bourguignon_2.jpg",
    dietary: ["gluten-free", "nut-free"],
    filmConnection: "Boeuf Bourguignon sits at the absolute center of both Julie Powell's and Julia Child's culinary journeys. Meryl Streep as Julia Child prepares it with hilarious confidence — the recipe that taught America French cooking was achievable at home.",
    servings: 6,
    prepTime: "45 mins",
    cookTime: "3 hrs",
    totalTime: "3 hrs 45 mins",
    ingredients: [
      "3 lbs beef chuck, cut into 2-inch cubes",
      "6 oz thick-cut bacon, cut into lardons",
      "1 bottle dry red Burgundy wine",
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
      { step: 1, title: "Marinate the Beef", detail: "The night before: combine beef with wine, carrots, onion, garlic, and bouquet garni. Refrigerate overnight. Skip if short on time." },
      { step: 2, title: "Brown the Bacon and Beef", detail: "Pat beef dry. Render bacon until crispy, remove. Brown beef in batches in bacon fat — 3–4 minutes per side until deeply golden." },
      { step: 3, title: "Build the Braise", detail: "Sauté onion and carrots, add garlic. Sprinkle flour, stir 2 minutes. Add tomato paste." },
      { step: 4, title: "Braise Low and Slow", detail: "Return beef and bacon. Add wine and stock to almost cover. Add bouquet garni. Bring to a simmer then braise in a 325°F oven for 2½ to 3 hours." },
      { step: 5, title: "Prepare the Garnishes", detail: "Cook pearl onions in butter and sugar with ½ cup water until glazed, about 20 minutes. Sauté mushrooms in butter over high heat until golden." },
      { step: 6, title: "Finish the Dish", detail: "Strain braising liquid and boil until it coats a spoon. Return beef, add glazed onions and mushrooms, pour reduced sauce over everything." }
    ],
    bonusTip: "Refrigerate the braising liquid overnight — the fat cap lifts off cleanly leaving pure, glossy jus.",
    tags: ["french", "beef", "wine", "classic"],
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_shortbread_biscuits.jpg/640px-Fresh_made_shortbread_biscuits.jpg",
    dietary: ["vegetarian", "nut-free"],
    filmConnection: "Lembas, the Elvish waybread of Lothlórien, is given to the Fellowship by Galadriel before they set out across Middle-earth. Samwise and Frodo survive their entire journey to Mount Doom primarily on lembas. Tolkien based it on ancient Celtic travel breads.",
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
      { step: 2, title: "Cut in the Cold Butter", detail: "Press cold cubed butter into the flour with fingertips until it resembles coarse breadcrumbs with pea-sized lumps." },
      { step: 3, title: "Add the Wet Ingredients", detail: "Whisk together cream, vanilla, and honey. Stir gently into flour-butter mix until a soft dough just comes together." },
      { step: 4, title: "Shape and Score", detail: "Pat to ¾ inch thickness. Cut into 3-inch squares. Score a cross on each piece. Place on parchment-lined baking sheet." },
      { step: 5, title: "Brush and Bake", detail: "Brush with egg yolk. Bake 18–22 minutes until golden brown at edges. Wrap each piece in parchment." }
    ],
    bonusTip: "Leftover lembas crumbles beautifully over vanilla ice cream or as a topping for baked fruit.",
    tags: ["baking", "sweet", "fantasy"],
    likes: 441,
    comments: [
      { user: "TolkienKitchen", text: "Wrapped these in leaves from my garden. Perfect for a LOTR marathon.", time: "4 days ago" },
      { user: "Hobbit_Eats", text: "One small piece really does fill you up! Probably the butter though lol", time: "1 week ago" }
    ]
  },

  {
    id: 16,
    title: "Turkish Delight",
    film: "The Chronicles of Narnia",
    studio: "Walt Disney Pictures",
    year: 2005,
    category: "fantasy-epic",
    type: "live-action",
    difficulty: "medium",
    emoji: "🍬",
    image: "https://m.media-amazon.com/images/M/MV5BMTUwNTUyMTE5NF5BMl5BanBnXkFtZTcwNDUzNDMzMw@@._V1_FMjpg_UX1000_.jpg",
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMTUwNTUyMTE5NF5BMl5BanBnXkFtZTcwNDUzNDMzMw@@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Turkish_delight_-_rosewater.jpg/640px-Turkish_delight_-_rosewater.jpg",
    dietary: ["vegan", "vegetarian", "gluten-free", "dairy-free"],
    filmConnection: "The White Witch uses enchanted Turkish Delight to seduce Edmund Pevensie into betraying his siblings. Turkish Delight is a centuries-old Ottoman confection, and its use as a symbol of temptation is central to C.S. Lewis's novel.",
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
      { step: 1, title: "Prepare the Cornstarch Slurry", detail: "Whisk together ½ cup cold water and ¾ cup cornstarch until smooth. Add cream of tartar. Set aside." },
      { step: 2, title: "Make the Sugar Syrup", detail: "Combine sugar and 1¼ cups water. Cook without stirring until it reaches 240°F. Remove from heat immediately." },
      { step: 3, title: "Combine and Cook", detail: "Cook cornstarch slurry over medium heat until thickened to a paste. Slowly pour in hot sugar syrup, whisking constantly. Reduce heat to low." },
      { step: 4, title: "Low and Slow Simmer", detail: "Stir frequently for 35–40 minutes until pale golden and pulling away from the pan sides." },
      { step: 5, title: "Flavour, Set and Cut", detail: "Stir in rose water, vanilla, food colouring, and pistachios. Pour into a greased and sugar-dusted 9x9 pan. Set 4+ hours. Cut into 1-inch squares and coat in powdered sugar." }
    ],
    bonusTip: "Keeps in an airtight container for two weeks. Flavour deepens beautifully after the first day.",
    tags: ["candy", "confection", "fantasy"],
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Fried_liver_with_onions.jpg/640px-Fried_liver_with_onions.jpg",
    dietary: ["gluten-free", "dairy-free", "nut-free"],
    filmConnection: "Hannibal Lecter's chilling description — 'I ate his liver with some fava beans and a nice Chianti' — is one of cinema's most iconic lines. It actually describes a perfectly classical Italian preparation. Liver with fava beans is an ancient Roman dish.",
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
      "Salt and black pepper"
    ],
    steps: [
      { step: 1, title: "Prepare the Liver", detail: "Pat liver completely dry. Season with salt and pepper. For beef liver, soak in milk 30 minutes, then rinse to reduce bitterness." },
      { step: 2, title: "Cook the Fava Beans", detail: "Blanch shelled fresh beans 2 minutes in boiling water, transfer to ice water, pop out of pale skins. For frozen beans, just thaw." },
      { step: 3, title: "Caramelize the Onions", detail: "Heat butter and olive oil in a wide skillet. Cook onion slowly 10–12 minutes until deeply golden. Add garlic and sage, cook 2 more minutes. Remove from pan." },
      { step: 4, title: "Sear the Liver", detail: "Increase heat to medium-high. Add a little more butter. Cook liver 2 minutes per side — inside should be slightly pink." },
      { step: 5, title: "Deglaze and Finish", detail: "Return onion mixture to pan. Add Chianti. Reduce 2 minutes. Add fava beans and rosemary. Squeeze lemon juice over everything." }
    ],
    bonusTip: "The reduced cooking juices make a phenomenal sauce for pasta or crostini.",
    tags: ["italian", "classic", "wine"],
    likes: 203,
    comments: [
      { user: "CulinaryLecter", text: "I was nervous but this is one of the best things I have ever cooked.", time: "2 days ago" },
      { user: "FavaFanatic", text: "Peeling the fava beans is tedious but worth it.", time: "5 days ago" }
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Grilled_Cheese_On_Burger.jpg/640px-Grilled_Cheese_On_Burger.jpg",
    dietary: ["nut-free"],
    filmConnection: "Vincent Vega and Jules Winnfield's debate about the 'Royale with Cheese' — a Quarter Pounder renamed in France due to the metric system — is Tarantino at his finest. He used something as mundane as a fast-food burger to reveal character and build dread before the violence begins.",
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
      { step: 1, title: "Form the Patties", detail: "Mix beef, salt, pepper, garlic powder, and Worcestershire gently. Divide into 4 patties, ½ inch thick. Press a thumbprint into the center of each." },
      { step: 2, title: "Toast the Buns", detail: "Melt butter in a cast-iron skillet. Toast buns cut-side down 1–2 minutes until golden." },
      { step: 3, title: "Sear the Patties", detail: "Cook patties 3–4 minutes without pressing down. Flip, add cheese, cover loosely 30 seconds to melt. Cook 2–3 more minutes for medium." },
      { step: 4, title: "Build the Burger", detail: "Spread mayo on top bun, mustard-ketchup on bottom. Layer pickles, onion, lettuce, tomato. Add cheesy patty. Crown with top bun." }
    ],
    bonusTip: "Leftover cooked patties crumble into eggs and cheddar the next morning for a great breakfast scramble.",
    tags: ["american", "beef", "quick"],
    likes: 312,
    comments: [
      { user: "TarantinoKitchen", text: "The dialogue hits different when you're eating a burger.", time: "2 days ago" },
      { user: "RoyaleWithCheese", text: "The cast iron sear is non-negotiable.", time: "4 days ago" }
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
    movieSceneImage: "https://m.media-amazon.com/images/M/MV5BMjM2NTMxMzUxMl5BMl5BanBnXkFtZTgwOTcyNjU0MjE@._V1_FMjpg_UX1000_.jpg",
    foodImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Seville_orange_marmalade.jpg/640px-Seville_orange_marmalade.jpg",
    dietary: ["vegetarian", "nut-free"],
    filmConnection: "Paddington Bear carries marmalade sandwiches in his hat for emergencies — taught to him by Aunt Lucy in darkest Peru. When Paddington unpacks his emergency sandwich after arriving in London, it is a quietly moving moment of comfort from home in a frightening new world.",
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
      { step: 1, title: "Make the Marmalade", detail: "Peel oranges and lemon, cut peel into thin strips. Chop flesh catching all juice. Simmer peel, fruit, juice, and water 30 minutes until peel is very soft." },
      { step: 2, title: "Add Sugar and Set", detail: "Add sugar and stir until dissolved. Boil without stirring 10–15 minutes. Test on a cold plate — if it wrinkles, it's ready. Pour into jars." },
      { step: 3, title: "Assemble", detail: "Butter both slices generously. Spread a thick layer of cooled marmalade. Press together. Cut diagonally. Store one under your hat." }
    ],
    bonusTip: "Marmalade is excellent stirred into pan sauces for roasted duck, spread on warm scones with clotted cream, or mixed into salad dressing with Dijon mustard.",
    tags: ["british", "sweet", "easy"],
    likes: 276,
    comments: [
      { user: "BrownFamily", text: "My kids made this themselves! The marmalade is so much better than store-bought.", time: "2 days ago" },
      { user: "PeruToPaddington", text: "I put the sandwich in my hat. 10/10 experience.", time: "4 days ago" }
    ]
  }

];

function getTodaysRecipe() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return RECIPES[dayOfYear % RECIPES.length];
}
