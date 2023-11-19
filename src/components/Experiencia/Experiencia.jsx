import style from './Experiencia.module.css'
import imgteste from '../../img/imagentest.png'

const Experiencia = ()=>{
    return(
        <div className={style.container}>
            <div className={style.titulo}>
                <span>Experiencia</span>
                <span className={style.spansecond}>Top Fit</span>
            </div>
            <div className={style.container_divs}>
                <div>
                    <img src={imgteste} alt="" />
                    <span>• Equipamento de alto padrão</span>
                </div>
                <div>
                    <img src={imgteste} alt="" />
                    <span>• Amplo espaço para seu treino</span>
                </div>
                <div>
                    <img src={imgteste} alt="" />
                    <span>• Professores para te ajudar</span>
                </div>
            </div>
        </div>
    )
}


export default Experiencia