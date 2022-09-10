import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import Article from './Article'
export default function Saved(){
    
    const {savedArticles} = useContext(ThemeContext)
    const savedArticleElement = savedArticles.map(article => 
    <Article 
        key={article.title}
        itemId={article.title}
        title={article.title}
        description={article.description}
        source={article.source}
        link={article.link} 
    />)
    
    
    return (
        <>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exitBeforeEnter={{opacity: 0, transition: {duration: 1}}}
        transition={{delay: 0.1}}
        >
            <div className="banner--container">
                <h1 className="banner--header">Saved Articles</h1>
                <input placeholder="Keyword Search:" className="banner--input"></input>
            </div>
            <div className='article--container'>{savedArticleElement}</div>
        </motion.div>
        </>
    )
}