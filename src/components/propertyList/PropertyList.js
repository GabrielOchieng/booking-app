import React from 'react';
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Restaurants</h1>
                <h2>133 rests</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>AirBnBs</h1>
                <h2>533 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Resorts</h1>
                <h2>133 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pListImg" />
            <div className="pListTitle">
                <h1>Cabins</h1>
                <h2>333 cabins</h2>
            </div>
        </div>
      
    </div>
  )
}

export default PropertyList
