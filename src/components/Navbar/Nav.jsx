import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/profile" activeClassName={classes.active} >Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.passive}`}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/set" activeClassName={classes.active}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Nav;