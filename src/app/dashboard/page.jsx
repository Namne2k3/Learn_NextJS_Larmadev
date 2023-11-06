'use client'

import styles from './page.module.css'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useSWR from 'swr'
import Link from 'next/link'
const DashBoard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);
  const session = useSession();
  const router = useRouter(); 
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data , mutate , isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
    } catch ( err ) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault() ;
    const title = e.target[0].value ;
    const desc = e.target[1].value ;
    const img = e.target[2].value ;
    const content = e.target[3].value ;

    try {
      await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        })
      })
      mutate();
      e.target.reset();
    } catch ( err ) {
      console.log(err);
    }
  }

  console.log(data);

  if ( session.status === 'loading' ) {
    return <p>Loading...</p>
  }

  if ( session.status === 'unauthenticated' ) {
    router?.push("/dashboard/login")
  }
  
  if ( session.status === 'authenticated' ) {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading ? "loading..." : data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <Link href={`blog/${post._id}`} className={styles.post}>
                <div className={`${styles.imgContainer}`}>
                  <Image src={post.img} alt='' width={100} height={100} />
                </div>
                <div className={`${styles.info} flex-2`}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p>{post.desc}</p>
                </div>
              </Link>
              <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1 className='font-bold text-[32px] border-b-[1px] w-max '>Add new Post</h1>
          <input type="text" placeholder='Title' className={styles.input} />
          <input type="text" placeholder='Desc' className={styles.input} />
          <input type="text" placeholder='Image' className={styles.input} />
          <textarea placeholder='Content' className={styles.textArea} cols="30" rows="10"></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    )
  }
}

export default DashBoard