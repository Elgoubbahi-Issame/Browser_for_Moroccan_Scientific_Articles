import React from 'react'
import './article_bare.scss';

function Loadarticl() {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <div className="skeleton image" />

                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="skeleton avatar"></div>
                    <div className="skeleton text"></div>
                </div>

                <div className="skeleton title"></div>

                <div className="skeleton smalltext"></div>
            </div>
            <div className="shimmer-wrapper">
                <div className="shimmer"></div>
            </div>
        </div>
    )
}

export default Loadarticl