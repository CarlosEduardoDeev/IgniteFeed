import {Post} from './Componentes/Post/Post'
import { Header } from './Componentes/Header/Header'
import { Sidebar } from './Componentes/SideBar/SideBar'

import './Global.css'
import styles from './App.module.css'


export function App() {
  

  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
      <Sidebar/>
        <main>
        <Post
          author="Carlos Eduardo "
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <Post
          author="Maiara"
          content="Linda"
      
        />
      

        </main>
     </div>
    </div>
  )
}


