const genres = [
    "Action", "Adventure", "RPG", "Strategy", "Simulation", "Puzzle", "Horror", "Survival", "Platformer", "Shooter",
    "Fighting", "Stealth", "Rhythm", "Metroidvania", "Roguelike", "Tower Defense", "Card Game", "Battle Royale", "MMORPG", "MOBA",
    "Sports", "Racing", "Educational", "Sandbox", "Open World", "Visual Novel", "Interactive Fiction", "Hack and Slash", "JRPG", "CRPG",
    "Tactical RPG", "Grand Strategy", "4X", "Real-Time Strategy", "Turn-Based Strategy", "City-Builder", "God Game", "Life Simulation",
    "Farming Sim", "Dating Sim", "Immersive Sim", "Stealth Action", "Action-Adventure", "Survival Horror", "Psychological Horror",
    "Arcade", "Pinball", "Board Game", "Trivia", "Party Game", "Music", "Rhythm Action"
];
const themes = [
    "Fantasy", "Sci-Fi", "Cyberpunk", "Steampunk", "Post-Apocalyptic", "Historical", "Mythology", "Noir", "Comedy", "Dystopian",
    "Utopian", "Space Opera", "Wild West", "Pirates", "Zombies", "Vampires", "Werewolves", "Superheroes", "Mechs", "Kaiju",
    "Military", "Espionage", "Political Thriller", "Crime", "Heist", "Martial Arts", "Samurai", "Ninja", "Viking", "Gladiator",
    "Ancient Egypt", "Ancient Rome", "Ancient Greece", "Medieval", "Renaissance", "Victorian Era", "World War I", "World War II",
    "Cold War", "Modern Warfare", "Future Warfare", "Exploration", "Discovery", "Colonization", "Alien Invasion", "First Contact",
    "Time Travel", "Parallel Universe", "Virtual Reality", "Artificial Intelligence", "Transhumanism", "Biopunk"
];
const mechanics = [
    "Crafting", "Base Building", "Character Customization", "Dialogue Trees", "Moral Choices", "Time Manipulation", "Physics-Based Puzzles",
    "Procedural Generation", "Deck Building", "Resource Management", "Stealth Kills", "Combo System", "Quick Time Events", "Skill Trees",
    "Pet System", "Farming", "Trading", "Exploration", "Cover System", "Permadeath", "Multiple Endings", "New Game+", "Branching Narrative",
    "Reputation System", "Faction System", "Dynamic Weather", "Day/Night Cycle", "Survival Elements", "Hunger/Thirst", "Stamina Management",
    "Inventory Management", "Loot System", "Leveling System", "Class System", "Dual Wielding", "Mounted Combat", "Naval Combat",
    "Aerial Combat", "Vehicle Combat", "Destructible Environments", "Terraforming", "Puzzle Solving", "Riddle Solving", "Lockpicking",
    "Hacking", "Crafting Recipes", "Alchemy", "Enchanting", "Socketing", "Taming", "Breeding"
];
const artStyles = [
    "Pixel Art", "Voxel", "Low Poly", "Cel-Shaded", "Photorealistic", "Hand-Drawn", "Minimalist", "Impressionistic", "Surrealist",
    "Gothic", "Art Nouveau", "Art Deco", "Chibi", "Anime/Manga", "Cartoonish", "Claymation", "Watercolor", "Sketch", "Glitch Art",
    "Synthwave", "Retro", "8-bit", "16-bit", "Vector Art", "Geometric", "Abstract", "Psychedelic", "Noir Film", "Silent Film",
    "Sepia Tone", "Black and White", "Monochromatic", "ASCII Art", "Collage", "Photobashing", "Matte Painting", "Concept Art",
    "Graffiti", "Street Art", "Ukiyo-e", "Baroque", "Rococo", "Neoclassical", "Romanticism", "Realism", "Modernism", "Postmodernism"
];
const perspectives = [
    "First-Person", "Third-Person", "Top-Down", "Side-Scroller", "Isometric", "2.5D", "Fixed Camera", "Over-the-Shoulder", "VR", "AR"
];
const templates = [
    "A {perspective} {genre} game set in a {theme} world. The main mechanics are {mechanic1} and {mechanic2}, presented in a {artStyle} style.",
    "Imagine a {genre} with {theme} elements. You play in {perspective} view, focusing on {mechanic1} and {mechanic2}. The visuals are {artStyle}.",
    "This is a {perspective} {theme} {genre}. Your goal is to master {mechanic1} and {mechanic2}. It has a unique {artStyle} look.",
    "In a world of {theme}, you are a {genre} hero. The game is a {perspective} adventure with {mechanic1} and {mechanic2} at its core. Art style: {artStyle}.",
    "A {artStyle} {genre} game. It's a {perspective} experience in a {theme} setting, where you'll need to use {mechanic1} and {mechanic2} to succeed.",
    "What if you combined a {genre} with {theme}? A {perspective} game with a focus on {mechanic1} and {mechanic2}, all in a {artStyle} wrapper.",
    "A {mechanic1}-heavy {genre} with a {theme} twist. The game is {perspective} and features {mechanic2}, with a {artStyle} aesthetic.",
    "Explore a {theme} universe in this {perspective} {genre}. The gameplay revolves around {mechanic1} and {mechanic2}, with a stunning {artStyle} design.",
    "This {genre} challenges you with {mechanic1} and {mechanic2}. It's a {perspective} game in a {theme} world, with a {artStyle} visual style.",
    "A narrative-driven {genre} with a {theme} setting. The game is {perspective} and your abilities include {mechanic1} and {mechanic2}. The art is {artStyle}."
];
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
export function generateGameIdea() {
    const mechanic1 = getRandomElement(mechanics);
    const mechanic2 = getRandomElement(mechanics.filter(m => m !== mechanic1));
    const idea = {
        genre: getRandomElement(genres),
        theme: getRandomElement(themes),
        mechanic1: mechanic1,
        mechanic2: mechanic2,
        artStyle: getRandomElement(artStyles),
        perspective: getRandomElement(perspectives)
    };
    const template = getRandomElement(templates);
    return template
        .replace('{perspective}', idea.perspective)
        .replace('{genre}', idea.genre)
        .replace('{theme}', idea.theme)
        .replace('{mechanic1}', idea.mechanic1)
        .replace('{mechanic2}', idea.mechanic2)
        .replace('{artStyle}', idea.artStyle);
}
