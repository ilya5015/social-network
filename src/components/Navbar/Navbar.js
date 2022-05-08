import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={ `${classes.nav} ${classes.active}` }>
            <div className={ `${classes.navItem} ${classes.active}` }>
                <a>Profile</a>
            </div>
            <div className= { `${classes.navItem} ${classes.active}` }>
                <a>Messages</a>
            </div>
            <div className={ `${classes.navItem} ${classes.active}` }>
                <a>News</a>
            </div>
            <div className={ `${classes.navItem} ${classes.active}` }>
                <a>Music</a>
            </div>
      </nav>
    )
}

export default Navbar