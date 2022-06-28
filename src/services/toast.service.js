const DEFAULT_OPTIONS = {
    duration: 3000,
    position: 'top-right',
}

const success = app => message => {
    app.$toast.success(message, {...DEFAULT_OPTIONS})
}

const error = app => message => {
    app.$toast.error(message, {...DEFAULT_OPTIONS})
}

const toastService = app => ({
    success: success(app),
    error: error(app),
})

const toastServicePlugin = {
    install(app) {
        app.config.globalProperties.toastService = app.toastService = toastService(app)
    }
}

export default toastServicePlugin
