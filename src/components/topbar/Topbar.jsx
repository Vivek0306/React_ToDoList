import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className='logo'>To-Do List</span>
        </div>
    </div>
  )
}
