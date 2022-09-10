import React, { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export default function Article(props){
    const {saveArticle} = useContext(ThemeContext)
    const {link, source, description, title} = props
    const [saved, setSaved] = React.useState([])


    return (
        <div className="article--subcontainer">
            <img src='../images/heart_plus_FILL0_wght400_GRAD0_opsz48 (1).svg' alt="like button" className="heart" onClick={() => saveArticle(title, description, link, source)}/>
            <p className="article--title"><a href={link} target="_blank" >{title}</a></p>
            <p className="article--source">from {source}</p>
            <p className="article--description">{description}</p>
        </div>
    )
}