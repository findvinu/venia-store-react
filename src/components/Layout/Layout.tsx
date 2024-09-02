import Products from "../Products/Products";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import './Layout.scss';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="main container main main-content">
                <Sidebar />
                <Products />
            </div>
            <Footer />
        </>
    );
}

export default Layout;