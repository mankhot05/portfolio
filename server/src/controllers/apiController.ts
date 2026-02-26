import type { Request, Response } from "express";
import { generateCaption } from "../services/geminiService.js"
import { getRandomImage } from "../services/pexelsService.js";

export async function getImageAndCaption(req: Request, res: Response) {
    try {
        const image = await getRandomImage();
        const caption = await generateCaption(image.query);

        res.json({
            imageUrl: image.url, 
            photohrapher: image.photographer,
            caption: caption
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Something went wrong"})
    }
}