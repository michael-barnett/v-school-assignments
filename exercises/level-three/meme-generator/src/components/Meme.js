import React from "react"
import MemeList from "./MemeList.js"

/* Problems so far:
        If the same meme is submitted without any changes, they will have the same ID.
            Thinking about possibly changing the ID of the meme upon calling 'handleMemeList'
        Edit function may be an issue. Save separate state and check if the state was updated to
        show and then completely remove old state?
*/
export default function Meme() {
    
    React.useEffect(() => {fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    //Generates a random number 0-999 for use in IDs for deletion.
    function getRandomNumber() {return Math.floor(Math.random() * 1000)}
    //
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        id: getRandomNumber()
    })
    
    const [allMemes, setAllMemes] = React.useState()
    //Initialize the empty array to be mapped over to generate the meme list.
    const [memeList, setMemeList] = React.useState([])
    //Mapping over MemeList component to display the MemeList array on the page.
    const memeListElement = memeList.map(memeListMeme => {
        return (<MemeList
            topText={memeListMeme.topText}
            bottomText={memeListMeme.bottomText}
            randomImage={memeListMeme.randomImage}
            key={memeListMeme.id}
            id={memeListMeme.id}
            removeMeme={removeMeme}
        />)})
    //Handle the submit button for the meme list
    function handleMemeList(){
        setMemeList(prevMemeList => ([...prevMemeList, meme]))
    }
    //Checks the ID of the meme being clicked, then returns the array without that meme in it.
    function removeMeme(e){
        setMemeList(prevMemeList => prevMemeList.filter(meme => meme.id != e.target.parentElement.parentElement.id))
    }
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            id: getRandomNumber()
        }))
        
    }
    //handleChange now includes a change to the ID by calling getRandomNumber()
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
            id: getRandomNumber()
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button onClick={handleMemeList}>Add Meme to list</button>
            {memeListElement}
        </main>
    )
}