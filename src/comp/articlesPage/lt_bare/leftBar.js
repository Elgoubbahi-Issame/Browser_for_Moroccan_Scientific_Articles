import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CgShapeHexagon } from 'react-icons/cg'
import { filter_by_tagsArticle, loadArticles } from '../../redux/action'
import './leftBar.scss'
import Loadarticl from '../article_bare/Loadarticl'
function LeftBar() {

    let { articles } = useSelector(state => state.articles);
    let dispatch = useDispatch()
    let tags = []
    useEffect(() => {
        dispatch(loadArticles());
    }, [])
    articles && articles.forEach(a => {
        a.tag_list.forEach(t => {
            tags.push(t)
        })
    })
    // console.log(tags);
    // const tags = [
    //     "react",
    //     "graphql",
    //     "nodejs",
    //     "sass",
    //     "javascript",
    //     "html",
    //     "css",
    //     "webdev",
    //     "opensource",
    //     "beginners",
    //     "python",
    //     "git",
    //     "vscode",
    //     "npm",
    //     "sql",
    //     "ubuntu",
    //     "aws",
    // ];
    return (
        <div className='leftBar'>
            <div className="leftBar__taglist">
                <header>
                    <h3>Category</h3>
                    <i onClick={() => { dispatch(loadArticles()) }}>
                        <CgShapeHexagon />
                    </i>
                </header>
                <ul>
                    {tags.map((tag, id) => {
                        return (
                            <li key={id} >
                                <a onClick={(e) => {
                                    // console.log();
                                    dispatch(filter_by_tagsArticle(e.target.dataset.tag))
                                }} data-tag={tag} >#{tag}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    )
}

export default LeftBar