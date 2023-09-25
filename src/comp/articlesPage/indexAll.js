import React from 'react'
import Nav from './nav'
import LeftBar from './lt_bare/leftBar'
import Content from './article_bare/content'
import './index.css'
import Popup from './article_bare/popup'
import '../articlesPage/lt_bare/leftBar.scss'

function indexAll() {
    document.body.style.overflowX = "hidden";
    return (
        <div className='indexAll'>
            <Nav />
            <div className='main-container'>
                <LeftBar />
                <Content />
            </div>
            <Popup />
        </div>
    )
}

export default indexAll