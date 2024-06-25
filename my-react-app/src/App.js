

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Post from './Componat/Post'
import PostUnit from './Componat/PostUnit'
import Common from './Componat/Common'
import useMyFetchData from './Hooks/useMyFetchData'

const App = () => {





  const router = createBrowserRouter([

    {
      path: '/',
      element : <Common />
    },
    {
      path : 'post',
      element : <Post />
    },

    {
      path : 'post/:id',
      element : <PostUnit />
    }
  ])
  return (
    <div>
      

        <RouterProvider router={router} />
     
    </div>
   
  )
}

export default App
