import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  selectAll,
  selectIds,
  selectPostLoading,
  updatePost,
} from "./store/reducer/postSlice";
import {
  decrement,
  increment,
  numberSlecter,
} from "./store/reducer/numberSlice";
import Post from "./Componat/post";
import { getUsers } from "./store/reducer/UsersSlice";

function App() {
  const postTitleRef = useRef();
  const postIdRef = useRef();

  const numbar = useSelector(numberSlecter);

  const selectPost = useSelector(selectIds);

  const postLoading = useSelector(selectPostLoading);

  const dispatch = useDispatch();

  console.log(selectPost);

  return (
    <div>
      <h1>{numbar}</h1>
      {postLoading !== "completed" ? <h1>loading...........</h1> : null}
      <button onClick={() => dispatch(increment("nimna", 3, "rikillagaskada"))}>
        increment
      </button>
      <button onClick={() => dispatch(decrement(3))}>decrement</button> <br />
      <button onClick={() => dispatch(getPost())}>get data</button>
      <button onClick={() => dispatch(getUsers())}>get users data</button>
      <hr />
      <h2>Change Post</h2>
      <input placeholder="post title" ref={postTitleRef} /> <br />
      <input placeholder="post id" ref={postIdRef} /> <br />
      <button
        onClick={() =>
          dispatch(
            updatePost({
              id: Number(postIdRef.current.value),
              changes: {
                title: postTitleRef.current.value,
              },
            })
          )
        }
      >
        {" "}
        sumbit
      </button>
      {selectPost.map((postId) => (
        <Post postId={postId} key={postId} />
      ))}
    </div>
  );
}

export default App;
