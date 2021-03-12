import React from 'react'
import Innercard from './Innercard'
function Card({data,theme}) {
    return (
        <div className="card-container">
            <div className="container row ">
                {data.map((country,index)=>(
                    <div className='card col-sm-12 col-md-4 col-lg-3' >

<Innercard key={index} country={country} theme={theme} />


                    </div>
 ))}
            </div>
        </div>
    )
}



export default Card

