import { motion } from 'framer-motion'
import React from 'react'
import { GrArticle } from 'react-icons/gr'

function nav() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: .15 }}>
            <div className="navbar">
                <div className="logo">
                    <a href="/Home">M<GrArticle />A</a>
                    <span></span>
                </div>
                <div className="appearance">
                    <div className="light-dark">
                        <i className="btn fas fa-moon" data-color="#e4e6eb #e4e6eb #24292D #24292D #242526"></i>
                    </div>
                    <div className="color-icon">
                        <div className="icons">
                            <i className="fas fa-palette"></i>
                            <i className="fas fa-sort-down arrow"></i>
                        </div>
                        <div className="color-box">
                            <h3>Color Switcher</h3>
                            <div className="color-switchers">
                                <button className="btn blue active" data-color="#fff #24292d #4070f4 #0b3cc1 #F0F8FF"></button>
                                <button className="btn orange" data-color="#fff #242526 #F79F1F #DD8808 #fef5e6"></button>
                                <button className="btn purple" data-color="#fff #242526 #8e44ad #783993 #eadaf1"></button>
                                <button className="btn green" data-color="#fff #242526 #3A9943 #2A6F31 #DAF1DC"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default nav