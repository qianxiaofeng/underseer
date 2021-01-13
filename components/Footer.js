import React from 'react'
import cn from 'classnames'


const Footer = ({customClasses}) => {
 return (
     <footer className={
         cn(
             "w-full bg-gray-100 bottom-0 flex justify-center flex items-center text-center",
             customClasses
         ) }>
      <h3>Footer</h3>
     </footer>
 )
};
export default Footer;