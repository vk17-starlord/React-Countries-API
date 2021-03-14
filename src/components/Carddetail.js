import React,{useContext,useEffect,useState} from 'react'
import Navbar from './Navbar'
import {ThemeContext} from './ThemeProvider';
import axios from 'axios';
import {

Link,
    useParams
  } 
  from "react-router-dom";
  import { IoIosArrowRoundBack } from "react-icons/io";

  function Carddetail() {
    const theme = useContext(ThemeContext)
  
     
     let [country, setcountry] = useState({languages:[],currencies:[],borders:[]});


     const {name} = useParams();


     useEffect(() =>{
        async function getCountry() {
            const data = await axios(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
   
setcountry(data.data[0]);
    
console.log(data.data[0])
}
    getCountry()
  
},[name])


     return (
        < >
<Navbar  ></Navbar>
<div className={theme==='Dark'? 'dark-bg d-container' :'light d-container'}>
<div className='container'>
 


<Link to="/">

    <button className={theme==='Dark'? 'dark-ele ' :'light-ele'}> <IoIosArrowRoundBack />  back</button>
</Link>

<div className='row'>
    <div className='col-sm-12 col-lg-6 d-col'>
<img src={country.flag} alt={country.name}></img>
    </div>
    
    <div className='col-sm-12 col-lg-6 d-col' >
    <h1>{country.name}</h1>
   
<div className='row'>
    
<div className='col-sm-12 col-lg-6 d-col' >
   <p><strong>Native name </strong> :  <span>{country.nativeName}</span></p>
    <p><strong>population </strong> :  <span>{country.population}</span></p>
    <p><strong>region </strong> :  <span>{country.region}</span></p>
    <p><strong>sub region </strong> :  <span>{country.subregion}</span></p>
    <p><strong>capital </strong> :  <span>{country.capital}</span></p>

</div>
<div className='col-sm-12 col-lg-6 d-col' >
<p><strong>Top Level Domain</strong> :  <span>{country.topLevelDomain}</span></p>
    <p><strong>currencies</strong> :<span>{country.currencies.map((ele)=><span> {ele.name} </span>)} </span>  <span>
        {}
        </span></p>
            <p><strong>languages</strong> :<span>{country.languages.map((ele)=><span> {ele.name} , </span>)} </span>  <span>
        {}
        </span></p>
</div>

</div>

<h4><strong>Border Countries</strong>
: 
{
    country.borders.map((country)=>(
        <button className={theme==='Dark'? 'dark-ele ' :'light-ele'}>{country}</button>
    ))
}

</h4>
    </div>
</div>
</div>

</div>
        </>
    )
}

export default Carddetail
