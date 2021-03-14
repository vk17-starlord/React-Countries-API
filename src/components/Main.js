
import '../App.css';
import Navbar from './Navbar';
import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Card from "./Card";
import React, { Component } from 'react';
import {ThemeProvider} from './ThemeProvider';
import {ThemeContext,ThemeUpdateContext} from './ThemeProvider';


function Main() {
 

  const theme = useContext(ThemeContext);
  const themeToggler = useContext(ThemeUpdateContext)

const [menu, setmenu] = useState('close');
const menuToggler = () => {
  menu === 'open' ? setmenu('close') : setmenu('open')
  console.log(menu)
}

const region = [
  'Africa',
  'Americas',
  'Asia'
 , 'Europe'
,'Oceania'
]





const [data, setdata] = useState([

]);

const [MainData,setMainData] = useState([])

const [Currentregion, setCurrentregion] = useState(null);


let Filter = async(region)=>{
  setCurrentregion(region);

  console.log(region)
  let  filterdata=await axios(`https://restcountries.eu/rest/v2/region/${region}`,)
 
  setdata(filterdata.data)
}

let Search=async(cname)=>{
  
  
  console.log(cname)
  let  filterdata=await axios(`https://restcountries.eu/rest/v2/name/${cname}`,)
 
  if(cname!=='')
{
  setdata(filterdata.data)
}else{
  setdata(MainData)
}
}

async function getdata(){
  const result = await axios(
    'https://restcountries.eu/rest/v2/all ',
  );

console.log(result.data);
setMainData(result.data)  
setdata(result.data);
}

useEffect(() => {   

getdata();
  },[]);
  
  
  return (

<div  className={theme==='Dark'? 'dark-bg': 'light-bg'}>
      
      <Navbar theme={theme} toggle={themeToggler} />
      
      <div className="container filter-container row">
      
      <div className="col-sm-12 col-lg-5 flex-column a-end d-flex justify-content-start align-items-end ">
      <input type="text" className={theme==='Dark'? 'dark-ele': ''} placeholder="Search for a country" onKeyUp={(event)=>{
       
      console.log(event.target.value)
      Search(event.target.value)
      }}/>  
      </div>
      
      <div  className={theme==='Dark'? 'dark-bg col-sm-12 col-lg-7 flex-column a-end d-flex justify-content-start align-items-end': 'light-bg col-sm-12 col-lg-7 flex-column a-end d-flex justify-content-start align-items-end'}  >
       <button className={theme==='Dark'? 'dark-ele': ''} onClick={menuToggler} >{Currentregion===null ? <span>Filter By Region</span> : <span>{Currentregion}</span>} {menu==='open' ? <AiFillCaretUp/> :  < AiFillCaretDown/> } </button>
      {menu==='open' ?
       <div  className={theme==='Dark'? 'region dark-ele': 'region'}>
      {region.map((region,index)=>(
        <li className="region-li" key={index} onClick={()=>{
        Filter(region)
        }} >{region}</li>
      ))}
       </div>: <div> </div>}
      </div>
      
      </div>
      
      <Card data={data} theme={theme}  toggle={themeToggler}/>
    
       
      
      
      
           </div>
      


  
    );
}

export default Main;
