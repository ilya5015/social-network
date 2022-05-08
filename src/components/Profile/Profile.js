import styles from './Profile.module.css'
import anime from './anime.jpg'

const Profile = () => {
    return (
        <div className={ styles.content }>
            <div>
                <img src={ anime }/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my posts
            <div>
                new post
            </div>
            <div className={ styles.posts }>
            <div className={ styles.post }>
                post1
            </div>
            <div className={ styles.post }>
                post2
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile