import React, { useContext } from "react"
import {ThemeContext} from "../themeContext"

export default function Header(){

    const context = useContext(ThemeContext)

    return (
        <div className={`header--${context.theme}`}>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
        </div>
    )
}