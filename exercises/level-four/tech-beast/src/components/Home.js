import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext } from 'react';
import axios from 'axios'
import Article from './Article.js'
import { ThemeContext } from '../ThemeContext.js';


export default function Home(){
    const {keywordSearch} = useContext(ThemeContext)
    const {articles} = useContext(ThemeContext)
    const [keyword, setKeyword] = React.useState("")
    function handleChange(e){
        // const {name, value} = e.target
        setKeyword(e.target.value)
        console.log(keyword)
    }
    const articleElement = articles.map((article) => 
        <Article 
            key={article.title}
            itemId={article.title}
            title={article.title}
            description={article.description}
            source={article.source_id}
            link={article.link} 
        />)

    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 1800
    }

    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 1800
    }

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exitbeforeenter={{opacity: 0}}
            transition={{delay: 0.1}}
            >
            <div className="banner--container">
                <h1 className="banner--header">TechHub</h1>
                <input placeholder="Keyword Search:" className="banner--input" value={keyword} name="keyword" onChange={handleChange}></input>
                <button className="keyword--search" onClick={() => keywordSearch(keyword)}>Search</button>
            </div>
            <div className='arrow--container'>
                <img src={`../images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg`} onClick={slideLeft} className='arrow'></img>
                <div className='article--container' id="slider">{articleElement}</div>
                <img src={`../images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg`} onClick={slideRight} className='arrow'></img>
            </div>
        </motion.div>
    )
}