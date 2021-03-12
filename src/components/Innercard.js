import React from 'react'

function Innercard({country}) {
    return (
        <div className="i-card">
            <img src={country.flag} />
      <div className="i-text">
      <h4>{country.name}</h4>
      <p><strong>Population</strong>:{country.population}</p>
      <p><strong>Region</strong>:{country.region}</p>
      <p><strong>Capital</strong>:{country.capital}</p>

      </div>
        </div>
    )
}

export default Innercard
