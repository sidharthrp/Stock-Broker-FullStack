import React from 'react'
import './WatchList.css'

function Watchlist() {
  return (
    <>
        <div>
            <h2 className='watch-heading'>WatchList</h2>
            <div >
                <li className='card watch-card'>
                    <div className='watch-flex'>
                        <h4>Reliance</h4>
                        <h3>₹3110</h3>
                    </div>
                </li>
                <li className='card watch-card'>
                    <div className='watch-flex'>
                        <h4>Infosys</h4>
                        <h3>₹1800</h3>
                    </div>
                </li>
                <li className='card watch-card'>
                    <div className='watch-flex'>
                        <h4>TCS</h4>
                        <h3>₹4300</h3>
                    </div>
                </li>
            </div>
        </div>
    </>
  )
}

export default Watchlist