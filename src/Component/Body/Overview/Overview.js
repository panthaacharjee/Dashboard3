import React, {Component} from 'react'
import {priceData, chartData} from './OverviewData'

const Overview = () => {
  return (
    <div className="overview">
      <div className="price">
          {priceData.map((val, ind)=>{
            return (
              <div className="price_box_content" style={{borderLeft: val.color}} key={ind}>
                 <div className="border">
                      <p className="description">{val.desc}</p>
                      <p className="name" style={{borderBottom: val.color}}>{val.name}</p>
                      <p className="box_content_price">${val.price}</p>
                 </div>
              </div>
            )
          })}
      </div>
      <div className="chart">
          {chartData.map((val, ind)=>{
              return(
                <div className="chart_box_content" key={ind}>
                    <div className="chart_details">
                        <p>{val.name}</p>
                        <p className="chart_price">{val.price}</p>
                    </div>
                    <div className="chart_content">
                          
                    </div>
                </div>
              )
          })}
      </div>
    </div>
  )
}

export default Overview