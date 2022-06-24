import Navbar from "../components/Common/Navbar";
import Search from "../components/Common/Search";

const registration = app => {
    app.component('common_navbar', Navbar)
    app.component('common_search', Search)
}

export default registration