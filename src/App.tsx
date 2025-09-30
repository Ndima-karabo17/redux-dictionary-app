import './App.css'
import { DefinitionDisplay } from './components/DefinationDisplay'
import { WordSearch } from './components/WordSearch'

function App() {
  
  return (
    <>
      <h1>Dictionary</h1>
      <WordSearch/>
      <hr />
      <DefinitionDisplay/>
    </>
  )
}

export default App
