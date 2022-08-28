import { AnimatePresence, motion } from 'framer-motion'

export default function About(){
    return (
        <>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exitBeforeEnter={{opacity: 0, transition: {duration: 1}}}
        transition={{delay: 0.1}}
        >
            <div className='banner--container--about'>
                <h1 className="banner--about">About</h1>
            </div>
            <div className='about--text'>
                <p>Built by Mike Barnett using React. TechBeast uses the <a href="https://newsdata.io/">Newsdata API</a> to fetch the latest breaking news articles related to tech
                from 3000+ sources. You can 'like' the article to add it to your saved articles list, which will be saved to your local storage. You can search and monitor worldwide
                tech related news for articles using a keyword
                and filter the results. Try a keyword such as 'crypto', 'google', or 'facebook'! </p>
            </div>
        </motion.div>
        </>
    )
}