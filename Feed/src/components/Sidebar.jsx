import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1556292026-bf74f176f6b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
            />
            <div className={styles.profile}>
                <Avatar src='https://media.licdn.com/dms/image/C4E03AQE-uyWEIzRKyw/profile-displayphoto-shrink_800_800/0/1654802855188?e=1691020800&v=beta&t=PCHiaSYm1oecdWFFrkvUd7RYOCtxfoHd8JuDDCPLMLM' />
                <strong>Patricia Vieira</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil </a>
            </footer>
        </aside>
    )
}
