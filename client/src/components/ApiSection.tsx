import {useState} from "react"

function ApiSection() {
    const [imageUrl, setImageUrl] = useState<string>("")
    const [caption, setCaption] = useState<string>("")

    async function handleClick() {
        const response = await fetch("https://portfolio-backend-4a0m.onrender.com/")
        const data = await response.json()
        setImageUrl(data.imageUrl)
        setCaption(data.caption)
    }
    

    return (
        <div>
            <button
                onClick={handleClick}
                className="mt-4 px-4 py-2 border border-black text-black bg-transparent rounded"
            >
                Generate Image
            </button>
            {imageUrl && <img src={imageUrl} />}
            {caption && <p className="mt-2 text-black">{caption}</p>}
        </div>
    )
}

export default ApiSection

