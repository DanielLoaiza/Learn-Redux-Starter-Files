import React from 'react'

function Comment(props) {
    return(
        <div className="comment" key={props.index}>
            <p>
                <strong>{props.comment.user}</strong>
                {props.comment.text}
                <button className="remove-comment">&times;</button>
            </p>
        </div>
    )
}
function Comments(props) {
    return (
        <div className="comments">
            {props.postComments.map((comment, index) =>
                <Comment comment={comment} index={index}/>
            )}
            <form ref="commentForm" className="comment-form">
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default Comments;
