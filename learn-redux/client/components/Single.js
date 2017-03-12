import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

function Single(props) {
    const {postId} = props.params;
    // index of the post
    const index = props.posts.findIndex((post) => post.code === postId);
    const post = props.posts[index];

    const postComments = props.comments[postId] || [];
        return(
            <div className="single-photo">
                <Photo index= {index} post={post} {...props} />
                <Comments postComments={postComments}/>
            </div>
        )
}
export default Single;