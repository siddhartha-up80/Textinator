import React from 'react'

export default function Navbar(props) {
 
    return (
        <div>
        
        <div className="navbar bg-base-100 border-solid border-2 border-red-100 bg-red-500 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>{props.item1}</a></li>
        
        <li><a>{props.item2}</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white hover:bg-red-700 ">{props.title}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white ">
      <li><a>{props.item1}</a></li>
      
      <li><a>{props.item2}</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" btn flex border-double border-2 border-white rounded-xl hover:bg-red-700 hover:border-none hover:text-white bg-white text-black">Restart</a>
  </div>
</div>

      </div>
    )
  }


