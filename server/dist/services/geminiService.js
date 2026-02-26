import fetch from "node-fetch";
export async function generateCaption(topic) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY || ""}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "mistralai/mistral-7b-instruct",
            messages: [
                {
                    role: "user",
                    content: `Write exactly one short creative caption for a photo of ${topic}. Respond with only the caption, nothing else.`
                }
            ]
        })
    });
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error.message);
    }
    return data.choices[0].message.content;
}
//# sourceMappingURL=geminiService.js.map