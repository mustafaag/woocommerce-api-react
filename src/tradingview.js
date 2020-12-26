import { restClient } from "polygon.io";
import React from 'react';


// you can use the api now

const doCall =() =>{
    const rest = restClient("Sv3KpZqTwPDIODcYPtyz5dMkzNXeOVP6");
    
    rest.reference
    .tickers({page:2, type: 'cs'})
    .then( (data)=>{
       const tickers = data.tickers;
       const cont = tickers? tickers.map( (d) =>{
            return (
                <div key={d.name}>
                    <span>Name: </span>
                    <span> {d.name}</span>
                </div>  
            );     
        }): null;
        
        console.log(cont);
        return (<div>
            {cont}
        </div>) ;
    })
    .catch( (err)=>{
      console.error(err);
     });
    
}

const tradingView  = () => {
    return (
        <div className="row">            
          {doCall()}
        </div>  
    );
}
export default tradingView;
// import PolygonAdapter from '@polygon.io/tradingview-adapter'

// const client = new PolygonAdapter({
// 	apikey: 'Sv3KpZqTwPDIODcYPtyz5dMkzNXeOVP6',
// 	realtimeEnabled: true 	// True(default) = Use websockets for updates. False = use polling for new data.
// })

// const widget = new TradingView.widget({
// 	fullscreen: true,
// 	symbol: 'AAPL',
// 	interval: '1D',
// 	timezone: 'America/New_York',
// 	container_id: "tv_chart_container", /* ID of the container element */
// 	datafeed: client, /* Our Polygon.io Adapter */
// 	library_path: "/charting_library/", /* Where your TV Library files reside */
// 	locale: "en",
// 	disabled_features: ["use_localstorage_for_settings"],
// 	enabled_features: ["study_templates"],
// 	charts_storage_url: 'http://saveload.tradingview.com',
// 	charts_storage_api_version: "1.1",
// 	client_id: 'tradingview.com',
// 	user_id: 'public_user_id',
// 	theme: 'Light', /* Light or Dark */
// });


// export default widget;