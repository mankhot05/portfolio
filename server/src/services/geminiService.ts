import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function generateCaption(topic: string) : Promise<string> {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
    const prompt = 'Write a short, creative one sentence caption for a photo about ${topic}';
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text;
}