import React from "react"

export default function MemeList(props){
    
    function toggleEditing(){
        setIsEditing(!isEditing)
        setEdited(true)
    }
    
    function handleEdit(event) {
        const {name, value} = event.target
        setEditedMeme(prevEditedMeme => ({
            ...prevEditedMeme,
            [name]: value,
        }))
    }
    
    function handleSave(){
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = React.useState(false)
    const [edited, setEdited] = React.useState(false)
    
    const [editedMeme, setEditedMeme] = React.useState({
        topText: "",
        bottomText: "",
        id: props.id
    })
    
    return (
            <div className="meme" id={props.id}>
                {!edited && <div>
                    <img src={props.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{props.topText}</h2>
                    <h2 className="meme--text bottom">{props.bottomText}</h2>
                    <button onClick={props.removeMeme}>Delete Meme</button>
                    <button onClick={toggleEditing}>Edit Meme</button>
                </div>}
                {edited && !isEditing && <div>
                    <img src={props.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{editedMeme.topText}</h2>
                    <h2 className="meme--text bottom">{editedMeme.bottomText}</h2>
                    <button onClick={props.removeMeme}>Delete Meme</button>
                    <button onClick={toggleEditing}>Edit Meme</button>
                </div>}
                {isEditing && <div>
                    <img src={props.randomImage} className="meme--image" />
                    <input 
                    type="text"
                    placeholder={props.topText}
                    className="edit--input top"
                    name="topText"
                    value={editedMeme.topText}
                    onChange={handleEdit}
                    />
                    <input 
                    type="text"
                    placeholder={props.bottomText}
                    className="edit--input bottom"
                    name="bottomText"
                    value={editedMeme.bottomText}
                    onChange={handleEdit}
                    />
                    <button onClick={props.removeMeme}>Delete Meme</button>
                    <button onClick={handleSave}>Save Meme</button>
                </div>}
            </div>
    )
}