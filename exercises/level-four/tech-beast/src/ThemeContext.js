import React, { useState, createContext, useEffect } from "react"
const axios = require("axios")

const ThemeContext = createContext()
function ThemeContextProvider(props){
    const data = require('./data.json')
    const [articles, setArticles] = useState(data.results.slice(0, 36))
    const [savedArticles, setSavedArticles] = useState(JSON.parse(localStorage.getItem("savedArticles")) || [])
    
    const [keyword, setKeyword] = useState("")
    console.log(localStorage)

    useEffect(() => {
        axios.get(`https://newsdata.io/api/1/news?apikey=pub_105462aafe56947033900d4a8a042eedb2b0d&category=technology&language=en`)
            .then(res => setArticles(res.data.results))
    }, [])

    function keywordSearch(keyword){
        axios.get(`https://newsdata.io/api/1/news?apikey=pub_105462aafe56947033900d4a8a042eedb2b0d&category=technology&language=en&q=${keyword}`)
            .then(res => setArticles(res.data.results))
    }
    function saveArticle(title, description, link, source ){
        setSavedArticles(prevArticles => {
            const finalArray = [...prevArticles,
                {title,
                description,
                link,
                source}]
            localStorage.setItem("savedArticles", JSON.stringify(finalArray))
            return finalArray
        })
        // localStorage.setItem(`${title}`, JSON.stringify(`{title: ${title}, description: ${description}, link: ${link}, source: ${source}}`))
        console.log((localStorage.getItem(`${title}`)))
        console.log((localStorage))
        // console.log(newSave)
        // console.log(savedArticles)
        // setSavedArticles(prevSaved => [articles.filter(article => article.title === title), ...prevSaved])
    }

    return (
        <ThemeContext.Provider value={{
            saveArticle,
            articles,
            savedArticles,
            keywordSearch
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
    }

export {ThemeContext, ThemeContextProvider}
