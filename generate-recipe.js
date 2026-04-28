const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const client = new Anthropic();

async function generateRecipe() {
  const existingRecipes = fs.readFileSync('recipes.js', 'utf8');
  
  const idMatch = existingRecipes.match(/id:\s*(\d+)/g);
  const highestId = idMatch ? Math.max(...idMatch.map(m => parseInt(m.replace('id:', '').trim()))) : 9;
  const nextId = highestId + 1;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    messages: [{
      role: "user",
      content: `You are adding a new recipe to a film recipe website called Reel Recipes. Generate ONE new recipe object for a famous food moment from a well-known film. Alternate between animated and live-action films. Be historically and culturally accurate.

The next recipe id is: ${nextId}

Return ONLY a valid JavaScript object starting with a comma, like this exact format:
,{
  id: ${nextId},
  title: "Name of Dish",
  film: "Film Title",
  studio: "Studio Name",
  year: 1994,
  category: "disney-pixar",
  type: "animated",
  difficulty: "easy",
  emoji: "🍜",
  image: "https://placehold.co/600x400/1a1208/c9943a?text=Film+Title",
  filmConnection: "2-3 sentences explaining the dish's connection to the film, its cultural significance, and why the moment mattered.",
  servings: 4,
  prepTime: "15 mins",
  cookTime: "30 mins",
  totalTime: "45 mins",
  ingredients: [
    "1 cup ingredient one",
    "2 tbsp ingredient two"
  ],
  steps: [
    { step: 1, title: "Step Title", detail: "Full detailed instruction." },
    { step: 2, title: "Step Title", detail: "Full detailed instruction." },
    { step: 3, title: "Step Title", detail: "Full detailed instruction." }
  ],
  bonusTip: "One sentence on how to reuse leftovers or byproducts.",
  tags: ["tag1", "tag2"],
  likes: 0,
  comments: []
}

Category must be one of: studio-ghibli, disney-pixar, dreamworks, other-animated, italian-classic, fantasy-epic, drama, thriller
Type must be: animated OR live-action
Difficulty must be: easy, medium, OR hard`
    }]
  });

  const newRecipeCode = message.content[0].text.trim();
  
  const updatedFile = existingRecipes.replace(
    /\n\];\n\n\/\/ Daily recipe/,
    `\n${newRecipeCode}\n\n];\n\n// Daily recipe`
  );
  
  fs.writeFileSync('recipes.js', updatedFile);
  console.log(`Recipe ${nextId} added successfully!`);
}

generateRecipe().catch(console.error);
