const API_KEY = "**** ENTER YOUR Chat_gpt_API KEY *****"
const submitionicon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector('.images-section')

const getImages = async () => {
    const Options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 4,
            size: "1024x1024"
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", Options)
        const data = await response.json()
        data?.data.forEach(imageObject => {
            const imageContainer = document.createElement("div")
            imageContainer.classList.add("image-container")
            const imageElement = document.createElement("img")
            imageElement.setAttribute("src", imageObject.url)
            imageContainer.append(imageElement)
            imageSection.append(imageContainer)
        })

    } catch (error) {
        console.error(error)
    }
}

// submitionicon.addEventListener('click', getimages)
submitionicon.addEventListener('click', getImages); // Use "getImages" with proper casing.




