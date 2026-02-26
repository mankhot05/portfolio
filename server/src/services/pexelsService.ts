import fetch from "node-fetch";

interface PexelsPhoto {
    url: string;
    photographer: string;
    query: string;
}

const queries: string[] = [
    "nature", "space", "ocean", "mountains", "city", 
    "animals", "forest", "sunset", "architecture", "food"
]

export async function getRandomImage(): Promise<PexelsPhoto> {
    const query = queries[Math.floor(Math.random() * queries.length)];
    const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
            headers: {
                Authorization: process.env.PEXELS_API_KEY || ""
            }
        }
    );

    const data = await response.json() as any;

    return {
        url: data.photos[0].src.large, 
        photographer: data.photos[0].photographer,
        query: query
    }
}