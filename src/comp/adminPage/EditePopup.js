import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticle, updateArticle } from '../redux/action';

function EditePopup() {
    const { id } = useParams();
    const History = useNavigate();
    const [tags, settags] = useState();
    let [state, setstate] = useState();
    const [title, settitle] = useState();
    const [user, setuser] = useState({
        name: ''
    });
    const [description, setdescription] = useState();
    let dispatch = useDispatch();

    const { article } = useSelector(state => state.articles)
    useEffect(() => {
        dispatch(getArticle(id));
    }, [id])
    useEffect(() => {
        if (article) {
            setdescription(article.description);
            settitle(article.title);
            setuser(article.user);
            settags(article.tags);
            setstate(article)
        }
    }, [article])

    const All_tags = [
        { value: 'react', label: 'react' },
        { value: 'graphql', label: 'graphql' },
        { value: 'nodejs', label: 'nodejs' },
        { value: 'python', label: 'python' },
        { value: 'beginners', label: 'beginners' },
        { value: 'opensource', label: 'opensource' },
        { value: 'beginners', label: 'webdev' },
        { value: 'css', label: 'css' },
        { value: 'html', label: 'html' },
        { value: 'javascript', label: 'javascript' },
        { value: 'sass', label: 'sass' },
        { value: 'git', label: 'git' },
        { value: 'vscode', label: 'vscode' },
        { value: 'npm', label: 'npm' },
        { value: 'sql', label: 'sql' },
        { value: 'ubuntu', label: 'ubuntu' },
        { value: 'aws', label: 'aws' }
    ];

    return (
        <div className="Edite-popup">
            <form className='format'>
                <div className="header">
                    <h4 className="title">Edit Article</h4>
                    <Link to={'/Admin/Dashboard'}><button type="button" className="close" onClick={() => {
                        document.body.style.overflowY = "scroll";
                        document.querySelector('.Edite-popup').style.zIndex = -100;
                        document.querySelector('.Edite-popup').style.opacity = 0;
                        document.querySelector('.format').style.setProperty("transform", "translate(" + 50 + "%," + -200 + "%)");
                    }} >&times;</button></Link>
                </div>
                <div className="body">
                    <div className="form-group">
                        <input type="text" value={(user && user.name) || ""} onChange={e => { setuser({ ...user, name: e.currentTarget.value }); }} placeholder='Name' />
                    </div>
                    <div className="form-group">
                        <input onChange={e => { settitle(e.currentTarget.value); }} value={title || ""} placeholder='Title' type="text" />
                    </div>
                    <div className="form-group">
                        <input onChange={e => { settags(e.currentTarget.value); }} value={tags || ""} placeholder='Tags' type="text" />

                    </div>
                    <div className="form-group">
                        <textarea onChange={e => { setdescription(e.currentTarget.value); }} value={description || ""} placeholder='Description' name="" id="" cols="3" rows="4"></textarea>
                    </div>

                </div>
                <div className="modal-footer">
                    <input type="button" className="btn btn-warning" value="Save" onClick={(e) => {

                        if (!title | !description | !user | !tags) {
                            alert("ERRORE !!!!!!!!")
                        } else {
                            state = { ...state, title, description, tags, user };
                            dispatch(updateArticle(id, state));
                            document.body.style.overflowY = "scroll";
                            document.querySelector('.Edite-popup').style.zIndex = -100;
                            document.querySelector('.Edite-popup').style.opacity = 0;
                            document.querySelector('.format').style.setProperty("transform", "translate(" + 50 + "%," + -200 + "%)");
                            History("/Admin/Dashboard")
                        }
                    }} />
                    <input type="button" className="btn btn-default" onClick={() => {
                        document.body.style.overflowY = "scroll";
                        document.querySelector('.Edite-popup').style.zIndex = -100;
                        document.querySelector('.Edite-popup').style.opacity = 0;
                        document.querySelector('.format').style.setProperty("transform", "translate(" + 50 + "%," + -200 + "%)");
                    }} value="Cancel" />
                </div>
            </form>

        </div>
    )
}

export default EditePopup