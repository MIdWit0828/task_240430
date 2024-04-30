import Header from "../component/Header";
import Footer from "../component/Footer";
import {Outlet} from "react-router-dom";
import Main from "../pages/Main";
import {useState} from "react";

function Layout() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <Header/>
            <Main searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Outlet/>
            <Footer/>
        </>
    );
}
export default Layout;