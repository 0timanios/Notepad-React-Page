import React from 'react'
import CustomLink from './CustomLink';


export default function Navbar() {
  return (
    <nav className='navBar flex flex-row justify-end items-center bg-primary-dark-red-03 w-full px-4 h-[4rem]'>
        <ul className='list-none flex flex-row gap-2 align-middle h-full place-items-center'>
            <li><CustomLink to={'/'}>Home</CustomLink> </li>
            <li><CustomLink to={'/note'}>Note</CustomLink> </li>
        </ul>
    </nav>
  )
}
