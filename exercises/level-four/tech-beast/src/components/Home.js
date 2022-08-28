import { AnimatePresence, motion } from 'framer-motion'
import React from 'react';
import axios from 'axios'
import Article from './Article.js'


export default function Home(){

    const [keyword, setKeyword] = React.useState()
    const data = require('../data.json')
    const articles = data.results.slice(0, 12)
    const articleElement = articles.map((article) => <Article key={article.title} itemId={article.title} title={article.title} description={article.description} source={article.source_id} link={article.link} />)

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exitBeforeEnter={{opacity: 0}}
            transition={{delay: 0.1}}
            >
            <div className="banner--container">
                <h1 className="banner--header">TechHub</h1>
                <input placeholder="Keyword Search:" className="banner--input" value={keyword} name="keyword"></input><button className="keyword--search">Search</button>
            </div>
            <div className='article--container'>{articleElement}</div>
        </motion.div>
    )
}