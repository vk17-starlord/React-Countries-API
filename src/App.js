
import './App.css';
import Navbar from './components/Navbar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {AiOutlineCaretUp } from "react-icons/ai";
import Card from "./components/Card";

function App() {
 
  const [theme, setTheme] = useState('Light');
  const themeToggler = () => {
    theme === 'Light' ? setTheme('Dark') : setTheme('Light')
    console.log(theme)
}

const [menu, setmenu] = useState('close');
const menuToggler = () => {
  menu === 'open' ? setmenu('close') : setmenu('open')
  console.log(menu)
}

const [region, setregion] = useState([
  'Africa',
  'Americas',
  'Asia'
 , 'Europe'
,'Oceania'
]);





const [data, setdata] = useState([

]);

const [MainData,setMainData] = useState([])

const [Currentregion, setCurrentregion] = useState(null);
const [searchtxt, setsearchtxt] = useState(null);


let Filter = (region)=>{
  setCurrentregion(region);

  console.log(region)
  let  filterdata=MainData.filter((ele)=>{
    if(ele.region===region){
      return ele;
    }
  })
  setdata(filterdata)
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

useEffect(async() => {   

  const result = await axios(
    'https://restcountries.eu/rest/v2/all ',
  );

console.log(result.data);
setMainData(result.data)  
setdata(result.data);
  },[]);
  
  
  return (
    <div className="main-container">

<Navbar theme={theme} toggle={themeToggler} />

<div className="container filter-container row">

<div className="col-sm-12 col-lg-5 flex-column a-end d-flex justify-content-start align-items-end ">
<input type="text" placeholder="Search for a country" value={searchtxt} onKeyUp={(event)=>{
 
console.log(event.target.value)
Search(event.target.value)
}}/>  
</div>

<div className="col-sm-12 col-lg-7 flex-column a-end d-flex justify-content-start align-items-end ">
 <button onClick={menuToggler} >{Currentregion===null ? <span>Filter By Region</span> : <span>{Currentregion}</span>} {menu==='open' ? < AiFillCaretDown/> :  <AiFillCaretUp/> } </button>
{menu==='open' ?
 <div className="region">
{region.map((region,index)=>(
  <li className="region-li" key={index} onClick={()=>{
  Filter(region)
  }} >{region}</li>
))}
 </div>: <div> </div>}
</div>

</div>

<Card data={data} />

 



     </div>
  );
}

export default App;
