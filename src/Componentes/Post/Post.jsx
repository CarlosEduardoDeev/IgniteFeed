import style from './Post.module.css';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import { format,formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';


//author: {avatar}

const comments = [
  
]


export function Post({author,publishedAt,content}){

    const [comments,setComments] = useState([
      "Post Muito bacana em !"
    
    ])
    
    const [ newCommentText,setNewCommentText] = useState('')

 
    console.log(newCommentText)


    const publishedDateFormatted = format(publishedAt,"dd 'de' LLLL 'às' HH:mm'h' ",{locale: ptBR})
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })

    function handleCreateNewComment(){
        event.preventDefault()


    

        setComments([...comments,newCommentText])
        setNewCommentText('');

    
      
    }
     
    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const CommentsWitoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })

        setComments(CommentsWitoutDeletedOne)

    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatorio!')
    }

    const isNewCommentEmpty = newCommentText.length === 0 
    

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar  src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>

                    </div>
                </div>

                <time title= {publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={style.content}> 
            {content.map(content =>{
                if(content.type === 'paragraph'){
                    return(
                        <p key={content.content}>{content.content}</p>
                    )
                }else if(content.type === 'link'){
                    return(
                        <p key={content.content}><a href='#'>{content.content}</a></p>
                    )
                }
            })}
           
            </div>
        <form onSubmit={handleCreateNewComment} className={style.commentForm}>
            <strong>Deixe seu Feedback</strong>


                <textarea
                    name='coment'
                    placeholder='Deixe um comentario '
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
        </form>
        <div className={style.commentList}>
            {comments.map(comments =>{
                return(
                    <Comment key={comments} content={comments} onDeleteComment={deleteComment}/>
                )
            })}
        </div>

        </article>
    );
}
