import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {

  let PostData = [
    {id: 1, message: "Hi, who are you?", likesCount: 0},
    {id: 2, message: "Hi, nobody?", likesCount: 23},
    {id: 3, message: "Hi, lol"},
  ]

    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Posts message={PostData[0].message} likesCount={PostData[0].likesCount} />
        <Posts message={PostData[1].message} likesCount={PostData[1].likesCount} />
        <Posts message={PostData[2].message} likesCount={PostData[2].likesCount} />
      </div>
    )
}

export default MyPosts;