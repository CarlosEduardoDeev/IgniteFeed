import style from './Post.module.css';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar  src="https://github.com/maykbrito.png"/>
                    <div className={style.authorInfo}>
                            <strong>Carlos Eduardo</strong>
                            <span>React Developer</span>

                    </div>
                </div>

                <time title='14 de junho as 09:47' dateTime='2022-07-14 00:00:00'>
                    Publicado a 1H
                </time>
            </header>
            <div className={style.content}> 
            <p>Fala galeraa 👋 </p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href='#'>jane.design/doctorcare</a></p>
            <p> <a href='#'>#novoprojeto #nlw #rocketseat</a></p>
           
            </div>
        <form className={style.commentForm}>
            <strong>Deixe seu Feedback</strong>
                <textarea
                placeholder='Deixe um comentario '
        
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
        </form>
        <div className={style.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>

        </div>

        </article>
    );
}
