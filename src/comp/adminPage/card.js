import React, { useEffect } from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, getArticle } from '../redux/action';
import { Link } from 'react-router-dom';
import Img from '../../images/user.png'
import { motion } from 'framer-motion'
import { Cardanimated } from '../Animation/Animation';


function Card({ One_article }) {
    let dispatch = useDispatch();
    const {
        id,
        title,
        Abstracts,
        Publication_history,
        Authors
    } = One_article;
    return (
        <motion.div className="blog-post"
            initial={{ x: 1200, scale: .5 }}
            animate={{ x: 0, scale: [0.5, 1] }}
            exit={{ x: -1200, scale: [1, 0] }}
            transition={{ duration: 0.5, delay: .6 }}
        >
            <div className="blog-post__img">
                <img src={Img} alt="" />
            </div>
            <div className="blog-post__info">
                <div className="blog-post__date">
                    <div className='author'>
                        {/* <span>{user.name}</span> */}
                        {Authors && Authors.map((a, i) => {
                            if (i < 3) return <span>{a}</span>;
                            else return '.';
                        })}
                    </div>
                    <span>
                        {new Date(Publication_history).toLocaleDateString(undefined, {
                            day: "numeric",
                            month: "long",
                        })}
                        &nbsp;
                        {dayjs.extend(relativeTime)}
                        ({dayjs(Publication_history).fromNow()})
                    </span>
                </div>
                <h1 className='blog-post__title'>{title}</h1>
                <p className='blog-post__text'>
                    {Abstracts}
                </p>
                {/* <Link to={'/Admin/Dashboard/' + id}> <i className="fas fa-edit blog-post__update" onClick={() => {
                    document.body.style.overflow = "hidden";
                    document.documentElement.scrollTop = 0;
                    document.querySelector('.Edite-popup').style.zIndex = 100;
                    document.querySelector('.Edite-popup').style.opacity = 1;
                    document.querySelector('.format').style.setProperty("transform", "translate(" + 50 + "%," + 15 + "%)");

                    localStorage.setItem("Article_id", id);

                }}></i></Link> */}
                <i className="fas fa-trash blog-post__delete" onClick={() => {
                    dispatch(deleteArticle(id));
                }}></i>
            </div>
        </motion.div>
    )
}

export default Card