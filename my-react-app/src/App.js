// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Post from './Componat/Post'
// import PostUnit from './Componat/PostUnit'
// import Common from './Componat/Common'
// import useMyFetchData from './Hooks/useMyFetchData'
// const router = createBrowserRouter([

import { useEffect, useLayoutEffect, useState } from "react";

//   {
//     path: '/',
//     element : <Common />
//   },
//   {
//     path : 'post',
//     element : <Post />
//   },

//   {
//     path : 'post/:id',
//     element : <PostUnit />
//   }
// ])

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState({});
  const [isClick, setIsZclick] = useState(1);
  useLayoutEffect(() => {
    
    console.log("useEffect running...");
    fetch(`${url + "posts"}/${isClick}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [isClick]);

  console.log(data);

  return <div>
    <h1>How many times click the button : {isClick}</h1>
    <h3>{data?.title}</h3>
    <button onClick={()=>setIsZclick(pre=>pre+1)}> Get Data</button>
    
    {/* <RouterProvider router={router} /> */}
    
    </div>;
};

export default App;
