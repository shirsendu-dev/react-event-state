import { use } from "react"
import PostCards from "./PostCards";

export default function Posts({ postDataPromise }) {

    const posts = use(postDataPromise);
    console.log(posts);
    
    return (
        <div>
            <h2>Post Count : {posts.length}</h2>
            {
                posts.map(post => <PostCards post = {post}></PostCards>)
            }

        </div>


    )
}