import { useSelector } from "react-redux"
import { selectById } from "../store/reducer/postSlice"
import  { selectByIdUser } from "../store/reducer/UsersSlice"


function Post({postId}) {

 
  const post = useSelector((store)=>selectById(store, postId))
  const user = useSelector((store)=>selectByIdUser(store , post.userId))
  console.log('post componet :' , post)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p> 
      <h6>{user?.name}</h6>
      
    </div>
  )
}

export default Post
