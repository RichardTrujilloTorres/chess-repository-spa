import app from "../main";
import store from '../store';

export const searchClient = {
    search(requests) {
        return app.axios.get(`/games/search`, {
            params: {
                user_id: store.getters["userModule/getUser"].id,
                query: requests[0].params.query,
            },
        })
            .then(res => {
                return {
                    results: [
                        {
                            result: res.data.data.games,
                            hits: res.data.data.games,
                        }
                    ]
                }
            })
    }
};
