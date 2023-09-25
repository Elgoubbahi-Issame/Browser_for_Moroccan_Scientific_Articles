import React, { useEffect, useState } from 'react'
import { GrArticle } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { searchArticle, InialArticle } from '../redux/action'
function Nav() {
    let dispatch = useDispatch()
    const [change, setchange] = useState()
    useEffect(() => {
        const searchToggle = document.querySelector(".searchToggle");
        let root = document.querySelector(":root");
        let buttons = document.querySelectorAll(".btn");
        let color = ["#fff", "#24292d", "#4070f4", "#0b3cc1", "#F0F8FF"];
        for (var button of buttons) {
            button.addEventListener("click", (e) => {

                let target = e.target;
                let iconName1 = target.className.split(" ")[2];
                if (target.classList.contains("fa-moon")) {
                    color = ["#e4e6eb", "#e4e6eb", "#24292D", "#24292D", "#242526"];
                    target.classList.replace(iconName1, "fa-sun");
                    root.style.setProperty("--main-1", "#363d44");
                    root.style.setProperty("--main-9", "#fff");
                    root.style.setProperty("--main-8", "#eef0f1");
                } else if (target.classList.contains("fa-sun")) {
                    color = ["#fff", "#24292d", "#4070f4", "#0b3cc1", "#F0F8FF"];
                    target.classList.replace("fa-sun", "fa-moon");
                    root.style.setProperty("--main-1", "#eef0f1");
                    root.style.setProperty("--main-9", "#202428");
                    root.style.setProperty("--main-8", "#363d44");
                } else if (target.classList.contains("bx-search")) {
                    searchToggle.classList.toggle("active");
                    target.classList.replace("bx-search", "bx-x");
                    target.classList.replace("search", "cancel");
                    dispatch(InialArticle())

                } else if (target.classList.contains("bx-x")) {
                    searchToggle.classList.toggle("active");
                    target.classList.replace("bx-x", "bx-search");
                    target.classList.replace("cancel", "search");
                }
                root.style.setProperty("--white", color[0]);
                root.style.setProperty("--black", color[1]);
                root.style.setProperty("--nav-main", color[2]);
                root.style.setProperty("--switchers-main", color[3]);
                root.style.setProperty("--light-bg", color[4]);
            });
        }

    })

    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <a href="/Home">M<GrArticle />A</a>
                    <span></span>
                </div>
                <div className="appearance">
                    <div className="searchBox">
                        <div className="searchToggle">
                            <i className='btn bx bx-search search'></i>
                        </div>
                        <div className="search-field">
                            <input type="text" placeholder="Search..." onChange={(e) => {
                                setchange(e.currentTarget.value);
                            }} />
                            <i onClick={() => {

                                dispatch(searchArticle(change))
                            }} className='bx bx-search'></i>
                        </div>
                    </div>
                    <div className="light-dark">
                        <i className="btn fas fa-moon"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav