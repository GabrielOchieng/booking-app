import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/3695553/pexels-photo-3695553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/4751170/pexels-photo-4751170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kagwa</h1>
                <h1>123 cities</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/5598667/pexels-photo-5598667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Seme</h1>
                <h1>789 scenaries</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
