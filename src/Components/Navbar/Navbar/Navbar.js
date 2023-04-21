import React from 'react'
import style from'./Navbar.module.css'
import AppsIcon from '@mui/icons-material/Apps';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar() {
  return (
    <div className={style.main}>
    <span className={style.mainSpanL}>
      <span className={style.uber}>Uber</span>
     
      <span className={style.comp}>Company<ArrowDropDownIcon/></span>
      <span className={style.saftey}>Saftey</span>
      <span className={style.help}>Help</span>
      </span>
     <span  className={style.mainSpanR}>
     <span className={style.en}><LanguageIcon style={{fontSize:'16px'}}/>EN</span>
     <span className={style.pro}><AppsIcon style={{fontSize:'16px'}}/>Product</span>
     <span className={style.login}>Login</span>
     <span className={style.sign}>Sign up</span>
   </span>
   </div>
  )
}

export default Navbar
