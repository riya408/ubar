import React from 'react'
import style from './Car.module.css'
function Car() {
  return (
    <div className={style.main}>
      <div className={style.ride}>Request a ride now</div>
    <input className={style.inp}placeholder='Enter pickup location'/>
    <input className={style.inp}placeholder='Enter destination'/>
   <div className={style.bigDiv}>
     <span className={style.req}>Request now</span>
    <span className={style.sch}>Schedule for later</span></div>
    </div>
  )
}

export default Car
