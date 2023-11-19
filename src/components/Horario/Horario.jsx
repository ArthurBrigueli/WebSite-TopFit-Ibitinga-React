import style from './Horario.module.css'
import {useState, useEffect} from 'react'

import hookDate from '../../hooks/HookDate'

import open from '../../img/open.png'
import closed from '../../img/closed.png'

const Horario = ()=>{

    const mostrarDivAdicional = hookDate()


    return(
        <div className={style.container}>
            
            <div>
                <span className={style.titulo}>Horário de funcionamento</span>
            </div>
            <div className={style.container_divs}>
                <div className={style.container_date}>
                    {mostrarDivAdicional === 'segunda_quinta_aberto' && (
                        <div className={style.on}><img src={open} alt="" /></div>
                    )}
                    {mostrarDivAdicional === 'segunda_quinta_fechado' && (
                        <div className={style.off}><img src={closed} alt="" /></div>
                    )}
                    <span className={style.date}>SEGUNDA Á QUINTA</span>
                    <span className={style.hour}>5H ÁS 22H</span>
                </div>
                <div className={style.container_date}>
                    {mostrarDivAdicional === 'sexta_aberto' && (
                        <div className={style.on}><img src={open} alt="" /></div>
                    )}
                    {mostrarDivAdicional === 'sexta_fechado' && (
                        <div className={style.off}><img src={closed} alt="" /></div>
                    )}
                    <span className={style.date}>SEXTA FEIRA</span>
                    <span className={style.hour}>5H ÁS 21H</span>
                </div>
                <div className={style.container_date}>
                    {mostrarDivAdicional === 'sabado_aberto' && (
                        <div className={style.on}><img src={open} alt="" /></div>
                    )}
                    {mostrarDivAdicional === 'sabado_fechado' && (
                        <div className={style.off}><img src={closed} alt="" /></div>
                    )}
                    <span className={style.date}>SÁBADO</span>
                    <span className={style.hour}>8H ÁS 13H</span>
                </div>
                <div className={style.container_date}>
                    {mostrarDivAdicional === 'domingo' && (
                        <div className={style.off}><img src={closed} alt="" /></div>
                    )}
                    <span className={style.date}>Domingo</span>
                    <span className={style.hour}>Fechado</span>
                </div>
            </div>
        </div>
    )
}


export default Horario