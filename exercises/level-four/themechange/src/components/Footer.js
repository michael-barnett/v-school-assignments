import React, {useContext} from "react"
import {ThemeContext} from "../themeContext"

export default function Footer(){

    const context = useContext(ThemeContext)

    return (
        <div className={`footer--${context.theme}`}>
        <p>Legal Stuff</p>
        <p>Privacy Policy</p>
        <p>Security</p>
        </div>
    )
}