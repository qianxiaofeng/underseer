import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

const NavBar = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const navBarList = [
        {title: "主页", route: "/"},
        {title: "公告", route: "/about"},
        {title: "活动", route: "/about"},
        {title: "直播", route: "/about"},
        {title: "相册", route: "/about"},
        {title: "捐款", route: "/about"},
    ]

    return (
        <div
            className="bg-white w-full flex flex-wrap items-center justify-start  px-4 py-6  md:flex-no-wrap">
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    width={25}
                    height={25}
                    priority
                    alt="logo"
                />

                <Link href="/">
                    <a className="text-lg md:text-xl font-bold ml-3 text-black">
                        我的网站
                    </a>
                </Link>
            </div>

            <button
                className="flex items-center block px-3 py-2 text-black border border-white rounded md:hidden"
                onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
                <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>

            <ul
                className={cn(
                    "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
                    mobileMenuIsOpen ? `block` : `hidden`
                )}
            >
                {
                    navBarList.map(({route, title}) => (
                        <li className="mt-3 md:mt-0 md:ml-6" key={title}>
                            <Link href={route}>
                                <a className="block text-black">{title}</a>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

const Header = ({customClasses}) => {
    return (
        <header className={
            cn(
                customClasses,
                "shadow w-full"
            )
        }><NavBar/></header>
    )
};
export default Header;