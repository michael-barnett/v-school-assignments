import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

export default function Main(){

    const context = useContext(ThemeContext)

    return (
        <div className={`main--${context.theme}`}>
            <h1>Click the button to toggle the theme!</h1>
            <h2>You are currently in {context.theme} mode.</h2>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
        </div>
    )
}