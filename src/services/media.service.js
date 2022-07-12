import app from "../main";

export const positionScreenshot = fen => {
    return app.axios.get(`${process.env.VUE_APP_MEDIA_SERVICE_BASE_URL}/screenshot?fen=${fen}`, {
        withCredentials: false,
        headers: {
            'Accept': 'image/gif'
        },
        responseType: 'blob'
    })

}

const mediaService = {
    positionScreenshot,
}

export default mediaService

