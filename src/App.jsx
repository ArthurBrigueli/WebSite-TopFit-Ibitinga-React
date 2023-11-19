
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Gympass from './components/Gympass/Gympass'
import Local from './components/Local/Local'
import Experiencia from './components/Experiencia/Experiencia'
import Horario from './components/Horario/Horario'
import Footer from './components/Footer/Footer'
import Contato from './components/Contato/Contato'

function App() {

  return (
    <>
      <NavBar/>
      <Contato/>
      <Gympass/>
      <Local/>
      <Experiencia/>
      <Horario/>
      <Footer/>
    </>
  )
}

export default App
