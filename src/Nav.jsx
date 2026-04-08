import React from 'react'
import {  Link } from "react-router";
export default function Nav() {
  return (
<div className="nav bg-black text-main-500 w-full h-max m-0 py-3 border-b border-white/20  ">
  <nav className='text-main-500 bigFont  flex flex-row items-center justify-around  '>
    <div className="circle w-5 h-5 rounded-full bg-main-500"></div>
    <ul className='text-center flex flex-row justify-center items-center gap-10  flex-wrap '>
      <Link to="/"><h3 className='text-2xl bigFontBold'>blogsOfCode</h3></Link>
      <Link to="/"><li className='text-lg hover:text-green-700'>Home</li></Link>
      <Link to="/articles"><li className='text-lg hover:text-green-700'>Articles</li></Link>
      <Link to="/contact"><li className='text-lg hover:text-green-700'>Contact</li></Link>
    </ul>
    <div className="circle w-5 h-5 rounded-full bg-main-500"></div>

  </nav>
</div>

  )
}
