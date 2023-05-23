import React from 'react'
import "./home.css"
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function Home() {
  return (
    <div className='homeContainer'>
      <div className="homeBox">
        <div className="homeTitle">Welcome To ToDo List</div>
        <div className="homeInfo">
          <ul className="homeInfoList">
            <li className="homeInfoListItem"><span className="listIcon"><CheckIcon/></span>Plan your daily tasks here</li>
            <li className="homeInfoListItem"><span className="listIcon"><CheckIcon/></span>Enter your task in the input field and click the add icon</li>
            <li className="homeInfoListItem"><span className="listIcon"><CheckIcon/></span>Your entered task gets added to the list</li>
            <li className="homeInfoListItem"><span className="listIcon"><CheckIcon/></span>Click on the complete icon upon completing the task</li>
          </ul>        
        </div>
        <div >
          <a href="/pages">Manage your tasks  <ArrowForwardIcon/></a>
        </div>
      </div>
        
    </div>
  )
}
