
import { useState, useEffect } from "react";

function hookDate(){

  const [mostrarDivAdicional, setMostrarDivAdicional] = useState('');

  useEffect(() => {
    // Obtenha o horário atual
    const horaAtual = new Date().getHours();
    const dateAtual = new Date().getDay()
  
  
    if(dateAtual>=1  && dateAtual <= 4){
        if(horaAtual >= 5 && horaAtual <= 22  ){
            setMostrarDivAdicional('segunda_quinta_aberto')
        }else{
            setMostrarDivAdicional('segunda_quinta_fechado')
        }
    }else if(dateAtual === 5){
        if(horaAtual >= 5 && horaAtual <= 21){
            setMostrarDivAdicional('sexta_aberto')
        }else{
            setMostrarDivAdicional('sexta_fechado')
        }
    }else if(dateAtual === 6){
        if(horaAtual >= 8 && horaAtual <= 13){
            setMostrarDivAdicional('sabado_aberto')
        }else{
            setMostrarDivAdicional('sabado_fechado')
        }
    }else if(dateAtual === 0){
        setMostrarDivAdicional('domingo')
    }
  }, []);

  return  mostrarDivAdicional
}
    
export default hookDate
