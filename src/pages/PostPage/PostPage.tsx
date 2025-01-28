import { useParams } from "react-router"
import { useGetPostByIdQuery } from "../../store/api/post.api"
import { Post } from "../../components/Post/Post"


export const PostPage = () => {

  const { id } = useParams()
  const { data } = useGetPostByIdQuery(Number(id))



  return (
    <div className="PostPage">
      {data ? (
        <Post
          name={data.message.user_fk.name}
          date={data.message.reg_date}
          text={data.message.main_text}
          photo={data.message.photos}
          comment={data.message.comments}
        />
      ) : (
        <h1>404 Not Founded</h1>
      )
    }
    </div>

  )
}
