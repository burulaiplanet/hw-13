import { useState, useEffect } from 'react'
import styles from './Users.module.css'



const Users=(props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((result) => {
            return result.json();
        })
        .then((data) => setUsers(data));
    }, [props.isLoggedIn])

    
    return(
      
            <ul className={styles.users}>
                {users.map((user) => ( 
                    <li className={styles.firstLi} key = {user.id}>
                        <li className={styles.secondLi}> <h5>{user.title}</h5>
                       <p> {user.id}</p></li>
                       
                    <li className={styles.third}><p>{user.thumbnailUrl}</p></li>
                    </li>
                )                 
                )}
            </ul>
       
    )
}

export default Users


