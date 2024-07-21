import React from 'react'
import './BuySell.css'

function BuySell() {
  return (
    <>
    <div className='card buysell-card'>
        <div className='card buysell-card'>
            <h3>StockName</h3>
            <p>Rs100.00 (4.5%)</p>
        </div>
        <div className='card buysell-buttons'>
            <button className='button buy-button' name='buy'>BUY</button>
            <button className='button sell-button' name='sell'>SELL</button>
        </div>
        <div className='card buysell-card'>
            <div className='buy-sell-flex'>
                <label class='buysell-label' name='quantity'>Quantity</label>
                <input class='buysell-text' type='text' name='quantity'></input>
            </div>
            <div className='buy-sell-flex'>
                <label class='buysell-label' name='price'>Price</label>
                <input class='buysell-text' type='text' name='price'></input>
            </div>
            <button className='submit-btn' type='submit'>BUY</button>
        </div>

    </div>
    </>
  )
}

export default BuySell