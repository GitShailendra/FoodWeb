import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
        <p>For Better Experience <br /> FoodWeb App</p>
        <div className="plateforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload