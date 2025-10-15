import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DataViewer from './pages/DataViewer'
import Nav from './components/Nav'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/viewer" element={<DataViewer/>} />
        </Routes>
      </main>
      <footer className="bg-slate-100 border-t py-4">
        <div className="container mx-auto text-center text-sm text-slate-600">© {new Date().getFullYear()} Combined App</div>
      </footer>
    </div>
  )
}