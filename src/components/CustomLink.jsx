import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink({to, children, ...props}){
    return (
      // <li className={window.location.pathname === to? 'active': ''}></li> (useresolvedpath for locationpathname to get unrelative path to compare)
      <Link className='flex transition-all hover:text-white hover:bg-gray-600 px-3 py-4' to={to} {...props}>{children}</Link>
    )
  }