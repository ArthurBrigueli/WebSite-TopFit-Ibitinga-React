
import style from './NavBar.module.css'

import logoNav from '../../img/logoNav.png'

const NavBar = ()=>{
    return(
        <nav className={style.nav}>
            <img className={style.img} src={logoNav} alt="" />
        </nav>
    )
}



export default NavBar