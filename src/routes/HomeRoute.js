import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {API_KEY} from '../config'
import './AboutRoute.scss'

export function HomeRoute(){
    const [bitcoinData, setBitcoinData] = useState({rates: []});
    const [splicedArray, setSplicedArray] = useState([]);
    const [startingIndex, setStartingIndex] = useState(0);
    const [endingIndex, setEndingIndex] = useState(9);

    useEffect(() => {
        async function run(){
          try{
            const response = await axios.get('https://rest.coinapi.io/v1/exchangerate/BTC',{headers: {'X-CoinAPI-Key': API_KEY}})
            setBitcoinData(response.data)
          }catch(error){
          }     
        }
        run();
    },[])

    function pageUp(){
        setStartingIndex(startingIndex+10);
        setEndingIndex(endingIndex+10);
    }


    useEffect(() => {
        if(bitcoinData.rates.length > 0){
            const newArray = bitcoinData.rates.slice(startingIndex, endingIndex);
            setSplicedArray(newArray)
        }
    },[bitcoinData.rates, endingIndex, startingIndex])

    console.log(bitcoinData)
    return (
        <div>
            <h1>Bitcoin Data</h1>
            <BitcoinList 
                pageUp={pageUp}
                rates={splicedArray}
            />
        </div>
    )
}

function BitcoinList({rates, pageUp}){
    return (
        <div>
            <h1>Bitcoin List</h1>
            <div className="bitcoin-list-container">
                {rates.map((item) => {
                    return <div className='bitcoin-item'>
                        {item.asset_id_quote}
                    </div>
                })}
            </div>
            <div className="button-container">
                <button>Page Down</button>
                <button
                    onPress={() => pageUp()}
                >Page Up</button>
            </div>
        </div>
    )
}   