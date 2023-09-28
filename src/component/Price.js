import React from 'react'

function Price() {
  return (
    
    <div className="ratecard">
      <div>
        <p className="abouts">"A short video app with a subscription model can offer high-<br/>quality content and attract a loyal audience."</p>
        </div>
        <div className='ratecard-des'>
          <p className="ratetitle">Ready to get started?</p>
        <p className="ratedes">The only app you need for a complete Entertainment</p>
        </div>
        <div className='card-container'>
      <div className="freetrial card">
        <p className="cardtitle">FREE TRIAL</p>
        <p className='price'>₹0 <span className="validity">/1 Month</span></p>
        <hr/>
        <div>
          <ul className="cardlist">
            <li>Single User</li>
            <li>No Ads</li>
            <li>Unlimited Videos</li>
          </ul>
        </div>
      </div>
      <div className="onemonth card">
      <p className="cardtitle">SUBSCRIPTION</p>
        <p className='price'>₹99 <span className="validity">/1 month</span></p>
        <hr/>
        <div>
          <ul className="cardlist">
            <li>Single User</li>
            <li>No Ads</li>
            <li>Unlimited Videos</li>
          </ul>
        </div>
      </div>
      <div className="sixmonth card">
      <p className="cardtitle">SUBSCRIPTION</p> 
        <p className='price'>₹499 <span className="validity">/6 Month</span></p>
        <hr/>
        <div>
          <ul className="cardlist">
            <li>Single User</li>
            <li>No Ads</li>
            <li>Unlimited Videos</li>
          </ul>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Price