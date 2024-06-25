
import { Link } from 'react-router-dom'
import useMyFetchData from '../Hooks/useMyFetchData'

function Post() {

  const [data] = useMyFetchData('posts')
  console.log(data)

  return (
    <div>
      {data?.map((ele , i)=><Link to={`${ele.id}`} key={i}>{ele.title}</Link>)}
    </div>
  )
}

export default Post
