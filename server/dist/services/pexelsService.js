import fetch from "node-fetch";
const queries = [
    "nature", "space", "ocean", "mountains", "city",
    "animals", "forest", "sunset", "architecture", "food"
];
export async function getRandomImage() {
    const query = queries[Math.floor(Math.random() * queries.length)];
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            Authorization: process.env.PEXELS_API_KEY || ""
        }
    });
    const data = await response.json();
    return {
        url: data.photos[0].src.large,
        photographer: data.photos[0].photographer,
        query: query
    };
}
//# sourceMappingURL=pexelsService.js.map