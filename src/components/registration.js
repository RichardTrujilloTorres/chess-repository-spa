import Navbar from "../components/Common/Navbar";
import Search from "../components/Common/Search";
import Loader from "./Common/Loader";

const registration = app => {
    app.component('common_navbar', Navbar)
    app.component('common_search', Search)
    app.component('common_loader', Loader)
}

export default registration