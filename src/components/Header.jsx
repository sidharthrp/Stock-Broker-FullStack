import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'

function Header() {
  return (
    <div>
        <div className='flex'>
        <div className='text'>
            <CurrencyExchangeIcon />
            <h2>Broker</h2>
            <h3>Stocks</h3>
            <h3>Watchlist</h3>
        </div>
        <input className='searchBar' type='text' placeholder='Search'></input>
        <div className='noti'>
            <NotificationsIcon />
            <AccountBalanceWalletIcon />
            <Avatar>S</Avatar>
        </div>
        </div>
    </div>
  )
}

export default Header