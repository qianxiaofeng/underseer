import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div className={ "bg-gray-100 flex flex-col min-h-screen"}>
            <Header customClasses={"fixed"}/>
            <main className={"pt-20 flex-1"}>
                <div>{props.children}</div>
            </main>
            <Footer customClasses={"relative"}/>
        </div>
    )
}

export default Layout;