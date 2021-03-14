import React ,{useContext} from 'react'
import {ThemeContext} from './ThemeProvider';

import { Link } from 'react-router-dom';
function Innercard({country}) {
   
  const theme = useContext(ThemeContext)

    return (
     <Link to={`/${country.name}`}>
        <div className={theme==='Dark'? 'i-card dark-ele': 'i-card'}>
            <img src={country.flag} alt={country.name} />
      <div className="i-text">
      <h4 className={theme==='Dark'? 'dark-ele': ''}>{country.name}</h4>
      <p><strong>Population</strong>:{country.population}</p>
      <p><strong>Region</strong>:{country.region}</p>
      <p><strong>Capital</strong>:{country.capital}</p>

      </div>
        </div>
     </Link>
    )
}

export default Innercard
