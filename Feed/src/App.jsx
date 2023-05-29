import { Header } from './components/Header'
import Post from './components/Post'

import './global.css'
function App() {

  return (
    <div>
      <Header />
      <Post author='Patricia Vieira'
        content="conteúdo" />
      <Post />
      <Post />
    </div>


  )
}

export default App
