import img from '../../img/logonav.png'
import style from './Footer.module.css'
import insta from '../../img/instagram.png'
const Footer = ()=>{
    return(
        <footer className={style.container}>
            <img className={style.logo} src={img} alt="" />
            <p>Todos os direitos reservado 2023</p>
        </footer>
    )
}


export default Footer