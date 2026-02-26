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
            <button onClick = {handleClick}>Generate Image</button>
            {imageUrl && <img src={imageUrl} />}
            {caption && <p>{caption}</p>}
        </div>
    ) 
}

export default ApiSection

