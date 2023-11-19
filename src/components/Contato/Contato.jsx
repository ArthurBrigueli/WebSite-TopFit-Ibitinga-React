import contato from '../../img/contato.png'
import style from './Contato.module.css'

const Contato = ()=>{
    return(
        <div className={style.container}>
            <a href="https://api.whatsapp.com/send/?phone=5516997088203&text&type=phone_number&app_absent=0" target='_blank'><img src={contato} alt="" /></a>
        </div>
    )
}


export default Contato