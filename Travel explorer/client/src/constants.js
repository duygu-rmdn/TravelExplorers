export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3030/data/tips' : 'http://localhost:3030/data/tips';
export const baseUrlForReviews = 'http://localhost:3030/data/reviews';

export const categories = [
    {
        id: 1,
        name: "Adventure Travel",
        description: "This category includes articles and guides about activities such as hiking, scuba diving, camping, rafting, rock climbing, and more. It also includes destinations that are known for adventure tourism, such as New Zealand, Iceland, and Costa Rica.",
        className: "fa fa-rocket fa-2x text-primary"
    },
    {
        id: 2,
        name: "Cultural Travel",
        description: "This category focuses on exploring local cultures, traditions, and history. It includes articles about festivals, museums, art, cuisine, and architecture. Some examples of destinations that would fit into this category are Japan, Italy, and Peru.",
        className: "fa fa-hotel fa-2x text-primary"
    },
    {
        id: 3,
        name: "Beach Travel",
        description: "This category is all about sun, sand, and sea. It features articles about the best beaches around the world, as well as tips for beach activities such as surfing, snorkeling, and swimming. Popular beach destinations such as Hawaii, the Maldives, and the Caribbean could be included.",
        className: "fa fa-swimmer fa-2x text-primary"
    },
    {
        id: 4,
        name: "Luxury Travel",
        description: "This category caters to travelers who are looking for high-end experiences, such as luxury hotels, fine dining, and exclusive tours. It could include articles about the most luxurious destinations and accommodations, as well as tips for getting the most out of a luxury trip. Destinations such as Dubai, Paris, and the Seychelles could be featured.",
        className: "fa fa-glass-cheers fa-2x text-primary"
    },
    {
        id: 5,
        name: "Budget Travel",
        description: "This category appeals to travelers who are looking to save money while still having a great travel experience. It could include articles about affordable destinations, budget accommodations, and tips for traveling on a shoestring. Popular budget destinations such as Thailand, Mexico, and Portugal could be included.",
        className: "fa fa-money-bill fa-2x text-primary"
    },
    {
        id: 6,
        name: "Eco-Travel",
        description: "This category focuses on sustainable and responsible travel, including articles about eco-friendly accommodations, activities, and destinations. It could also include tips for reducing your environmental impact while traveling. Some examples of eco-friendly destinations are Costa Rica, Norway, and Bhutan.",
        className: "fa fa-spa fa-2x text-primary"
    }
];