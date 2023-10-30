import './App.css'
import NavBar from './Components/NavBar'
import Professores from './Components/Cadastro/Professores'
import Disciplina from './Components/Cadastro/Disciplina'
import Turmas from './Components/Cadastro/Turmas'
import Horarios from './Components/Horarios'

function App() {

  return (
    <>
    <NavBar/>
    <div className="cadastro">
    <Professores/>
    <Disciplina/>
    <Turmas/>
    </div>
    <Horarios/>
    </>
  )
}

export default App
