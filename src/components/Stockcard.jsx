import React,{useState,useEffect} from "react";
import "./Stockcard.css";
import axios from "axios";
const apikey= 'S1EK3JDG7KAJH5CSss';
const url='https://www.alphavantage.co/query?function=GLOBAL_QUOTE213124132';

const Stockcard = () => {
    const [stockData,setStockData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
        axios.get(`${url}&symbol=RELIANCE.BSE&apikey=${apikey}`)
        .then(response=>{
            console.log(response.data['Global Quote']);
            setStockData(response.data['Global Quote'])
        })
        .catch(error => setError(error.message));  
    },[])

  return (
    <>
    <div>
        <h2 className="stocks-heading">Top Stocks</h2>
        {stockData ?<div className="card-layout" >
            <li className="card">
                <img className="niftyimg" src="./images/nfty.png" />
                <h3>{stockData['01. symbol']}</h3>
                <p>{stockData['05. price']} {stockData['10. change percent']}</p>
            </li>
            <li className="card">
                <img className="niftyimg" src="./images/nfty.png" />
                <h3>Nifty</h3>
                <p>24000 0.58%</p>
            </li>
            <li className="card">
                <img className="niftyimg" src="./images/nfty.png" />
                <h3>Nifty</h3>
                <p>24000 0.58%</p>
            </li>
        </div>: "loading"}
    </div>
    </>
  );
};

export default Stockcard;
