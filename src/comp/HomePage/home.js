import React, { useEffect } from 'react'
import Nav from './nav'
import Img1 from '../../images/svgBlog.svg'
import './index.css'
import { motion } from 'framer-motion'


function Home() {
    useEffect(() => {

        let colorIcons = document.querySelector(".color-icon"),
            icons = document.querySelector(".color-icon .icons");

        icons.addEventListener("click", () => {
            colorIcons.classList.toggle("open");
        })

        // getting all .btn elements
        let buttons = document.querySelectorAll(".btn");

        for (var button of buttons) {
            button.addEventListener("click", (e) => { //adding click event to each button
                let target = e.target;

                let open = document.querySelector(".open");
                if (open) open.classList.remove("open");

                document.querySelector(".active").classList.remove("active");
                target.classList.add("active");

                // js code to switch colors (also day night mode)
                let root = document.querySelector(":root");
                let dataColor = target.getAttribute("data-color"); //getting data-color values of clicked button
                let color = dataColor.split(" "); //splitting each color from space and make them array

                //passing particular value to a particular root variable
                root.style.setProperty("--white", color[0]);
                root.style.setProperty("--black", color[1]);
                root.style.setProperty("--nav-main", color[2]);
                root.style.setProperty("--switchers-main", color[3]);
                root.style.setProperty("--light-bg", color[4]);

                let iconName = target.className.split(" ")[2]; //getting the class name of icon

                let coloText = document.querySelector(".home-content span");

                if (target.classList.contains("fa-moon")) { //if icon name is moon
                    target.classList.replace(iconName, "fa-sun") //replace it with the sun
                    colorIcons.style.display = "none";
                    coloText.classList.add("darkMode");
                } else if (target.classList.contains("fa-sun")) { //if icon name is sun
                    target.classList.replace("fa-sun", "fa-moon"); //replace it with the sun
                    colorIcons.style.display = "block";
                    coloText.classList.remove("darkMode");
                    document.querySelector(".btn.blue").click();
                }
            });
        }
    })

    return (
        <div>
            <Nav />
            <section className="home-content">
                <div className="l-pannel">
                    <motion.div className="texts"
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0, scale: [0.5, 1] }}
                        transition={{ type: 'spring', duration: 1, delay: .4 }}
                    >
                        <h2 className="text">All Articles</h2>
                        <h3 className="text">Of <span>Moroccan Writers...</span></h3>
                        <p>Lorem ipsum dolor sited and ametvel, nobised, minimali! Quibusdam temporibus, placeate reessed veritatis optio aliquam illum debitis at, perspiciatis consequatur iure vel, quae ratione. Praesentium, at.</p>
                    </motion.div>
                    <motion.div className="button"
                        initial={{ y: '100vh' }}
                        animate={{ y: 0, scale: [0.5, 1] }}
                        transition={{ type: 'spring', duration: 1, delay: .6 }}
                    >
                        <a href="/Articles">Explore More
                            <i className="fas fa-location-arrow"></i></a>
                    </motion.div>
                </div>
                <motion.div

                    className="r-pannel" >
                    <img className='img' src={Img1} alt="" />
                </motion.div>
            </section>
        </div>
    )
}

export default Home