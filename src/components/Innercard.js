import React from 'react'

function Innercard({country,theme}) {
    return (
        <div className={theme==='Dark'? 'i-card dark-ele': 'i-card'}>
            <img src={country.flag} alt={country.name} />
      <div className="i-text">
      <h4 className={theme==='Dark'? ' dark-ele': ''}>{country.name}</h4>
      <p><strong>Population</strong>:{country.population}</p>
      <p><strong>Region</strong>:{country.region}</p>
      <p><strong>Capital</strong>:{country.capital}</p>

      </div>
        </div>
    )
}

export default Innercard
