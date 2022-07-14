import style from './Post.module.css';

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src='https://avatars.githubusercontent.com/u/101232394?v=4'/>
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

        </article>
    );
}
