import style from './Local.module.css'
import search from '../../img/sea12.png'


const Local = ()=>{
    return(
        <div className={style.container}>
            <div className={style.titulo}>
                <span className={style.first}>Venha conhecer á</span>
                <span className={style.second}>academia</span>
            </div>
            <div className={style.container_local}>
                <a href="" className={style.container_input}>
                    <span className={style.span}>ENDEREÇO</span>
                    <img className={style.img} src={search} alt="" />
                </a>
                
            </div>
        </div>
    )
}


export default Local