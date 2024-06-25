import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useMyFetchData from '../Hooks/useMyFetchData'

function PostUnit() {

  const {id} = useParams()
  const [data] = useMyFetchData("posts",id)
  console.log(data)
  return (
    <div>
      <Link to="/post">Back</Link><br />
    </div>
  )
}

export default PostUnit
