import DeletePostButton from "@/components/deletePostButton/DeletePostButton.jsx";
import styles from './post.module.css'

export default function Post({id, title, content, authorName}){
    return (
        <div className={styles.cart} >
            <div className={styles.cartTitle}>
                <div className={styles.titleContent}><h3>{title}</h3></div>
                <div className={styles.desc}>
                    <div className={styles.author}>author: {authorName}</div>
                    <div className={styles.created_at}>created at: 01.01.2024</div>
                </div>
            </div>
            
            <div className={styles.body}>
                <p>{content}</p>
            </div>
            <DeletePostButton postId={id} />
        </div>
    )
}