import { Trash,ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import style from './Comment.module.css'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment(){
        console.log("Deletar ")
        onDeleteComment(content)
    }

    
    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

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

                                   
                                    <button onClick={handleDeleteComment} title='Deletar comentarío'><Trash size={24}/></button>
                                </header>
                                <p>{content}</p>
                            </div>
                            <footer>

                                <button onClick={handleLikeComment}>
                                    <ThumbsUp/>
                                    Aplaudir <span>{likeCount}</span>
                                </button>

                            </footer>
                    </div>
            </div>
    );
}
