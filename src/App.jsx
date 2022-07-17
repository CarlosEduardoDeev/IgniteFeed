import {Post} from './Componentes/Post/Post'
import { Header } from './Componentes/Header/Header'
import { Sidebar } from './Componentes/SideBar/SideBar'

import './Global.css'
import styles from './App.module.css'


const posts = [
    {
      id:1,
      author:{
              avatarUrl:'https://github.com/CarlosEduardoDeev.png',
              name:'Carlos Eduardo ',
              role: 'Developer'
              },
      content:[
        {type: 'paragraph',content: 'Fala galeraa 👋 '},
        {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content: 'jane.design/doctorcare'},
            ],
      publishedAt: new Date('2022-07-06 20:00:00'),
    },
    {
      id:2,
      author:{
              avatarUrl:'https://github.com/maykbrito.png',
              name:'Mayk Brito ',
              role: 'Educator'
              },
      content:[
        {type: 'paragraph',content: 'Fala galeraa 👋 '},
        {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content: 'jane.design/doctorcare'},
            ],
      publishedAt: new Date('2022-07-08 20:00:00'),
    },
]

export function App() {
  
  //iteração

  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {posts.map(post =>{
            return( 
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
     </div>
    </div>
  )
}


