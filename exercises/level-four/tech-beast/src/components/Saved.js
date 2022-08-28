import { AnimatePresence, motion } from 'framer-motion'

export default function Saved(){
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
            <div className='about--text'>
                
            </div>
        </motion.div>
        </>
    )
}