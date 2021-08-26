import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div className={classes.blockImage}>
          <img src='https://www.adweek.com/wp-content/uploads/2020/03/behr-zoom-background-1-2020.jpg' />
        </div>
        <div>
          <img src='https://t4.ftcdn.net/jpg/04/12/87/65/360_F_412876523_nGq2VvwZOYN8AKpIXpp0VZWOfyoczAqc.jpg' />
        </div>
      </div>
    )
}

export default ProfileInfo;