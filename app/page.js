import Link from 'next/link';
import Post from '@/components/Post/Post.jsx';
import styles from './page.module.css'
import prisma from '@/lib/prisma'

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      
      <div className={styles.feedHeader}>
        <h1 className={styles.postListTitle}>Feed</h1>
        <Link className={styles.btnAddPost} href={'/add-post'}>Add Post</Link>
      </div>
      <div className={styles.postList}>
        {
          posts.map((post) => {
            return (
              <Post
              className={styles.postListItem}
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
              />
            )
          })
        }
      </div>
    </main>
  )
}