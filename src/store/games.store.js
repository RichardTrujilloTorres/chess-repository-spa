import app from "../main";
import {
    APPEND_GAMES,
    CAN_LOAD_MORE, SET_CURRENT_GAME,
    SET_CURRENT_PAGE,
    SET_NEXT_PAGE,
    UPDATE_PAGINATION
} from "./mutation-types";

const GameModule = {
    namespaced: true,
    state: () => ({
        games: [],
        currentGame: null,
        currentPage: 1,
        nextPage: 1,
        canLoadMore: true,
    }),
    mutations: {
        [APPEND_GAMES] (state, games) {
            state.games = state.games.concat(games)
        },
        [CAN_LOAD_MORE] (state, status) {
            state.canLoadMore = status
        },
        [SET_CURRENT_PAGE] (state, page) {
            state.currentPage = page
        },
        [SET_NEXT_PAGE] (state, page) {
            state.nextPage = page
        },
        [UPDATE_PAGINATION] (state, {currentPage, nextPageUrl}) {
            state.currentPage = currentPage
            state.nextPage = currentPage + 1
            state.canLoadMore = nextPageUrl !== null
        },
        [SET_CURRENT_GAME] (state, game) {
            state.currentGame = game
        },
    },
    actions: {
        appendGames(context, games) {
            context.commit(APPEND_GAMES, games)
        },
        fetchGames(context, userId) {
            app.axios.get(`/games?user_id=${userId}&page=${context.state.nextPage}`, {
                // headers: {
                //     'Authentication': `Bearer ${auth.token()}`,
                // }
            })
                .then(res => {
                    context.dispatch('appendGames', res.data.data.games.data)
                    context.commit(UPDATE_PAGINATION,
                        {
                            currentPage: res.data.data.games.current_page,
                            nextPageUrl: res.data.data.games.next_page_url
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchGame(context, id) {
            app.axios.get(`/games/${id}`)
                .then(res => {
                    context.commit(SET_CURRENT_GAME, res.data.data.game)
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    getters: {
        getGames(state) {
            return state.games
        },
        getCurrentGame(state) {
            return state.currentGame
        },
        canLoadMore(state) {
            return state.canLoadMore
        },
    },
}

export default GameModule