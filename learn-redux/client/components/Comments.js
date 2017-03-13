import React from 'react'

function Comment(props) {
    return(
        <div className="comment">
            <p>
                <strong>{props.comment.user}</strong>
                {props.comment.text}
                <button className="remove-comment"
                        onClick={props.removeComment.bind(null, props.params.postId, props.index)}>&times;</button>
            </p>
        </div>
    )
}
class Comments extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();

    }
    render() {
        return (

            <div className="comments">
                {this.props.postComments.map((comment, index) =>
                    <Comment key={index} comment={comment} index={index} {...this.props}/>
                )}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}

export default Comments;
