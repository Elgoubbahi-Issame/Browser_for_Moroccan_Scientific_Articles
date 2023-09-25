import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import Article from './card'
import { useDispatch, useSelector } from 'react-redux'
import { loadArticles, searchArticle, filter_by_tagsArticle } from '../redux/action'
import EditePopup from './EditePopup';
import { useNavigate } from 'react-router-dom'
import { gridAnimated, Navdanimated } from '../Animation/Animation'
import { AnimatePresence, motion } from 'framer-motion'

function DashBoard() {
    var history = useNavigate();
    let [selectedOptions, setSelectedOptions] = useState([]);
    let tags = [];
    let dispatch = useDispatch();
    const { articles } = useSelector(state => state.articles);

    useEffect(() => {
        if (!localStorage.getItem('id_Admin'))
            history("/Admin/Auth");

        dispatch(loadArticles());
        articles === [] ? document.querySelector('.dash').style.setProperty("height", 100 + "%") :
            document.querySelector('.dash').style.setProperty("height", 0 + "%")
    }, [])
    const date = [
        { value: 'Last hour', label: 'Last hour' },
        { value: 'today', label: 'today' },
        { value: 'This week', label: 'This week' },
        { value: 'This month', label: 'This month' },
        { value: 'This year', label: 'This year' }
    ];
    let selected = '';
    // tags = [
    //     { value: 'react', label: 'react' },
    //     { value: 'graphql', label: 'graphql' },
    //     { value: 'nodejs', label: 'nodejs' },
    //     { value: 'python', label: 'python' },
    //     { value: 'beginners', label: 'beginners' },
    //     { value: 'opensource', label: 'opensource' },
    //     { value: 'beginners', label: 'webdev' },
    //     { value: 'css', label: 'css' },
    //     { value: 'html', label: 'html' },
    //     { value: 'javascript', label: 'javascript' },
    //     { value: 'sass', label: 'sass' },
    //     { value: 'git', label: 'git' },
    //     { value: 'vscode', label: 'vscode' },
    //     { value: 'npm', label: 'npm' },
    //     { value: 'sql', label: 'sql' },
    //     { value: 'ubuntu', label: 'ubuntu' },
    //     { value: 'aws', label: 'aws' }
    // ];
    articles && articles.forEach(a => {
        a.tag_list.forEach(t => {
            tags.push({ value: t, label: t })
        })
    })
    function logout() {
        localStorage.clear();
        history('/Admin/Auth');
    }
    return (
        <div className='dash'>
            <motion.div className="bar"
                initial={{ y: -200, scale: .5 }}
                animate={{ y: 0, scale: [0.5, 1] }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="filter-cat">
                    <Select
                        // styles={customStyles}
                        defaultValue={tags[2]}
                        isMulti
                        name="category"
                        options={tags}
                        className="cat"
                        classNamePrefix="select"
                        onChange={(o) => {
                            o.forEach(a => {
                                selected = selected + "" + a.value + ",";
                            })
                            dispatch(filter_by_tagsArticle(selected))
                        }
                        }
                        isOptionDisabled={() => selectedOptions.length >= 3}
                    />
                </div>
                <div className="search-bar">
                    <input onChange={(e) => {
                        dispatch(searchArticle(e.currentTarget.value));
                    }} type="text" placeholder="Title / Writer..." />
                    <label htmlFor="check">
                        <i onClick={() => {
                            document.querySelector('.search-bar').classList.toggle('add-search-bar');
                            document.querySelector('.icon-react').classList.toggle('add-icon');
                        }} className='fas fa-search icon-react' ></i>
                    </label>
                </div>
                <div className="filter-date">
                    <Select
                        name="date"
                        options={date}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(a) =>
                            console.log(a.value)
                        }
                    />
                </div>
                <div className="log-out" onClick={logout}>
                    <i class="fas fa-sign-out"></i>
                </div>
            </motion.div>
            <div className="manage-articles">
                <AnimatePresence>
                    {articles && articles.map((article) => {
                        return <Article One_article={article} key={article.id} />;
                    })}
                </AnimatePresence>
            </div>

            <EditePopup />
        </div>
    )
}

export default DashBoard