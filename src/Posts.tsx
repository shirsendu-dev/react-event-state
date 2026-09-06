import { use } from "react"

export default function Posts({ postDataPromise }) {

    const posts = use(postDataPromise);

    return (
        <div>
            <h2>Post Count : {posts.length}</h2>
            {
                posts.map(post => <Posts post ={post}></Posts>)
            }
        </div>

    )
}