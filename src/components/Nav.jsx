import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">MyBrand</div>
        <nav className="space-x-4">
          <NavLink to="/" end className={({isActive}) => isActive? 'text-indigo-600 font-semibold' : 'text-slate-700'}>Home</NavLink>
          <NavLink to="/viewer" className={({isActive}) => isActive? 'text-indigo-600 font-semibold' : 'text-slate-700'}>JSON Viewer</NavLink>
        </nav>
      </div>
    </header>
  )
}