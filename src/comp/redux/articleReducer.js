import * as types from './actionType'
const initial = {
    articles: [],
    article: {},
    loading: true
}

const articleReducer = (state = initial, action) => {
    switch (action.type) {
        case types.GET_ARTICLES:
        case types.SEARCH_ARTICLE:
        case types.TAGS_ARTICLE:
        case types.ZERO_ARTICLE:
            return {
                ...state,
                articles: action.playload,
                loading: false
            }
        case types.UPDATE_ARTICLE:
        case types.DELETE_ARTICLE:
            return {
                ...state,
                loading: false
            }
        case types.GET_ONE_ARTICLE:
            return {
                ...state,
                article: action.playload,
                loading: false
            }

        default:
            return state;
    }


}
export default articleReducer;