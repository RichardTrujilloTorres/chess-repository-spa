import emitter from "./emitter";
import {LOADING} from "./events";
import store from '../store'

const emitterStoreBridge = () => {
    emitter.on(LOADING, (isLoading) => store.dispatch("setLoading", isLoading))
}

const bridge = () => {
    emitterStoreBridge()
}

export default bridge