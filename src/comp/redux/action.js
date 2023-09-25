import * as types from './actionType'
import axios from 'axios'

const getArticles = (articles) => ({
    type: types.GET_ARTICLES,
    playload: articles
})
const ArticleDeleted = () => ({
    type: types.DELETE_ARTICLE
})
const getOneArticle = (One_article) => ({
    type: types.GET_ONE_ARTICLE,
    playload: One_article
})
const ArticleUpdated = () => ({
    type: types.UPDATE_ARTICLE
})
const ArticleSearched = (articles) => ({
    type: types.SEARCH_ARTICLE,
    playload: articles
})
const ArticleTags = (articles) => ({
    type: types.TAGS_ARTICLE,
    playload: articles
})
const ArticleToZero = () => ({
    type: types.ZERO_ARTICLE,
    playload: []
})
export const loadArticles = () => {
    return function (dispatch) {
        axios.get('http://localhost:8000/articles').then((resp) => {
            // console.log(resp);
            dispatch(getArticles(resp.data));
        }).catch((err) => console.log(err));
    }
}
export const getArticle = (id) => {
    return function (dispatch) {
        axios.get('http://localhost:8000/articles/' + id).then((resp) => {
            // console.log(resp);
            dispatch(getOneArticle(resp.data));
        }).catch((err) => console.log(err));
    }
}
export const deleteArticle = (id) => {
    return function (dispatch) {
        axios.delete('http://localhost:8000/articles/' + id).then((resp) => {
            // console.log(resp);
            dispatch(ArticleDeleted());
            dispatch(loadArticles());
        }).catch((err) => console.log(err));
    }
}

export const updateArticle = (id, article) => {
    return function (dispatch) {
        axios.put('http://localhost:8000/articles/' + id, article).then((resp) => {
            // console.log(resp);
            dispatch(ArticleUpdated());
            dispatch(loadArticles());
        }).catch((err) => console.log(err));
    }
}

export const searchArticle = (article) => {
    return function (dispatch) {
        axios.get('http://localhost:8000/articles?q=' + article).then((resp) => {
            // console.log(resp);
            dispatch(ArticleSearched(resp.data));
            // dispatch(loadArticles());
        }).catch((err) => console.log(err));
    }
}

export const filter_by_tagsArticle = (article) => {
    return function (dispatch) {
        axios.get('http://localhost:8000/articles?tags_like=' + article).then((resp) => {
            console.log(resp);
            dispatch(ArticleTags(resp.data));
            // dispatch(loadArticles());
        }).catch((err) => console.log(err));
    }
}
export const InialArticle = () => {
    return function (dispatch) {
        dispatch(ArticleToZero());
    }
}
