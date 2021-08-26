import classes from './Posts.module.css';

const Posts = (props) => {
    return (
      <div>
        <div className={classes.item}>
          <img src='https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_23.jpg' />
        </div>
        <div>
          {props.message}
        </div>
        <div>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    )
}

export default Posts;