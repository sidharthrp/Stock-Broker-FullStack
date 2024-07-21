import { useState } from 'react'
import Header from './components/Header'
import Indexcard from './components/Indexcard'
import Stockcard from './components/Stockcard'
import Investments from './components/Investments'
import Watchlist from './components/Watchlist'
import BuySell from './components/BuySell'


function App() {

  return (
    <>
    <Header />

    <div className='vertical-cards'>
      <div className='horizontal-cards'>
        <Indexcard/>
        <Investments />
      </div>
      <div className='horizontal-cards'>
        <Stockcard/>
        <Watchlist/>
      </div>
      <BuySell />
    </div>

    </>
  )
}

export default App
