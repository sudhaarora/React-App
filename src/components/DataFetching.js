import axios from "axios";
import React, {useState, useEffect} from "react";

function DataFetching() {
    const[post, setPost] = useState({})     //for specific post id
    // const[posts, setPosts] = useState([])   // For all posts using empty array
    const[id, setId] = useState(1)
    const[idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        // for specifix post id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        // For all post
        // axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return(
        <div>
            <input type="text"
            value={id}
            onChange={(e) => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Data</button>
            {/* for specific post */}
            <div>{post.title}</div>
            {/* for all posts */}
            {/* <ul>
                {posts.map(post => (
                    <li style={{textAlign: "left"}} key={post.id} style={{listStyleType:"A"}}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching;
