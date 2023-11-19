import style from './Gympass.module.css'
import logo_gympass from '../../img/logo_gympass.png'

const Gympass = ()=>{
    return(
        <div className={style.container_gympass}>
            <span className={style.spanone}>ACEITAMOS</span>
            <span className={style.spantwo}>GYMPASS</span>
            <img className={style.img} src={logo_gympass} alt="" />
        </div>
    )
}


export default Gympass