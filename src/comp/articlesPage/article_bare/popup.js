import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getArticle } from '../../redux/action';
import Img from '../../../images/user.png'
function Popup() {
    const
        { id } = useParams();
    let dispatch = useDispatch();
    const { article } = useSelector(state => state.articles)
    const { Authors, tag_list, PDF_Link, Abstracts } = article;
    useEffect(() => {
        dispatch(getArticle(id));

    }, [id]);

    // if (id === undefined) {
    //     dispatch(getArticle(1));
    // }
    return (
        <div className='bg-popup'>
            <div className="popup-box">
                <Link to={"/Articles"}><i onClick={() => {
                    document.querySelector('.bg-popup').classList.remove('show');
                    document.body.style.overflowY = "scroll";
                }} className="bx bx-x close"></i></Link>
                <div className="profile-text">
                    <img src={Img} alt="" />
                    <div className="text">
                        <div className='authors'>
                            {Authors && Authors.map((a, i) => {
                                if (i < 3) {
                                    return <span className="name">{a}</span>;
                                }
                            })
                            }
                        </div>
                        <div className='tag_list'>
                            {
                                tag_list && tag_list.map((a) => {
                                    return <span className="profession">#{a}</span>;
                                })
                            }



                        </div>
                    </div>
                </div>
                <div className="abstract">
                    <h3>Abstract</h3>
                    {Abstracts}
                </div>
                <div className="button">
                    {PDF_Link && <button className='read_artc'> Read</button>}
                    {!PDF_Link && <button className='read_artc' disabled> Read</button>}
                    {PDF_Link && <button className='download_artc' >Download</button>}
                    {!PDF_Link && <button className='download_artc' disabled >Download</button>}
                </div>
            </div>
        </div>
    )
}

export default Popup