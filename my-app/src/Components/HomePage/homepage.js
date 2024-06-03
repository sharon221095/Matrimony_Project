import React from 'react'
import './homepage.css'
import Search_icon_dark from '../../assets/search-b.png'
import gift_dark from '../../assets/gift.png'



const homepage = ({theme, setTheme}) => {


  return (
    <div className="container">
    <div className='navbar'>

        <img src={gift_dark} alt="logo_light" className='logo'/>
        <h1 className='logo_text'><i>Sacred Vows</i></h1>

        <ul className='ul_text'>
            <li>Home</li>
            <li>Matches</li>
            <li>Inbox</li>
            <li>About Us</li>
        </ul>
        <div className="search-box">
            <input type="text" placeholder='Search' />
            <img src={Search_icon_dark} alt="search_icon_light" />
        </div>
        
    </div>
    <div className='navbar_2'>
    <ul className='ul_text_2'>
            <li>New Matches</li>
            <li>My Matches()</li>
            <li>Near Me</li>
            <li>Recently Viewed</li>
            <li>More Matches</li>
        </ul>
    </div>
    </div>

  )
}

export default homepage