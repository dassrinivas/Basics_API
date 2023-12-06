import { useEffect, useState } from "react";
import axios from "axios";

const PlayerComponent1 = () => {
    const [posts,setPosts] = useState ([]);
  
    useEffect(()=> {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(b=>
        {
        const a = b.data;
        setPosts(a);
  
      })
      .catch(error=> {
        alert('Api not fetching :',error);
      });
    }, );
  
    return(
      <div className="App">
        <h1>Post</h1>
        <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
          ))}
      </ul>
      </div>
    );
  };
  
export default PlayerComponent1;