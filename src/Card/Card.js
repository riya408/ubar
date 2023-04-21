import React,{useState} from 'react'
import style from './Card.module.css'
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { GiNetworkBars } from 'react-icons/gi';  
import { FaKey } from 'react-icons/fa'; 
import Drive from '../Atom/Drive/Drive';
import Key from '../Atom/Key/Key';
import Car from '../Atom/Car/Car';
function Cards() {
    const[show,setShow]=useState(0)
  
  return (
    <>
    <div className={style.mainDiv} style={show===0?
    {height:'100vh', backgroundImage:'url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png)'}:
show==1?{height:'100vh',backgroundImage:'url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_833/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png)'}
:{height:'100vh',backgroundImage:'url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_778/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg)'}
} >
    <div className={style.main}>
    <div className={style.headCard}>
    <span  onClick={()=>setShow(0)}className={style.car}> <ElectricCarIcon/>Ride</span> 
    <span onClick={()=>setShow(1)} className={style.drive}  ><GiNetworkBars/>Drive <br/>or deliver</span>
    <span onClick={()=>setShow(2)} className={style.key}><FaKey/>Rent your <br/>fleet</span>
    </div>{show===0 ?<Car/>
   : show==1?
 <Drive/>:
   <Key/>
    }
</div>
</div>
    </>
  ) 
}

export default Cards
