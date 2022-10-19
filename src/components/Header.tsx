import styles from './Header.module.css'
import todoLogo from '../assets/todo_logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <a href="#">
                <img src={todoLogo} alt="" />
            </a>
        </header>
    )
}