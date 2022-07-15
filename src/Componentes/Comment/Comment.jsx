import { Trash,ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import style from './Comment.module.css'

export function Comment(){
    return(
            <div className={style.comment}>
                <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/101232394?v=4'/>
                    <div className={style.commentBox} >
                            <div className={style.commentContent} >
                                <header>
                                    <div className={style.authorAndTime}>
                                    <strong>Carlos Eduardo</strong>
                                    <time title='14 de junho as 09:47' dateTime='2022-07-14 00:00:00'> Cerda de 1h Atrás</time>
                                    </div>
                                    <button title='Deletar comentarío'><Trash size={24}/></button>
                                </header>
                                <p>Muito Bom dev</p>
                            </div>
                            <footer>
                                <button>
                                    <ThumbsUp/>
                                    Aplaudir <span>20</span>
                                </button>
                            </footer>
                    </div>
            </div>
    );
}
