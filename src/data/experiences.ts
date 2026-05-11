import type { Experience, ExperienceCategory } from "@/types/experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Bangkok, Thailand",
  "Dubrovnik, Croatia",
  "Kyoto, Japan",
  "Lisbon, Portugal",
  "Marrakech, Morocco",
  "Reykjavik, Iceland",
  "Cusco, Peru",
  "Cape Town, South Africa",
  "Vancouver, Canada",
  "Queenstown, New Zealand",
  "Barcelona, Spain",
  "Bali, Indonesia",
  "Athens, Greece",
  "Mexico City, Mexico",
  "Seoul, South Korea",
  "Florence, Italy",
  "Hanoi, Vietnam",
  "Zermatt, Switzerland",
  "Cartagena, Colombia",
  "Copenhagen, Denmark",
];

const concepts = [
  "Hidden Market Breakfast Walk",
  "Sunset Sailing Route",
  "Ceramic Studio With Local Artists",
  "Mountain Ridge Photography Hike",
  "Temple Gardens Mindfulness Session",
  "Street Food After Dark",
  "Coastal Kayak Expedition",
  "Old Town Storytelling Tour",
  "Forest Bathing and Herbal Tea",
  "Family Vineyard Table",
  "Glacier Lagoon Day Trek",
  "Rooftop Cooking Lab",
  "Island Bike Discovery",
  "Wildflower Valley Picnic",
  "Design District Walk",
  "Ancient Ruins Sunrise Visit",
  "Local Jazz and Supper Crawl",
  "Thermal Springs Reset",
  "River Delta Wildlife Cruise",
  "Artisan Chocolate Workshop",
];

const descriptions = [
  "A small-group experience designed for curious travelers who want a richer sense of place, guided by hosts with deep local knowledge.",
  "Blend scenic movement, cultural context, and relaxed pacing in an itinerary that feels polished without becoming predictable.",
  "Meet makers, taste regional favorites, and leave with practical recommendations for the rest of your stay.",
  "A photogenic route with thoughtful stops, flexible timing, and enough quiet moments to actually enjoy the destination.",
  "An immersive half-day built around local rituals, seasonal ingredients, and memorable conversations.",
];

const imageIds = [
  1011, 1015, 1016, 1024, 1025, 1036, 1039, 1040, 1041, 1043,
  1050, 1051, 1052, 1056, 1061, 1062, 1065, 1067, 1074, 1080,
];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const idNumber = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const concept = concepts[index % concepts.length];
  const price = 45 + ((index * 17) % 260);
  const rating = Number((4.2 + ((index * 7) % 8) / 10).toFixed(1));
  const imageId = imageIds[index % imageIds.length];

  return {
    id: `exp-${String(idNumber).padStart(3, "0")}`,
    title: `${concept} in ${destination.split(",")[0]}`,
    description: descriptions[index % descriptions.length],
    category,
    destination,
    price,
    rating,
    imageUrl: `https://picsum.photos/id/${imageId}/900/700`,
    duration: `${2 + (index % 6)} hours`,
    host: ["Lea", "Mateo", "Aiko", "Samira", "Noah"][index % 5],
    highlights: [
      `${category} led by a local host`,
      `Small group in ${destination.split(",")[0]}`,
      "Flexible cancellation and instant confirmation",
    ],
  };
});

export const categoriesList = categories;
export const destinationsList = destinations;
