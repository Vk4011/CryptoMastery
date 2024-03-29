import React, { useLayoutEffect, useState ,} from 'react'
import { createContext } from 'react';


export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
    
    const [cryptoData,setCryptoData]=useState();

    const getCryptoData = async() =>{
        try{
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=108page=1&sparkline=false&price_change_percentage=1h%C24h%2C7d`
            ).then(res=>res.json()).then(json=>json);
            console.log(data);
            setCryptoData(data);
        }catch(error){
            console.log(error);
        }
    }
    useLayoutEffect(()=>{
        getCryptoData();
    },[])

    return <CryptoContext.Provider value={{ cryptoData }}> {children} </CryptoContext.Provider>
    

}

