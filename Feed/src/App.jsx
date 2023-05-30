import { Header } from './components/Header'
import { Post } from './Post';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post author='Patricia Vieira'
            content="conteúdo" />
          <Post author='Patricia Vieira'
            content="conteúdo" />
        </main>
      </div>
    </div>


  )
}

export default App;
