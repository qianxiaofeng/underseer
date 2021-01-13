import React from 'react'

const PageTitle = (props) => {
    return (
        <div className={"bg-gray-100 h-10"}>
            {props.children}
        </div>
    )
}

const PageContent = (props) => {
    return (
        <div className={"mt-5 bg-white container p-5  mx-auto break-words"}>
            {props.children}
        </div>
    )
}

const Page = (props) => {
    return (
        <div className={"bg-gray-100  flex flex-col"}>
            {props.children}
        </div>
    )
}

export {Page, PageTitle, PageContent}